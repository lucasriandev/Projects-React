import { useState, useEffect } from "react";

function Crud() {
  const [lutador, setLutador] = useState(() => {
    return JSON.parse(localStorage.getItem("lutador")) || [];
  });

  const [novoLutador, setNovoLutador] = useState("");

  useEffect(() => {
    localStorage.setItem("lutador", JSON.stringify(lutador));
  }, [lutador]);

  function add() {
    if (novoLutador !== "") {
      setLutador([...lutador, novoLutador]);
      setNovoLutador("");
    }
  }

  function remover(indexRemover) {
    const novaLista = lutador.filter((t, index) => index !== indexRemover);
    setLutador(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("lutador");
    }
  }

  return (
    <div>
      <h1>Lutadores do UFC!</h1>
      <input
        type="text"
        value={novoLutador}
        onChange={(e) => setNovoLutador(e.target.value)}
        placeholder="Digite seu lutador!"
      />
      <button onClick={add}>Cadastrar</button>
      <ul>
        {lutador.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => remover(index)}>🗑️</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Crud;
