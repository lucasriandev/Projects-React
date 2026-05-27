import { useState, useEffect } from "react";

function Crud() {
  const [personagem, setPersonagem] = useState(() => {
    return JSON.parse(localStorage.getItem("p")) || [];
  });

  const [input, setInput] = useState("");

  const [id, setId] = useState(null);

  useEffect(() => {
    localStorage.setItem("p", JSON.stringify(personagem));
  }, [personagem]);

  function salvar() {
    if (input === "") return;
    if (id === null) {
      const novoPersonagem = {
        id: Date.now(),
        texto: input,
      };
      setPersonagem([...personagem, novoPersonagem]);
      setInput("");
    } else {
      const novoPersonagem = personagem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            texto: input,
          };
        }
        return item;
      });
      setPersonagem(novoPersonagem);
      setId(null);
      setInput("");
    }
  }

  function remover(indexRemove) {
    const novaLista = personagem.filter((item) => item.id !== indexRemove);
    setPersonagem(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("p");
    }
  }

  function editar(personagem) {
    setInput(personagem.texto);
    setId(personagem.id);
  }

  return (
    <div>
      <h2>Crud</h2>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={salvar}>Salvar</button>
      <ul>
        {personagem.map((item) => (
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
