import { useEffect, useState } from "react";

function AccessoriesPage() {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/accessories")
      .then(res => res.json())
      .then(setAccessories);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Accessories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accessories.map(acc => (
          <div key={acc.id} className="bg-white shadow rounded p-4">
            <img src={acc.image} alt={acc.name} className="w-full h-32 object-cover" />
            <h3 className="font-semibold">{acc.name}</h3>
            <p className="text-green-700 font-bold">KES {acc.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccessoriesPage;
