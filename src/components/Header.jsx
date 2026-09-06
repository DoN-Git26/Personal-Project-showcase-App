import { Link } from "react-router-dom";
import { useState, useRef } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const searchRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchRef.current.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
    }
  };

  return (
    <header className="bg-white text-sky-700 shadow-md px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Admin
          </Link>

          <Link to="/" className="flex items-center space-x-2 hover:text-sky-500">
            <span className="text-2xl">🎮</span>
            <h1 className="text-xl font-bold">GamePort Africa</h1>
          </Link>
        </div>

        <nav className="flex space-x-8">
          <div className="relative">
            <button onClick={() => toggleMenu("stores")} className="hover:text-sky-500">
              Stores
            </button>
            {openMenu === "stores" && (
              <div className="absolute left-0 mt-2 bg-white text-sky-700 rounded shadow-lg w-40">
                <Link to="/consoles" className="block px-4 py-2 hover:bg-sky-100">Buy Consoles</Link>
                <Link to="/accessories" className="block px-4 py-2 hover:bg-sky-100">Buy Accessories</Link>
              </div>
            )}
          </div>

          <Link to="/playstation" className="hover:text-sky-500">PlayStation</Link>
          <Link to="/games" className="hover:text-sky-500">Games</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            to="/signin"
            className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors"
          >
            Sign In
          </Link>
          <form onSubmit={handleSearch} className="flex items-center bg-sky-100 rounded px-2">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search..."
              className="bg-sky-100 text-sky-700 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button type="submit" className="text-sky-600 px-2 hover:text-sky-800">
              🔍
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
