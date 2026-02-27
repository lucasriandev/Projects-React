import { useState } from "react";

function App() {
  //memoria da lista começa como vazio
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefas] = useState("");

  function lidarComMundanca(evento) {
    setNovaTarefas(evento.target.value);
  }

  function adicionarTarefa() {
    if (novaTarefa !== "") {
      //pega toda lista antiga e cria uma nova com o novo item
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefas("");
    }
  }

  function removerTarefa(indexRemover) {
    // O filter varre a lista e só guarda quem for diferente do index que queremos apagar
    const listaAtualizada = tarefas.filter(
      (tarefas, indexAtual) => indexAtual !== indexRemover,
    );

    setTarefas(listaAtualizada);
  }

  return (
    <div>
      <h1>Minhas Tarefas do Dia</h1>
      <hr />

      <input
        type="text"
        placeholder="O que precisa ser feito?"
        value={novaTarefa} //Conecta o input ao estado para podermos limpá-lo depois
        onChange={lidarComMundanca}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefas, index) => (
          <li key={index}>
            {tarefas}
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
