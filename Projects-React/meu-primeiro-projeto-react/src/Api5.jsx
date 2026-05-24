import { useState, useEffect } from "react";

function Receitas() {
  const [receitas, setReceitas] = useState([]);
  const [busca, setBusca] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`)
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setReceitas(d.meals || []);
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [busca]);
}

export default Receitas;
