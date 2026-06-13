import Link from "next/link";

export default function Intro() {
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
      }}
    >
      <h1>SUBJECT: PUGGU</h1>

      <Link
        href="/archiveMap"
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          border: "1px solid white",
          color: "white",
          textDecoration: "none",
        }}
      >
        ENTER ARCHIVE
      </Link>
    </main>
  );
}