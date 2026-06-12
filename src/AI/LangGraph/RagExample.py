from typing import TypedDict, Literal
from langgraph.graph import StateGraph, START, END
from google.cloud import bigquery
import vertexai
from vertexai.language_models import TextEmbeddingModel

#Run once (init)
vertexai.init(project="streettadka", location="us-central1")
embed_model = TextEmbeddingModel.from_pretrained("text-embedding-004")
bq = bigquery.Client()

#Create state
class State(TypedDict):
    questions: str
    context: str
    answer: str
    source: str

#Embed tet with vertex AI
def embed_text(text: str)-> list[float]:
    return embed_model.get_embedding([text])[0].values

#Nodes
def retrieve_from_bq(state: State) -> State:
    """Search from the bigquery vector store for the answer"""
    q_vec = embed_text(state["questions"])

    sql = """
        SELECT base.content
        FROM VECTOR_SEARCH(
            TABLE `my_project.dataset.docs`,
            'embedding',
            (SELECT @qvec as embedding)
            top_k =>3,
            distance_type='COSINE'
        )
        ORDER by distance
    """

    job = bq.query(sql, job_config=bigquery.QueryJobConfig(
        query_parameters=[
            bigquery.ArrayQueryParameter("qvec", "FLOAT64", q_vec)
        ]
    ))

    rows = list(job.result())

    #Decide if it's good hit, 
    #COSINE distance 0 = identical, 2=opposite

    if rows and rows[0]["dist"] < 0.3:
        return {"context": rows[0]["content"], "source": "vectordb"}
    
    return {"context": "", "source": "vectordb"}

def web_search(state: State) -> State:
    #Replace with Tavily/SerpAPI / Google Search client
    result = my_web_client.search(state["questions"])
    return {"context": result, "source": "web"}

def generate(state: State) -> State:
    """Produce the final answer from whatever context we have"""
    if not state["context"]:
        return {"answer": "I do not have answer"}
    
    answer = call_llm(state["questions"], state["context"])
    return {"answer": answer}

#router the conditional edge 
def router_after_retrieve(state: State) -> Literal["web_search", "generate"]:
    if state["context"]:
        return "generate"
    
    return "web_search"

#Write the graph
graph = StateGraph(State)
graph.add_node("retrieve", retrieve_from_bq)
graph.add_node("web_search", web_search)
graph.add_node("generate", generate)

graph.add_edge(START, "retrieve")
graph.add_conditional_edge("retrieve", router_after_retrieve)
graph.add_edge("web_search", "generate")
graph.add_edge("generate", END)

app = graph.compile()

#run 
result = app.invoke({"question": "What is our deployment rollback policy"})
print(result["answer"], "| Source:", result["source"])