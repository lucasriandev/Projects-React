import { useState, useEffect } from "react";

function MeuPerfil() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/lucasriandev")
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setUsuario(dados);
        setCarregando(false);
      })
      .catch((erro) => {
        console.error("Deu ruim aqui", erro);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <h2>Buscando dados no servidor!</h2>;
  }

  if (!usuario) {
    return <h2>Nao foi possivel carregar perfil!</h2>;
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "300px",
      }}
    >
      <img
        src={usuario.avatar_url}
        alt="Foto de perfil"
        style={{ width: "100%", borderRadius: "50%" }}
      />

      <h2>{usuario.name || usuario.login}</h2>
      <p>{usuario.bio}</p>

      <hr />
      <p>
        <strong>Repositorios publicos</strong> {usuario.public_repos}
      </p>
      <p>
        Seguidores<strong>{usuario.followers}</strong>
      </p>
    </div>
  );
}

export default MeuPerfil;
