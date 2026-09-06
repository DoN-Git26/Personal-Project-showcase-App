import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import AdminPortal from "./pages/AdminPortal";
import ConsolesPage from "./pages/ConsolesPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import PlaystationPage from "./pages/PlaystationPage";
import GamesPage from "./pages/GamesPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/consoles" element={<ConsolesPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/playstation" element={<PlaystationPage />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
