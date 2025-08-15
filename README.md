# Restaurant Reviews – Frontend

<img width="1672" height="897" alt="Screenshot 2025-08-14 at 11 42 03 p m" src="https://github.com/user-attachments/assets/b0c7fd2e-be3c-45cd-96f3-f76ceacb187c" />

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

## ⚙️ Environment Variables

Create a `.env` file in the project root:

VITE_API_URL=http://localhost:3000

---

## 🖥️ Setup & Run

### 1. Install dependencies

`npm install`

### 2. Run the development server

`npm run dev`

The app will be available at:

http://localhost:5173

---

## Backend API

This frontend expects the backend Rails API to be running locally at the URL defined in VITE_API_URL.

### [Backend repo](https://github.com/mricanho/restaurant_reviews_api)

---

## 📄 License

MIT License – feel free to use this project for learning or as a starting point for your own apps.
