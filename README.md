## CENG3548 - 2024 Project

### To run the client:
````bash
cd client
npm run dev
````

### To scrape data:

#### Create .env file:
```
TMDB_API_BASE_URL = "https://api.themoviedb.org/3"
TMDB_API_KEY = <YOUR_API_KEY>
```

#### Install requirements:
````bash
pip3 install requests python_dotenv
````

#### Run the scraper:
````bash
cd server
python3 scraper.py
````

### To run the server:
````bash
cd server
npm run dev
````
