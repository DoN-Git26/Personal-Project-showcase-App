import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

function ShopPage() {
  const { products, updateProduct, deleteProduct } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Shop</h2>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProductList
        products={filteredProducts}
        onUpdate={updateProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default ShopPage;