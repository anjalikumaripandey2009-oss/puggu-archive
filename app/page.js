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
      <Link href="/intro">
        <div
          style={{
            padding: "18px 36px",
            border: "1px solid white",
            color: "white",
            fontSize: "1.2rem",
            letterSpacing: "2px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          START BDAY SIMULATION
        </div>
      </Link>
    </main>
  );
}