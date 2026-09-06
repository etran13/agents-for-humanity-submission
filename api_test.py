#Practice accessing the grants.gov api
import requests

# Define the API endpoint
url = "https://api.grants.gov/v1/api/search2"

# Define headers
json_data = {
    "keyword": "health",
}

# Send the GET request
response = requests.post(url, json=json_data)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()  # Parse JSON response
    print(data)
else:
    print(f"Error: {response.status_code}")