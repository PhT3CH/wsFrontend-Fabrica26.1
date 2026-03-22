"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  const [dados, setDados] = useState([]);
  const [texto, setTexto] = useState("");
  const [pagina, setPagina] = useState(1);

  useEffect(function () {
    pegar();
  }, [pagina]);

  async function pegar() {
    let res = await fetch("https://rickandmortyapi.com/api/character?page=" + pagina);
    let info = await res.json();
    setDados(info.results);
  }

  function mostrar() {
    let lista = [];

    for (let i = 0; i < dados.length; i++) {
      let nome = dados[i].name.toLowerCase();
      let busca = texto.toLowerCase();

      if (nome.includes(busca)) {
        lista.push(dados[i]);
      }
    }

    return lista;
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
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "20px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {mostrar().map(function (item) {
            return <Card key={item.id} character={item} />;
          })}
        </div>

        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <button
            onClick={function () { setPagina(1); }}
            onMouseEnter={function (e) { e.target.style.backgroundColor = "#16a34a"; }}
            onMouseLeave={function (e) { e.target.style.backgroundColor = "#22c55e"; }}
            style={botao}
          >
            1
          </button>

          <button
            onClick={function () { setPagina(2); }}
            onMouseEnter={function (e) { e.target.style.backgroundColor = "#16a34a"; }}
            onMouseLeave={function (e) { e.target.style.backgroundColor = "#22c55e"; }}
            style={botao}
          >
            2
          </button>

          <button
            onClick={function () { setPagina(3); }}
            onMouseEnter={function (e) { e.target.style.backgroundColor = "#16a34a"; }}
            onMouseLeave={function (e) { e.target.style.backgroundColor = "#22c55e"; }}
            style={botao}
          >
            3
          </button>

          <button
            onClick={function () { setPagina(4); }}
            onMouseEnter={function (e) { e.target.style.backgroundColor = "#16a34a"; }}
            onMouseLeave={function (e) { e.target.style.backgroundColor = "#22c55e"; }}
            style={botao}
          >
            4
          </button>

          <button
            onClick={function () { setPagina(5); }}
            onMouseEnter={function (e) { e.target.style.backgroundColor = "#16a34a"; }}
            onMouseLeave={function (e) { e.target.style.backgroundColor = "#22c55e"; }}
            style={botao}
          >
            5
          </button>
        </div>
      </div>
    </div>
  );
}

const botao = {
  margin: "0 6px",
  padding: "8px 14px",
  backgroundColor: "#22c55e",
  color: "black",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.2s"
};