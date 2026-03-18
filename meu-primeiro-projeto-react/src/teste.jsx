import { useState, useEffect } from "react";

function Metas() {
  const [metas, setMetas] = useState(() => {
    return JSON.parse(localStorage.getItem("Metas")) || [];
  });
  //lista
  const [NOVAMETA, SETNOVAMETA] = useState("");
  //input

  useEffect(() => {
    localStorage.setItem("Metas", JSON.stringify(metas));
  }, [metas]);

  function Input(event) {
    SETNOVAMETA(event.target.value);
  }

  function add() {
    if (NOVAMETA !== "") {
      setMetas([...metas, NOVAMETA]);
      SETNOVAMETA("");
    }
  }

  function remover(indexRemover) {
    const listaNova = metas.filter((item, index) => index !== indexRemover);
    setMetas(listaNova);
    if (listaNova.length === 0) {
      localStorage.removeItem("Metas");
    }
  }

  return (
    <div>
      <h1>Metas de Hoje: </h1>
      <input type="text" value={NOVAMETA} onChange={Input} />
      <button onClick={add}>Adicionar</button>

      <ul>
        {metas.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remover(index)}>remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Metas;
