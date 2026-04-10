import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Dinamica() {
  const { id } = useParams();
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setDados(dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [id]);

  if (!dados) return <h1>carregando</h1>;

  return (
    <div>
      <h1>{dados.name}</h1>
      <p>{dados.genres}</p>
      <img src={dados.image.medium} />
      <br />
      <Link to="/Api">Voltar</Link>
    </div>
  );
}

export default Dinamica;

/* Home
↓
<Link to="/filme/169">
↓
URL muda
↓
Router detecta rota
↓
Renderiza RotaDinamica
↓
useParams lê a URL
↓
id = 169*/
