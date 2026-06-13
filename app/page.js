import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
        textAlign: "center",
      }}
    >
      <h3 style={{ opacity: 0.7 }}>
        Version 18.0
      </h3>

      <Link
        href="/intro"
        style={{
          marginTop: "30px",
          padding: "15px 35px",
          border: "1px solid white",
          color: "white",
          textDecoration: "none",
          fontSize: "1.2rem",
        }}
      >
        START BDAY SIMULATION
      </Link>
    </main>
  );
}