from crewai import Agent, Task, Crew
from crewai_tools import BaseTool, SerperDevTool, MCPServerAdapter
from crewai.flow.flow import Flow, start, listen, router
from pydantic import BaseModel



#Define state

class RAGState(BaseModel):
    query: str=""
    bq_result: str=""
    final_answer: str=""

mcp_tools = MCPServerAdapter(
    server_param={
        "url": "localhost:8080/mcp",
        "transport": "sse"
    }
)

#Tools
class BigQueryTools(BaseTool):
    name: str="Bigquery vector search"
    description: str="Searchjes the vecor db for relevant articles. Return NO_DATA if result not found"

    def _run(self, query: str)-> str:
        embedding = call_embedding(query)
        results = call_bigquery(embedding)

        if not results:
            return "NO_DATA"
        
        reranked = rerank(query, results)
        return reranked
    

bq_agent = Agent(
    role="Vector DB Retrieval Specialist",
    goal="Find the most relevant answer from the vector database.",
    backstory="Expert in semantic search. Always returns NO_DATA if nothing is relevant — never hallucinate.",
    tools=[BigQueryVectorTool()],
    verbose=True,
)

web_agent = Agent(
    role="Web Research Analyst",
    goal="Find and summarize the answer from the web when the vector DB has no relevant data.",
    backstory="Expert at web research. Always cite your sources in the final answer.",
    tools=[SerperDevTool()],
    verbose=True,
    max_iter=3,
    max_execution_time=60,
)

mcp_agent= Agent(
    role="MCP action coordinator",
    goal="Execute post-answer action via mcp tool",
    backstory="Coordinate external system actions after ans answer is ready",
    tools=[mcp_tools],
    verbose=True,
    max_iter=2
)

manager_agent=Agent(
    role="Orchestaration Manager",
    goal="Analyse the user query and delegate to the right specialist agent",
    backstory=(
        "Senior AI orchestraor, you decide where the query needs vector db search or websearch or direct mcp action"
        "Never directly ans"
    ),
    verbose=True,
    allow_delegation=True
)


bq_task = Task(
    description="Answer this query using the vector DB: {query}",
    expected_output="Relevant answer with sources, OR the exact string 'NO_DATA' if nothing found.",
    agent=bq_agent,
)

web_task = Task(
    description="The vector DB had no results. Search the web and answer: {query}",
    expected_output="Summarized answer with cited web sources.",
    agent=web_agent,
)

mcp_task = Task(
    description="Post the final answer to Slack channel #ai-answers: {answer}",
    expected_output="Confirmation that the message was posted.",
    agent=mcp_agent,
)

manager_task = Task(
    description=(
        "User query: {query}\n\n"
        "Decide and delegate: use vector DB agent if this is a knowledge question, "
        "web agent if it needs current info, or MCP agent for system actions."
    ),
    expected_output="Final answer from the delegated agent.",
    agent=manager_agent,
)

#Flow

class RAGFlow(Flow[RAGState]):

    @start()
    def manager_decide(self):
        self.state.final_answer=str(
            Crew(
                agents=[manager_agent, bq_agent, web_agent, mcp_agent],
                tasks=[manager_task],
                process=Process.hierarchical,
                manager_agent=manager_agent
            ).kickoff(inputs={"query": self.state.query})
        )


def trigger_workflow(user_query: str)-> str:
    flow = RAGFlow()
    flow.state.query=user_query
    flow.kickoff()
    return flow.state.final_answer