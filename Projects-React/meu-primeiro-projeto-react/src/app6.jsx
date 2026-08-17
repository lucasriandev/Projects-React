import { useState, useEffect } from "react";

function ServerExterno() {
  const [mensagens, setMensagens] = useState([]);

  const buscarGet = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/msg");
      const jsonRetornado = await resposta.json();
      if (Array.isArray(jsonRetornado)) {
        setMensagens(jsonRetornado); // Se o Node mandou a lista direto
      } else if (jsonRetornado.dados) {
        setMensagens(jsonRetornado.dados); // Se o Node mandou dentro de "dados"
      } else {
        setMensagens([]); // Prevenção de falhas
      }
    } catch (error) {
      console.error("Erro ao buscar API", error);
    }
  };

  const enviarNovaMensagem = async () => {
    const novoDado = {
      texto: "Enviado direto do React!",
      idade: 28,
    };

    try {
      await fetch("http://localhost:3000/msg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoDado), // O Zod vai validar isso lá no Node!
      });

      buscarGet(); // Atualiza a lista na tela após salvar
    } catch (erro) {
      console.error("Erro ao enviar", erro);
    }
  };

  useEffect(() => {
    buscarGet();
  }, []);

  return (
    <div>
      <h1>Meu banco de dados!</h1>
      <button onClick={enviarNovaMensagem}>Criar mensagem de teste!</button>

      <ul>
        {mensagens.map((msg) => (
          <li key={msg.id}>
            {msg.texto} (Idade: {msg.idade})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServerExterno;
