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

  const [glitch, setGlitch] = useState(false);
  const [startGlitch, setStartGlitch] = useState(false);

  // TYPEWRITER
  useEffect(() => {
    if (lineIndex >= lines.length) {
      const t = setTimeout(() => setShowButton(true), 800);
      return () => clearTimeout(t);
    }

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const t = setTimeout(() => {
        setText((prev) => prev + currentLine[charIndex]);
        setCharIndex(charIndex + 1);
      }, 28);

      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText((prev) => prev + "\n");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 120);

      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex]);

  // START GLITCH AFTER 5 SECONDS
  useEffect(() => {
    const t = setTimeout(() => {
      setStartGlitch(true);
    }, 5000);

    return () => clearTimeout(t);
  }, []);

  // RANDOM GLITCH WHILE TYPING (only after 5s)
  useEffect(() => {
    if (!startGlitch) return;

    const interval = setInterval(() => {
      const chance = Math.random();

      if (chance < 0.7) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 150);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [startGlitch]);

  return (
    <main
      style={{
        ...styles.wrapper,
        transform: glitch
          ? `translate(${Math.random() * 6 - 3}px, ${Math.random() * 3 - 1}px)`
          : "translate(0px,0px)",
        filter: glitch
          ? "contrast(1.8) brightness(1.3) saturate(1.5)"
          : "none",
      }}
    >
      {/* PIXEL GLITCH LAYERS */}
      {glitch && <div style={styles.noise} />}
      {glitch && <div style={styles.rgbSplit} />}

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
    textAlign: "left",
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
    animation: "spawn 1.2s ease-out",
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

  /* ===== GLITCH EFFECTS ===== */

  noise: {
    position: "fixed",
    inset: 0,
    background:
      "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, transparent 2px)",
    opacity: 0.2,
    pointerEvents: "none",
    zIndex: 999,
  },

  rgbSplit: {
    position: "fixed",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(255,0,0,0.08), rgba(0,255,255,0.08), rgba(255,255,255,0.05))",
    mixBlendMode: "screen",
    opacity: 0.25,
    pointerEvents: "none",
    zIndex: 998,
  },
};