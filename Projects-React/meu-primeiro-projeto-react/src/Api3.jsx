import { useState, useEffect } from "react";

function ApiNome() {
  const [nomes, setNomes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setNomes(dados);
        setInput("");
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  const nomesFiltrados =
    input === ""
      ? nomes
      : nomes.filter((item) => {
          return item.name.toLowerCase().includes(input.toLocaleLowerCase());
        });

  return (
    <div>
      <h2>Nomes Aleatorios</h2>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {nomesFiltrados.length === 0 ? (
        <p>Nenhum encontrado!</p>
      ) : (
        <ul>
          {nomesFiltrados.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiNome;
