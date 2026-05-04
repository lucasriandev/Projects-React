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

  const filtrados =
    input === ""
      ? loja
      : loja.filter((item) =>
          item.title.toLowerCase().includes(input.toLowerCase()),
        );

  return (
    <div>
      <h1>Loja</h1>

      <input
        type="text"
        placeholder="Buscar produto..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <ul>
        {filtrados.map((item) => (
          <li key={item.id}>
            {item.title} - R$ {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LojaOnline;
