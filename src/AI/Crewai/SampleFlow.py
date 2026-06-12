from crewai import Agent, Task, Crew
from crewai_tools import BaseTool, SerperDevTool
from crewai.flow.flow import Flow, start, listen, router
from pydantic import BaseModel


#Define state

class RAGState(BaseModel):
    query: str=""
    bq_result: str=""
    final_answer: str=""


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

#Flow

class RAGFlow(Flow[RAGState]):

    @start()
    def start_vector_search_db(self):
        self.state.bq_result=str(
            Crew(agents=[bq_agent], tasks=[bq_task])
            .kickoff(inputs={"query": self.state.query})
        )
    
    @router(start_vector_search_db)
    def check_result(self):
        if "NO_DATA" in self.state.bq_results:
            return "web_fallback"
        
        return "vector_done"
    
    @listen("vector_done")
    def return_vecot_result(self):
        self.state.final_answer=self.state.bq_result

    @listen("web_fallback")
    def search_web(self):
        self.state.final_answer=str(
            Crew(agents=[web_agent], tasks=[web_task])
            .kickoff(inputs={"query": self.state.query})
        )


def trigger_workflow(user_query: str)-> str:
    flow = RAGFlow()
    flow.state.query=user_query
    flow.kickoff()
    return flow.state.final_answer