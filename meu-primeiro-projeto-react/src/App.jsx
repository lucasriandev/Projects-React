import { useState, useEffect } from "react";

function App() {
  // 1. O Estado (A Memória)
  // LISTA PRINCIPAL (Plural)
  const [tarefas, setTarefas] = useState([]);
  // ITEM ÚNICO QUE ESTÁ SENDO DIGITADO (Singular)
  const [novaTarefa, setNovaTarefa] = useState("");

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("MinhasTarefas");

    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    if (tarefas.length > 0) {
      localStorage.setItem("MinhasTarefas", JSON.stringify(tarefas));
    }
  }, [tarefas]);

  // 2. O Catcher (Captura o que é digitado)
  function lidarComMudanca(evento) {
    setNovaTarefa(evento.target.value);
  }

  // 3. CREATE (O "C" do CRUD)
  function adicionarTarefa() {
    if (novaTarefa !== "") {
      // Pega a lista antiga (...tarefas), adiciona a novaTarefa no final
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa(""); // Limpa o campo
    }
  }

  // 4. DELETE (O "D" do CRUD)
  function removerTarefa(indexRemover) {
    // O filter varre a lista. Chamamos o item individual de 'tarefa' (singular)
    const listaAtualizada = tarefas.filter(
      (tarefa, indexAtual) => indexAtual !== indexRemover,
    );
    setTarefas(listaAtualizada);

    if (listaAtualizada.length === 0) {
      localStorage.removeItem("MinhasTarefas");
    }
  }

  // 5. READ (O "R" do CRUD) - Renderizando na tela
  return (
    <div>
      <h1>Minhas Tarefas do Dia</h1>
      <hr />

      <input
        type="text"
        placeholder="O que precisa ser feito?"
        value={novaTarefa}
        onChange={lidarComMudanca}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {/* Usamos o map na lista (plural) e chamamos cada item de 'tarefa' (singular) */}
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button
              onClick={() => removerTarefa(index)}
              style={{ marginLeft: "10px" }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
