import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem('theme') === 'light';
    document.body.classList.toggle('light-mode', saved);
    return saved;
  });

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  return (
    <>
      <button
        className="theme-toggle"
        onClick={() => setIsLight(!isLight)}
        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      >
        <span className="theme-toggle-track">
          <span className="theme-toggle-icon theme-toggle-sun">&#9728;&#65039;</span>
          <span className={"theme-toggle-knob" + (isLight ? " light" : "")} />
          <span className="theme-toggle-icon theme-toggle-moon">&#127769;</span>
        </span>
      </button>
      <style>{`
        .theme-toggle {
          background: #2a2a3a;
          border: 1px solid #444;
          border-radius: 18px;
          cursor: pointer;
          padding: 0;
          margin-left: auto;
          width: 56px;
          height: 28px;
          position: relative;
          flex-shrink: 0;
          transition: background 0.35s, border-color 0.35s, box-shadow 0.35s;
          outline: none;
        }
        .theme-toggle:active {
          transform: scale(0.92);
        }
        body.light-mode .theme-toggle {
          background: #d4c9b3;
          border-color: #000;
        }
        .theme-toggle-track {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6px;
        }
        .theme-toggle-icon {
          font-size: 12px;
          line-height: 1;
          display: flex;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .theme-toggle-sun {
          color: #ffd93d;
          opacity: 1;
        }
        body.light-mode .theme-toggle-sun {
          opacity: 0.3;
        }
        .theme-toggle-moon {
          color: #aac;
          opacity: 0.6;
        }
        body.light-mode .theme-toggle-moon {
          opacity: 1;
        }
        .theme-toggle-knob {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #f5c542;
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
                      background 0.35s,
                      box-shadow 0.35s;
          z-index: 2;
          box-shadow: 0 1px 4px rgba(0,0,0,0.4);
        }
        body.light-mode .theme-toggle-knob {
          transform: translateX(28px);
          background: #4a6fa5;
          box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        }
        .theme-toggle:hover .theme-toggle-knob {
          box-shadow: 0 0 14px rgba(245,197,66,0.6);
        }
        body.light-mode .theme-toggle:hover .theme-toggle-knob {
          box-shadow: 0 0 14px rgba(74,111,165,0.5);
        }
      `}</style>
    </>
  );
}
