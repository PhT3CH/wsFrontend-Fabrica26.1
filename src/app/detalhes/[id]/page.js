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

  const descricoes = {
    1: "Rick Sanchez é um cientista genial e extremamente inteligente, conhecido por seu comportamento excêntrico e irresponsável. Ele viaja entre dimensões e vive criando invenções malucas.",
    2: "Morty Smith é um adolescente comum que acompanha Rick em aventuras perigosas pelo universo.",
    3: "Summer Smith é a irmã de Morty e começa a participar mais das aventuras com o tempo.",
    4: "Beth Smith é mãe de Morty e filha de Rick, com uma personalidade forte.",
    5: "Jerry Smith é o pai de Morty, inseguro mas sempre tentando ajudar."
  };

  function status(s) {
    if (s == "Alive") return "Vivo";
    if (s == "Dead") return "Morto";
    return "Desconhecido";
  }

  function especie(e) {
    if (e == "Human") return "Humano";
    if (e == "Alien") return "Alienígena";
    return e;
  }

  function genero(g) {
    if (g == "Male") return "Masculino";
    if (g == "Female") return "Feminino";
    if (g == "Genderless") return "Sem gênero";
    return "Desconhecido";
  }

  // 👇 AQUI ESTÁ O QUE VOCÊ PEDIU
  function origem(nome) {
    if (nome == "unknown") {
      return "Desconhecido";
    }

    if (nome.includes("Earth")) {
      return "Terra";
    }

    return nome;
  }

  function local(nome) {
    if (nome == "unknown") {
      return "Desconhecido";
    }

    if (nome.includes("Earth")) {
      return "Terra";
    }

    return nome;
  }

  if (dado == null) {
    return (
      <div
        style={{
          backgroundImage: "url('/fundo.png')",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: "url('/fundo.png')",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "100px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "30px"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "rgba(0, 0, 0, 0.72)",
          borderRadius: "12px",
          padding: "20px",
          color: "white"
        }}
      >
        <button
          onClick={function () {
            window.history.back();
          }}
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#166534",
            color: "white",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          Voltar
        </button>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          <div style={{ width: "260px", maxWidth: "100%" }}>
            <img
              src={dado.image}
              alt={dado.name}
              style={{
                width: "100%",
                borderRadius: "10px"
              }}
            />
          </div>

          <div style={{ flex: "1", minWidth: "250px" }}>
            <h1>{dado.name}</h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px"
              }}
            >
              <div style={box}>
                <strong>Status</strong>
                <p>{status(dado.status)}</p>
              </div>

              <div style={box}>
                <strong>Espécie</strong>
                <p>{especie(dado.species)}</p>
              </div>

              <div style={box}>
                <strong>Gênero</strong>
                <p>{genero(dado.gender)}</p>
              </div>

              <div style={box}>
                <strong>Episódios</strong>
                <p>{dado.episode.length}</p>
              </div>

              <div style={box}>
                <strong>Origem</strong>
                <p>{origem(dado.origin.name)}</p>
              </div>

              <div style={box}>
                <strong>Localização</strong>
                <p>{local(dado.location.name)}</p>
              </div>
            </div>

            <div
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(255,255,255,0.08)",
                padding: "15px",
                borderRadius: "10px"
              }}
            >
              <h3>Descrição</h3>

              <p>
                {descricoes[dado.id]
                  ? descricoes[dado.id]
                  : dado.name + " é um personagem da série Rick and Morty."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 👇 estilo simples reaproveitado
const box = {
  backgroundColor: "rgba(255,255,255,0.08)",
  padding: "10px",
  borderRadius: "10px",
  minWidth: "150px",
  flex: "1"
};