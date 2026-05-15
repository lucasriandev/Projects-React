import { useState, useEffect } from "react";

function Crud() {
  const [personagens, setPersonagens] = useState(
    () => JSON.parse(localStorage.getItem("Person")) || [],
  );

  const [novoPersonagem, setNovoPersonagem] = useState("");

  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    localStorage.setItem("Person", JSON.stringify(personagens));
  }, [personagens]);

  function salvar() {
    if (novoPersonagem === "") return;
    if (editandoId === null) {
      const personagem = {
        id: Date.now(),
        nome: novoPersonagem,
      };
      setPersonagens([...personagens, personagem]);
      setNovoPersonagem("");
    } else {
      const listaEditada = personagens.map((item) => {
        if (item.id === editandoId) {
          return {
            ...item,
            nome: novoPersonagem,
          };
        }

        return item;
      });

      setPersonagens(listaEditada);
      setEditandoId(null);
    }
    setNovoPersonagem("");
  }

  function editar(personagem) {
    setNovoPersonagem(personagem.nome);
    setEditandoId(personagem.id);
  }

  function remover(indexRemover) {
    const novaLista = personagens.filter((item) => item.id !== indexRemover);
    setPersonagens(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("Person");
    }
  }

  return (
    <div>
      <h2>Crud</h2>
      <input
        type="text"
        placeholder="Digite"
        value={novoPersonagem}
        onChange={(e) => setNovoPersonagem(e.target.value)}
      />
      <button onClick={salvar}>Salvar</button>
      <ul>
        {personagens.map((item) => (
          <li key={item.id}>
            {item.nome}
            <button onClick={() => editar(item)}>✏️</button>
            <button onClick={() => remover(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
