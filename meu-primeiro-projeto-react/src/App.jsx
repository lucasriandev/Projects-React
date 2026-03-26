import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Api from "./teste";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Início
        </Link>
        <Link to="/sobre" style={{ color: "white" }}>
          Sobre o Projeto
        </Link>
        <Link to="/api"> Buscando api</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
