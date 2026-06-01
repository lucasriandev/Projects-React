import { useState, useEffect } from "react";

function Crud() {
  const [jogadores, setJogadores] = useState(() => {
    return JSON.parse(localStorage.getItem("jogadores")) || [];
  });

  const [input, setInput] = useState("");

  const [id, setId] = useState(null);

  useEffect(() => {
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
  }, [jogadores]);

  function salvar() {
    if (input === "") return;
    if (id === null) {
      const novoJogadores = {
        id: Date.now(),
        texto: input,
      };
      setJogadores([...jogadores, novoJogadores]);
      setInput("");
    } else {
      const editarJogador = jogadores.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            texto: input,
          };
        }
        return item;
      });
      setJogadores(editarJogador);
      setInput("");
      setId(null);
    }
  }

  function editar(j) {
    setInput(j.texto);
    setId(j.id);
  }

  function remover(indexRemover) {
    const novaLista = jogadores.filter((item) => item.id !== indexRemover);
    setJogadores(novaLista);
  }

  return (
    <div>
      <h1>Copa do mundo!</h1>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={salvar}>Salvar</button>
      <ul>
        {jogadores.map((item) => (
          <li key={item.id}>
            {item.texto}

            <button onClick={() => editar(item)}>Editar</button>

            <button onClick={() => remover(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
