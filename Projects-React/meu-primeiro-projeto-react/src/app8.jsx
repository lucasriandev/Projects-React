import { useState, useEffect } from "react";

function ServerAnimes() {
  const [anime, setAnime] = useState([]);
  const [input, setInput] = useState("");

  const get = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/animes");
      const dados = await resposta.json();
      console.log(dados);

      if (Array.isArray(dados)) {
        setAnime(dados);
      } else if (dados.dados) {
        setAnime(dados.dados);
      } else {
        setAnime([]);
      }
    } catch (error) {
      console.error("Erro ao buscar o get");
    }
  };

  const post = async () => {
    const novosAnime = {
      nome: input,
    };

    try {
      const resposta = await fetch("http://localhost:3000/animes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novosAnime),
      });

      const dados = await resposta.json();
      console.log(dados);

      get();
      setInput("");
    } catch (error) {
      console.error("Erro no post", error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <h1>Animes!</h1>
      <input
        type="text"
        placeholder="Digite!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={post}>Salvar no db</button>
      <ul>
        {anime.map((p) => (
          <li key={p.id}>{p.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServerAnimes;
