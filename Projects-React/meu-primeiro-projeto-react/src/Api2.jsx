import { useState, useEffect } from "react";

//    fetch(`https://fakestoreapi.com/products`)

function LojaOnline() {
  const [produtos, setProdutos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setProdutos(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filtros =
    input === ""
      ? produtos
      : produtos.filter((item) => {
          return item.title.toLowerCase().includes(input.toLowerCase());
        });

  return (
    <div>
      <h1>Produtos</h1>
      <input
        type="text"
        placeholder="Digite!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {filtros.length === 0 ? (
        <h2>Nenhum resultado encontrado!</h2>
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
