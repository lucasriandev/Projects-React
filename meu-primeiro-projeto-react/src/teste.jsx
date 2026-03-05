import { useState } from "react";

function teste() {
  const [devedor, setDevedor] = useState([]); //arrau inicial
  const [contaNova, setContaNova] = useState(""); //value do input

  function receberInput(event) {
    setContaNova(event.target.value);
  }

  function adicionarNovaConta() {
    //"Só adiciona se o usuário tiver digitado alguma coisa."
    if (contaNova !== "") {
      setDevedor([...devedor, contaNova]); //Cria um novo array com os valores antigos + a nova conta
      setContaNova("");
    }
  }

  function remover(indexRemove) {
    const listaDevedoraAtualizada = devedor.filter(
      (devendo, indexAtual) => indexAtual !== indexRemove,
    );
    setDevedor(listaDevedoraAtualizada);
  }

  return (
    <div>
      <h1>O que falta pagar!</h1>

      <input
        type="text"
        placeholder="Nova conta?"
        value={contaNova}
        onChange={receberInput}
      />

      <button onClick={adicionarNovaConta}>Adicionar</button>

      <ul>
        {devedor.map((devedor, index) => (
          <li key={index}>
            {devedor}
            <button
              onClick={() => remover(index)}
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

export default teste;

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
