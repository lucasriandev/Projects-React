import { useState, useEffect } from "react";

function Api() {
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://viacep.com.br/ws/${busca}/json/`)
      .then((res) => res.json())
      .then((dados) => setUsuario(dados));
  }, [busca]);

  return (
    <div>
      <h1>CEP</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setBusca(input)}>Busca</button>

      {usuario && (
        <div>
          <p>Rua: {usuario.logradouro}</p>
          <p>Bairro: {usuario.bairro}</p>
          <p>Cidade: {usuario.localidade}</p>
          <p>Estado: {usuario.uf}</p>
        </div>
      )}
    </div>
  );
}

export default Api;
