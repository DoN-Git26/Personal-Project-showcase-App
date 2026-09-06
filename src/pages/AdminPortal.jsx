import ProductForm from "../components/ProductForm";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";

function AdminPortal() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Portal</h2>
      <ProductForm onAddProduct={addProduct} />
      <div className="mt-8">
        <ProductList
          products={products}
          onUpdate={updateProduct}
          onDelete={deleteProduct}
        />
      </div>
    </div>
  );
}

export default AdminPortal;
