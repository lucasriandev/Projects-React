import { useState, useEffect } from "react";
//fetch(`https://jsonplaceholder.typicode.com/users`)

function ApiNome() {
  const [input, setInput] = useState("");
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((resp) => resp.json())
      .then((dados) => {
        console.log(dados);
        setNomes(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filtros =
    input == ""
      ? nomes
      : nomes.filter((item) => {
          return item.title.toLowerCase().includes(input.toLocaleLowerCase());
        });

  return (
    <div>
      <h1>Nomes da api</h1>
      <input
        type="text"
        placeholder="Filtre um nome!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {filtros.length === 0 ? (
        <h1>Nada encontrado!</h1>
      ) : (
        <ul>
          {filtros.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiNome;
