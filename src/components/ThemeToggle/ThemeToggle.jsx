import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem('theme') === 'light';
    document.documentElement.classList.toggle('light-mode', saved);
    document.body.classList.toggle('light-mode', saved);
    return saved;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', isLight);
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
          border: 2px solid #444;
          border-radius: 27px;
          cursor: pointer;
          padding: 0;
          margin-left: auto;
          margin-right: 10px;
          width: 84px;
          height: 32px;
          position: relative;
          flex-shrink: 0;
          transition: background 0.35s, border-color 0.35s, box-shadow 0.35s;
          outline: none;
        }
        .theme-toggle:active {
          transform: scale(0.92);
        }
        body.light-mode .theme-toggle {
          background: #e6ede6;
          border-color: #059669;
        }
        .theme-toggle-track {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 9px;
        }
        .theme-toggle-icon {
          font-size: 18px;
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
          top: 0;
          left: 5px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #f5c542;
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
                      background 0.35s,
                      box-shadow 0.35s;
          z-index: 2;
          box-shadow: 0 1px 4px rgba(0,0,0,0.4);
        }
        body.light-mode .theme-toggle-knob {
          transform: translateX(46px);
          background: #059669;
          box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        }
        .theme-toggle:hover .theme-toggle-knob {
          box-shadow: 0 0 21px rgba(245,197,66,0.6);
        }
        body.light-mode .theme-toggle:hover .theme-toggle-knob {
          box-shadow: 0 0 21px rgba(5,150,105,0.5);
        }
      `}</style>
    </>
  );
}
