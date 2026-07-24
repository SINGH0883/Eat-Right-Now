<div align="center">

  <h1>🥗 Eat-Right-Now — Intelligent Meal & Health Recommendation Engine</h1>

  <p align="center">
    <strong>A modern, interactive web application designed for instant meal discovery, health condition matching, personalized nutrition tracking, and smart dietary recommendations.</strong>
  </p>

  <p align="center">
    <a href="https://github.com/SINGH0883/Eat-Right-Now">
      <img src="https://img.shields.io/badge/Vite-8.0.10-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
    </a>
    <a href="https://github.com/SINGH0883/Eat-Right-Now">
      <img src="https://img.shields.io/badge/React-19.2.5-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
    </a>
    <a href="https://github.com/SINGH0883/Eat-Right-Now">
      <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    </a>
    <a href="https://github.com/SINGH0883/Eat-Right-Now">
      <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
    </a>
    <a href="https://github.com/SINGH0883/Eat-Right-Now/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License">
    </a>
  </p>

</div>

<hr />

## 🌟 Overview

**Eat-Right-Now** is a high-performance, user-friendly nutrition and meal recommendation platform built with **React 19**, **Vite**, and **Tailwind CSS**. 

Engineered to bridge the gap between healthy eating and personalized dietary requirements, the application allows users to analyze health conditions, set macronutrient goals, filter meals by dietary preferences (Vegan, Keto, High-Protein, Gluten-Free), and discover tailored recipes with full nutritional transparency.

---

## ⚡ Core Features

* **📋 Health Condition & Nutrition Profiler (`ConditionForm.jsx`):** 
  * Interactive form allowing users to select dietary goals, calorie targets, and health conditions.
  * Dynamically computes suitable meal options tailored to individual health profiles.
* **💡 Smart Meal Recommendation Engine (`RecommendationCard.jsx`):** 
  * Displays personalized dish recommendations complete with macronutrient breakdowns (Proteins, Carbs, Fats), calorie counts, and preparation times.
* **🔍 Category & Dietary Filtering (`CategoryFilter.jsx`):** 
  * Instant real-time filter by meal tags: High-Protein, Low-Carb, Vegan, Vegetarian, Keto, Gluten-Free, Breakfast, Lunch, and Dinner.
* **🍽️ Interactive Menu Showcase (`MenuItemCard.jsx` & `MenuSection.jsx`):** 
  * Visual dish menu grid with high-resolution food assets, calorie badges, key ingredients, and interactive modal details.
* **⚡ Lightning-Fast Performance:** Powered by Vite 8 for instant Hot Module Replacement (HMR) and optimized build bundles.
* **🚀 GitHub Pages Deployment:** Built-in automated gh-pages deployment workflow (`npm run deploy`).

---

## 🛠️ Tech Stack & Dependencies

| Component | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Dev Server**| [Vite 8](https://vitejs.dev/) (`@vitejs/plugin-react`) |
| **Language** | JavaScript (ES6+ Modules) |
| **Styling & Icons** | Tailwind CSS v4, SVG Vector Assets |
| **Deployment** | `gh-pages` automated static site deployment |

---

## 📂 Project Architecture

```
Eat-Right-Now/
├── public/                     # Public assets, favicons, & food vectors
│   ├── favicon.svg
│   ├── icons.svg
│   └── truffle_arancini.png
├── src/
│   ├── assets/                 # High-resolution hero images & visual media
│   │   ├── hero.png
│   │   └── vite.svg
│   ├── components/             # Reusable UI React Components
│   │   ├── CategoryFilter.jsx  # Category & dietary tag filter buttons
│   │   ├── ConditionForm.jsx   # Health goal & nutrition input form
│   │   ├── Header.jsx          # App navbar & brand identity banner
│   │   ├── MenuItemCard.jsx    # Individual food menu card component
│   │   ├── MenuSection.jsx     # Grouped menu section layout
│   │   └── RecommendationCard.jsx # Personalized recommendation card UI
│   ├── data/
│   │   └── mockFoods.js        # Comprehensive food dataset & nutrition metrics
│   ├── App.jsx                 # Main application state & view container
│   ├── index.css               # Global CSS & Tailwind styling setup
│   └── main.jsx                # React application entry root
├── eslint.config.js            # ESLint static code checker config
├── index.html                  # HTML5 entry template
├── package.json                # Project dependencies & deployment scripts
└── vite.config.js              # Vite build configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your development environment:

### Prerequisites
Make sure you have **Node.js 18.0** or higher installed.

```bash
node -v
npm -v
```

### 1. Clone the Repository
```bash
git clone https://github.com/SINGH0883/Eat-Right-Now.git
cd Eat-Right-Now
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application live.

---

## ⚙️ Available Scripts

In the project root directory, you can run:

* `npm run dev`: Starts the local Vite development server with instant HMR.
* `npm run build`: Compiles and minifies production assets into the `dist/` directory.
* `npm run preview`: Previews the local production build.
* `npm run lint`: Runs ESLint code quality checks.
* `npm run deploy`: Builds the project and deploys it automatically to **GitHub Pages**.

---

## 🌐 Live Deployment

Deploying updates to GitHub Pages is as easy as running:

```bash
npm run deploy
```

This script automatically executes `npm run build` and publishes the production `dist/` output to the `gh-pages` branch.

---

## 📬 Connect & Author

**Yuvraj Singh** — *AI & Data Science Engineer \| Full-Stack Developer*

* 🌐 **GitHub:** [@SINGH0883](https://github.com/SINGH0883)
* 💼 **LinkedIn:** [Yuvraj Singh](https://www.linkedin.com/in/yuvraj-singh-85abc)
* 📧 **Email:** [yuvraj001@zohomail.in](mailto:yuvraj001@zohomail.in)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
