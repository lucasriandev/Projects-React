import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Detalhes() {
  const { id } = useParams();

  const [serie, setSerie] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setSerie(dados);
        setCarregando(false);
      })
      .catch((erro) => console.error("Erro ao buscar:", erro));
  }, [id]);

  if (carregando) {
    return <h2>Buscando a fita na locadora... ⏳</h2>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🍿 Detalhes da Série</h2>
      <hr />

      <h3>{serie.name}</h3>

      {serie.image && (
        <img
          src={serie.image.medium}
          alt={`Pôster de ${serie.name}`}
          style={{
            borderRadius: "8px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.5)",
          }}
        />
      )}

      <p>
        <strong>Nota:</strong> ⭐️ {serie.rating.average}
      </p>
      <p>
        <strong>Idioma:</strong> {serie.language}
      </p>

      <br />
      <Link
        to="/"
        style={{
          padding: "10px",
          backgroundColor: "#333",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        ⬅ Voltar para o Catálogo
      </Link>
    </div>
  );
}

export default Detalhes;
