import Link from "next/link";

export default function ArchiveMap() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        fontFamily: "monospace",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>SUBJECT: PUGGU</h1>

      <p style={{ marginTop: "15px" }}>
        Planetary archives detected.
      </p>

      <div
        style={{
          marginTop: "50px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "25px",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Link href="/genesisProtocol">🪐 Genesis Protocol</Link>

        <Link href="/gamingNexus">🎮 Gaming Nexus</Link>

        <Link href="/culinarySignal">🍔 Culinary Signal Archive</Link>

        <Link href="/chaosDivision">⚠️ Chaos Division</Link>

        <Link href="/royalIntegrity">🛡 Royal Integrity Protocol</Link>

        <Link href="/legalAscension">⚖ Legal Ascension Chamber</Link>

        <Link href="/personalVault">💖 Personal Timeline Vault</Link>
      </div>
    </main>
  );
}