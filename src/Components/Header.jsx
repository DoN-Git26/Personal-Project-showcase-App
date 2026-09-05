import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🎮 GamePort Africa</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/shop" className="hover:text-yellow-400">Shop</Link>
        <Link to="/admin" className="hover:text-yellow-400">Admin Portal</Link>
      </nav>
    </header>
  );
}

export default Header;