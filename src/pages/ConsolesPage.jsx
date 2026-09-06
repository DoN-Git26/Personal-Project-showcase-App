import { useEffect, useState } from "react";

function ConsolesPage() {
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/consoles")
      .then(res => res.json())
      .then(setConsoles);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Consoles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {consoles.map(console => (
          <div key={console.id} className="bg-white shadow rounded p-4">
            <img src={console.image} alt={console.name} className="w-full h-32 object-cover" />
            <h3 className="font-semibold">{console.name}</h3>
            <p className="text-green-700 font-bold">KES {console.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsolesPage;
