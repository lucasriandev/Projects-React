import { useState, useEffect } from "react";

function Crud() {
  const [trabalho, setTrabalhos] = useState(
    () => JSON.parse(localStorage.getItem("tarefas")) || [],
  );

  const [input, setInput] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(trabalho));
  }, [trabalho]);

  function salvar() {
    if (input === "") return;

    if (id === null) {
      const novaTarefa = {
        id: Date.now(),
        texto: input,
      };

      setTrabalhos([...trabalho, novaTarefa]);
    } else {
      const listaEditada = trabalho.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            texto: input,
          };
        }
        return item;
      });
      setTrabalhos(listaEditada);
      setId(null);
    }
    setInput("");
  }

  function editar(trabalho) {
    setInput(trabalho.texto);
    setId(trabalho.id);
  }

  function remover(indexRemover) {
    const novalista = trabalho.filter((item) => item.id !== indexRemover);
    setTrabalhos(novalista);
    if (novalista.length === 0) {
      localStorage.removeItem("tarefas");
    }
  }

  return (
    <div>
      <h2>Teste</h2>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={salvar}>Salvar</button>

      <ul>
        {trabalho.map((item) => (
          <li key={item.id}>
            {item.texto}
            <button onClick={() => remover(item.id)}>🗑️</button>
            <button onClick={() => editar(item)}>🖊️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
