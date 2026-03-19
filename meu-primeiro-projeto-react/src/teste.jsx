import { useState, useEffect } from "react";

function Trabalhos() {
  const [trabalhos, setTrabalhos] = useState(() => {
    return JSON.parse(localStorage.getItem("Trabalhos")) || [];
  });

  const [trabalhosNovos, setTrabalhosNovos] = useState("");

  useEffect(() => {
    localStorage.setItem("Trabalhos", JSON.stringify(trabalhos));
  }, [trabalhos]);

  function input(event) {
    setTrabalhosNovos(event.target.value);
  }

  function add() {
    if (trabalhosNovos !== "") {
      setTrabalhos([...trabalhos, { nome: trabalhosNovos, feito: false }]);
      setTrabalhosNovos("");
    }
  }

  function alternarFeitos(indexClicado) {
    const novaLista = trabalhos.map((item, index) => {
      if (index === indexClicado) {
        return {
          ...item,
          feito: !item.feito,
        };
      }
      return item;
    });
    setTrabalhos(novaLista);
  }

  function remover(indexRemove) {
    const listaNova = trabalhos.filter((item, index) => index !== indexRemove);
    setTrabalhos(listaNova);
    if (listaNova.length === 0) {
      localStorage.removeItem("Trabalhos");
    }
  }

  return (
    <div>
      <h1>Trabalhos de aulas!</h1>
      <input
        type="text"
        value={trabalhosNovos}
        onChange={input}
        placeholder="Digite seu trabalho!"
      />
      <button onClick={add}>Adicionar: </button>

      <ul>
        {trabalhos.map((trabalhos, index) => (
          <li key={index}>
            {trabalhos.nome}
            <button onClick={() => remover(index)}>Apagar</button>
            <button onClick={() => alternarFeitos(index)}>
              {trabalhos.feito ? "TRABALHO FEITO" : "PENDENTE"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trabalhos;
