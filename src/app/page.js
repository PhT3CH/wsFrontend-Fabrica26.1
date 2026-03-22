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
  }, [pagina, texto]);

  async function pegar() {
    let url = "";

    if (texto == "") {
      url = "https://rickandmortyapi.com/api/character?page=" + pagina;
    } else {
      url = "https://rickandmortyapi.com/api/character/?name=" + texto;
    }

    let res = await fetch(url);
    let info = await res.json();

    if (info.results) {
      setDados(info.results);
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
          paddingTop: "110px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingBottom: "20px"
        }}
      >
        <div className="lista-personagens">
          {dados.map(function (item) {
            return <Card key={item.id} character={item} />;
          })}
        </div>

        {dados.length == 0 && (
          <h2 style={{ color: "white", textAlign: "center" }}>
            Nenhum personagem encontrado
          </h2>
        )}

        {texto == "" && (
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button onClick={function () { setPagina(1); }} style={botao}>1</button>
            <button onClick={function () { setPagina(2); }} style={botao}>2</button>
            <button onClick={function () { setPagina(3); }} style={botao}>3</button>
            <button onClick={function () { setPagina(4); }} style={botao}>4</button>
            <button onClick={function () { setPagina(5); }} style={botao}>5</button>
          </div>
        )}
      </div>
    </div>
  );
}

const botao = {
  margin: "4px",
  padding: "8px 14px",
  backgroundColor: "#22c55e",
  color: "black",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};