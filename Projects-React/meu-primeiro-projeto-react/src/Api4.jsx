import { useState, useEffect } from "react";

function Paises() {
  const [paises, setPaises] = useState([]);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://restcountries.com/v3.1/name/${busca}`)
      .then((resp) => resp.json())
      .then((dados) => {
        console.log(dados);
        setPaises(dados);
      })
      .catch((error) => console.log(error));
  }, [busca]);

  return (
    <div>
      <h1>Paises!</h1>
      <input
        type="text"
        placeholder="Digite um pais"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Salvar</button>
      <ul>
        {paises.map((item) => (
          <li>
            {item.name.common}
            <br></br>
            <img src={item.flags.png} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Paises;
