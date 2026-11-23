import { useState, useEffect } from "react";

//    fetch(`https://fakestoreapi.com/products`)

function LojaOnline() {
  const [input, setInput] = useState("");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setProdutos(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filtros =
    input == ""
      ? produtos
      : produtos.filter((item) => {
          return item.title.toLowerCase().includes(input.toLocaleLowerCase());
        });

  return (
    <div>
      <h1>Produtos da loja!</h1>
      <input
        type="text"
        value={input}
        placeholder="Digite o produto!"
        onChange={(e) => setInput(e.target.value)}
      />
      {filtros.length === 0 ? (
        <h1>Nada encontrado</h1>
      ) : (
        <ul>
          {filtros.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LojaOnline;
