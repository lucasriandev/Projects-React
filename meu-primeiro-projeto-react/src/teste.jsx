import { useState, useEffect } from "react";

function Api() {
  const [usuario, setUsuario] = useState([]);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://api.tvmaze.com/search/shows?q=${busca}`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setUsuario(dados);
      })
      .catch((Error) => {
        console.log(Error, "errooooo");
      });
  }, [busca]);

  return (
    <div>
      <h1>Heroi</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite"
      />

      <button onClick={() => setBusca(input)}>Buscar</button>
      <ul>
        {usuario.map((item, index) => (
          <li key={index}>{item.show.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Api;
