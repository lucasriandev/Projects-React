import { useState, useEffect } from "react";
//fetch(`https://jsonplaceholder.typicode.com/users`)

function ApiNome() {
  const [pokemon, setPokemon] = useState(null);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
      .then((resp) => resp.json())
      .then((dados) => {
        console.log(dados);
        setPokemon(dados);
        setInput("");
      })
      .catch((erro) => {
        console.log(erro, "Errooo");
      });
  }, [busca]);

  return (
    <div>
      <h1>Pokemon</h1>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      <ul>{pokemon && <li>{pokemon.name}</li>}</ul>
    </div>
  );
}

export default ApiNome;
