# GamePort Africa Storefront

🎮 GamePort Africa is a React-based e-commerce storefront for games, consoles, and accessories.  
It includes a public-facing shop and an **Admin Portal** for managing products.

---

## Features

- **Landing Page**: Welcome page with navigation.
- **Shop Page**: General storefront.
- **Category Pages**:
  - `/consoles` → Lists all consoles
  - `/accessories` → Lists all accessories
  - `/playstation` → Lists all consoles (PlayStation section)
  - `/games` → Lists all games
- **Admin Portal**:
  - Add new products (name, image, price, category)
  - Edit existing products (PATCH request)
  - Delete products (DELETE request)
- **Navigation Bar**:
  - Dropdown menus for Stores, PlayStation, Games
  - Search bar with focus and query handling
  - Admin button (links to `/admin`)
  - Logo (links back to `/` landing page)
- **Footer**: Always visible across pages.

---

## Tech Stack

- **React** (with Vite or CRA)
- **React Router DOM** for routing
- **Tailwind CSS** for styling
- **JSON Server** for mock backend (games, consoles, accessories)
- **Hooks**:
  - `useState` for local state
  - `useEffect` for data fetching
  - `useId` for accessible form inputs
  - `useRef` for search bar focus
  - `useContext` for global admin state
  - Custom hook: `useProducts` for product CRUD

---

## 📂 Project Structure

