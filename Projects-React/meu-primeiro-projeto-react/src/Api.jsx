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
        console.log(dados);
        setListaSeries(dados);
        setInput("");
      })
      .catch((erro) => {
        console.log(erro, "errooooo");
      });
  }, [busca]);

  return (
    <div>
      <h1>Buscar filme!</h1>
      <input
        type="text"
        placeholder="Digite seu filme"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      <ul>
        {listaSeries.map((item, index) => (
          <CardSerie
            key={index}
            idDaSerie={item.show.id}
            nomeDaSerie={item.show.name}
            nota={item.show.rating.average}
          ></CardSerie>
        ))}
      </ul>
    </div>
  );
}

export default Api;
