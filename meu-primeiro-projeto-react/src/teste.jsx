import { useState, useEffect } from "react";

function Api() {
  const [user, setUser] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setUser(dados);
        setCarregando(false);
      })
      .catch((error) => {
        console.log(error);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <h2>Buscando dados</h2>;
  }

  if (!user) {
    return <h2>Não encontrado!</h2>;
  }

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {user.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Api;
