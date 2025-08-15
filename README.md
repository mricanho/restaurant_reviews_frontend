# Restaurant Reviews – Frontend

Frontend application for the **Restaurant Reviews** platform, built with **React**, **Vite**, and **TailwindCSS**.  
It consumes the Rails API backend to allow users to browse, search, view, and review restaurants.

---

## 🚀 Features

- **Restaurant listing** with search functionality.
- **Restaurant detail page** with reviews.
- **Add new restaurant** via form.
- **Submit reviews** for a restaurant.
- Responsive UI styled with **TailwindCSS**.

---

## 🛠️ Tech Stack

- **React 19** with Vite
- **React Router DOM** for routing
- **TailwindCSS** for styling
- **PostCSS** & **Autoprefixer** for CSS processing
- **Fetch API** for backend requests

---

## 📂 Project Structure
restaurant_reviews_frontend/
│
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
│
└─ src/
   ├─ index.css               
   ├─ main.jsx                # Router
   ├─ api.js                  # HTTP Client (fetch)
   │
   ├─ pages/
   │  ├─ App.jsx              # Home: search, list and create restaurant
   │  └─ RestaurantDetail.jsx # Details: info, reviews and creat review
   │
   └─ components/
      ├─ RestaurantList.jsx   # Restaurant list
      └─ RestaurantForm.jsx   # Form 

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

VITE_API_URL=http://localhost:3000

---

## 🖥️ Setup & Run

### 1. Install dependencies
```bash
npm install

### 2. Run the development server

npm run dev

The app will be available at:

http://localhost:5173

---

## Backend API

This frontend expects the backend Rails API to be running locally at the URL defined in VITE_API_URL.

Backend repo: [https://github.com/mricanho/restaurant_reviews_api]

---

## 📸 UI Preview

	•	Home Page – List restaurants, search, and create new entries.
	•	Detail Page – View restaurant details, see reviews, and submit a new one.

## 📄 License

MIT License – feel free to use this project for learning or as a starting point for your own apps.