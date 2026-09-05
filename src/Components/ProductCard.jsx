function ProductCard({ product, onUpdate, onDelete }) {
  function handleEdit() {
    fetch(`http://localhost:6001/products/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: product.price + 1000 })
    })
      .then(res => res.json())
      .then(updated => onUpdate(updated));
  }

  function handleDelete() {
    fetch(`http://localhost:6001/products/${product.id}`, { method: "DELETE" })
      .then(() => onDelete(product.id));
  }

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col space-y-2" data-testid="product-card">
      <h4 className="text-lg font-semibold">{product.name}</h4>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-sm text-gray-500">Origin: {product.origin}</p>
      <p className="text-green-700 font-bold">KES {product.price}</p>
      <div className="flex space-x-2">
        <button
          onClick={handleEdit}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Edit Price
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;