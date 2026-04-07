import { useState, useEffect, Link } from "react";

function Crud() {
  const [usuarios, setUsuarios] = useState(() => {
    return JSON.parse(localStorage.getItem("User")) || [];
  });

  const [novoUsuario, setNovoUsuario] = useState("");

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(usuarios));
  }, [usuarios]);

  function add() {
    if (novoUsuario !== "") {
      setUsuarios([...usuarios, novoUsuario]);
      setNovoUsuario("");
    }
  }

  function remover(indexRemover) {
    const novaLista = usuarios.filter((i, index) => index !== indexRemover);
    setUsuarios(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("User");
    }
  }

  return (
    <div>
      <h1>Cadastro de usuarios!</h1>
      <input
        type="text"
        value={novoUsuario}
        placeholder="Digite o nome!"
        onChange={(e) => setNovoUsuario(e.target.value)}
      />

      <button onClick={add}>Adicionar</button>

      <ul>
        {usuarios.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => remover(index)}>🗑️</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Crud;
