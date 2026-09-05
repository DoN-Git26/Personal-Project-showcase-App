import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import AdminPortal from "./pages/AdminPortal";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;