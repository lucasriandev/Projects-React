import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>🏠 Catálogo Cinematch</h2>
      <p>Escolha uma série para ver os detalhes:</p>

      <ul>
        <li>
          {/* 169 é o ID real de Breaking Bad na API */}
          <Link to="/filme/169">Ver Detalhes de Breaking Bad</Link>
        </li>
        <li>
          {/* 82 é o ID real de Game of Thrones */}
          <Link to="/filme/82">Ver Detalhes de Game of Thrones</Link>
        </li>
        <li>
          {/* 431 é o ID real de Black Mirror */}
          <Link to="/filme/431">Ver Detalhes de Black Mirror</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
