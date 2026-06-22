import { useState, useEffect } from "react";
//  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`);

function Receitas() {
  const [receitas, setReceitas] = useState([]);
  const [busca, setBusca] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setReceitas(dados.meals);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [busca]);

  return (
    <div>
      <h1>Receitas</h1>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      {receitas.map((item, index) => {
        return <li key={index}>{item.strMeal}</li>;
      })}
    </div>
  );
}

export default Receitas;
