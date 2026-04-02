import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"; // Não esqueça de importar os Hooks!

function Detalhes() {
  // 1. Pegamos o ID que está na URL
  const { id } = useParams();

  // 2. Preparamos a memória para guardar os dados da série e o "carregando"
  const [serie, setSerie] = useState(null);
  const [carregando, setCarregando] = useState(true);

  // 3. O nosso "Vigia" que vai na internet buscar os dados
  useEffect(() => {
    // Veja que legal: nós colamos o {id} da URL no final do endereço da API!
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setSerie(dados); // Guarda a série na memória
        setCarregando(false); // Avisa que terminou de carregar
      })
      .catch((erro) => console.error("Erro ao buscar:", erro));
  }, [id]); // <-- Colocamos o id aqui para o React buscar de novo se a URL mudar

  // 4. A TELA

  // Se ainda estiver buscando na internet, mostra isso:
  if (carregando) {
    return <h2>Buscando a fita na locadora... ⏳</h2>;
  }

  // Se já carregou, o React desenha a página com as informações reais!
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🍿 Detalhes da Série</h2>
      <hr />

      {/* Aqui usamos os dados que vieram do servidor (serie.name, serie.image.medium, etc) */}
      <h3>{serie.name}</h3>

      {/* O TVMaze manda a foto dentro de image.medium */}
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
