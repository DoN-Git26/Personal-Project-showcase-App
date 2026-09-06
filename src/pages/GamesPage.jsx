import { useEffect, useState } from "react";

function GamesPage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/games")
      .then(res => res.json())
      .then(setGames);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map(game => (
          <div key={game.id} className="bg-white shadow rounded p-4">
            <img src={game.image} alt={game.name} className="w-full h-32 object-cover" />
            <h3 className="font-semibold">{game.name}</h3>
            <p className="text-green-700 font-bold">KES {game.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesPage;
