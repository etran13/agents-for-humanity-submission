from strands import Agent, tool
from strands.models.openai import OpenAIModel

class GrantRankerAgent:
    #A class that owns the agent 
    AGENT_PROMPT = """You are an agent with HTTP capabilities that helps an
    organization find grant opportunities. You can:

    1. Access the organization's data, stored in a NonprofitCreate object
    2. Make HTTP requests to the grants.gov API
    3. Filter and rank the results based on how well they fit the organization

    When returning responses:
    1. """
    
    def __init__(self, api_key: str):

        #Instantiate agent
        model = OpenAIModel(
            client_args={
                "api_key": api_key,
            },
            # **model_config
            model_id="gpt-4o",
            params={
                "max_tokens": 100,
                "temperature": 0.7,
            }
        )
        self.agent = Agent(model=model, tools=[])

    def run(self, nonprofit_data):
        "Given a dict with nonprofit data, return a dict containing info about the top ___ grants."
        
        response = self.agent("Retrieve and rank grants that match this organization: ")
        return response

if (__name__ == "__main__"):
    print("IT WORKS")
