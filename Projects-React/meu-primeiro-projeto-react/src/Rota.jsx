import { Link } from "react-router-dom";

function Rota() {
  return (
    <div>
      <h1>Filmes e Series!</h1>
      <Link to="/filme/169">Breaking Bad</Link>
      <br></br>
      <Link to="/filme/82">Game Of Thrones</Link>
    </div>
  );
}

export default Rota;
