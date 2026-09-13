from strands import Agent, tool
from strands.models.openai import OpenAIModel

#For testing
from dotenv import load_dotenv
import os

#An agent responsible for expanding focus areas entered by user into search terms
class SearchTermAgent:

    AGENT_PROMPT = """You are a search term generator for a grant-matching tool. Your job is to take a nonprofit's stated focus areas and expand them into a short list of search terms that will be used to query a federal grants database (Grants.gov).

    Grant listings often use different vocabulary than everyday language (e.g., a nonprofit might say "helping kids read" while a grant says "childhood literacy" or "K-12 educational outcomes"). Your job is to bridge that gap.

    RULES:
    - For each input focus area, output the original term AND up to 2 additional closely-related terms or synonyms that grant-writers/government agencies commonly use for that space.
    - Do not invent unrelated focus areas. Stay tightly scoped to what was given. For extra context, use the mission statement.
    - Prefer terms that are 1-3 words long — these work better as keyword search queries than full sentences.
    - Do not exceed 8 total terms across the entire output, even if there are many input focus areas. If there are many focus areas, prioritize the most central/important ones and give fewer synonyms per area.
    - Output ONLY valid JSON, no other text, no markdown formatting, no explanation.

    OUTPUT FORMAT:
    {
    "search_terms": ["term1", "term2", "term3", ...]
    }"""

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
        self.agent = Agent(model=model, 
                           system_prompt = self.AGENT_PROMPT)

    def expand_search_terms(self, mission_statement, focus_area_list):
        response = self.agent(f"Expand search terms for this nonprofit profile:"\
                         f"Mission statement: {mission_statement} Focus areas: {focus_area_list}")
        return response


if __name__ == "__main__":
    load_dotenv("my_agent/.env") 
    api_key = os.getenv("OPENAI_API_KEY")   
    a = SearchTermAgent(api_key)
    res = a.expand_search_terms("Empowering formerly incarcerated individuals to rebuild their lives through job training, housing assistance, and community mentorship",
                          ["reentry support", "workforce development", "housing stability"])
    print(res)

