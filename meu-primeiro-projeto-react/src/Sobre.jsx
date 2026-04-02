import { useEffect, useState } from "react";

function Crud() {
  const [usuario, setUsuario] = useState(() => {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
  });

  const [novoUser, setNovoUser] = useState("");

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuario));
  }, [usuario]);

  function add() {
    if (novoUser !== "") {
      setUsuario([...usuario, novoUser]);
      setNovoUser("");
    }
  }

  function remover(indexRemover) {
    const novaLista = usuario.filter((t, index) => index !== indexRemover);
    setUsuario(novaLista);
    if (novaLista.length === 0) {
      localStorage.removeItem("usuarios");
    }
  }

  return (
    <div>
      <h1>Usuarios</h1>
      <input
        placeholder="digite"
        type="text"
        value={novoUser}
        onChange={(e) => setNovoUser(e.target.value)}
      />
      <button onClick={add}>Cadastrar</button>
      <ul>
        {usuario.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remover(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
