function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}

export default SearchBar;