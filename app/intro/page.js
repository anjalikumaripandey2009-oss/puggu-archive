"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const lines = [
  "// SYSTEM INITIALIZATION COMPLETE",
  "A restricted archive node has been accessed.",
  "Signal integrity: unstable.",
  "Recovered fragments are incomplete.",
  "Memory layers appear corrupted or missing.",
  "",
  "A single stable identifier has been detected.",
  "",
  "SUBJECT: PUGGU",
];

export default function Intro() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (index < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[index]]);
        setIndex(index + 1);
      }, 600);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowButton(true), 800);
    }
  }, [index]);

  return (
    <main style={styles.wrapper}>
      <div style={styles.container}>
        {displayedLines.map((line, i) => (
          <p key={i} style={styles.text}>
            {line}
          </p>
        ))}

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
    textAlign: "center",
    padding: "20px",
  },
  container: {
    maxWidth: "800px",
  },
  text: {
    margin: "8px 0",
    opacity: 0.85,
    animation: "flicker 1.5s infinite alternate",
  },
  buttonWrapper: {
    marginTop: "40px",
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
};