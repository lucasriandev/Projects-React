import { useState, useEffect } from "react";

function Crud() {
  const [individualidade, setIndividualidade] = useState(() => {
    return JSON.parse(localStorage.getItem("indi")) || [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("indi", JSON.stringify(individualidade));
  }, [individualidade]);

  function add() {
    if (input !== "") {
      setIndividualidade([...individualidade, input]);
      setInput("");
    }
  }

  function remover(indexRemover) {
    const novaLista = individualidade.filter(
      (t, index) => index !== indexRemover,
    );
    setIndividualidade(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("indi");
    }
  }

  return (
    <div>
      <h1>Qual individualidade vc quer?</h1>
      <input
        type="text"
        placeholder="Digite!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>Add</button>
      <ul>
        {individualidade.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remover(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
