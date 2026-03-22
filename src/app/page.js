"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  const [dados, setDados] = useState([]);
  const [texto, setTexto] = useState("");
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    carregar();
  }, [pagina, texto]);

  async function carregar() {
    let url;

    if (texto === "") {
      url = "https://rickandmortyapi.com/api/character?page=" + pagina;
    } else {
      url = "https://rickandmortyapi.com/api/character/?name=" + texto;
    }

    const resposta = await fetch(url);
    const resultado = await resposta.json();

    if (resultado.results) {
      setDados(resultado.results);
    } else {
      setDados([]);
    }
  }

  return (
    <div
      style={{
        backgroundImage: "url('/fundo.png')",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Header texto={texto} setTexto={setTexto} />

      <div
        style={{
          paddingTop: "120px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingBottom: "20px"
        }}
      >
        <div className="lista-personagens">
          {dados.map((item) => {
            return <Card key={item.id} character={item} />;
          })}
        </div>

        {dados.length === 0 && (
          <h2 style={{ color: "white", textAlign: "center" }}>
            Nenhum personagem encontrado
          </h2>
        )}

        {texto === "" && (
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button onClick={() => setPagina(1)} style={botao}>1</button>
            <button onClick={() => setPagina(2)} style={botao}>2</button>
            <button onClick={() => setPagina(3)} style={botao}>3</button>
            <button onClick={() => setPagina(4)} style={botao}>4</button>
            <button onClick={() => setPagina(5)} style={botao}>5</button>
          </div>
        )}

        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "12px",
            marginTop: "40px",
            padding: "10px",
            backgroundColor: "rgba(0,0,0,0.3)"
          }}
        >
          © 2026 Pablo Freire | Todos os direitos reservados
        </div>
      </div>
    </div>
  );
}

const botao = {
  margin: "5px",
  padding: "8px 15px",
  backgroundColor: "#22c55e",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};