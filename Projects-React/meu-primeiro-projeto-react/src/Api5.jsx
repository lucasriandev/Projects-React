import { useState, useEffect } from "react";
//fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`);

function Receitas() {
  const [busca, setBusca] = useState("");
  const [input, setInput] = useState("");
  const [receita, setReceitas] = useState([]);

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setReceitas(dados.meals || []);
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [busca]);

  return (
    <div>
      <h1>Receitas</h1>
      <input
        type="text"
        value={input}
        placeholder="Digite a receita que deseja!"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>BUSCAR</button>
      <ul>
        {receita.map((item, index) => (
          <li key={index}>{item.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Receitas;
