import { useState, useEffect } from "react";

function Api() {
  const [busca, setBusca] = useState("");
  const [usuario, setUsuario] = useState(null);

  const [input, setInput] = useState("");

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://viacep.com.br/ws/${busca}/json/`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setUsuario(dados);
      })
      .catch((erro) => {
        console.log(erro, "deu erro!");
      });
  }, [busca]);

  return (
    <div>
      <h1>Cep!</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Buscar</button>

      {usuario && <li>{usuario.bairro}</li>}
    </div>
  );
}
export default Api;
