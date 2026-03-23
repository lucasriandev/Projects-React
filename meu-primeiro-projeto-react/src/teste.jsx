import { useState, useEffect } from "react";

function Api() {
  const [conselho, setConselho] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setConselho(dados);
        setCarregando(false);
      })
      .catch((error) => {
        console.error("Deu ruim aqui");
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <h2>Buscando dados na api!</h2>;
  }

  if (!conselho) {
    return <h2>Não foi possivel carregar perfil!</h2>;
  }

  return (
    <div>
      <h1>{conselho.slip.advice}</h1>
    </div>
  );
}

export default Api;
