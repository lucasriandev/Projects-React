import { useState, useEffect } from "react";

function Crud() {
  const [supermercado, setSuperMercado] = useState(() => {
    return JSON.parse(localStorage.getItem("produtos")) || [];
  });

  const [input, setInput] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(supermercado));
  }, [supermercado]);

  function salvar() {
    if (input === "") return;
    if (id === null) {
      const novoProduto = {
        id: Date.now(),
        texto: input,
      };
      setSuperMercado([...supermercado, novoProduto]);
      setInput("");
    } else {
      const produtoEditado = supermercado.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            texto: input,
          };
        }
        return item;
      });

      setSuperMercado(produtoEditado);
      setId(null);
      setInput("");
    }
  }

  function remover(indexRemover) {
    const novaLista = supermercado.filter((item) => item.id !== indexRemover);
    setSuperMercado(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("produtos");
    }
  }

  function editar(p) {
    setInput(p.texto);
    setId(p.id);
  }

  return (
    <div>
      <h1>Crud Supermercado!</h1>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={salvar}>Salvar</button>

      <ul>
        {supermercado.map((item) => (
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
