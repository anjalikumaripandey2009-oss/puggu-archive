"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const text = [
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
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // TYPEWRITER (CHAR BY CHAR)
  useEffect(() => {
    if (lineIndex >= text.length) {
      setTimeout(() => setShowButton(true), 600);
      return;
    }

    const currentLine = text[lineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLine[charIndex]);
        setCharIndex(charIndex + 1);
      }, 35);

      return () => clearTimeout(timeout);
    } else {
      // move to next line
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <main style={styles.wrapper}>
      <pre style={styles.text}>
        {displayedText}
        <span style={styles.cursor}>█</span>
      </pre>

      {showButton && (
        <div style={styles.buttonWrapper}>
          <Link href="/archiveMap" style={styles.button}>
            ENTER ARCHIVE
          </Link>
        </div>
      )}
    </main>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "black",
    color: "#cbd5e1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "monospace",
    textAlign: "left",
    padding: "30px",
  },
  text: {
    whiteSpace: "pre-wrap",
    fontSize: "14px",
    lineHeight: "1.8",
    maxWidth: "800px",
  },
  cursor: {
    animation: "blink 0.8s infinite",
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
    animation: "growIn 0.8s ease-out",
  },
};