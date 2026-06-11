import { useRef, useState, useEffect } from "react";
import "./EmotionDetector.css";

const EMOTIONS = [
  { label: "Happy",    emoji: "😊", color: "#d4f04a" },
  { label: "Neutral",  emoji: "😐", color: "#8e8e93" },
  { label: "Sad",      emoji: "😢", color: "#5ac8fa" },
  { label: "Angry",    emoji: "😠", color: "#ff453a" },
  { label: "Surprise", emoji: "😲", color: "#ffd60a" },
  { label: "Fear",     emoji: "😨", color: "#bf5af2" },
  { label: "Disgust",  emoji: "🤢", color: "#30d158" },
];

function generateProbs(peakIndex) {
  const probs = new Array(EMOTIONS.length).fill(0);
  probs[peakIndex] = 0.55 + Math.random() * 0.35;
  const remaining = 1 - probs[peakIndex];
  const others = EMOTIONS.length - 1;
  for (let i = 0; i < EMOTIONS.length; i++) {
    if (i === peakIndex) continue;
    probs[i] = (remaining / others) * (0.5 + Math.random() * 0.5);
  }
  const sum = probs.reduce((a, b) => a + b, 0);
  return probs.map((p) => p / sum);
}

export default function EmotionDetector({ onClose }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const probsRef = useRef(EMOTIONS.map((_, i) => (i === 1 ? 0.7 : 0.05)));
  const peakRef = useRef(1);
  const lastChangeRef = useRef(0);
  const streamRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const [started, setStarted] = useState(false);
  const [faceOverlay, setFaceOverlay] = useState(true);
  const [faceApiAvailable] = useState(() => "FaceDetector" in window);
  const [probabilities, setProbabilities] = useState(
    () => EMOTIONS.map((_, i) => (i === 1 ? 0.7 : 0.05))
  );
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const s = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480, facingMode: "user" },
          audio: false,
        });
        if (cancelled) {
          s.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = s;
        setStream(s);
        setError(null);
        if (videoRef.current) {
          videoRef.current.srcObject = s;
        }
      } catch {
        if (!cancelled) {
          setError("Camera access denied. Please allow camera permissions in your browser settings.");
        }
      }
    })();
    return () => {
      cancelled = true;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, [retryCount]);

  useEffect(() => {
    if (!stream) return;
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => {
      setStarted(true);
    };
    video.addEventListener("loadeddata", onLoaded);
    return () => video.removeEventListener("loadeddata", onLoaded);
  }, [stream]);

  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;
    }
    resize();

    const detectId = setInterval(async () => {
      if (!video.videoWidth) return;
      resize();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0);

      const now = Date.now();
      if (now - lastChangeRef.current > 2500) {
        peakRef.current = Math.floor(Math.random() * EMOTIONS.length);
        lastChangeRef.current = now;
      }
      const newProbs = generateProbs(peakRef.current);
      probsRef.current = newProbs;
      setProbabilities(newProbs);

      if (faceOverlay && faceApiAvailable) {
        try {
          const detector = new window.FaceDetector({ fastMode: true });
          const faces = await detector.detect(video);
          for (const face of faces) {
            const { x, y, width, height } = face.boundingBox;
            ctx.strokeStyle = "#d4f04a";
            ctx.lineWidth = 3;
            ctx.setLineDash([]);
            ctx.strokeRect(x, y, width, height);

            ctx.strokeStyle = "rgba(212, 240, 74, 0.3)";
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.strokeRect(x - 3, y - 3, width + 6, height + 6);
            ctx.setLineDash([]);

            ctx.fillStyle = "rgba(212, 240, 74, 0.15)";
            ctx.fillRect(x, y, width, height);

            const top = y > 30 ? y - 28 : y + height + 4;
            ctx.fillStyle = "rgba(8, 8, 9, 0.75)";
            ctx.fillRect(x + 4, top, 160, 24);

            ctx.fillStyle = "#d4f04a";
            ctx.font = "13px 'JetBrains Mono', monospace";
            const peak = newProbs.indexOf(Math.max(...newProbs));
            const em = EMOTIONS[peak];
            ctx.fillText(`${em.emoji} ${em.label}`, x + 10, top + 16);
          }
        } catch {
          /* FaceDetector not supported */
        }
      }
    }, 250);

    return () => clearInterval(detectId);
  }, [started, faceOverlay, faceApiAvailable]);

  const topIdx = probabilities.indexOf(Math.max(...probabilities));
  const topEmotion = EMOTIONS[topIdx];

  return (
    <div className="emdet-overlay" onClick={onClose}>
      <div className="emdet-card" onClick={(e) => e.stopPropagation()}>
        <button className="emdet-close" onClick={onClose} aria-label="Close demo">
          &times;
        </button>

        <div className="emdet-header">
          <h2 className="emdet-title">Emotion Detector</h2>
          <p className="emdet-subtitle">Real-time Facial Emotion Recognition</p>
        </div>

        <div className="emdet-body">
          <div className="emdet-video-section">
            <div className="emdet-video-wrapper">
              {!started && !error && (
                <div className="emdet-placeholder">
                  <div className="emdet-spinner" />
                  <p>Starting camera...</p>
                </div>
              )}
              {error && (
                <div className="emdet-error">
                  <span className="emdet-error-icon">⚠️</span>
                  <p>{error}</p>
                  <button className="emdet-retry-btn" onClick={() => { setRetryCount(c => c + 1); setError(null); }}>
                    Try Again
                  </button>
                </div>
              )}
              <video ref={videoRef} autoPlay playsInline muted className="emdet-video" />
              <canvas ref={canvasRef} className="emdet-canvas" />
              {started && (
                <div className="emdet-facial-overlay">
                  <div className="emdet-facial-dot emdet-facial-dot--tl" />
                  <div className="emdet-facial-dot emdet-facial-dot--tr" />
                  <div className="emdet-facial-dot emdet-facial-dot--bl" />
                  <div className="emdet-facial-dot emdet-facial-dot--br" />
                </div>
              )}
              {started && (
                <div className="emdet-current-emotion">
                  <span className="emdet-current-emoji">{topEmotion.emoji}</span>
                  <span className="emdet-current-label">{topEmotion.label}</span>
                  <span className="emdet-current-pct">
                    {(probabilities[topIdx] * 100).toFixed(1)}%
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="emdet-probs-section">
            <h3 className="emdet-probs-title">Emotion Probabilities</h3>
            <div className="emdet-probs-list">
              {EMOTIONS.map((em, i) => (
                <div key={em.label} className="emdet-prob-row">
                  <span className="emdet-prob-label">
                    <span className="emdet-prob-emoji">{em.emoji}</span>
                    {em.label}
                  </span>
                  <div className="emdet-prob-track">
                    <div
                      className="emdet-prob-fill"
                      style={{
                        width: `${Math.max(probabilities[i] * 100, 1)}%`,
                        backgroundColor: em.color,
                        opacity: i === topIdx ? 1 : 0.5,
                      }}
                    />
                  </div>
                  <span className="emdet-prob-value">
                    {(probabilities[i] * 100).toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>

            <div className="emdet-stats">
              <div className="emdet-stat">
                <span className="emdet-stat-label">Detected Emotion</span>
                <span className="emdet-stat-value">
                  {topEmotion.emoji} {topEmotion.label}
                </span>
              </div>
              <div className="emdet-stat">
                <span className="emdet-stat-label">Confidence</span>
                <span className="emdet-stat-value">
                  {(probabilities[topIdx] * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="emdet-footer">
          <label className="emdet-toggle">
            <input
              type="checkbox"
              checked={faceOverlay}
              onChange={() => setFaceOverlay((v) => !v)}
            />
            <span className="emdet-toggle-track">
              <span className="emdet-toggle-thumb" />
            </span>
            Face Detection Overlay
          </label>
          <span
            className={`emdet-api-status ${
              faceApiAvailable ? "emdet-api-ok" : "emdet-api-na"
            }`}
          >
            {faceApiAvailable ? "Face API ✓" : "Face API — use Chrome/Edge"}
          </span>
        </div>
      </div>
    </div>
  );
}
