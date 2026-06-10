import { useState, useEffect } from "react";

function LojaOnline() {
  const [produtos, setProdutos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((resp) => resp.json())
      .then((dados) => {
        console.log(dados);
        setProdutos(dados);
      });
  }, []);

  const filtros =
    input === ""
      ? produtos
      : produtos.filter((item) => {
          return item.title.toLowerCase().includes(input.toLocaleLowerCase());
        });

  return (
    <div>
      <h2>Produtos em estoques!</h2>
      <input
        type="text"
        value={input}
        placeholder="Ache seu produto!"
        onChange={(e) => setInput(e.target.value)}
      />

      {filtros.length === 0 ? (
        <h2>Nenhum resultado</h2>
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
