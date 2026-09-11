
# Imports
from dotenv import load_dotenv
import os

from strands import Agent, tool
from strands.models.openai import OpenAIModel
from pydantic import BaseModel

from backend.app.schemas.nonprofits import NonprofitCreate
class GrantWithMatchingInfo(BaseModel):
    pass

#Load the .env file with the API key.

#load_dotenv() 

#USE WHEN RUNNING W/ python -m my_agent.agent:
load_dotenv("my_agent/.env") 

api_key = os.getenv("OPENAI_API_KEY")

#Define the model (needed to connect to OpenAI API)
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

#Define prompts.
#TODO: How will the agent access the nonprofit create object of an organization?
BASIC_WORKFLOW_PROMPT = """You are an agent with HTTP capabilities that helps an
organization find grant opportunities. You can:

1. Access the organization's data, stored in a NonprofitCreate object
2. Make HTTP requests to the grants.gov API
3. Filter and rank the results based on how well they fit the organization

When returning responses:
1. """

#Define tools that the agent can use.
#The docstring lets the agent know what the tool does. 
@tool
def get_list_of_possible_grants_from_grantsgov(org_profile: NonprofitCreate):
    "Derive list"
    pass

agent = Agent(model=model, tools=[])
response = agent("Retrieve and rank grants that match this organization: ")