import Home from "./components/Pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/Pages/AboutUs.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
