import os

from dotenv import load_dotenv
from my_agent.search_term_agent import SearchTermAgent


load_dotenv("../my_agent/.env")


def generate_search_terms(
    mission_statement: str,
    focus_area_list: list[str],
) -> list[str]:
    api_key = os.getenv("OPENAI_API_KEY")

    if not api_key:
        raise ValueError("OPENAI_API_KEY is not set")

    agent = SearchTermAgent(api_key)

    return agent.expand_search_terms(
        mission_statement,
        focus_area_list,
    )