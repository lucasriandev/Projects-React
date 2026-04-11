import { useState, useEffect } from "react";

function Crud() {
  const [personagem, setPersonagem] = useState(() => {
    return JSON.parse(localStorage.getItem("personagem")) || [];
  });

  const [novoPersonagem, setNovoPersonagem] = useState("");

  useEffect(
    () => localStorage.setItem("personagem", JSON.stringify(personagem)),
    [personagem],
  );

  function add() {
    if (novoPersonagem !== "") {
      setPersonagem([...personagem, novoPersonagem]);
      setNovoPersonagem("");
    }
  }

  function remover(indexRemover) {
    const novaLista = personagem.filter((i, index) => index !== indexRemover);
    setPersonagem(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("personagem");
    }
  }

  return (
    <div>
      <h1>Cadastre seus personagens!</h1>
      <input
        type="text"
        placeholder="Digite"
        value={novoPersonagem}
        onChange={(e) => setNovoPersonagem(e.target.value)}
      />

      <button onClick={add}>Cadastrar</button>
    </div>
  );
}

export default Crud;
