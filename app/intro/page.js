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

// simple background dots
function Background() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 60 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3,
    }));

    setDots(arr);
  }, []);

  return (
    <div style={styles.bg}>
      {dots.map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: d.top + "%",
            left: d.left + "%",
            width: d.size + "px",
            height: d.size + "px",
            background: "rgba(0,255,255,0.6)",
            opacity: d.opacity,
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}

export default function Intro() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const [glitch, setGlitch] = useState(false);
  const [pixels, setPixels] = useState([]);

  // TYPEWRITER
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

  // GLITCH SYSTEM (WORKING)
  useEffect(() => {
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setGlitch(true);

        const newPixels = Array.from({ length: 18 }).map(() => ({
          top: Math.random() * 100,
          left: Math.random() * 100,
          width: Math.random() * 40 + 6,
          height: Math.random() * 6 + 2,
          color: [
            "rgba(148,0,211,0.7)",
            "rgba(75,0,130,0.7)",
            "rgba(0,0,255,0.7)",
            "rgba(0,255,0,0.6)",
            "rgba(255,255,0,0.6)",
            "rgba(255,127,0,0.6)",
            "rgba(255,0,0,0.6)",
          ][Math.floor(Math.random() * 7)],
        }));

        setPixels(newPixels);

        setTimeout(() => {
          setGlitch(false);
          setPixels([]);
        }, 180);
      }, 2000);

      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(start);
  }, []);

  return (
    <main style={styles.wrapper}>
      {/* 🌌 REAL BACKGROUND (FOR SURE VISIBLE) */}
      <Background />

      {/* PIXELS */}
      {pixels.map((p, i) => (
        <div
          key={i}
          style={{
            ...styles.pixel,
            top: p.top + "%",
            left: p.left + "%",
            width: p.width + "px",
            height: p.height + "px",
            background: p.color,
          }}
        />
      ))}

      {/* CONTENT */}
      <div
        style={{
          ...styles.container,
          transform: glitch
            ? `translate(${Math.random() * 6 - 3}px, ${Math.random() * 2 - 1}px)`
            : "none",
          filter: glitch
            ? "contrast(1.8) brightness(1.4) saturate(1.6)"
            : "none",
        }}
      >
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
    background: "#000",
    color: "#cbd5e1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "monospace",
    overflow: "hidden",
    position: "relative",
  },

  bg: {
    position: "fixed",
    inset: 0,
    background: "radial-gradient(circle, #05060a 0%, #000 70%)",
    zIndex: 0,
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
  },

  button: {
    padding: "14px 26px",
    border: "1px solid #9ca3af",
    color: "white",
    textDecoration: "none",
    letterSpacing: "2px",
  },

  pixel: {
    position: "fixed",
    zIndex: 999,
    pointerEvents: "none",
    opacity: 0.9,
    filter: "blur(0.4px)",
  },
};