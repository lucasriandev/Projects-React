import { useState, useEffect } from "react";
//    fetch(`https://restcountries.com/v3.1/name/${busca}`)

function Paises() {
  const [busca, setBusca] = useState("");
  const [input, setInput] = useState("");
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://api.tvmaze.com/search/shows?q=${busca}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setPaises(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [busca]);

  return (
    <div>
      <h1>Paises</h1>
      <input
        type="text"
        value={input}
        placeholder="Digite seu pais"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setBusca(input)}>Buscar</button>
    </div>
  );
}
export default Paises;
