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
}

export default ApiNome;
