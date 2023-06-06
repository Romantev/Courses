import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Home";
import Kontakt from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home elm="Guten Tag" />} />
          <Route path="/about" element={<About elm="Guten Abend" />} />
          <Route path="/contact" element={<Kontakt elm="Guten Morgen" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
