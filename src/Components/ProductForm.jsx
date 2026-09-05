import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({ name: "", description: "", origin: "", price: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newProduct => onAddProduct(newProduct));
    setFormData({ name: "", description: "", origin: "", price: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-4 space-y-4">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full border rounded p-2" />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full border rounded p-2" />
      <input name="origin" value={formData.origin} onChange={handleChange} placeholder="Origin" className="w-full border rounded p-2" />
      <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" type="number" className="w-full border rounded p-2" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Product</button>
    </form>
  );
}

export default ProductForm;