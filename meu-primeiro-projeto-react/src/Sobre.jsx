import { useEffect, useState } from "react";

function Sobre() {
  const [usuario, setUsuario] = useState(() => {
    return JSON.parse(localStorage.getItem("User")) || [];
  });

  const [novoUsuario, setNovoUsuario] = useState("");

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(usuario));
  }, [usuario]);

  function add() {
    if (novoUsuario !== "") {
      setUsuario([...usuario, novoUsuario]);
      setNovoUsuario("");
    }
  }

  function remove(indexRemover) {
    const listaNova = usuario.filter((t, index) => index !== indexRemover);
    setUsuario(listaNova);
    if (listaNova.length === 0) {
      localStorage.removeItem("User");
    }
  }

  return (
    <div>
      <h1>Cadastro de usuario!</h1>
      <input
        type="text"
        value={novoUsuario}
        placeholder="Digite!"
        onChange={(e) => setNovoUsuario(e.target.value)}
      />
      <button onClick={add}>Adicionar</button>

      <ul>
        {usuario.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remove(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sobre;
