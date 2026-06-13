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

  // OLD GLITCH (kept)
  const [glitch, setGlitch] = useState(false);

  // NEW PIXEL CORRUPTION
  const [pixels, setPixels] = useState([]);

  // ===== TYPEWRITER =====
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

  // ===== OLD GLITCH (KEPT SAME BEHAVIOR) =====
  useEffect(() => {
    const t = setTimeout(() => {
      setGlitch(true);
    }, 5000);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!glitch) return;

    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 800);

    return () => clearInterval(interval);
  }, [glitch]);

  // ===== NEW PIXEL CORRUPTION (ADDED ON TOP) =====
  useEffect(() => {
    if (!glitch) return;

    const interval = setInterval(() => {
      const newPixels = Array.from({ length: 8 }).map(() => ({
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        width: Math.random() * 25 + 8 + "px",
        height: Math.random() * 6 + 2 + "px",
        color: [
          "rgba(255,0,0,0.35)",
          "rgba(0,255,255,0.35)",
          "rgba(255,255,255,0.25)",
          "rgba(255,255,0,0.2)",
        ][Math.floor(Math.random() * 4)],
      }));

      setPixels(newPixels);

      setTimeout(() => setPixels([]), 180);
    }, 500);

    return () => clearInterval(interval);
  }, [glitch]);

  return (
    <main
      style={{
        ...styles.wrapper,
        transform: glitch
          ? `translate(${Math.random() * 6 - 3}px, ${Math.random() * 3 - 1}px)`
          : "translate(0px,0px)",
        filter: glitch
          ? "contrast(1.6) brightness(1.3) saturate(1.4)"
          : "none",
      }}
    >
      {/* OLD GLITCH OVERLAY */}
      {glitch && <div style={styles.glitchOverlay} />}

      {/* NEW PIXEL BLOCKS */}
      {pixels.map((p, i) => (
        <div key={i} style={{ ...styles.pixel, ...p }} />
      ))}

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

  glitchOverlay: {
    position: "fixed",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(255,255,255,0.04), transparent, rgba(255,255,255,0.03))",
    pointerEvents: "none",
    zIndex: 999,
    animation: "flicker 0.15s linear",
  },

  pixel: {
    position: "fixed",
    zIndex: 998,
    pointerEvents: "none",
    opacity: 0.9,
    filter: "blur(0.4px)",
  },
};