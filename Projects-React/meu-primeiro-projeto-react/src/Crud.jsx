import { useState, useEffect } from "react";

function Crud() {
  const [metas, setMetas] = useState(() => {
    return JSON.parse(localStorage.getItem("metas")) || [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("metas", JSON.stringify(metas));
  }, [metas]);

  function add() {
    if (input !== "") {
      setMetas([...metas, input]);
      setInput("");
    }
  }

  function remove(indexRemover) {
    const novaLista = metas.filter((t, index) => index !== indexRemover);
    setMetas(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("metas");
    }
  }

  return (
    <div>
      <h1>Metas</h1>
      <input
        type="text"
        value={input}
        placeholder="Digite a meta!"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>Cadastrar</button>
      <ul>
        {metas.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remove(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
