import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  FiArrowUp,
  FiCoffee,
  FiFacebook,
  FiGithub,
  FiGlobe,
  FiHeart,
  FiLinkedin,
  FiMail,
  FiMinus,
  FiPlus,
  FiRotateCcw,
  FiStar,
} from "react-icons/fi";
import { FaCodepen, FaYoutube } from "react-icons/fa";
import "./styles.css";

const footerLinks = [
  { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
  { label: "GitHub", href: "https://github.com/a2rp", icon: FiGithub },
  { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FiLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FiFacebook },
  { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
  { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
  { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiHeart },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
  { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FiStar },
];

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "ArrowUp" || event.key === "+") setCount((value) => value + step);
      if (event.key === "ArrowDown" || event.key === "-") setCount((value) => value - step);
      if (event.key === "0") setCount(0);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [step]);

  useEffect(() => {
    const handleScroll = () => setShowGoTop(window.scrollY > 320);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const resetCount = () => setCount(0);

  return (
    <div className="pageFrame">
      <header className="siteHeader">
        <div className="brand">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" aria-hidden="true" />
          <div>
            <span className="brandKicker">Utility / 001</span>
            <strong>Counter App</strong>
          </div>
        </div>
        <span className="headerStatus">Ready</span>
      </header>

      <main className="appShell">
        <section className="counterCard" aria-labelledby="counter-title">
          <div className="cardHeader"><span className="eyebrow">Focused utility</span><span className="status">Keyboard ready</span></div>
          <div className="heading">
            <p className="kicker">Monochrome counter</p>
            <h1 id="counter-title">Count what matters.</h1>
            <p className="intro">A focused counter with no distractions. Use the controls or your keyboard.</p>
          </div>
          <div className="display" aria-live="polite"><span>{count}</span></div>
          <div className="controls" aria-label="Counter controls">
            <button type="button" onClick={() => setCount((value) => value - step)} aria-label="Decrease">
              <FiMinus aria-hidden="true" />
              <span>Decrease</span>
            </button>
            <button type="button" className="reset" onClick={resetCount}>
              <FiRotateCcw aria-hidden="true" />
              <span>Reset</span>
            </button>
            <button type="button" onClick={() => setCount((value) => value + step)} aria-label="Increase">
              <FiPlus aria-hidden="true" />
              <span>Increase</span>
            </button>
          </div>
          <label className="stepControl">Step size<input type="number" min="1" max="100" value={step} onChange={(event) => setStep(Math.max(1, Number(event.target.value) || 1))} /></label>
          <div className="cardFooter"><span>ArrowUp / + increase</span><span>ArrowDown / - decrease</span><span>0 reset</span></div>
        </section>

        {showGoTop && <button className="goTopButton" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top"><FiArrowUp /></button>}

        <footer className="siteFooter">
          <p>&copy; {new Date().getFullYear()} All rights reserved. By <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p>
          <nav className="footerLinks" aria-label="Social and support links">
            {footerLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} aria-label={label} title={label}>
                {React.createElement(Icon, { "aria-hidden": true })}
              </a>
            ))}
          </nav>
        </footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
