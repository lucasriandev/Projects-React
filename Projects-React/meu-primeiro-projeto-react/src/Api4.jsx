import { useState, useEffect } from "react";
//    fetch(`https://restcountries.com/v3.1/name/${busca}`)

function Paises() {
  const [nomes, setNomes] = useState([]);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${busca}`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setNomes(dados);
      });
  }, [busca]);
}

export default Paises;
