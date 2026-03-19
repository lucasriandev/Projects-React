import { useState, useEffect } from "react";

function Compras() {
  const [compras, setCompras] = useState(() => {
    return JSON.parse(localStorage.getItem("Compras")) || [];
  });

  const [comprados, setComprados] = useState(false);

  const [novaCompra, setNovaCompra] = useState("");

  useEffect(() => {
    localStorage.setItem("Compras", JSON.stringify(compras));
  }, [compras]);

  function input(event) {
    setNovaCompra(event.target.value);
  }

  function add() {
    if (novaCompra !== "") {
      setCompras([...compras, novaCompra]);
      setNovaCompra("");
    }
  }

  function alternarComprados() {
    setComprados(!comprados);
  }

  function remover(indexRemove) {
    const novaLista = compras.filter((item, index) => index !== indexRemove);
    setCompras(novaLista);

    if (novaLista.length === 0) {
      localStorage.removeItem("Compras");
    }
  }

  return (
    <div>
      <h1>Compras do mes!</h1>
      <input
        type="text"
        value={novaCompra}
        onChange={input}
        placeholder="Digite!"
      />
      <button onClick={add}>Adicionar</button>
      <ul>
        {compras.map((compras, index) => (
          <li key={index}>
            {compras}
            <button onClick={() => remover(index)}>Remover</button>
            <br></br>
            <button onClick={alternarComprados}>
              {comprados ? "COMPRA FEITA" : "Colocar nos comprados!"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Compras;
