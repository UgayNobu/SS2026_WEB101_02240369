# Weather API Dashboard

## What is this project?

This is a simple weather app I built as part of my practical. It lets you search for the weather in any city and also lets you save, edit, and delete locations. I built it using just HTML, CSS, and JavaScript.

---

## What does the app do?

- You type in a city name and it shows you the current weather
- You can save a location to a list
- You can edit a saved location
- You can delete a saved location

---

## What files are in this project?

- **index.html** — this is the webpage, it has all the buttons and tabs you see on screen
- **script.js** — this is the JavaScript file that makes everything actually work
- **README.md** — this file, explaining the project
- **Reflection.md** — my thoughts on what I learned

---

## How do I set it up?

**Step 1 — Create a folder**

Make a new folder on your computer and call it `weather-app`. Put all the files inside it.

**Step 2 — Get an API key**

Go to openweathermap.org and create a free account. After signing up, they will send you an email with your API key. Wait about 2 hours for it to activate.

**Step 3 — Add your API key**

Open `script.js` and look at line 2. You will see this:

const WEATHER_API_KEY = 'YOUR_API_KEY_HERE';

Replace YOUR_API_KEY_HERE with the key from your email. Then save the file.

**Step 4 — Open the app**

Open the folder in VS Code and click Go Live at the bottom right of the screen. The app will open in your browser.

---

## How do I use it?

**To search for weather:**
Go to the GET Weather tab, type a city name like London or Tokyo, and click Get Weather.

**To save a location:**
Go to the POST Location tab, fill in the details, and click Save Location.

**To edit a location:**
Go to the Saved Locations tab and click the Edit button on any location.

**To delete a location:**
Go to the Saved Locations tab and click the Delete button on any location.

---

## What APIs did I use?

**OpenWeatherMap API** — this gives me real weather data when I search for a city.

**JSONPlaceholder API** — this is a free fake API I used to practice saving, editing, and deleting data.

---

## What are GET, POST, PUT and DELETE?

- GET means you are asking for data, like asking what is the weather in London
- POST means you are sending new data, like saving a new location
- PUT means you are updating something that already exists
- DELETE means you are removing something