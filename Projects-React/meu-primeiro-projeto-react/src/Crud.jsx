import { useState } from "react";

function Crud() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  function salvar() {
    if (input === "") return;

    if (editandoId === null) {
      // CREATE
      const novaTarefa = {
        id: Date.now(),
        texto: input,
      };

      setTarefas([...tarefas, novaTarefa]);
    } else {
      // UPDATE
      const atualizadas = tarefas.map((item) =>
        item.id === editandoId ? { ...item, texto: input } : item,
      );

      setTarefas(atualizadas);
      setEditandoId(null);
    }

    setInput("");
  }

  function editar(tarefa) {
    setInput(tarefa.texto);
    setEditandoId(tarefa.id);
  }

  function remover(id) {
    const filtradas = tarefas.filter((item) => item.id !== id);
    setTarefas(filtradas);
  }

  return (
    <div>
      <h1>To Do ID Master</h1>

      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <button onClick={salvar}>{editandoId ? "Atualizar" : "Adicionar"}</button>

      <ul>
        {tarefas.map((item) => (
          <li key={item.id}>
            {item.texto}

            <button onClick={() => editar(item)}>Editar</button>

            <button onClick={() => remover(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
