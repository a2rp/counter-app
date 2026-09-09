import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "ArrowUp" || event.key === "+") setCount((value) => value + step);
      if (event.key === "ArrowDown" || event.key === "-") setCount((value) => value - step);
      if (event.key === "0") setCount(0);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [step]);

  return (
    <main className="appShell">
      <section className="counterCard" aria-labelledby="counter-title">
        <header className="cardHeader"><span className="eyebrow">UTILITY / 001</span><span className="status">READY</span></header>
        <div className="heading"><p className="kicker">Monochrome counter</p><h1 id="counter-title">Count what matters.</h1><p className="intro">A focused counter with no distractions. Use the controls or your keyboard.</p></div>
        <div className="display" aria-live="polite"><span>{count}</span></div>
        <div className="controls" aria-label="Counter controls"><button type="button" onClick={() => setCount((value) => value - step)} aria-label="Decrease">−</button><button type="button" className="reset" onClick={() => setCount(0)}>Reset</button><button type="button" onClick={() => setCount((value) => value + step)} aria-label="Increase">+</button></div>
        <label className="stepControl">Step size<input type="number" min="1" max="100" value={step} onChange={(event) => setStep(Math.max(1, Number(event.target.value) || 1))} /></label>
        <footer className="cardFooter"><span>↑ / + increase</span><span>↓ / − decrease</span><span>0 reset</span></footer>
      </section>
      <p className="credit">Built by <a href="https://www.ashishranjan.net/" target="_blank" rel="noreferrer">Ashish Ranjan</a></p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
