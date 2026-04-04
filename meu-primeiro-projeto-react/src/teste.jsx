//https://jsonplaceholder.typicode.com/users (retorna uma lista de 10 usuários falsos)
//https://api.adviceslip.com/advice (retorna um conselho aleatório em inglês).
//https://viacep.com.br/ws/01001000/json/ (substitua os números pelo CEP desejado).
//https://pokeapi.co/api/v2/pokemon/pikachu (você pode trocar "pikachu" por "ditto", "charizard", etc.)

import { useState, useEffect } from "react";

function Api() {
  const [cep, setCep] = useState(null);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://viacep.com.br/ws/${busca}/json/`)
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setCep(d);
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [busca]);

  return (
    <div>
      <h1>Cep</h1>
      <input
        type="text"
        value={input}
        placeholder="Digite"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>

      <ul>{cep && <h1>Bairro: {cep.bairro}</h1>}</ul>
    </div>
  );
}
export default Api;
