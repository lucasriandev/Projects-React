import { useState, useEffect } from "react";
//fetch(`https://jsonplaceholder.typicode.com/users`)

function ApiNome() {
  const [personagem, setPersonagem] = useState([]);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
      .then((resp) => resp.json())
      .then((dados) => {
        console.log(dados);
        setCarregando(false);
        setPersonagem(dados);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [busca]);

  if (carregando === false) {
    <h2>Carregando....</h2>;
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <input
        type="text"
        value={input}
        placeholder="Digite!"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default ApiNome;
