import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Api from "./Api";
import Rota from "./Rota";
import Crud from "./Crud";
import Dinamica from "./RotaDinamica";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/Api"> Api</Link>
        <Link to="/Crud"> Crud</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Rota />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/Crud" element={<Crud />} />
        <Route path="/dinamica/:id" element={<Dinamica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
