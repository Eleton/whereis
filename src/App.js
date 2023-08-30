import data from "./data.json";

function App() {
  const currentDate = Date.now();
  const { title, subtitle } = data.find(
    (event) =>
      new Date(event.from).getTime() < currentDate &&
      new Date(event.to).getTime() > currentDate
  ) || { title: "Sweden", subtitle: "Stockholm" };
  return (
    <div
      style={{
        height: "100dvh",
        backgroundColor: "#800020",
        color: "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: 36, fontWeight: "bold" }}>{title}</div>
      <div style={{ fontSize: 24, fontWeight: "bold" }}>{subtitle}</div>
    </div>
  );
}

export default App;
