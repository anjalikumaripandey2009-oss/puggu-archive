"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
{
question: "Enter Subject's Full Name",
answer: "pragyadeep singh chouhan",
},
{
question: "Enter Subject's Birth Year",
answer: "2008",
},
{
question: "Enter Subject's State",
answer: "rajasthan",
},
{
question: "Enter Percentage Of Love For Family",
answer: "100",
},
{
question: "Enter Interest In Studies",
answer: "0",
},
{
question: "Enter Interest In Being A Playboy",
answer: "infinite",
},
];

export default function GenesisProtocol() {
const [started, setStarted] = useState(false);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answer, setAnswer] = useState("");
const [recovered, setRecovered] = useState([]);
const [dnaProgress, setDnaProgress] = useState(0);
const [completed, setCompleted] = useState(false);

const handleSubmit = () => {
if (
answer.trim().toLowerCase() ===
questions[currentQuestion].answer
) {
setRecovered([...recovered, currentQuestion]);

```
  if (currentQuestion + 1 < questions.length) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    setCurrentQuestion(questions.length);
  }

  setAnswer("");
} else {
  alert("Incorrect Data Fragment");
}
```

};

const clickFragment = (index) => {
if (!recovered.includes(index)) return;

```
const updated = recovered.filter((f) => f !== index);

setRecovered(updated);
setDnaProgress((prev) => prev + 16.67);

if (updated.length === 0) {
  setCompleted(true);
}
```

};

return ( <div className="min-h-screen bg-black text-white font-mono p-10">

```
  <Link
    href="/archiveMap"
    className="text-cyan-400"
  >
    ← Back to Archive Map
  </Link>

  {!started && (
    <div className="mt-10 text-center">

      <h1 className="text-5xl mb-8">
        GENESIS PROTOCOL
      </h1>

      <div className="border border-cyan-500 p-6 max-w-xl mx-auto">

        <p>ACCESSING ORIGIN FILE...</p>

        <p className="mt-4">
          ██████████ 100%
        </p>

        <p className="mt-6 text-red-400">
          WARNING
        </p>

        <p>
          ORIGIN FILE CORRUPTED
        </p>

        <p className="mt-4">
          RECOVER DNA FRAGMENTS
        </p>

        <button
          onClick={() => setStarted(true)}
          className="mt-8 border border-cyan-500 px-6 py-2"
        >
          BEGIN RECOVERY
        </button>

      </div>
    </div>
  )}

  {started &&
    currentQuestion < questions.length && (
      <div className="mt-10 text-center">

        <h1 className="text-4xl">
          DNA FRAGMENT {currentQuestion + 1}
        </h1>

        <p className="mt-6">
          [{currentQuestion + 1}/6]
        </p>

        <p className="mt-8">
          {questions[currentQuestion].question}
        </p>

        <input
          value={answer}
          onChange={(e) =>
            setAnswer(e.target.value)
          }
          className="mt-6 bg-black border border-cyan-500 p-2 text-center"
        />

        <br />

        <button
          onClick={handleSubmit}
          className="mt-6 border border-cyan-500 px-5 py-2"
        >
          SUBMIT
        </button>

      </div>
    )}

  {started &&
    currentQuestion >= questions.length &&
    !completed && (
      <div className="mt-10 text-center">

        <h1 className="text-4xl">
          DNA RECOVERY CHAMBER
        </h1>

        <p className="mt-4">
          Click All DNA Fragments
        </p>

        <p className="mt-4">
          Reconstruction:
          {" "}
          {Math.floor(dnaProgress)}%
        </p>

        <div
  style={{
    position: "relative",
    width: "100%",
    height: "500px",
    marginTop: "40px",
  }}
>
  {recovered.map((fragment, index) => {
    const positions = [
      { top: "15%", left: "20%" },
      { top: "30%", left: "75%" },
      { top: "55%", left: "15%" },
      { top: "70%", left: "65%" },
      { top: "40%", left: "45%" },
      { top: "80%", left: "35%" },
    ];

```
return (
  <button
    key={fragment}
    onClick={() => clickFragment(fragment)}
    style={{
      position: "absolute",
      top: positions[index].top,
      left: positions[index].left,
      fontSize: "55px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      animation: "float 3s ease-in-out infinite",
      filter: "drop-shadow(0 0 12px cyan)",
    }}
  >
    🧬
  </button>
);
```

})}

</div>


      </div>
    )}

  {completed && (
    <div className="text-center mt-10">

      <h1 className="text-5xl text-cyan-400">
        ORIGIN DATA RECOVERED
      </h1>

      <p className="mt-8 text-xl">
        SUBJECT IDENTIFIED
      </p>

      <p className="mt-3 text-2xl">
        PRAGYADEEP SINGH CHOUHAN
      </p>

      <div className="mt-12 border border-yellow-400 p-6 max-w-md mx-auto">

        <h2 className="text-2xl text-yellow-300">
          🎖 BADGE UNLOCKED
        </h2>

        <p className="mt-4 text-3xl">
          FINALLY BORN
        </p>

      </div>

    </div>
  )}
  <style jsx global>{`
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`}</style>


</div>


);
}
}