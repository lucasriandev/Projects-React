import { useState, useEffect } from "react";

function Crud() {
  const [personagens, setPersonagens] = useState(
    () => JSON.parse(localStorage.getItem("Person")) || [],
  );

  const [novoPersonagem, setNovoPersonagem] = useState("");

  useEffect(() => {
    localStorage.setItem("Person", JSON.stringify(personagens));
  }, [personagens]);

  function salvar() {
    if (novoPersonagem !== "") {
      setPersonagens([...personagens, novoPersonagem]);
      setNovoPersonagem("");
    }
  }

  function remover(indexRemover) {
    const novaLista = personagens.filter((t, index) => index !== indexRemover);
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
        {personagens.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remover(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
