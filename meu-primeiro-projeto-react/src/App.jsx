import Profile from "./Profile";

function App() {
  const listaDePerfil = [
    { id: 1, nome: "Lucas Rian", cargo: "Desenvolvedor Front-End" },
    { id: 2, nome: "Jojo", cargo: "Desenvolvedor Back-And" },
    { id: 3, nome: "Nicks", cargo: "Desenvolvedor FullStack" },
    { id: 4, nome: "Leozinho", cargo: "Design" },
  ];

  return (
    <div>
      <h1>Sistema de Perfil</h1>
      <hr />

      {listaDePerfil.map((pessoa) => (
        <Profile key={pessoa.id} nome={pessoa.nome} cargo={pessoa.cargo} />
      ))}
    </div>
  );
}

export default App;
