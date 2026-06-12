from langgraph.prebuilt import create_react_agent
from langchain_core.tools import tool

@tool
def search_knowledge_base(question: str) -> str:
    """Search the internal BigQuery vector DB for an answer."""
    q_vec = embed(question)
    # ... your VECTOR_SEARCH query ...
    return best_match_content or "No relevant results found."

@tool
def search_web(question: str) -> str:
    """Search the public web. Use only if the knowledge base has no answer."""
    return my_web_client.search(question)

# The model + the tools = a ReAct agent
agent = create_react_agent(
    model="vertexai:gemini-1.5-pro",
    tools=[search_knowledge_base, search_web],
)

result = agent.invoke({"messages": [("user", "What is our rollback policy?")]})