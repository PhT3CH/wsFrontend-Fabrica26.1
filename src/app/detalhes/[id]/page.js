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
    1: "Rick é um cientista muito inteligente, mas também bem irresponsável. Ele vive viajando entre dimensões e se metendo em confusão.",
    2: "Morty é um adolescente comum que acaba participando das aventuras malucas do seu avô Rick, mesmo morrendo de medo.",
    3: "Summer é a irmã do Morty. No começo ela fica mais de lado, mas depois começa a participar mais das aventuras.",
    4: "Beth é a mãe do Morty e filha do Rick. Ela é médica de cavalos e tem uma personalidade forte.",
    5: "Jerry é o pai do Morty. Ele tenta ser um bom pai, mas muitas vezes é inseguro e acaba sendo zoado.",
    6: "Abadango Cluster Princess é uma líder alienígena que aparece em um episódio durante uma missão espacial.",
    7: "Abradolf Lincler é uma mistura de Abraham Lincoln com Adolf Hitler, criada pelo Rick.",
    8: "Adjudicator Rick é uma versão alternativa do Rick que trabalha como juiz.",
    9: "Agency Director é o diretor de uma agência governamental que tenta lidar com situações fora do normal.",
    10: "Alan Rails é um personagem com poderes especiais que aparece em uma equipe de heróis."
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
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.70)",
            padding: "20px",
            borderRadius: "12px"
          }}
        >
          <h2 style={{ margin: 0 }}>Carregando personagem...</h2>
        </div>
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
          maxWidth: "950px",
          margin: "0 auto",
          backgroundColor: "rgba(0, 0, 0, 0.72)",
          borderRadius: "16px",
          padding: "20px",
          color: "white"
        }}
      >
        <button
          onClick={function () {
            window.history.back();
          }}
          style={{
            padding: "9px 14px",
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
            gap: "25px",
            flexWrap: "wrap",
            alignItems: "flex-start"
          }}
        >
          <div style={{ width: "260px" }}>
            <img
              src={dado.image}
              alt={dado.name}
              style={{
                width: "100%",
                borderRadius: "14px",
                display: "block"
              }}
            />
          </div>

          <div style={{ flex: "1", minWidth: "260px" }}>
            <h1
              style={{
                marginTop: "0",
                marginBottom: "15px",
                fontSize: "32px"
              }}
            >
              {dado.name}
            </h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px"
              }}
            >
              <div style={caixa}>
                <strong>Status</strong>
                <p style={textoInfo}>{status(dado.status)}</p>
              </div>

              <div style={caixa}>
                <strong>Espécie</strong>
                <p style={textoInfo}>{especie(dado.species)}</p>
              </div>

              <div style={caixa}>
                <strong>Gênero</strong>
                <p style={textoInfo}>{genero(dado.gender)}</p>
              </div>

              <div style={caixa}>
                <strong>Episódios</strong>
                <p style={textoInfo}>{dado.episode.length}</p>
              </div>

              <div style={caixa}>
                <strong>Origem</strong>
                <p style={textoInfo}>{dado.origin.name}</p>
              </div>

              <div style={caixa}>
                <strong>Localização</strong>
                <p style={textoInfo}>{dado.location.name}</p>
              </div>
            </div>

            <div
              style={{
                marginTop: "18px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "16px",
                lineHeight: "1.6"
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "10px" }}>Descrição</h3>

              <p style={{ margin: 0 }}>
                {descricoes[dado.id]
                  ? descricoes[dado.id]
                  : dado.name + " é um personagem da série Rick and Morty. Ele aparece em vários momentos da história e faz parte do universo da série."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const caixa = {
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  borderRadius: "10px",
  padding: "12px"
};

const textoInfo = {
  margin: "6px 0 0 0"
};