from crewai_tool import BaseTool, SerperDevTool
from crewai import Crew, Agent, Task


class BigQueryTool(BaseTool):
    name="Fetach the bigquery"
    description="Fetch user query from vector db"
    
    def _run(self, query: str)-> str:
        embedding = call_embedding()
        bigquery_result = callBigQuery(embedding)
        if not bigquery_result:
            return "NO_DATA"
        rerank = rerank_function(query, bigquery_result)
        return retank
        

bq_agent = Agent(
    role="Data Analyst",
    goal="You are data analyst which specialized into analyze the data",
    backstory="You have 10+ years of experience in data analyst. You check the details in every level",
    verbose=True,
    tools=[BigQueryTool]
    )
    
ws_agent = Agent(
    role="Web Research Analyst",
    goal="You are research analyst, who fetch the data from web",
    bckstory="As a research analyst you have 15 years of experience",
    tools=[SerperDevTool()],
    verbose=True,
    max_iter=3,
    max_execution_time=60
    )
    
bq_task = Task(
    description="Find ans for query: ${query} from bigdata",
    expected_output="Relevent data or NO_DATA",
    agent=bq_agent
    )
    
ws_task=Task(
    description="Fetch the data from web for query: ${query}",
    expected_output="Detailed answer from web",
    agent=ws_agent
    )
    
    
    
def trigger_workflow(self, user_query: str) -> str:
    bq_crew = Crew(
        agents=[bq_agent],
        tasks=[bq_task]
        )
        
    bq_result = bq_crew.kickoff(inputs= {"query": user_query})
    
    if "NO_DATA" in bg_result:
        wb_crew=Crew(
            agents=[ws_agent],
            tasks=[ws_task]
            )
        return wb_crew.kickoff(inputs={"query": user_query})
        
    return bq_result