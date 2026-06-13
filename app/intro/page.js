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
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h3>ARCHIVE STATUS: DECLASSIFIED</h3>

      <div style={{ maxWidth: "700px", marginTop: "30px" }}>
        <p>Researchers discovered an unusual subject.</p>

        <br />

        <p>
          Historical records are currently being reconstructed.
        </p>

        <br />

        <p>[ STORY SEQUENCE UNDER DEVELOPMENT ]</p>
      </div>

      <div style={{ marginTop: "60px" }}>
        <h1>SUBJECT: PUGGU</h1>

        <Link
          href="/archiveMap"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "12px 24px",
            border: "1px solid white",
            color: "white",
            textDecoration: "none",
          }}
        >
          ENTER ARCHIVE
        </Link>
      </div>
    </main>
  );
}