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

  const [glitchActive, setGlitchActive] = useState(false);
  const [pixels, setPixels] = useState([]);

  // ===== TYPEWRITER (UNCHANGED LOGIC) =====
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

  // ===== GLITCH START (GUARANTEED AFTER 5s) =====
  useEffect(() => {
    const start = setTimeout(() => {
      setGlitchActive(true);
    }, 5000);

    return () => clearTimeout(start);
  }, []);

  // ===== GLITCH ENGINE (CLEAN + STABLE) =====
  useEffect(() => {
    if (!glitchActive) return;

    const interval = setInterval(() => {
      // turn glitch ON
      setGlitchActive(true);

      // generate pixel corruption
      const newPixels = Array.from({ length: 12 }).map(() => ({
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        width: Math.random() * 40 + 10 + "px",
        height: Math.random() * 6 + 2 + "px",
        background: [
          "rgba(255,0,0,0.5)",
          "rgba(0,255,255,0.5)",
          "rgba(255,255,255,0.3)",
          "rgba(255,255,0,0.3)",
        ][Math.floor(Math.random() * 4)],
      }));

      setPixels(newPixels);

      // turn glitch OFF after burst
      setTimeout(() => {
        setGlitchActive(false);
        setPixels([]);
      }, 200);
    }, 1200);

    return () => clearInterval(interval);
  }, [glitchActive]);

  return (
    <main
      style={{
        ...styles.wrapper,
        transform: glitchActive
          ? `translate(${Math.random() * 6 - 3}px, ${Math.random() * 2 - 1}px)`
          : "none",
        filter: glitchActive
          ? "contrast(1.7) brightness(1.3) saturate(1.4)"
          : "none",
      }}
    >
      {/* PIXEL BLOCKS */}
      {pixels.map((p, i) => (
        <div key={i} style={{ ...styles.pixel, ...p }} />
      ))}

      {/* subtle overlay */}
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

  pixel: {
    position: "fixed",
    zIndex: 999,
    pointerEvents: "none",
    opacity: 0.9,
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