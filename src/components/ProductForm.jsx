import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "games"
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/${formData.category}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        price: parseFloat(formData.price)
      })
    })
      .then(res => res.json())
      .then(newProduct => onAddProduct({ ...newProduct, category: formData.category }));

    setFormData({ name: "", price: "", image: "", category: "games" });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-4 space-y-4">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="w-full border rounded p-2" />
      <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" type="number" className="w-full border rounded p-2" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full border rounded p-2" />
      <select name="category" value={formData.category} onChange={handleChange} className="w-full border rounded p-2">
        <option value="games">Games</option>
        <option value="consoles">Hardware & Consoles</option>
        <option value="accessories">Accessories</option>
      </select>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Product</button>
    </form>
  );
}

export default ProductForm;
