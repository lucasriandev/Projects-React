import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Api from "./Api";
import Rota from "./Rota";
import Crud from "./Crud";
import Dinamica from "./RotaDinamica";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link
          to="/"
          style={{
            background: "red",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          Inicio
        </Link>
        <Link
          to="/Api"
          style={{
            background: "green",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            margin: "5px",
          }}
        >
          {" "}
          Api
        </Link>
        <Link
          to="/Crud"
          style={{
            background: "yellow",
            color: "black",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {" "}
          Crud
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Rota />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/Crud" element={<Crud />} />
        <Route path="/filme/:id" element={<Dinamica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
