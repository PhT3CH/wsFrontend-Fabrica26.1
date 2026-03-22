"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

export default function Home() {
  const [dados, setDados] = useState([]);
  const [texto, setTexto] = useState("");
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    carregar();
  }, [pagina]);

  async function carregar() {
    let resposta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    let resultado = await resposta.json();
    setDados(resultado.results || []);
  }

  function filtrar() {
    return dados.filter(function (item) {
      return item.name.toLowerCase().includes(texto.toLowerCase());
    });
  }

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh" }}>
      <Header />

      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "#00ffcc" }}>Lista de personagens</h2>

        <input
          type="text"
          placeholder="Digite um nome"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          style={{ padding: "5px", marginBottom: "20px" }}
        />

        
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filtrar().map(function (item) {
            return <Card key={item.id} character={item} />;
          })}
        </div>

        
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => setPagina(1)}>1</button>
          <button onClick={() => setPagina(2)}>2</button>
          <button onClick={() => setPagina(3)}>3</button>
          <button onClick={() => setPagina(4)}>4</button>
          <button onClick={() => setPagina(5)}>5</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}