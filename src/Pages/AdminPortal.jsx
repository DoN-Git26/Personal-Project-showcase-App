import ProductForm from "../components/ProductForm";
import useProducts from "../hooks/useProducts";

function AdminPortal() {
  const { addProduct } = useProducts();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Portal</h2>
      <ProductForm onAddProduct={addProduct} />
    </div>
  );
}

export default AdminPortal;