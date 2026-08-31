import { useState, useEffect } from "react";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cadastros, setCadastros] = useState([]);

  const get = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/cadastro");
      const dados = await resposta.json();
      console.log(dados);

      if (Array.isArray(dados)) {
        setCadastros(dados);
      } else if (Array.isArray(dados.dados)) {
        setCadastros(dados);
      } else if (Array.isArray(dados.cadastros)) {
        setCadastros(dados.cadastros);
      } else {
        setCadastros([]);
      }
    } catch (error) {
      console.log("Erro no get", error);
      setCadastros([]);
    }
  };

  const post = async () => {
    const novoCadastro = {
      email: email,
      senha: senha,
    };

    try {
      const resposta = await fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoCadastro),
      });

      const dados = await resposta.json();
      console.log(dados);

      get();
      setEmail("");
      setSenha("");
    } catch (error) {
      console.log("Erro no post", error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <h1>Servidor de cadastros</h1>
      <input
        type="text"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Digite a senha!"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <br />
      <button onClick={post}>Salvar</button>
      <ul>
        {Array.isArray(cadastros) &&
          cadastros.map((p, index) => (
            <li key={p.id || index}>{p.email || JSON.stringify(p)}</li>
          ))}
      </ul>
    </div>
  );
}

export default Cadastro;
