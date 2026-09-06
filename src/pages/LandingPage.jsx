import { useState, useEffect } from "react";

function LandingPage() {
  const [games, setGames] = useState([]);
  const [consoles, setConsoles] = useState([]);
  const [accessories, setAccessories] = useState([]);

  const [showAllGames, setShowAllGames] = useState(false);
  const [showAllConsoles, setShowAllConsoles] = useState(false);
  const [showAllAccessories, setShowAllAccessories] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/games")
      .then((res) => res.json())
      .then((data) => setGames(data));

    fetch("http://localhost:5000/consoles")
      .then((res) => res.json())
      .then((data) => setConsoles(data));

    fetch("http://localhost:5000/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data));
  }, []);

  const renderGrid = (items, showAll, setShowAll) => {
    const visibleItems = showAll ? items : items.slice(0, 7);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md overflow-hidden shadow hover:shadow-md transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
              onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
            />
            <div className="p-2">
              <h3 className="text-sm font-semibold truncate">{item.name}</h3>
              {item.price !== undefined && (
                <p className="text-green-700 font-bold text-sm">
                  {item.price === 0 ? "Free" : `$${item.price}`}
                </p>
              )}
            </div>
          </div>
        ))}

        {!showAll && items.length > 7 && (
          <button
            onClick={() => setShowAll(true)}
            className="bg-sky-600 text-white rounded-md flex items-center justify-center h-40 hover:bg-sky-700 transition-colors"
          >
            See More
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-12 text-center">
      <section>
        <h2 className="text-2xl font-bold mb-4">Games</h2>
        {renderGrid(games, showAllGames, setShowAllGames)}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Hardware & Consoles</h2>
        {renderGrid(consoles, showAllConsoles, setShowAllConsoles)}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Accessories</h2>
        {renderGrid(accessories, showAllAccessories, setShowAllAccessories)}
      </section>
    </div>
  );
}

export default LandingPage;