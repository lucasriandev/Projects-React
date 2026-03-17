import { useState, useEffect } from "react";

function AtividadesDeAmanha() {
  const [atividade, setAtividade] = useState([]);
  const [novaAtividade, setNovaAtividade] = useState("");

  useEffect(() => {
    const atividadeStorage =
      JSON.parse(localStorage.getItem("Atividades")) || [];
    setAtividade(atividadeStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("Atividades", JSON.stringify(atividade));
  }, [atividade]);

  function capturarEventos(event) {
    setNovaAtividade(event.target.value);
  }

  function AddAtividade() {
    if (novaAtividade !== "") {
      setAtividade([...atividade, novaAtividade]);
      setNovaAtividade("");
    }
  }

  return (
    <div>
      <h1>Atividades</h1>

      <input
        type="text"
        placeholder="Digite sua atividade!"
        value={novaAtividade}
        onChange={capturarEventos}
      />

      <button onClick={AddAtividade}>Adicionar</button>
    </div>
  );
}

export default AtividadesDeAmanha;
