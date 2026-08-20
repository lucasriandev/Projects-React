import { useState, useEffect } from "react";

function ServerPersonagem() {
  const [personagem, setPersonagens] = useState([]);
  const [nome, setNome] = useState("");
  const [poder, setPoder] = useState("");
  const [idEditando, setIdEditando] = useState(null);

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

  const salvar = async () => {
    const novoDados = {
      nome: nome,
      poder: poder,
    };

    try {
      const url = idEditando
        ? `http://localhost:3000/personagem/${idEditando}`
        : "http://localhost:3000/personagem";

      const metodo = idEditando ? "PUT" : "POST";

      await fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoDados),
      });

      setNome("");
      setPoder("");
      setIdEditando(null);

      get();
    } catch (error) {
      console.error("Erro ao salver", error);
    }
  };

  const deletar = async (id) => {
    try {
      await fetch(`http://localhost:3000/personagem/${id}`, {
        method: "DELETE",
      });
      get();
    } catch (error) {
      console.error("Erro ao deletar", error);
    }
  };

  const prepararEdicao = (p) => {
    setNome(p.nome);
    setPoder(p.poder);
    setIdEditando(p.id);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <h1>Meu banco de dados de personagem!</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nome do Personagem"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <input
          type="text"
          placeholder="Poder"
          value={poder}
          onChange={(e) => setPoder(e.target.value)}
          style={{ marginRight: "5px" }}
        />

        {/* O texto do botão muda se estiver editando ou não */}
        <button
          onClick={salvar}
          style={{
            backgroundColor: idEditando ? "orange" : "green",
            color: "white",
          }}
        >
          {idEditando ? "Salvar Edição" : "Criar novo personagem!"}
        </button>

        {/* Botão para cancelar a edição e voltar ao modo de criar */}
        {idEditando && (
          <button
            onClick={() => {
              setIdEditando(null);
              setNome("");
              setPoder("");
            }}
            style={{ marginLeft: "5px" }}
          >
            Cancelar
          </button>
        )}
      </div>

      <ul>
        {personagem.map((p) => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            <strong>{p.nome}</strong> (Poder: {p.poder})
            {/* Novos botões de Editar e Deletar */}
            <button
              onClick={() => prepararEdicao(p)}
              style={{ marginLeft: "10px", cursor: "pointer" }}
            >
              ✏️ Editar
            </button>
            <button
              onClick={() => deletar(p.id)}
              style={{ marginLeft: "5px", cursor: "pointer", color: "red" }}
            >
              🗑️ Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServerPersonagem;
