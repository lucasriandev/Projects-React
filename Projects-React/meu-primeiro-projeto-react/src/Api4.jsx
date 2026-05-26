import { useState, useEffect } from "react";

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
        console.log(error);
      });
  }, [busca]);

  return (
    <div>
      <h1>Paises</h1>
      <p>Busque o seu!</p>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      <ul>
        {paises.map((item) => (
          <li>
            {item.name.common}
            <br></br>
            <img src={item.flags.png} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Paises;
