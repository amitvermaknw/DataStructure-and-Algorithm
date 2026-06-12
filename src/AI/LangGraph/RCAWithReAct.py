from typing import TypedDict, Annotated;
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langchain_core.message import ToolMessages
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.tools import tool
from langgraph.checkpoint.postgres import PostgresSaver


#State 

class AgentState(TypedDict):
    messages: Annotated[list, add_messages] #add_messages will append not overwrite

#Tools
@tool
def get_commit(repo: str, sha: str) -> str:
    """Get recent commits and changed files for a repo at a SHA
        Use first to find suspicious recent changes, Return commits or 'No Commits Found'
    """
    out = gethub_clinet.list_commit(repo, sha, limit=20)
    return format_commits(out) if out else "No Commit found"


@tool
def fetch_logs(jobid: str, grep: str="") -> str:
    """Fetch build/deploy logs for a job optionally fitered. Us to confim a 
        hypothesis against the actual error reutnr line or 'No matching logs'"
    """

    lines = log_clinet.fetch(job_id, grep)
    return "\n".join(line[:50]) if lines else "No matching logs"


tools = [get_commit, fetch_logs]
tools_by_name = {t.name: t for t in tools}

model = ChatGoogleGenerativeAI(
    model = "gemini-1.5-pro,",
    temperature = 0 
).bind_tools(tools)

#The agent node the LLM thinks 
def agent_node(state: AgentState): 
    response = model.invoke(state["messages"])
    return {"messages": [response]}  #Append via the reducer

#The tool node: Run whatever toools the LLM requested
def tool_node(state: AgentState): 
    last = state["messages"][-1] #LLM most recent message
    results = []

    for call in last.tool_calls:
        fn = tools_by_name[call["name"]]
        try:
            output = fn.invoke[call("arg")]
        except Exception as e:
            output = f"Tool error: {e}"
        
        results.append(ToolMessages(content=str(output), tool_call_id=call["id"]))
    
    return {"messages": results}

#The conditional edge

def should_continue(state: AgentState)-> str:
    last = state["messages"][-1]
    if getattr(last, "tool_calls", None): #LLM asked for a tool
        return "tools"                    # run it then loop back
    
    return END                

#Write the graph
graph = StateGraph(AgentState)

graph.add_node("agent", agent_node)
graph.add_node("tool", tool_node)

graph.add_edge(START, "agent")
graph.add_conditional_edge("agent", should_continue, {"tools": "tools", END: END})
graph.add_edge("tools", "agent")  #Loop back


checkpoint = PostgresSaver.from_conn_string("postgresql://") #Short term memory
app = graph.compile(checkpoint=checkpoint)

config = {
    "configuration": {"thread_id": deployment_id},
    "recursion_limit": 12
}

failure_context_with_hint = f"""
Current failure: {failure.error_type} in {failure.failing_step}
repo={failure.repo}, sha={failure.git_sha}, job_id={failure.job_id}

Prior RCA hint (matched signature {hint.signature_id}, score {hint.score:.2f}):
{hint.rca_text if hint else "No prior match — investigating cold."}
"""

try:
    result = app.invoke(
        {"messages": [("user",failure_context_with_hint )]},
        config= config
    )
except GraphRecursionError:
    result = "Investigation hit step limit — inconclusive, here's the evidence gathered."





