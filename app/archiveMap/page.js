import Link from "next/link";

const planets = [
  {
    name: "GENESIS PROTOCOL",
    href: "/genesisProtocol",
    color: "linear-gradient(135deg,#00e5ff,#0066ff)",
    top: "83%",
    left: "50%",
  },
  {
    name: "GAMING NEXUS",
    href: "/gamingNexus",
    color: "linear-gradient(135deg,#8a2be2,#ff00ff)",
    top: "60%",
    left: "82%",
  },
  {
    name: "CULINARY SIGNAL",
    href: "/culinarySignal",
    color: "linear-gradient(135deg,#ff8c00,#ff3d00)",
    top: "60%",
    left: "18%",
  },
  {
    name: "ROYAL INTEGRITY",
    href: "/royalIntegrity",
    color: "linear-gradient(135deg,#ffd700,#ffb300)",
    top: "28%",
    left: "18%",
  },
  {
    name: "LEGAL ASCENSION",
    href: "/legalAscension",
    color: "linear-gradient(135deg,#00ff95,#00b894)",
    top: "28%",
    left: "82%",
  },
  {
    name: "PERSONAL VAULT",
    href: "/personalVault",
    color: "linear-gradient(135deg,#ff1744,#ff9100)",
    top: "14%",
    left: "50%",
  },
];

export default function ArchiveMap() {
  return (
    <main style={styles.page}>
      <div style={styles.spaceGlow}></div>
      <div style={styles.stars}></div>

      {/* Core */}
      <div style={styles.core}>
        <h2 style={{ margin: 0 }}>SUBJECT</h2>

        <h1
          style={{
            marginTop: "12px",
            marginBottom: "12px",
            fontSize: "42px",
          }}
        >
          PUGGU
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
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
            <div style={styles.shadow}></div>
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
    overflow: "hidden",
    background: "#000",
    color: "white",
    fontFamily: "monospace",
  },

  spaceGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(0,120,255,0.12) 0%, transparent 70%)",
  },

  stars: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, #07101d 0%, #000 75%)",
  },

  core: {
    position: "absolute",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",

    width: "260px",
    height: "260px",

    borderRadius: "50%",

    border: "2px solid cyan",

    boxShadow:
      "0 0 25px cyan, 0 0 80px rgba(0,255,255,0.45)",

    background:
      "radial-gradient(circle at 35% 35%, #07172f 0%, #020712 70%)",

    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",

    textAlign: "center",

    zIndex: 2,
  },

  planetContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 3,
  },

  label: {
    marginBottom: "12px",
    fontSize: "12px",
    letterSpacing: "2px",
  },

  planet: {
    width: "100px",
    height: "100px",

    borderRadius: "50%",

    display: "block",

    position: "relative",

    overflow: "hidden",

    border: "1px solid rgba(255,255,255,0.15)",

    boxShadow:
      "0 0 20px rgba(255,255,255,0.25), 0 0 60px rgba(255,255,255,0.12)",

    transition: "0.3s",
  },

  shadow: {
    position: "absolute",

    right: "-15px",
    top: "-5px",

    width: "90px",
    height: "110px",

    borderRadius: "50%",

    background:
      "linear-gradient(to left, rgba(0,0,0,0.45), transparent)",
  },

  highlight: {
    position: "absolute",

    top: "14px",
    left: "16px",

    width: "28px",
    height: "28px",

    borderRadius: "50%",

    background: "rgba(255,255,255,0.6)",

    filter: "blur(6px)",
  },
};