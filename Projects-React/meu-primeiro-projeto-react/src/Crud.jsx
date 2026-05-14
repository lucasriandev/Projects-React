import { useState } from "react";

function Crud() {
  const [personagens, setPersonagens] = useState([]);
  const [input, setInput] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  function salvar() {
    if (input === "") return;

    // CRIAR
    if (editandoId === null) {
      const novoPersonagem = {
        id: Date.now(),
        texto: input,
      };

      setPersonagens([...personagens, novoPersonagem]);
    }

    // EDITAR
    else {
      const personagemAtualizado = personagens.map((item) => {
        if (item.id === editandoId) {
          return {
            ...item,
            texto: input,
          };
        }

        return item;
      });

      setPersonagens(personagemAtualizado);
      setEditandoId(null);
    }

    setInput("");
  }

  function editar(personagem) {
    setInput(personagem.texto);
    setEditandoId(personagem.id);
  }

  function remover(idRemover) {
    const listaAtualizada = personagens.filter((item) => item.id !== idRemover);

    setPersonagens(listaAtualizada);
  }

  return (
    <div>
      <h2>Id</h2>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={salvar}>{editandoId ? "Atualizar" : "Adicionar"}</button>
      <ul>
        {personagens.map((item) => {
          <li key={item.id}>
            <button onClick={() => editar(item)}>Editar</button>

            {/* Passamos APENAS O ID para a função remover, pois é só disso que ela precisa */}
            <button onClick={() => remover(item.id)}>Remover</button>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Crud;
