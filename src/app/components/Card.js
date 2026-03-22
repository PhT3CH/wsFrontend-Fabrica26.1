"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Card(props) {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  let p = props.character;

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
        backgroundColor: hover ? "white" : "#111",
        borderRadius: "10px",
        padding: "10px",
        color: hover ? "black" : "white",
        cursor: "pointer",
        textAlign: "center",
        transform: hover ? "scale(1.03)" : "scale(1)",
        transition: "0.2s",
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "220px",
        margin: "0 auto"
      }}
    >
      <img
        src={p.image}
        alt={p.name}
        style={{
          width: "100%",
          borderRadius: "10px",
          display: "block"
        }}
      />

      <h3 style={{ marginTop: "10px", fontSize: "18px" }}>
        {p.name}
      </h3>

      <p style={{ fontSize: "14px", marginBottom: "0" }}>
        {status(p.status)} • {especie(p.species)}
      </p>
    </div>
  );
}