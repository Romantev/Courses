import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Details from "./pages/Details";

function App() {
  return (
    <div className="super-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/details/:pizza" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
