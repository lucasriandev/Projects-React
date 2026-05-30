import { useState, useEffect } from "react";

function Crud() {
  const [lutas, setLutas] = useState(
    () => JSON.parse(localStorage.getItem("luta")) || [],
  );

  const [input, setInput] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    localStorage.setItem("luta", JSON.stringify(lutas));
  }, [lutas]);

  function salvar() {
    if (input === "") return;

    if (id === null) {
      const novaLuta = {
        id: Date.now(),
        input: texto,
      };

      setLutas([...lutas, novaLuta]);
      setInput("");
      setId(null);
    } else {
      const lutaNova = lutas.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            texto: input,
          };
        }
        return item;
      });
      setLutas(lutaNova);
      setInput("");
      setId(null);
    }
  }

  function remover(indexRemover) {
    const novaLista = lutas.filter((item) => item.id !== indexRemover);
    setLutas(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("luta");
    }
  }

  function editar(l) {
    setInput(l.texto);
    setId(l.id);
  }

  return (
    <div>
      <h1>Crud</h1>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={salvar}>Salvar</button>

      <ul>
        {lutas.map((item) => (
          <li key={item.id}>
            {item.texto}
            <button onClick={() => remover(item.id)}>❌</button>
            <button onClick={() => editar(item)}>🖊️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
