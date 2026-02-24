import { useState } from "react";

function Profile(props) {
  //criando o estado curtidas começando com 0
  const [curtidas, setCurtidas] = useState(0);
  const [favorito, setFavorito] = useState(0);
  const [status, setStatus] = useState("Disponivel");

  //sera chamada quando o botao clicar
  function adicionarCurtidas() {
    setCurtidas(curtidas + 1); //atualiza o estado somando 1
  }

  function adicionarFavorito() {
    setFavorito(favorito + 1);
  }

  function mudarStatus(evento) {
    setStatus(evento.target.value);
  }

  return (
    <div className="profile-card">
      <h2>{props.nome}</h2>
      <p>{props.cargo}</p>

      <p>
        <strong>Status Atual: </strong> {status}
      </p>
      <input
        type="text"
        placeholder="O que você está fazendo?"
        //onChamge que chama a funcao
        onChange={mudarStatus}
      />

      <p>❤️ Curtidas: {curtidas}</p>
      <p>⭐ favorito: {favorito}</p>

      <button onClick={adicionarCurtidas}>Curtir perfil</button>
      <button onClick={adicionarFavorito}>Colocar nos favoritos</button>
    </div>
  );
}

export default Profile;
