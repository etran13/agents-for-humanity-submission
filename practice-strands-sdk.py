#Imports
from strands import Agent, tool

# Run this to verify that the Strands Agent SDK is working.


#Define tools that the agent can use.
@tool
def word_count(text: str) -> int:
    """Count words in text.

    This docstring is used by the LLM to understand the tool's purpose.
    """
    return len(text.split())

agent = Agent(tools=[word_count])
response = agent("How many words are in this sentence?")