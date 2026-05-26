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

  const filtrados =
    input === ""
      ? nomes
      : nomes.filter((item) => {
          return item.name.toLowerCase().includes(input.toLowerCase());
        });

  return (
    <div>
      <h2>Nomes Gerados por api!</h2>
      <p>Filtre o nome!</p>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {filtrados.length === 0 ? (
        <p>Nenhum resultado encontrado!</p>
      ) : (
        <ul>
          {filtrados.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiNome;
