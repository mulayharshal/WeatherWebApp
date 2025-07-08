# 🌦️ Weather Web App

A beautiful and responsive weather forecast app built with **React** and styled with **custom CSS**. It fetches real-time weather data using the **OpenWeatherMap API**, allowing users to search any city and view current conditions in an engaging UI.

---

## 🖼️ Preview

![Weather Web App](/src/assets/screenshot.png)


---

## 🚀 Features

- 🌍 Search current weather by **city name**
- 🌡️ Shows:
  - Temperature
  - Humidity
  - Minimum & Maximum temperatures
  - Weather description and "feels like"
- 🌤️ Displays weather icon based on conditions
- 🖼️ Attractive card UI with custom background
- 💡 Clean and responsive layout for all devices

---

## 📦 Tech Stack

- **Frontend**: React (with Vite)
- **Styling**: CSS
- **API**: [OpenWeatherMap](https://openweathermap.org/api)

---

## 🛠️ Getting Started

### 📥 1. Clone the Repository

```bash
git clone https://github.com/mulayharshal/WeatherWebApp.git
cd WeatherWebApp
```

### 📦 2. Install Dependencies

```bash
npm install
```

### 🔑 3. Setup Environment Variables

Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```env
VITE_API_KEY=your_api_key_here
```

> 🔐 Sign up at [OpenWeatherMap](https://openweathermap.org/api) to get a free API key.

### ▶️ 4. Run the App

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
WeatherWebApp/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## 🌐 API Reference

- **OpenWeatherMap Current Weather API**
  - Endpoint: `https://api.openweathermap.org/data/2.5/weather`
  - Parameters: `q`, `appid`, `units=metric`

---

## 🙋‍♂️ Author

**Harshal Mulay**

- 🌐 [GitHub](https://github.com/mulayharshal)
- 💼 [LinkedIn](https://linkedin.com/in/mulayharshal)

---



## 🌟 Support

If you find this project helpful, don't forget to **⭐ star** the repository!
