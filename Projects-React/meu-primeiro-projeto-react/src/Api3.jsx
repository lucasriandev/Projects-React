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
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const nomesFiltrados =
    input === ""
      ? nomes
      : nomes.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase()),
        );

  //input vazio → usa todos (nomes)
  //input com valor → cria nova lista filtrada
  //"o título do item contém o texto digitado?"

  return (
    <div>
      <h1>Nomes!</h1>
      <input
        type="text"
        value={input}
        placeholder="Digite"
        onChange={(e) => setInput(e.target.value)}
      />
      {nomesFiltrados.length === 0 ? (
        <p>Nenhum encontrado</p>
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
