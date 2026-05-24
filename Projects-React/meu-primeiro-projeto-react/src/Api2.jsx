import { useState, useEffect } from "react";

function LojaOnline() {
  const [loja, setLoja] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setLoja(dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);
}

export default LojaOnline;
