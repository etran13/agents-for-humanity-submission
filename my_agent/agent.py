# Run this file to verify that the Strands Agent SDK is working.

# Imports
from dotenv import load_dotenv
import os

from strands import Agent, tool
from strands.models.openai import OpenAIModel
from strands_tools import calculator

#Load the .env file with the API key.
load_dotenv()
api_key = os.getenv("API_KEY")

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

#Define tools that the agent can use.
#The docstring lets the agent know what the tool does. 
@tool
def word_count(text: str) -> int:
    """Given word, return letter count

    """
    return len(text.split())

print("Agent starting...")
agent = Agent(model=model, tools=[word_count])
response = agent("How many letters in 'strawberry'?")