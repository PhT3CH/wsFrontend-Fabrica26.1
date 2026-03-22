export default function Header(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)"
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <img src="/logo.png" width="150" />
      </div>

      <input
        type="text"
        placeholder="Pesquisar"
        value={props.texto}
        onChange={function (e) {
          props.setTexto(e.target.value);
        }}
        style={{
          width: "400px",
          padding: "10px",
          borderRadius: "20px",
          border: "1px solid gray",
          backgroundColor: "#111",
          color: "white"
        }}
      />
    </div>
  );
}