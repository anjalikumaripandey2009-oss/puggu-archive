import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
      }}
    >
      <Link
        href="/intro"
        style={{
          padding: "18px 40px",
          border: "1px solid white",
          color: "white",
          textDecoration: "none",
          fontSize: "1.2rem",
          letterSpacing: "2px",
        }}
      >
        START BDAY SIMULATION
      </Link>
    </main>
  );
}