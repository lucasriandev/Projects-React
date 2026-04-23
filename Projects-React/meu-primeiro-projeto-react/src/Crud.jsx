import { useState, useEffect } from "react";

function Crud() {
  const [dieta, setDieta] = useState(() => {
    return JSON.parse(localStorage.getItem("comida")) || [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("comida", JSON.stringify(dieta));
  }, [dieta]);

  function add() {
    if (input !== "") {
      setDieta([...dieta, input]);
      setInput("");
    }
  }

  function remover(indexRemover) {
    const novaLista = dieta.filter((t, index) => index !== indexRemover);
    setDieta(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("comida");
    }
  }

  return (
    <div>
      <h1>Oq você está comendo!</h1>
      <input
        type="text"
        placeholder="Digite!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>✅</button>
      <ul>
        {dieta.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remover(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Crud;
