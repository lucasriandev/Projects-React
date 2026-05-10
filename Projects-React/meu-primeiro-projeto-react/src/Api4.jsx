import { useState, useEffect } from "react";

function Paises() {
  const [paises, setPaises] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population")
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setPaises(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const nomeFiltrado =
    input === ""
      ? paises
      : paises.filter((item) =>
          item.name.common.toLowerCase().includes(input.toLowerCase()),
        );

  return (
    <div>
      <h2>Busque seu pais!</h2>
      <input
        type="text"
        placeholder="Digite!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {nomeFiltrado.length === 0 ? (
        <p>Nenhum encontrado!</p>
      ) : (
        <ul>
          {nomeFiltrado.map((item, index) => (
            <li key={index}>
              <h3>{item.name.common}</h3>
              <img src={item.flags.png} style={{ width: "100px" }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Paises;
