import { useState, useEffect } from "react";

function Receitas() {
  const [receitas, setReceitas] = useState([]);
  const [busca, setBusca] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`)
      .then((resp) => resp.json())
      .then((dados) => {
        console.log(dados);
        setReceitas(dados.meals || []);
        setInput("");
      })
      .catch((erro) => {
        console.log(erro, "404");
      });
  }, [busca]);

  return (
    <div>
      <h2>Receitas</h2>
      <input
        type="text"
        placeholder="Digite!"
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
