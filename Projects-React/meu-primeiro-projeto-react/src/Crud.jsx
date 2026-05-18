import { useState, useEffect } from "react";

function Crud() {
  const [dicas, setDicas] = useState(() => {
    return JSON.parse(localStorage.getItem("dicas")) || [];
  });

  const [input, setInput] = useState("");
  const [id, setId] = useState(null);

  function salvar() {
    if (input === "") return;
    if (id === null) {
      const novaDica = {
        id: Date.now(),
        texto: input,
      };
      setDicas([...dicas, novaDica]);
    } else {
      const dicaNova = dicas.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            texto: input,
          };
        }
        return item;
      });
      setDicas(dicaNova);
      setId(null);
    }
    setInput("");
  }

  function editar(dica) {
    setId(dica.id);
    setInput(dica.texto);
  }

  function remover(indexRemover) {
    const listaNova = dicas.filter((item) => item.id !== indexRemover);
    setDicas(listaNova);
    if (listaNova.length === 0) {
      localStorage.removeItem("dicas");
    }
  }

  return (
    <div>
      <h1>Crud</h1>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={salvar}>Salvar</button>
      <ul>
        {dicas.map((item) => (
          <li key={item.id}>
            {item.texto}
            <button onClick={() => editar(item)}>🖊️</button>
            <button onClick={() => remover(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
