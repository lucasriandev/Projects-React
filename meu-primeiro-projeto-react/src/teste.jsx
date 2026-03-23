import { useState, useEffect } from "react";

function Personagens() {
  const [personagem, setPersonagem] = useState(() => {
    return JSON.parse(localStorage.getItem("Favorito")) || [];
  });

  const [novoPersonagem, setNovoPersonagem] = useState("");

  useEffect(() => {
    localStorage.setItem("Favorito", JSON.stringify(personagem));
  }, [personagem]);

  function input(event) {
    setNovoPersonagem(event.target.value);
  }

  function add() {
    if (novoPersonagem !== "") {
      setPersonagem([...personagem, novoPersonagem]);
      setNovoPersonagem("");
    }
  }

  function remover(indexRemove) {
    const novaLista = personagem.filter(
      (person, index) => index !== indexRemove,
    );
    setPersonagem(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("Favorito");
    }
  }

  return (
    <div>
      <h1>Personagens favoritos</h1>
      <input
        type="text"
        value={novoPersonagem}
        onChange={input}
        placeholder="Digite"
      />
      <button onClick={add}>Adicionar</button>

      <ul>
        {personagem.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remover(index)}>REMOVER</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Personagens;
