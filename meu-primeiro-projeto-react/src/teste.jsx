import { useState } from "react";

function teste() {
  const [devedor, setDevedor] = useState([]); //arrau inicial
  const [contaNova, setContaNova] = useState(""); //value do input

  function receberInput(event) {
    setContaNova(event.target.value);
  }

  function adicionarNovaConta() {
    //"Só adiciona se o usuário tiver digitado alguma coisa."
    if (contaNova !== "") {
      setDevedor([...devedor, contaNova]); //Cria um novo array com os valores antigos + a nova conta
      setContaNova("");
    }
  }

  function remover(indexRemove) {
    const listaDevedoraAtualizada = devedor.filter(
      (devendo, indexAtual) => indexAtual !== indexRemove,
    );
    setDevedor(listaDevedoraAtualizada);
  }

  return (
    <div>
      <h1>O que falta pagar!</h1>

      <input
        type="text"
        placeholder="Nova conta?"
        value={contaNova}
        onChange={receberInput}
      />

      <button onClick={adicionarNovaConta}>Adicionar</button>

      <ul>
        {devedor.map((devedor, index) => (
          <li key={index}>
            {devedor}
            <button
              onClick={() => remover(index)}
              style={{ marginLeft: "10px" }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default teste;
