import { useState, useEffect } from "react";
//    fetch(`https://restcountries.com/v3.1/name/${busca}`)

function FILMES2() {
  const [filmes, setFilmes] = useState([]);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://restcountries.com/v3.1/name/${busca}`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setFilmes(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [busca]);

  return (
    <div>
      <h1>Filmes</h1>
      <input
        type="text"
        placeholder="Digite um filme!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      <ul>
        {filmes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FILMES2;
