import { useState } from "react";

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

  // 1. Função que verifica as regras
  function verificarVencedor(tabuleiro) {
    const combinacoes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of combinacoes) {
      if (
        tabuleiro[a] !== "" &&
        tabuleiro[a] === tabuleiro[b] &&
        tabuleiro[b] === tabuleiro[c]
      ) {
        return tabuleiro[a]; // Retorna "X" ou "O"
      }
    }
    return null;
  }

  // 2. O Juiz fica de olho no tabuleiro atual o tempo todo
  const vencedor = verificarVencedor(tabuleiro);

  // 3. Função do clique
  function cliqueNoQuadrado(index) {
    // TRAVA: Se o quadrado já tem letra OU se já existe um vencedor, pare!
    if (tabuleiro[index] !== "" || vencedor) return;

    const novoTabuleiro = [...tabuleiro];
    if (turno === true) {
      novoTabuleiro[index] = "X";
    } else {
      novoTabuleiro[index] = "O";
    }
    setTabuleiro(novoTabuleiro);
    setTurno(!turno);
  }

  // BÔNUS: Função para zerar o jogo
  function reiniciarJogo() {
    setTabuleiro(["", "", "", "", "", "", "", "", ""]);
    setTurno(true);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Jogo da Velha 🎮</h1>

      {/* RENDERIZAÇÃO CONDICIONAL: Mostra o troféu ou a vez do jogador */}
      <div style={{ height: "40px", marginBottom: "10px" }}>
        {vencedor ? (
          <h2 style={{ color: "green", margin: 0 }}>
            🏆 O vencedor é: {vencedor}!
          </h2>
        ) : (
          <h2 style={{ margin: 0 }}>Vez do jogador: {turno ? "X" : "O"}</h2>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gap: "5px", // Dá um espacinho entre os botões simulando as linhas do tabuleiro
          backgroundColor: "#222",
          padding: "5px",
          borderRadius: "8px",
        }}
      >
        {tabuleiro.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => cliqueNoQuadrado(index)}
              style={{
                width: "100px",
                height: "100px",
                fontSize: "45px",
                fontWeight: "bold",
                cursor: "pointer",
                backgroundColor: "white",
                border: "none",
                color: item === "X" ? "red" : "blue", // Cores diferentes para X e O
              }}
            >
              {item}
            </button>
          );
        })}
      </div>

      <br />
      <button
        onClick={reiniciarJogo}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Reiniciar Jogo
      </button>
    </div>
  );
}

export default JogoDaVelha;
