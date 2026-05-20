import { useState, useEffect } from "react";

function Paises() {
  const [paises, setPaises] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population")
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setPaises(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const nomeFiltrado =
    input === ""
      ? paises
      : paises.filter((item) =>
          item.name.common.toLowerCase().includes(input.toLowerCase()),
        );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "2.5rem",
            marginBottom: "30px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Busque seu país!
        </h2>
        <input
          type="text"
          placeholder="Digite o nome do país..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "500px",
            display: "block",
            margin: "0 auto 40px",
            padding: "15px 20px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "50px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            outline: "none",
            transition: "all 0.3s ease",
          }}
        />
        {nomeFiltrado.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: "1.2rem",
              background: "rgba(255,255,255,0.2)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            Nenhum encontrado!
          </p>
        ) : (
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "25px",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {nomeFiltrado.map((item, index) => (
              <li
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "15px",
                  padding: "25px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.15)";
                }}
              >
                <h3
                  style={{
                    margin: "0 0 15px 0",
                    color: "#333",
                    fontSize: "1.4rem",
                    fontWeight: "600",
                  }}
                >
                  {item.name.common}
                </h3>
                <p
                  style={{
                    margin: "0 0 15px 0",
                    color: "#666",
                    fontSize: "1rem",
                  }}
                >
                  População: {item.population.toLocaleString("pt-BR")}
                </p>
                <img
                  src={item.flags.png}
                  alt={`Bandeira de ${item.name.common}`}
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Paises;
