import { useState, useEffect } from "react";

function ApiPokemon() {
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");
  const [desenho, setDesenho] = useState(null);

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://rickandmortyapi.com/api/character/?name=${busca}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setDesenho(dados);
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [busca]);

  return (
    <div>
      <h1>Rick e Morty</h1>
      <input
        type="text"
        value={input}
        placeholder="Digite"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setBusca(input)}>Buscar</button>
      {desenho &&
        desenho.results.map((item, index) => <li key={index}>{item.name}</li>)}
    </div>
  );
}

export default ApiPokemon;
