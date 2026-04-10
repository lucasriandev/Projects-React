import { Link } from "react-router-dom";

function CardSerie({ idDaSerie, nomeDaSerie, nota }) {
  return (
    <li
      style={{
        marginBottom: "15px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        listStyle: "none",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Link
        to={`/filme/${idDaSerie}`}
        style={{
          textDecoration: "none",
          color: "darkblue",
          fontWeight: "bold",
        }}
      >
        🎬{nomeDaSerie}
        <br></br>⭐{nota}
      </Link>
    </li>
  );
}

export default CardSerie;
