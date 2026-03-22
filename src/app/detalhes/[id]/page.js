"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Detalhe() {

  const params = useParams();

  const [dado, setDado] = useState(null);

  useEffect(function () {
    if (params.id) {
      pegar();
    }
  }, [params]);

  async function pegar() {
    let res = await fetch("https://rickandmortyapi.com/api/character/" + params.id);
    let info = await res.json();
    setDado(info);
  }

  function status(s) {
    if (s == "Alive") {
      return "Vivo";
    }

    if (s == "Dead") {
      return "Morto";
    }

    return "Desconhecido";
  }

  function especie(e) {
    if (e == "Human") {
      return "Humano";
    }

    if (e == "Alien") {
      return "Alienígena";
    }

    return e;
  }

  if (dado == null) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "white" }}>

      <h1 style={{ textAlign: "center" }}>{dado.name}</h1>

      <div style={{ display: "flex", padding: "20px" }}>

        {/* imagem */}
        <div>
          <img src={dado.image} width="250" />
        </div>

        {/* info */}
        <div style={{ marginLeft: "30px" }}>

          <p>ID: {dado.id}</p>
          <p>Status: {status(dado.status)}</p>
          <p>Espécie: {especie(dado.species)}</p>
          <p>Gênero: {dado.gender}</p>
          <p>Origem: {dado.origin.name}</p>
          <p>Localização: {dado.location.name}</p>
          <p>Episódios: {dado.episode.length}</p>

          <p style={{ marginTop: "20px" }}>
            {dado.name} é um personagem. Ele está {status(dado.status).toLowerCase()}.
            Ele é {especie(dado.species).toLowerCase()}.
            Veio de {dado.origin.name}.
            Está em {dado.location.name}.
          </p>

          <button
            onClick={function () {
              window.history.back();
            }}
          >
            Voltar
          </button>

        </div>

      </div>

    </div>
  );
}