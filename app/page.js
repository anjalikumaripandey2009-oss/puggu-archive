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
          color: "white",
          textDecoration: "none",
          border: "1px solid white",
          padding: "18px 36px",
          fontSize: "1.2rem",
          letterSpacing: "2px",
        }}
      >
        START BDAY SIMULATION
      </Link>
    </main>
  );
}