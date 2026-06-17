import { useState, useEffect } from "react";

function Crud() {
  const [lutadores, setLutadores] = useState(() => {
    return JSON.parse(localStorage.getItem("lutadores")) || [];
  });

  const [input, setInput] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    localStorage.setItem("lutadores", JSON.stringify(lutadores));
  }, [lutadores]);

  function salvar() {
    if (input === "") return;
    if (id === null) {
      const novaLista = {
        id: Date.now(),
        texto: input,
      };
      setLutadores([...lutadores, novaLista]);
      setInput("");
    } else {
      const listaNova = lutadores.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            texto: input,
          };
        }
        return item;
      });
      setLutadores(listaNova);
      setId(null);
      setInput("");
    }
  }

  function editar(ed) {
    setInput(ed.texto);
    setId(ed.id);
  }

  function remover(indexRemover) {
    const novaLista = lutadores.filter((item) => item.id !== indexRemover);
    setLutadores(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("lutadores");
    }
  }

  return (
    <div>
      <h1>UFC CASA BRANCA!</h1>
      <input
        type="text"
        placeholder="Digite!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => salvar()}>Salvar</button>
      <ul>
        {lutadores.map((item) => {
          return (
            <li key={item.id}>
              {item.texto}
              <button onClick={() => editar(item)}>🖊️</button>
              <button onClick={() => remover(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Crud;
