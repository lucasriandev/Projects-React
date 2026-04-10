function Lista({ personagem, remover }) {
  return personagem.map((item, index) => (
    <li key={index}>
      {item}
      <button onClick={() => remover(index)}>Apagar</button>
    </li>
  ));
}

export default Lista;
