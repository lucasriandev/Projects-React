import { useState, useEffect } from "react";

function Animes() {
  const [anime, setAnime] = useState([]);
  //sera usado sempre que for mexer na lista
  const [novoAnime, setNovoAnime] = useState("");
  //sera usado sempre que usuario digitar

  function input(event) {
    setNovoAnime(event.target.value);
  }

  function add() {
    if (novoAnime !== "") {
      setAnime([...anime, novoAnime]);
      setNovoAnime("");
    }
  }

  function remover(indexRemover) {
    const novaLista = anime.filter((item, index) => {
      return index !== indexRemover;
    });
    setAnime(novaLista);
  }

  return (
    <div>
      <h1>Lista de Animes</h1>
      <input
        type="text"
        value={novoAnime}
        onChange={input}
        placeholder="Digite"
      />
      <button onClick={add}>Adicionar</button>

      <ul>
        {anime.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remover(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Animes;
