import { useState, useEffect } from "react";

function Blinders() {
  const [personagem, setPersonagem] = useState(() => {
    return JSON.parse(localStorage.getItem("gangue")) || [];
  });

  const [NovoPersonagem, setNovoPersonagem] = useState("");

  useEffect(() => {
    localStorage.setItem("gangue", JSON.stringify(personagem));
  }, [personagem]);

  function input(event) {
    setNovoPersonagem(event.target.value);
  }

  function add() {
    if (NovoPersonagem !== "") {
      setPersonagem([...personagem, NovoPersonagem]);
      setNovoPersonagem("");
    }
  }

  function remove(indexRemover) {
    const listaNova = personagem.filter(
      (perso, index) => index !== indexRemover,
    );
    setPersonagem(listaNova);
    if (listaNova.length === 0) {
      localStorage.removeItem("gangue");
    }
  }

  return (
    <div>
      <h1>Quem vai morrer?</h1>
      <input type="text" value={NovoPersonagem} onChange={input} />
      <button onClick={add}>Adicionar</button>

      <ul>
        {personagem.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remove(index)}>remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blinders;
