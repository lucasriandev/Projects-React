import { useState, useEffect } from "react";

function ApiPokemon() {
  const [busca, setBusca] = useState("");
  const [pokemons, setPokemons] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setPokemons(dados);
        setInput("");
      })
      .catch((error) => {
        console.log(error, "errooooo");
      });
  }, [busca]);

  return (
    <div>
      <h1>Ache seu pokemon!</h1>
      <input
        type="text"
        placeholder="Digite seu pokemon!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      {pokemons && (
        <div>
          <h2>{pokemons.name}</h2>
          <img src={pokemons.sprites.front_default} />
        </div>
      )}
    </div>
  );
}

export default ApiPokemon;
