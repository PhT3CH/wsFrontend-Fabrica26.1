"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Card(props) {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  let p = props.character;

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

  return (
    <div
      onClick={function () {
        router.push("/detalhes/" + p.id);
      }}
      onMouseEnter={function () {
        setHover(true);
      }}
      onMouseLeave={function () {
        setHover(false);
      }}
      style={{
        backgroundColor: hover ? "#1f2937" : "#111",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
        width: "18%",
        color: "white",
        cursor: "pointer",
        textAlign: "center",
        transform: hover ? "scale(1.05)" : "scale(1)",
        transition: "0.2s"
      }}
    >
      <img
        src={p.image}
        width="150"
        style={{ borderRadius: "10px" }}
      />

      <h3 style={{ marginTop: "10px" }}>{p.name}</h3>

      <p style={{ fontSize: "14px" }}>
        {status(p.status)} • {especie(p.species)}
      </p>
    </div>
  );
}