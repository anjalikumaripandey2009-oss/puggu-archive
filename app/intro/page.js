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
      }, 25);

      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText((prev) => prev + "\n");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 150);

      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex]);

  return (
    <main style={styles.wrapper}>
      <div style={styles.container}>
        <pre style={styles.text}>
          {text}
          <span style={styles.cursor}>█</span>
        </pre>

        {showButton && (
          <div style={styles.buttonWrapper}>
            {/* simple built-in sparkles */}
            <div style={styles.sparkles}>
              <span style={styles.spark1}></span>
              <span style={styles.spark2}></span>
              <span style={styles.spark3}></span>
            </div>

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
    padding: "20px",
  },

  container: {
    maxWidth: "800px",
    textAlign: "left",
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
    position: "relative",
  },

  button: {
    padding: "14px 26px",
    border: "1px solid #9ca3af",
    color: "white",
    textDecoration: "none",
    letterSpacing: "2px",
    display: "inline-block",
    animation: "glow 2s infinite alternate",
    position: "relative",
    zIndex: 2,
  },

  sparkles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "-20px",
    left: 0,
    pointerEvents: "none",
  },

  spark1: {
    position: "absolute",
    width: "3px",
    height: "3px",
    background: "white",
    borderRadius: "50%",
    top: "10px",
    left: "40%",
    animation: "twinkle 1.2s infinite",
  },

  spark2: {
    position: "absolute",
    width: "2px",
    height: "2px",
    background: "white",
    borderRadius: "50%",
    top: "30px",
    left: "60%",
    animation: "twinkle 1.6s infinite",
  },

  spark3: {
    position: "absolute",
    width: "2px",
    height: "2px",
    background: "white",
    borderRadius: "50%",
    top: "15px",
    left: "70%",
    animation: "twinkle 1.4s infinite",
  },
};