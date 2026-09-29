import { useState, useEffect } from "react";

function ServerPersonagem() {
  const [personagem, setPersonagem] = useState([]);
  const [nome, setNome] = useState("");
  const [poder, setPoder] = useState("");
  const [idEditado, setIdEditado] = useState(null);

  const get = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/personagem");
      const dados = await resposta.json();

      if (Array.isArray(dados)) {
        setPersonagem(dados);
      } else if (dados.dados) {
        setPersonagem(dados.dados);
      } else {
        setPersonagem([]);
      }
    } catch (error) {
      console.error("Erro no get", error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  const salver = async () => {
    const novosPersonagem = {
      nome: nome,
      poder: poder,
    };

    try {
      const url = idEditado
        ? `http://localhost:3000/personagem/${idEditado}`
        : `http://localhost:3000/personagem/`;
      const metodo = idEditado ? "PUT" : "POST";

      /* 
      if (idEditado) {
      url = `http://localhost:3000/personagem/${idEditado}`;
      } else {
      url = `http://localhost:3000/personagem/`;
      }
      */

      await fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novosPersonagem),
      });

      setNome("");
      setPoder("");
      setIdEditado(null);

      get();
    } catch (error) {
      console.error("Erro ao criar personagem", error);
    }
  };

  /*REACT

usuário clica em Naruto
        ↓
edicao(p)
        ↓
setIdEditado(p.id)
        ↓
idEditado = 2
        ↓
salver()
        ↓
PUT /personagem/2
        ↓
        ↓
        ↓
SERVIDOR

router.put("/:id")
        ↓
req.params.id
        ↓
"2"
        ↓
Number(...)
        ↓
2
        ↓
Prisma
        ↓
atualiza registro ID 2 */

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

  function edicao(p) {
    setNome(p.nome);
    setPoder(p.poder);
    setIdEditado(p.id);
  }

  return (
    <div>
      Db de Personagem!
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poder"
        value={poder}
        onChange={(e) => setPoder(e.target.value)}
      />
      <button onClick={salver}>{idEditado ? "Editar" : "Salvar"}</button>
      {idEditado && (
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
      <ul>
        {personagem.map((p) => (
          <li key={p.id}>
            <strong>{p.nome}</strong> (Poder: {p.poder})
            {/* Novos botões de Editar e Deletar */}
            <button onClick={() => edicao(p)}>✏️ Editar</button>
            <button onClick={() => deletar(p.id)}>🗑️ Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServerPersonagem;

/*                  REACT                         SERVIDOR

              idEditado
                  ↓
                  2
                  ↓
       /personagem/2
                  ↓
            HTTP PUT
                  ↓
                  └──────────────────────→ req.params.id
                                                ↓
                                               "2"
                                                ↓
                                             Number
                                                ↓
                                                2
                                                ↓
                                              Prisma */
