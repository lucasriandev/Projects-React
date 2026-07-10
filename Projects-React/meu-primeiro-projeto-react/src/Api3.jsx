import { useState, useEffect } from "react";
//fetch(`https://jsonplaceholder.typicode.com/users`)

function ApiNome() {
  const [usuarios, setUsuarios] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setUsuarios(dados);
      });
  }, []);

  const filtros =
    input === ""
      ? usuarios
      : usuarios.filter((item) => {
          return item.name.toLowerCase().includes(input.toLocaleLowerCase());
        });

  return (
    <div>
      <h1>Nomes aleatorios!</h1>
      <input
        type="text"
        value={input}
        placeholder="Digite e encontre!"
        onChange={(e) => setInput(e.target.value)}
      />
      {filtros.length === 0 ? (
        <h1>Nenhum resultado encontrado!</h1>
      ) : (
        <ul>
          {filtros.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiNome;
