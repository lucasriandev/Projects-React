import { useState, useEffect } from "react";

function JogoDaVelha() {
  const [tabuleiro, setTabuleiro] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [turno, setTurno] = useState(true);

  function cliqueNoQuadrado(index) {
    if (tabuleiro[index] !== "") return;

    const novoTabuleiro = [...tabuleiro];
    if (turno === true) {
      novoTabuleiro[index] = "X";
    } else {
      novoTabuleiro[index] = "O";
    }
    setTabuleiro(novoTabuleiro);
    setTurno(!turno);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        width: "300px",
      }}
    >
      {tabuleiro.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => cliqueNoQuadrado(index)}
            style={{ width: "100px", height: "100px" }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default JogoDaVelha;
