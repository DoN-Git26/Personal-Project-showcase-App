import { useState, useEffect } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/games").then(res => res.json()),
      fetch("http://localhost:5000/consoles").then(res => res.json()),
      fetch("http://localhost:5000/accessories").then(res => res.json())
    ]).then(([games, consoles, accessories]) => {
      setProducts([
        ...games.map(p => ({ ...p, category: "games" })),
        ...consoles.map(p => ({ ...p, category: "consoles" })),
        ...accessories.map(p => ({ ...p, category: "accessories" }))
      ]);
    });
  }, []);

  function addProduct(product) {
    setProducts([...products, product]);
  }

  function updateProduct(updated) {
    setProducts(products.map(p =>
      p.id === updated.id && p.category === updated.category ? updated : p
    ));
  }

  function deleteProduct(id, category) {
    setProducts(products.filter(p => !(p.id === id && p.category === category)));
  }

  return { products, addProduct, updateProduct, deleteProduct };
}
