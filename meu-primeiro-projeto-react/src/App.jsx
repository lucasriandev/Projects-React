import { useState } from "react";

function App() {
  // 1. O Estado (A Memória)
  // LISTA PRINCIPAL (Plural)
  const [tarefas, setTarefas] = useState([]);
  // ITEM ÚNICO QUE ESTÁ SENDO DIGITADO (Singular)
  const [novaTarefa, setNovaTarefa] = useState("");

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

/*// (MAP) Temos uma lista crua no JavaScript:

const tarefas = ["Estudar", "Comprar pão"];

// O React não sabe imprimir texto solto, ele precisa de HTML.
// O map vai pegar cada palavra e "embrulhar" na tag <li>
tarefas.map((tarefa) => {
   return <li>{tarefa}</li> 
})

// O resultado invisível que o map gera e entrega pro React é:
// [ <li>Estudar</li>, <li>Comprar pão</li> ]
//Resumo do map: "Pegue essa lista de textos, transforme cada um em um 
pedaço de HTML e me devolva a lista nova pronta para a tela." 
*/
/*(filter)
// A lista tem 3 tarefas (posições 0, 1 e 2)
const tarefas = ["Estudar", "Limpar casa", "Dormir"];

// O usuário clicou no botão excluir do "Limpar casa" (que é o index 1).
// O filter vai varrer a lista e perguntar: "Seu index é DIFERENTE de 1?"

const listaNova = tarefas.filter((tarefa, indexAtual) => {
   return indexAtual !== 1; // Só retorna TRUE se for diferente de 1
});

// Posição 0 ("Estudar"): 0 é diferente de 1? SIM. (Passa!)
// Posição 1 ("Limpar casa"): 1 é diferente de 1? NÃO. (Barrado!)
// Posição 2 ("Dormir"): 2 é diferente de 1? SIM. (Passa!)

// O resultado final é uma lista nova sem o item 1:
// ["Estudar", "Dormir"]
Resumo do filter: "Varre essa lista e crie uma lista nova apenas com os itens que passarem no meu teste."
*/
