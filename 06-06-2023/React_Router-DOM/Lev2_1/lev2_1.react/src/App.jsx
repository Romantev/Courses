import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kontakt from "./pages/Kontakt";
import Speisekarte from "./pages/Speisekarte";
import Galerie from "./pages/Galerie";
import Oeffnungszeiten from "./pages/Oeffnungszeiten";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speisekarte" element={<Speisekarte />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/oeffnungszeiten" element={<Oeffnungszeiten />} />
          <Route path="/galerie" element={<Galerie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
