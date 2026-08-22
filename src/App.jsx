import Home from "./components/Pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/Pages/AboutUs.jsx";
import Menu from "./components/Pages/Menu.jsx";
import Bookings from "./components/Bookings.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/book-a-table" element={<Bookings />} />
      </Routes>
    </div>
  );
}

export default App;
