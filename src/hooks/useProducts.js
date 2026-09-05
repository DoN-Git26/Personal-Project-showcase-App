import { useState, useEffect } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  function addProduct(product) {
    setProducts([...products, product]);
  }

  function updateProduct(updated) {
    setProducts(products.map(p => (p.id === updated.id ? updated : p)));
  }

  function deleteProduct(id) {
    setProducts(products.filter(p => p.id !== id));
  }

  return { products, addProduct, updateProduct, deleteProduct };
}