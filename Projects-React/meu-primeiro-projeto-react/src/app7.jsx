import { useState, useEffect } from "react";

function ServerPersonagem() {
  const [personagem, setPersonagens] = useState([]);
  const [nome, setNome] = useState("");
  const [poder, setPoder] = useState("");

  const get = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/personagem");
      const dados = await resposta.json();

      if (Array.isArray(dados)) {
        setPersonagens(dados);
      } else if (dados.dados) {
        setPersonagens(dados.dados);
      } else {
        setPersonagens([]);
      }
    } catch (error) {
      console.error("Erro ao buscar api", error);
    }
  };
  const post = async () => {
    const novoPost = {
      nome: nome,
      poder: poder,
    };

    try {
      await fetch("http://localhost:3000/personagem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoPost),
      });
      get();
    } catch (error) {
      console.error("Erro no post", error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <h1>Meu banco de dados de personagem!</h1>
      <input
        type="text"
        placeholder="Nome do personagem"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Digite o poder!"
        value={poder}
        onChange={(e) => setPoder(e.target.value)}
      />
      <br />
      <button onClick={post}>Criar novo personagem!</button>
      <ul>
        {personagem.map((p) => (
          <li key={p.id}>
            {p.nome} (Poder: {p.poder})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServerPersonagem;
