import { useState, useEffect } from "react";
//    fetch(`https://restcountries.com/v3.1/name/${busca}`)

function Paises() {
  const [paises, setPaises] = useState([]);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://restcountries.com/v3.1/name/${busca}`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setPaises(dados);
      })
      .catch((error) => {
        console.error("erroooo");
      });
  }, [busca]);

  return (
    <div>
      <h1>Paises</h1>
      <input
        type="text"
        placeholder="Digite!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
    </div>
  );
}

export default Paises;
