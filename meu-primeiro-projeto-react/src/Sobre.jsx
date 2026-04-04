import { useEffect, useState } from "react";

function Crud() {
  const [usuario, setUsuario] = useState(() => {
    return JSON.parse(localStorage.getItem("usuario")) || [];
  });

  const [novoUsuario, setNovoUsuario] = useState("");

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  function add() {
    if (novoUsuario !== "") {
      setUsuario([...usuario, novoUsuario]);
      setNovoUsuario("");
    }
  }

  function remover(indexApagar) {
    const novoLista = usuario.filter((user, index) => index !== indexApagar);
    setUsuario(novoLista);
    if (novoLista.length === 0) {
      localStorage.removeItem("usuario");
    }
  }

  return (
    <div>
      <h1>Cadastro de usuarios!</h1>
      <input
        type="text"
        value={novoUsuario}
        placeholder="Digite o usuario"
        onChange={(e) => setNovoUsuario(e.target.value)}
      />
      <button style={{ background: "green", marginLeft: "10px" }} onClick={add}>
        Cadastrar
      </button>

      <ul>
        {usuario.map((item, index) => (
          <li key={index}>
            {item}
            <button
              style={{
                background: "red",
                marginLeft: "10px",
                marginTop: "10px",
              }}
              onClick={() => remover(index)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
