"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const lines = [
  "// SYSTEM INITIALIZATION COMPLETE",
  "A restricted archive node has been accessed.",
  "Signal integrity unstable.",
  "Recovered fragments are incomplete.",
  "Memory layers partially corrupted.",
  "",
  "A single stable identifier has been detected.",
  "",
  "SUBJECT: PUGGU",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // 🔥 FIXED STATES
  const [glitchStarted, setGlitchStarted] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [pixels, setPixels] = useState([]);

  // ================= TYPEWRITER =================
  useEffect(() => {
    if (lineIndex >= lines.length) {
      const t = setTimeout(() => setShowButton(true), 800);
      return () => clearTimeout(t);
    }

    const current = lines[lineIndex];

    if (charIndex < current.length) {
      const t = setTimeout(() => {
        setText((p) => p + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 28);

      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText((p) => p + "\n");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 120);

      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex]);

  // ================= START AFTER 5s =================
  useEffect(() => {
    const t = setTimeout(() => {
      setGlitchStarted(true);
    }, 5000);

    return () => clearTimeout(t);
  }, []);

  // ================= REAL REPEATING GLITCH =================
  useEffect(() => {
    if (!glitchStarted) return;

    const interval = setInterval(() => {
      // TURN ON GLITCH BURST
      setGlitchActive(true);

      // VIBGYOR PIXELS
      const newPixels = Array.from({ length: 16 }).map(() => ({
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        width: Math.random() * 40 + 6 + "px",
        height: Math.random() * 6 + 2 + "px",
        background: [
          "rgba(148,0,211,0.6)",
          "rgba(75,0,130,0.6)",
          "rgba(0,0,255,0.6)",
          "rgba(0,255,0,0.5)",
          "rgba(255,255,0,0.5)",
          "rgba(255,127,0,0.5)",
          "rgba(255,0,0,0.55)",
        ][Math.floor(Math.random() * 7)],
      }));

      setPixels(newPixels);

      // TURN OFF AFTER BURST
      setTimeout(() => {
        setGlitchActive(false);
        setPixels([]);
      }, 200);

    }, 2000); // 
<div className="particles" />
    return () => clearInterval(interval);
  }, [glitchStarted]);

  return (
    <main
      style={{
        ...styles.wrapper,
        transform: glitchActive
          ? `translate(${Math.random() * 6 - 3}px, ${Math.random() * 2 - 1}px)`
          : "none",
        filter: glitchActive
          ? "contrast(1.8) brightness(1.4) saturate(1.6)"
          : "none",
      }}
    >
      {/* PIXEL GLITCH */}
      {pixels.map((p, i) => (
        <div key={i} style={{ ...styles.pixel, ...p }} />
      ))}

      {/* OVERLAY */}
      {glitchActive && <div style={styles.overlay} />}

      <div style={styles.container}>
        <pre style={styles.text}>
          {text}
          <span style={styles.cursor}>█</span>
        </pre>

        {showButton && (
          <div style={styles.buttonWrapper}>
            <Link href="/archiveMap" style={styles.button}>
              ENTER ARCHIVE
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "black",
    color: "#cbd5e1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "monospace",
    overflow: "hidden",
    transition: "transform 0.08s ease",
  },

  container: {
    maxWidth: "800px",
    position: "relative",
    zIndex: 2,
  },

  text: {
    whiteSpace: "pre-wrap",
    fontSize: "14px",
    lineHeight: "1.8",
  },

  cursor: {
    animation: "blink 0.8s infinite",
  },

  buttonWrapper: {
    marginTop: "50px",
    textAlign: "center",
    animation: "spawn 1s ease-out",
  },

  button: {
    padding: "14px 26px",
    border: "1px solid #9ca3af",
    color: "white",
    textDecoration: "none",
    letterSpacing: "2px",
    display: "inline-block",
    animation: "glow 2s infinite alternate",
  },

  pixel: {
    position: "fixed",
    zIndex: 999,
    pointerEvents: "none",
    opacity: 0.95,
    filter: "blur(0.4px)",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(255,255,255,0.04), transparent, rgba(255,255,255,0.02))",
    zIndex: 998,
    pointerEvents: "none",
  },
};