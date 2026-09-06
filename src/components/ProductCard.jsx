function ProductCard({ product, onUpdate, onDelete }) {
  function handleEdit() {
    const updatedPrice = prompt("Enter new price:", product.price);
    if (updatedPrice) {
      fetch(`http://localhost:5000/${product.category}/${product.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: parseFloat(updatedPrice) })
      })
        .then(res => res.json())
        .then(updated => onUpdate({ ...updated, category: product.category }));
    }
  }

  function handleDelete() {
    fetch(`http://localhost:5000/${product.category}/${product.id}`, {
      method: "DELETE"
    }).then(() => onDelete(product.id, product.category));
  }

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col space-y-2">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
      <h4 className="text-lg font-semibold">{product.name}</h4>
      <p className="text-green-700 font-bold">KES {product.price}</p>
      <p className="text-xs text-gray-400">Category: {product.category}</p>
      <div className="flex space-x-2">
        <button onClick={handleEdit} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
        <button onClick={handleDelete} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;
