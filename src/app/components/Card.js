export default function Card({ character }) {

  function traduzStatus(status) {
    if (status === "Alive") return "Vivo";
    if (status === "Dead") return "Morto";
    return "Desconhecido";
  }

  function traduzEspecie(especie) {
    if (especie === "Human") return "Humano";
    if (especie === "Alien") return "Alienígena";
    return especie;
  }

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <img src={character.image} width="150" />
      <h3>{character.name}</h3>
      <p>Status: {traduzStatus(character.status)}</p>
      <p>Espécie: {traduzEspecie(character.species)}</p>
    </div>
  );
}