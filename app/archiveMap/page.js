import Link from "next/link";

const planets = [
  {
    name: "GENESIS PROTOCOL",
    href: "/genesisProtocol",
    color: "linear-gradient(135deg,#00e5ff,#0066ff)",
    top: "75%",
    left: "50%",
  },
  {
    name: "GAMING NEXUS",
    href: "/gamingNexus",
    color: "linear-gradient(135deg,#8a2be2,#ff00ff)",
    top: "60%",
    left: "80%",
  },
  {
    name: "CULINARY SIGNAL",
    href: "/culinarySignal",
    color: "linear-gradient(135deg,#ff8c00,#ff3d00)",
    top: "60%",
    left: "20%",
  },
  {
    name: "ROYAL INTEGRITY",
    href: "/royalIntegrity",
    color: "linear-gradient(135deg,#ffd700,#ffb300)",
    top: "28%",
    left: "20%",
  },
  {
    name: "LEGAL ASCENSION",
    href: "/legalAscension",
    color: "linear-gradient(135deg,#00ff95,#00b894)",
    top: "28%",
    left: "80%",
  },
  {
    name: "PERSONAL VAULT",
    href: "/personalVault",
    color: "linear-gradient(135deg,#ff1744,#ff9100)",
    top: "8%",
    left: "50%",
  },
];

export default function ArchiveMap() {
  return (
    <main style={styles.page}>
      {/* Background stars */}
      <div style={styles.stars}></div>

      {/* Core */}
      <div style={styles.core}>
        <h2 style={{ margin: 0 }}>SUBJECT</h2>
        <h1 style={{ margin: "10px 0" }}>PUGGU</h1>
        <p style={{ margin: 0 }}>
          ARCHIVE RECOVERY IN PROGRESS
        </p>
      </div>

      {/* Planets */}
      {planets.map((planet) => (
        <div
          key={planet.name}
          style={{
            ...styles.planetContainer,
            top: planet.top,
            left: planet.left,
          }}
        >
          <div style={styles.label}>{planet.name}</div>

          <Link
            href={planet.href}
            style={{
              ...styles.planet,
              background: planet.color,
            }}
          >
            <div style={styles.highlight}></div>
          </Link>
        </div>
      ))}
    </main>
  );
}

const styles = {
  page: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "#000",
    overflow: "hidden",
    color: "white",
    fontFamily: "monospace",
  },

  stars: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, #09111f 0%, #000 75%)",
  },

  core: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    width: "220px",
    height: "220px",

    borderRadius: "50%",

    border: "2px solid cyan",

    boxShadow:
      "0 0 25px cyan, 0 0 60px rgba(0,255,255,0.4)",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    textAlign: "center",
  },

  planetContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },

  label: {
    marginBottom: "12px",
    fontSize: "12px",
    letterSpacing: "1px",
  },

  planet: {
    width: "90px",
    height: "90px",

    borderRadius: "50%",

    display: "block",

    position: "relative",

    border: "2px solid rgba(255,255,255,0.2)",

    boxShadow:
      "0 0 20px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.15)",

    overflow: "hidden",
  },

  highlight: {
    position: "absolute",

    top: "12px",
    left: "14px",

    width: "25px",
    height: "25px",

    borderRadius: "50%",

    background: "rgba(255,255,255,0.5)",

    filter: "blur(4px)",
  },
};