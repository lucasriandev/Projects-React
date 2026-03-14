import { useState, useEffect } from "react";

// A CAIXA ABRE AQUI
function Estoque() {
  // 1. ESTADOS
  const [produto, setProduto] = useState([]);
  const [produtoNovo, setProdutoNovo] = useState(""); // Deixei vazio "" para o input começar limpo

  // 2. EFEITOS
  useEffect(() => {
    const produtoSalvo = localStorage.getItem("MeusProdutos");
    if (produtoSalvo) {
      setProduto(JSON.parse(produtoSalvo));
    }
  }, []);

  useEffect(() => {
    if (produto.length > 0) {
      localStorage.setItem("MeusProdutos", JSON.stringify(produto));
    }
  }, [produto]); // Adicionei o [produto] aqui para ele vigiar a lista!

  // 3. FUNÇÕES
  function CapturaInput(evento) {
    setProdutoNovo(evento.target.value);
  }

  function AddProduto() {
    if (produtoNovo !== "") {
      setProduto([...produto, produtoNovo]);
      setProdutoNovo("");
    }
  }

  function removeProduto(indexRemove) {
    const listaProdutosNova = produto.filter(
      (produt, indexA) => indexA !== indexRemove,
    );
    setProduto(listaProdutosNova);

    if (listaProdutosNova.length === 0) {
      localStorage.removeItem("MeusProdutos");
    }
  }

  // 4. TELA
  return (
    <div>
      <h1>MEUS PRODUTOS</h1>
      <hr />

      {/* 1. O Campo de digitar e o botão de salvar */}
      <input
        type="text"
        placeholder="Digite o nome do produto..."
        value={produtoNovo} // Conecta a caixinha com a memória do React
        onChange={CapturaInput} // Avisa o React cada vez que você digita uma letra
      />
      <button onClick={AddProduto}>Cadastrar Produto</button>

      {/* 2. A Lista de Produtos na Prateleira */}
      <ul>
        {/* O map vai varrer a sua lista e criar uma <li> para cada produto */}
        {produto.map((item, index) => (
          <li key={index}>
            {item}
            {/* O botão de remover que chama a sua função passando o número (index) do item */}
            <button
              onClick={() => removeProduto(index)}
              style={{ marginLeft: "10px" }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Estoque; // Exportando o nome certinho
