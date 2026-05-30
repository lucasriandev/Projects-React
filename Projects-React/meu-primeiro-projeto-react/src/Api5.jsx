import { useState, useEffect } from "react";

function Receitas() {
  const [receitas, setReceitas] = useState([]);
  const [input, setInput] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (busca === "") return;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setReceitas(dados.meals || []);
        setInput("");
      })
      .catch((erro) => {
        console.log(erro, "errooooo");
      });
  }, [busca]);

  const styles = {
    container: {
      padding: "40px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#fff",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    },
    searchBox: {
      display: "flex",
      gap: "10px",
      marginBottom: "30px",
      width: "100%",
      maxWidth: "500px",
    },
    input: {
      flex: 1,
      padding: "12px 16px",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      outline: "none",
    },
    button: {
      padding: "12px 24px",
      border: "none",
      borderRadius: "8px",
      background: "#e94560",
      color: "#fff",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
    },
    list: {
      listStyle: "none",
      padding: 0,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
      width: "100%",
      maxWidth: "900px",
    },
    card: {
      background: "rgba(255,255,255,0.1)",
      borderRadius: "12px",
      padding: "15px",
      textAlign: "center",
      backdropFilter: "blur(10px)",
      transition: "transform 0.3s",
    },
    image: {
      width: "100%",
      borderRadius: "8px",
      marginBottom: "10px",
    },
    mealName: {
      fontSize: "1.1rem",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          min-height: 100vh;
        }
      `}</style>
      <h1 style={styles.title}>🍽 Buscar Receitas!</h1>
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Digite sua receita"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={() => setBusca(input)} style={styles.button}>Buscar</button>
      </div>
      <ul style={styles.list}>
        {receitas.map((item, index) => (
          <li key={index} style={styles.card}>
            <img src={item.strMealThumb} alt={item.strMeal} style={styles.image} />
            <strong style={styles.mealName}>{item.strMeal}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Receitas;
