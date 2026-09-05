import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import useProducts from "../hooks/useProducts";

function ShopPage() {
  const { products, updateProduct, deleteProduct } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProductList
        products={filtered}
        onUpdate={updateProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default ShopPage;