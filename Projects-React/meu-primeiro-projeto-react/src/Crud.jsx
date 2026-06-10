import { useState, useEffect } from "react";

function Crud() {
  const [personagem, setPersonagem] = useState(() => {
    return JSON.parse(localStorage.getItem("boys")) || [];
  });

  const [input, setInput] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    localStorage.setItem("boys", JSON.stringify(personagem));
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
      const editarPersonagem = personagem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            texto: input,
          };
        }
        return item;
      });
      setPersonagem(editarPersonagem);
      setInput("");
      setId(null);
    }
  }

  function editar(t) {
    setId(t.id);
    setInput(t.texto);
  }

  function remover(indexRemover) {
    const novaLista = personagem.filter((item) => item.id !== indexRemover);
    setPersonagem(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("boys");
    }
  }

  return (
    <div>
      <h2>The boys!</h2>
      <input
        type="text"
        value={input}
        placeholder="Digite!"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={salvar}>Salvar</button>
      <ul>
        {personagem.map((item) => (
          <li key={item.id}>
            {item.texto}
            <button onClick={() => editar(item)}>🖊️</button>
            <button onClick={() => remover(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
