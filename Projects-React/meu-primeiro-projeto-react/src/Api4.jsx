import { useState, useEffect } from "react";

function Paises() {
  const [paises, setPaises] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population")
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setPaises(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
}

export default Paises;
