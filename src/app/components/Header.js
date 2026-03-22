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
        gap: "10px",
        padding: "10px 15px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)",
        boxSizing: "border-box",
        flexWrap: "wrap"
      }}
    >
      <img src="/logo.png" width="140" />

      <input
        type="text"
        placeholder="Pesquisar"
        value={props.texto}
        onChange={function (e) {
          props.setTexto(e.target.value);
        }}
        style={{
          flex: "1",
          minWidth: "220px",
          maxWidth: "500px",
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