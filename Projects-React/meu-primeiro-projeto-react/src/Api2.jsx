import { useState, useEffect } from "react";

function ApiPokemon() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setUsuarios(dados);
        setCarregando(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (carregando === false) {
    return <h2>Buscando...</h2>;
  }

  return (
    <div>
      <h1>Usuarios!</h1>
      <ul>
        {usuarios.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default ApiPokemon;
