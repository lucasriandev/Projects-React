import { useState, useEffect } from "react";
//fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`);

function Receitas() {
  const [receitas, setReceitas] = useState([]);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setReceitas(dados.meals || []);
      });
  }, [busca]);

  return (
    <div>
      <h1>Receitas</h1>
      <input
        type="text"
        placeholder="Busque!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      <ul>
        {receitas.map((item) => (
          <li>{item.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Receitas;
