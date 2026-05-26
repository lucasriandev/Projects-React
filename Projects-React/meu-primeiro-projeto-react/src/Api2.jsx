import { useState, useEffect } from "react";

function LojaOnline() {
  const [loja, setLoja] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setLoja(dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  const filtros =
    input === ""
      ? loja
      : loja.filter((item) => {
          return item.title.toLowerCase().includes(input.toLowerCase());
        });

  return (
    <div>
      <h2>Produtos da loja!</h2>
      <p>Digite e procure seu produto!</p>
      <input
        type="text"
        placeholder="Digite"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {filtros.length === 0 ? (
        <p>Nenhum resultado encontrado1</p>
      ) : (
        <ul>
          {filtros.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LojaOnline;
