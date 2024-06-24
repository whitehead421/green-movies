import requests
from dotenv import load_dotenv
import os

# Load the environment variables from the .env file
load_dotenv()

# Get the environment variables
TMDB_API_BASE_URL = os.getenv("TMDB_API_BASE_URL")
TMDB_API_KEY = os.getenv("TMDB_API_KEY")

# Endpoints to send request to
endpoints = [
    "/movie/top_rated",
    "/movie/upcoming",
    "/tv/on_the_air",
    "/tv/top_rated",
    "/trending/movie/day",
    "/trending/tv/day",
    "/tv/airing_today",
    "/movie/now_playing",
]


# Function to send request to the endpoints and store the response in a JSON file
def send_request_to_endpoints():
    for endpoint in endpoints:
        response = requests.get(
            str(TMDB_API_BASE_URL) + endpoint + "?api_key=" + str(TMDB_API_KEY)
        )

        # Use fetch_movie_related_endpoints function to fetch the related endpoints for each movie
        if "movie" in endpoint:
            data = response.json()
            for movie in data["results"]:
                fetch_movie_related_endpoints(movie["id"])
        if "tv" in endpoint:
            data = response.json()
            for tv in data["results"]:
                fetch_tv_related_endpoints(tv["id"])

        os.makedirs(os.path.dirname("data" + endpoint), exist_ok=True)
        with open("./data/" + endpoint + ".json", "w") as file:
            file.write(response.text)


def fetch_movie_related_endpoints(id):
    endpoints = [
        "/movie/" + str(id) + "/credits",
        "/movie/" + str(id) + "/lists",
        "/movie/" + str(id) + "/recommendations",
        "/movie/" + str(id),
    ]

    for endpoint in endpoints:
        response = requests.get(
            str(TMDB_API_BASE_URL) + endpoint + "?api_key=" + str(TMDB_API_KEY)
        )

        os.makedirs(os.path.dirname("data" + endpoint), exist_ok=True)
        with open("./data/" + endpoint + ".json", "w") as file:
            file.write(response.text)


def fetch_tv_related_endpoints(id):
    endpoints = [
        "/tv/" + str(id) + "/credits",
        "/tv/" + str(id) + "/recommendations",
        "/tv/" + str(id) + "/lists",
        "/tv/" + str(id),
    ]

    for endpoint in endpoints:
        response = requests.get(
            str(TMDB_API_BASE_URL) + endpoint + "?api_key=" + str(TMDB_API_KEY)
        )

        os.makedirs(os.path.dirname("data" + endpoint), exist_ok=True)
        with open("./data/" + endpoint + ".json", "w") as file:
            file.write(response.text)


send_request_to_endpoints()
