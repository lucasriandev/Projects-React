import Profile from "./Profile";

function App() {
  return (
    <div>
      <h1>Sistema de Perfis</h1>
      <hr />

      <Profile nome="Lucas Rian" cargo="Desenvolvedor Front-End" />
      <Profile nome="Leozinho" cargo="Design" />
      <Profile nome="Nicks" cargo="Desenvolvedor Back-End " />
    </div>
  );
}

export default App;
