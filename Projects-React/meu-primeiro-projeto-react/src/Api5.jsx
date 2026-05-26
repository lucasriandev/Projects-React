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
      <h1>Receitas!</h1>
      <p>Busque sua receita!</p>
      <input
        type="text"
        placeholder="Digite!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>
      <ul>
        {receitas.map((item, index) => (
          <li key={index}>
            {" "}
            {item.strMeal} - {item.strCategory}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Receitas;
