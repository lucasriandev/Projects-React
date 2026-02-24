import { useState } from "react";

function Profile(props) {
  //criando o estado curtidas começando com 0
  const [curtidas, setCurtidas] = useState(0);

  //sera chamada quando o botao clicar
  function adicionarCurtidas() {
    setCurtidas(curtidas + 1); //atualiza o estado somando 1
  }

  return (
    <div className="profile-card">
      <h2>{props.nome}</h2>
      <p>{props.cargo}</p>

      <p>❤️ Curtidas: {curtidas}</p>

      <button onClick={adicionarCurtidas}>Curtir perfil</button>
    </div>
  );
}

export default Profile;
