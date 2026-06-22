import { useState, useEffect } from "react";
//fetch(`https://jsonplaceholder.typicode.com/users`)

function ApiNome() {
  const [pokemons, setPokemons] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setPokemons(dados.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filtros =
    input === ""
      ? pokemons
      : pokemons.filter((item) =>
          item.name.toLowerCase().includes(input.toLocaleLowerCase()),
        );

  return (
    <div>
      <h1>Pokemons</h1>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {filtros.length === 0 ? (
        <h2>Nenhum pokemon!</h2>
      ) : (
        <ul>
          {filtros.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiNome;
