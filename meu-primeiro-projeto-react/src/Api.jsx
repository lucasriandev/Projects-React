import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Api() {
  const [listaSeries, setSeries] = useState([]);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://api.tvmaze.com/search/shows?q=${busca}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setSeries(dados);
        setInput("");
      })
      .catch((error) => {
        console.log("erroooo", error);
      });
  }, [busca]);

  return (
    <div>
      <h1>Buscador de Cinematch</h1>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      <br />
      <br />

      <ul>
        {listaSeries.map((item, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <Link to={`/filme/${item.show.id}`}>{item.show.name}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Api;
