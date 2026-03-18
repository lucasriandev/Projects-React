import { useState, useEffect } from "react";

function Personagens() {
  const [personagens, setPersonagens] = useState(() => {
    return JSON.parse(localStorage.getItem("person")) || [];
  });

  const [novoPersonagem, setNovoPersonagem] = useState("");

  useEffect(() => {
    if (personagens.length > 0) {
      localStorage.setItem("person", JSON.stringify(personagens));
    }
  }, [personagens]);

  function input(event) {
    setNovoPersonagem(event.target.value);
  }

  function adicionar() {
    if (novoPersonagem !== "") {
      setPersonagens([...personagens, novoPersonagem]);
      setNovoPersonagem("");
    }
  }

  function removerPerson(indexRemove) {
    const listaNova = personagens.filter(
      (item, index) => index !== indexRemove,
    );

    setPersonagens(listaNova);
    if (listaNova.length === 0) {
      localStorage.removeItem("person");
    }
  }

  return (
    <div>
      <h1>Personagens</h1>
      <input type="text" value={novoPersonagem} onChange={input} />
      <button onClick={adicionar}>Adicionar</button>
      <ul>
        {personagens.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removerPerson(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Personagens;
