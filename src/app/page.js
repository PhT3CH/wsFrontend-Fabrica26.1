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

      {/* 👇 CORREÇÃO DO ERRO AQUI */}
      <div
        style={{
          paddingTop: "120px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "20px"
        }}
      >

        {/* PERSONAGENS */}
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

        {/* PAGINAÇÃO */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>

          <button onClick={function () { setPagina(1); }}>1</button>
          <button onClick={function () { setPagina(2); }}>2</button>
          <button onClick={function () { setPagina(3); }}>3</button>
          <button onClick={function () { setPagina(4); }}>4</button>
          <button onClick={function () { setPagina(5); }}>5</button>

        </div>

      </div>

    </div>
  );
}