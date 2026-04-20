import { useState, useEffect } from "react";

function ApiPokemon() {
  const [busca, setBusca] = useState("");
  const [input, setInput] = useState("");
  const [ceps, setCeps] = useState("");

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://viacep.com.br/ws/${busca}/json/`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setCeps(dados);
        setInput("");
      })
      .catch((erro) => {
        console.log(erro, "errooooo");
      });
  }, [busca]);

  return (
    <div>
      <h1>Pegando cep!</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite seu cep"
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      <ul>{ceps && <li>{ceps.bairro}</li>}</ul>
    </div>
  );
}

export default ApiPokemon;
