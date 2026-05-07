import { useState, useEffect } from "react";

function Paises() {
  const [paises, setPaises] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population")
      .then((r) => r.json())
      .then((dados) => {
        console.log(dados);
        setPaises(dados);
      })
      .catch((error) => {
        console.log(error, "erroooo");
      });
  }, []);

  const nomesFiltrados =
    input === ""
      ? paises
      : paises.filter((item) => {
          return item.name.common.toLowerCase().includes(input.toLowerCase());
        });

  return (
    <div>
      <h2>Paises</h2>
      <input
        type="text"
        placeholder="Digite!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {nomesFiltrados.length === 0 ? (
        <p>Nenhum pais encontrado!</p>
      ) : (
        <ul>
          {nomesFiltrados.map((item) => (
            <li key={item.name.common}>
              <h3>{item.name.common}</h3>

              <p>População: {item.population}</p>

              <img src={item.flags.png} alt={item.name.common} width="120" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Paises;
