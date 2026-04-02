//https://jsonplaceholder.typicode.com/users (retorna uma lista de 10 usuários falsos)
//https://api.adviceslip.com/advice (retorna um conselho aleatório em inglês).
//https://viacep.com.br/ws/01001000/json/ (substitua os números pelo CEP desejado).
//https://pokeapi.co/api/v2/pokemon/pikachu (você pode trocar "pikachu" por "ditto", "charizard", etc.)

import { useState, useEffect } from "react";

function Api() {
  const [busca, setBusca] = useState("");
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setUser(dados);
        setInput("");
      })
      .catch((error) => {
        console.log("Deu erro", error);
      });
  }, [busca]);

  return (
    <div>
      <h1>Api</h1>
      <input
        type="text"
        placeholder="Digite seu pokemon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>

      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Altura: {user.height}</p>
          <p>Peso: {user.weight}</p>
          <img src={user.sprites.front_default} />
        </div>
      )}
    </div>
  );
}
export default Api;
