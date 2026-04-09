import { useState, useEffect } from "react";
import CardSerie from "./CardSerie";

function Api() {
  const [listaSeries, setListaSeries] = useState([]);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://api.tvmaze.com/search/shows?q=${busca}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setListaSeries(dados);
        setInput("");
      })
      .catch((erro) => {
        console.log(erro, "erroooo");
      });
  }, [busca]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Buscador Cinematch</h1>
      <input
        type="text"
        value={input}
        placeholder="Digite"
        style={{ padding: "8px" }}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => setBusca(input)}
        style={{ padding: "8px", marginLeft: "5px" }}
      >
        Buscar
      </button>

      <br />
      <ul style={{ padding: 0 }}>
        {listaSeries.map((item, index) => (
          <CardSerie
            key={index}
            idDaSerie={item.show.id}
            nomeDaSerie={item.show.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default Api;
