import { useState, useEffect } from "react";

function Crud() {
  const [ingles, setIngles] = useState(() => {
    return JSON.parse(localStorage.getItem("palavras")) || [];
  });

  const [input, setInput] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    localStorage.setItem("palavras", JSON.stringify(ingles));
  }, [ingles]);

  function salvar() {
    if (input === "") return;
    if (id === null) {
      const novaLista = {
        id: Date.now(),
        texto: input,
      };
      setIngles([...ingles, novaLista]);
      setInput("");
    } else {
      const listaNova = ingles.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            texto: input,
          };
        }
        return item;
      });
      setIngles(listaNova);
      setId(null);
      setInput("");
    }
  }

  function editar(e) {
    setInput(e.texto);
    setId(e.id);
  }

  function remover(indexRemover) {
    const novalista = ingles.filter((item) => item.id !== indexRemover);
    setIngles(novalista);
    if (ingles.length === 0) {
      localStorage.removeItem("palavras");
    }
  }

  return (
    <div>
      <h1>Mineração de palavras!</h1>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={salvar}>Salvar</button>

      <ul>
        {ingles.map((item) => (
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
