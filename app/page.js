import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
      }}
    >
      <Link
        href="/intro"
        style={{
          padding: "18px 36px",
          border: "1px solid white",
          color: "white",
          fontSize: "1.2rem",
          letterSpacing: "2px",
          textDecoration: "none",
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        START BDAY SIMULATION
      </Link>
    </main>
  );
}