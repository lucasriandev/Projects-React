import { useState, useEffect } from "react";

function Afazeres() {
  const [atividade, setAtividade] = useState([]);
  const [novaAtividade, setNovaAtividade] = useState("");
  //atividade → lista de tarefas
  //setAtividade → atualiza a lista
  //novaAtividade → o que está sendo digitado
  //setNovaAtividade → atualiza o input

  useEffect(() => {
    const chave = JSON.parse(localStorage.getItem("Att")) || [];
    setAtividade[chave];
  }, []);

  useEffect(() => {
    localStorage.setItem("Att", JSON.stringify(atividade));
  }, [atividade]);

  function input(event) {
    setNovaAtividade(event.target.value);
  }

  function adicionar() {
    if (novaAtividade !== "") {
      setAtividade([...atividade, novaAtividade]); //pega lista antiga e adiciona o novo item
      setNovaAtividade("");
    }
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <input
        type="text"
        value={novaAtividade}
        onChange={input}
        placeholder="Digite sua tarefa"
      />
      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {atividade.map((tarefa, index) => (
          <li key={index}>{atividade}</li>
        ))}
      </ul>
    </div>
  );
}

export default Afazeres;
