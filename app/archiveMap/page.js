import Link from "next/link";

const planets = [
 {
  name: "GENESIS PROTOCOL",
  href: "/genesisProtocol",
  color: "linear-gradient(135deg,#00e5ff,#0066ff)",
  type: "ice",
  top: "83%",
  left: "50%",
  },
  {
  name: "GAMING NEXUS",
  href: "/gamingNexus",
  color: "linear-gradient(135deg,#8a2be2,#ff00ff)",
  type: "cyber",
  top: "60%",
  left: "82%",
  },
  {
    name: "CULINARY SIGNAL",
    href: "/culinarySignal",
    color: "linear-gradient(135deg,#ff8c00,#ff3d00)",
    type: "lava",
    top: "60%",
    left: "18%",
  },
  {
    name: "ROYAL INTEGRITY",
    href: "/royalIntegrity",
    color: "linear-gradient(135deg,#ffd700,#ffb300)",
    type: "gas",
    top: "28%",
    left: "18%",
  },
  {
    name: "LEGAL ASCENSION",
    href: "/legalAscension",
    color: "linear-gradient(135deg,#00ff95,#00b894)",
    type: "earth",
    top: "28%",
    left: "82%",
  },
  {
    name: "PERSONAL VAULT",
    href: "/personalVault",
    color: "linear-gradient(135deg,#ff1744,#ff9100)",
    type: "nebula",
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
            fontSize: "13px",
            letterSpacing: "4px",
            color: "#8ffcff",
            textShadow: "0 0 12px cyan",
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

  {planet.type === "ice" && (
    <>
      <div style={styles.ice1}></div>
      <div style={styles.ice2}></div>
    </>
  )}

  {planet.type === "cyber" && (
    <>
      <div style={styles.circuit1}></div>
      <div style={styles.circuit2}></div>
    </>
  )}

  {planet.type === "lava" && (
    <>
      <div style={styles.lava1}></div>
      <div style={styles.lava2}></div>
    </>
  )}

  {planet.type === "gas" && (
  <>
    <div style={styles.ring}></div>
    <div style={styles.band1}></div>
    <div style={styles.band2}></div>
    <div style={styles.band3}></div>
  </>
)}
  {planet.type === "earth" && (
    <>
      <div style={styles.continent1}></div>
      <div style={styles.continent2}></div>
    </>
  )}

  {planet.type === "nebula" && (
    <>
      <div style={styles.cloud1}></div>
      <div style={styles.cloud2}></div>
    </>
  )}

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
  background: `
    radial-gradient(circle at 20% 20%, rgba(140,0,255,.18), transparent 25%),
    radial-gradient(circle at 80% 30%, rgba(0,120,255,.18), transparent 25%),
    radial-gradient(circle at 50% 80%, rgba(255,0,150,.12), transparent 30%),
    radial-gradient(circle at center, #07101d 0%, #000 75%)
  `,
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
  marginBottom: "14px",
  fontSize: "12px",
  letterSpacing: "3px",
  color: "#d8faff",
  textShadow: "0 0 8px cyan",
},

  planet: {
    width: "120px",
    height: "120px",

    borderRadius: "50%",

    display: "block",

    position: "relative",

    overflow: "hidden",

    border: "1px solid rgba(255,255,255,0.15)",

    boxShadow:
  "0 0 30px rgba(255,255,255,.35), 0 0 80px rgba(255,255,255,.15)",

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
ice1:{
 position:"absolute",
 width:"60px",
 height:"2px",
 background:"rgba(255,255,255,.5)",
 transform:"rotate(25deg)",
 top:"40px",
 left:"15px"
},

ice2:{
 position:"absolute",
 width:"45px",
 height:"2px",
 background:"rgba(255,255,255,.4)",
 transform:"rotate(-30deg)",
 top:"55px",
 left:"25px"
},

circuit1:{
 position:"absolute",
 width:"50px",
 height:"3px",
 background:"#00ffff",
 top:"30px",
 left:"20px"
},

circuit2:{
 position:"absolute",
 width:"3px",
 height:"40px",
 background:"#00ffff",
 top:"30px",
 left:"45px"
},

lava1:{
 position:"absolute",
 width:"80px",
 height:"12px",
 background:"rgba(255,255,0,.25)",
 top:"30px"
},

lava2:{
 position:"absolute",
 width:"70px",
 height:"10px",
 background:"rgba(255,255,0,.2)",
 top:"60px"
},

band1:{
 position:"absolute",
 width:"100%",
 height:"10px",
 background:"rgba(255,255,255,.15)",
 top:"20px"
},

band2:{
 position:"absolute",
 width:"100%",
 height:"12px",
 background:"rgba(255,255,255,.1)",
 top:"45px"
},

band3:{
 position:"absolute",
 width:"100%",
 height:"10px",
 background:"rgba(255,255,255,.15)",
 top:"70px"
},

continent1:{
 position:"absolute",
 width:"35px",
 height:"20px",
 background:"rgba(0,100,0,.5)",
 borderRadius:"50%",
 top:"35px",
 left:"18px"
},

continent2:{
 position:"absolute",
 width:"28px",
 height:"18px",
 background:"rgba(0,100,0,.5)",
 borderRadius:"50%",
 top:"60px",
 left:"50px"
},

cloud1:{
 position:"absolute",
 width:"55px",
 height:"25px",
 background:"rgba(255,255,255,.12)",
 borderRadius:"50%",
 top:"30px",
 left:"10px"
},

cloud2:{
 position:"absolute",
 width:"45px",
 height:"20px",
 background:"rgba(255,255,255,.1)",
 borderRadius:"50%",
 top:"55px",
 left:"35px"
},
ring:{
 position:"absolute",
 width:"140px",
 height:"32px",
 border:"3px solid rgba(255,255,255,.35)",
 borderRadius:"50%",
 top:"34px",
 left:"-20px",
 transform:"rotate(-20deg)",
},
};
