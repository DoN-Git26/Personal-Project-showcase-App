# GamePort Africa Storefront

A React-based e-commerce storefront for gaming products, built as a personal project showcase. The application includes a customer-facing shop experience and an admin portal for managing inventory.

## Overview

GamePort Africa is designed to simulate a modern gaming retail website where users can browse games, consoles, and accessories. The interface is built with React and uses client-side routing for category-based shopping. The project also demonstrates CRUD-style product management through a mock backend powered by JSON Server.

This project is a good example of:

- React component-driven UI design
- Route-based page navigation
- Search and filtering functionality
- State management with custom hooks
- Mock API integration for product data
- A simple admin dashboard for product administration

## Features

### Customer Experience

- Landing page with branded storefront presentation
- Product shop with searchable inventory
- Category pages for:
  - Consoles
  - Accessories
  - PlayStation products
  - Games
- Responsive product cards with image, name, and price information
- Navigation bar and persistent footer

### Admin Functionality

- Add new products to the inventory
- Update existing product details
- Delete products from the storefront
- Manage mock product data without a full backend service

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- JSON Server
- JavaScript (ES Modules)

## Project Structure

```text
Personal-Project-Showcase-App/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductList.jsx
│   │   └── SearchBar.jsx
│   ├── data/
│   │   └── db.json
│   ├── hooks/
│   │   └── useProducts.js
│   ├── pages/
│   │   ├── AccessoriesPage.jsx
│   │   ├── AdminPortal.jsx
│   │   ├── ConsolesPage.jsx
│   │   ├── GamesPage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── PlaystationPage.jsx
│   │   └── ShopPage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── netlify.toml
├── package.json
├── README.md
├── PROJECT_README.md
├── vite.config.js
└── ...
```

## Main App Flow

The app loads product data from `src/data/db.json` using JSON Server. The custom hook `useProducts` fetches data for the product categories and returns product state plus methods for adding, updating, and deleting items.

The app routes are defined in `src/App.jsx`:

- `/` → Landing page
- `/shop` → Main storefront
- `/admin` → Admin portal
- `/consoles` → Console collection
- `/accessories` → Accessories collection
- `/playstation` → PlayStation category
- `/games` → Games category

## Data Source

The mock database is located in:

- `src/data/db.json`

It contains product arrays for:

- `games`
- `consoles`
- `accessories`

The app combines these arrays into one list during fetch and tags each item with its category.

## Installation

1. Clone the repository
2. Navigate to the project folder
3. Install the dependencies:

```bash
npm install
```

## Running the Project

This project uses a frontend dev server and a mock backend API.

### Start both together

```bash
npm start
```

This runs:

- Vite frontend dev server
- JSON Server mock database on port `5000`

### Run individually

Frontend:

```bash
npm run dev
```

Mock API server:

```bash
npm run server
```

## Available Scripts

From `package.json`:

```bash
npm run dev
```
Starts the Vite development server.

```bash
npm run build
```
Builds the production bundle.

```bash
npm run preview
```
Previews the production build locally.

```bash
npm run server
```
Starts the JSON Server with the mock database.

```bash
npm start
```
Runs both the React app and backend server concurrently.


## License

This project is for educational and showcase purposes.
