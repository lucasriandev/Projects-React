import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Api from "./Api";
import Rota from "./Rota";
import Crud from "./Crud";
import Dinamica from "./RotaDinamica";
import ApiNome from "./Api3";
import LojaOnline from "./Api2";
import Paises from "./Api4";

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
        <Link
          to="/Api2"
          style={{
            background: "blue",
            color: "white",
            padding: "10px",
            marginLeft: "5px",
            borderRadius: "10px",
          }}
        >
          Loja Online
        </Link>
        <Link
          to="/Api3"
          style={{
            background: "pink",
            color: "black",
            padding: "10px",
            marginLeft: "5px",
            borderRadius: "10px",
          }}
        >
          ApiNome
        </Link>
        <Link
          to="/Api4"
          style={{
            background: "purple",
            color: "white",
            padding: "10px",
            marginLeft: "5px",
            borderRadius: "10px",
          }}
        >
          Paises
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Rota />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/Crud" element={<Crud />} />
        <Route path="/Api2" element={<LojaOnline />} />
        <Route path="/Api3" element={<ApiNome />} />
        <Route path="/Api4" element={<Paises />} />
        <Route path="/filme/:id" element={<Dinamica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
