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

  return (
    <div>
      <h2>Receitas</h2>
      <input
        type="text"
        placeholder="Busque a receita!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      {receitas.length === 0 ? (
        <p>Nenhuma receita encontrada digite!</p>
      ) : (
        <ul>
          {receitas.map((item) => (
            <li key={item.idMeal}>
              <h3>{item.strMeal}</h3>
              <p>Categoria: {item.strCategory}</p>
              <img src={item.strMealThumb} alt={item.strMeal} width="200" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Receitas;
