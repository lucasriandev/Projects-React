import { useState, useEffect } from "react";

function Api() {
  const [user, setUser] = useState(null);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://api.tvmaze.com/shows/${busca}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setUser(dados);
        setInput("");
      })
      .catch((erro) => {
        console.log("Algo está errado", erro);
      });
  }, [busca]);

  return (
    <div>
      <h1>Buscar api</h1>
      <input
        type="text"
        placeholder="Digite o filme"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      <ul>{user && <h3>{user.name}</h3>}</ul>
    </div>
  );
}

export default Api;
