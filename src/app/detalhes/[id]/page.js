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
  1: "Rick é um gênio nível absurdo… tipo, inteligente demais até pra se importar com qualquer coisa. Ele vive bêbado, criando invenções que quebram a realidade e arrastando todo mundo pra problemas interdimensionais. Basicamente, se algo deu errado em escala cósmica, provavelmente foi ideia dele.",
  2: "Morty é um adolescente normal que só queria viver em paz… mas infelizmente tem o Rick como avô. Vive traumatizado, gritando e quase morrendo em todas as aventuras. Mesmo assim, às vezes ele surpreende e mostra que não é só o 'coitado da vez'.",
  3: "Summer começou só querendo saber de popularidade e vida social, mas acabou sendo jogada no meio do caos também. E o pior: ela se adapta bem rápido. Em alguns momentos, parece até mais confortável com o absurdo do que o próprio Morty.",
  4: "Beth é a prova de que problemas familiares podem escalar pra nível científico. Veterinária de cavalos, emocionalmente complicada e claramente parecida demais com o Rick — o que ela odeia admitir. Vive naquele dilema: odiar o pai ou virar ele.",
  5: "Jerry é… o Jerry. Ele tenta ser um bom pai, mas parece que nasceu com talento pra dar errado. Inseguro, carente e constantemente humilhado, principalmente pelo Rick. Ainda assim, de alguma forma, ele continua ali sobrevivendo.",
  6: "Abadango Cluster Princess parece super importante e poderosa… até você perceber que ela tá presa numa missão que claramente vai dar errado. Mais uma vítima do clássico 'isso não vai acabar bem' do Rick.",
  7: "Abradolf Lincler é literalmente o Rick brincando de Deus e errando feio. A ideia era criar um líder equilibrado… o resultado foi um ser completamente instável e uma péssima decisão científica (mas engraçada).",
  8: "Adjudicator Rick é um Rick que virou juiz, o que já é preocupante por si só. Imagina alguém com zero paciência e sarcasmo infinito decidindo o destino dos outros. Pois é, exatamente isso.",
  9: "Agency Director é o cara que tenta manter o controle de coisas que claramente não têm controle. Tipo alienígenas, tecnologias malucas e… Rick. Boa sorte pra ele, porque não tem salário que pague isso.",
  10: "Alan Rails é tipo um herói com poderes… só que no universo errado. Ele até tenta ser sério e heroico, mas quando você coloca isso no meio do caos de Rick and Morty, vira só mais uma situação esquisita."
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