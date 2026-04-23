/**
 * ParticleAvatar.jsx
 * Neo-Brutalist avatar — dot-matrix portrait sampled from photo.
 * Idle: breathing wave ripple across dots.
 * Hover: CRT scanline sweep + row glitch + phosphor bloom.
 */

import React, { useEffect, useRef, useCallback } from "react";

/* ── Design tokens ──────────────────────────────────────────── */
const TOKENS = {
  yellow:   "#ffe17c",
  charcoal: "#171e19",
  sage:     "#b7c6c2",
  black:    "#000000",
  dark:     "#272727",
  green:    "#22c55e",
};

const THEMES = {
  dark: {
    canvasBg:   TOKENS.charcoal,
    gridColor:  TOKENS.sage,
    traceColor: TOKENS.yellow,
    pixelColor: TOKENS.yellow,
    scanColor:  "#000",
    cornerFill: TOKENS.yellow,
    hudBg:      TOKENS.sage,
    hudText:    TOKENS.yellow,
    frameBg:    TOKENS.charcoal,
    tagBg:      TOKENS.yellow,
    tagText:    TOKENS.black,
  },
  yellow: {
    canvasBg:   TOKENS.yellow,
    gridColor:  TOKENS.charcoal,
    traceColor: TOKENS.charcoal,
    pixelColor: TOKENS.sage,
    scanColor:  "#000",
    cornerFill: TOKENS.charcoal,
    hudBg:      TOKENS.charcoal,
    hudText:    TOKENS.yellow,
    frameBg:    TOKENS.yellow,
    tagBg:      TOKENS.charcoal,
    tagText:    TOKENS.yellow,
  },
  sage: {
    canvasBg:   TOKENS.sage,
    gridColor:  TOKENS.charcoal,
    traceColor: TOKENS.yellow,
    pixelColor: TOKENS.charcoal,
    scanColor:  "#000",
    cornerFill: TOKENS.yellow,
    hudBg:      TOKENS.charcoal,
    hudText:    TOKENS.sage,
    frameBg:    TOKENS.sage,
    tagBg:      TOKENS.yellow,
    tagText:    TOKENS.black,
  },
};

/* ── Dot-matrix constants ───────────────────────────────────── */
const COLS = 26;
const ROWS = 32;

/* ── Sample a loaded Image into a brightness grid ───────────── */
function sampleImageToDots(img) {
  const oc = document.createElement("canvas");
  oc.width = COLS;
  oc.height = ROWS;
  const octx = oc.getContext("2d");

  // Cover-fit into the grid
  const iw = img.naturalWidth, ih = img.naturalHeight;
  const scale = Math.max(COLS / iw, ROWS / ih);
  const dw = iw * scale, dh = ih * scale;
  octx.drawImage(img, (COLS - dw) / 2, (ROWS - dh) / 2, dw, dh);

  const { data } = octx.getImageData(0, 0, COLS, ROWS);
  const raw = [];
  for (let i = 0; i < COLS * ROWS; i++) {
    const p = i * 4;
    raw.push((0.299 * data[p] + 0.587 * data[p + 1] + 0.114 * data[p + 2]) / 255);
  }

  // Normalize so contrast always spans 0-1
  const lo = Math.min(...raw), hi = Math.max(...raw);
  const range = hi - lo > 0.05 ? hi - lo : 1;
  return raw.map((b, idx) => ({
    col: idx % COLS,
    row: Math.floor(idx / COLS),
    brightness: (b - lo) / range,
  }));
}

/* ── Geometric silhouette fallback (shown while image loads) ── */
function buildSilhouetteDots() {
  const dots = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const nx = (col / (COLS - 1)) * 2 - 1;
      const ny = (row / (ROWS - 1)) * 2 - 1;
      const head     = Math.hypot(nx / 0.50, (ny + 0.05) / 0.60);
      const shoulder = Math.hypot(nx / 0.88, (ny - 0.72) / 0.30);
      const neck     = Math.hypot(nx / 0.14, (ny - 0.38) / 0.18);
      let b = 0;
      if (head < 1)     b = Math.max(b, 0.80 - head * 0.25);
      if (shoulder < 1) b = Math.max(b, 0.55 - shoulder * 0.22);
      if (neck < 1)     b = Math.max(b, 0.68 - neck * 0.22);
      const lEye = Math.hypot((nx + 0.20) / 0.08, (ny + 0.08) / 0.055);
      const rEye = Math.hypot((nx - 0.20) / 0.08, (ny + 0.08) / 0.055);
      if (lEye < 1 || rEye < 1) b *= 0.12;
      dots.push({ col, row, brightness: b });
    }
  }
  return dots;
}

/* ── Draw the dot-matrix portrait ───────────────────────────── */
function drawDotMatrix(ctx, W, H, dots, T, t, hT) {
  if (!dots || !dots.length) return;

  const PAD   = 16;
  const HUD   = 26;
  const aW    = W - PAD * 2;
  const aH    = H - PAD * 2 - HUD;
  const cellW = aW / COLS;
  const cellH = aH / ROWS;
  const maxR  = Math.min(cellW, cellH) * 0.40;

  // Scanline Y position (relative to dot area, continuous)
  const scanRelY = ((t * 0.55) % 1) * aH;

  // Glitch timing: changes choppily every ~125ms for retro feel
  const glitchBucket = Math.floor(t * 8);

  dots.forEach(({ col, row, brightness }) => {
    if (brightness < 0.07) return;

    const cx = PAD + (col + 0.5) * cellW;
    const cy = PAD + (row + 0.5) * cellH;

    // Idle ripple wave
    const wave = 0.84 + 0.16 * Math.sin(t * 2.0 + col * 0.30 + row * 0.22);

    // Scanline bloom — dots near the beam inflate
    const distScan = Math.abs((cy - PAD) - scanRelY);
    const bloom    = hT * Math.max(0, 1 - distScan / (cellH * 2.5)) * 0.85;

    // Row glitch offset
    let gx = 0;
    if (hT > 0.45) {
      const seed = Math.sin(row * 127.1 + glitchBucket * 311.7);
      if (seed > 0.70) gx = Math.sin(row * 53.2 + t * 4.1) * cellW * 2.2 * hT;
    }

    const r = Math.max(0.4, brightness * maxR * wave * (1 + bloom * 0.55));
    const size = Math.max(1, Math.round(r * 2));

    // Color: yellow for bright, sage for mid, sage-dim for low
    let color, alpha;
    if (brightness > 0.60) {
      color = T.traceColor;
      alpha = 0.90 + bloom * 0.10;
    } else if (brightness > 0.28) {
      // Chromatic flicker on active hover
      const flicker = hT > 0.55 && Math.sin(t * 6 + col * 0.7 + row * 0.5) > 0.35;
      color = flicker ? T.traceColor : T.gridColor;
      alpha = 0.58 + brightness * 0.25 + bloom * 0.17;
    } else {
      color = T.gridColor;
      alpha = 0.20 + brightness * 0.35;
    }

    ctx.save();
    ctx.fillStyle   = color;
    ctx.globalAlpha = Math.min(1, alpha);
    ctx.fillRect(cx + gx - size / 2, cy - size / 2, size, size);

    // Phosphor halo on bright dots during hover
    if (hT > 0.25 && brightness > 0.48) {
      ctx.globalAlpha = hT * 0.13 * brightness;
      const halo = size * 2.8;
      ctx.fillRect(cx + gx - halo / 2, cy - halo / 2, halo, halo);
    }
    ctx.restore();
  });

  // Scanline beam overlay
  if (hT > 0.05) {
    const beamY = PAD + scanRelY;
    ctx.save();
    ctx.fillStyle   = T.traceColor;
    ctx.globalAlpha = hT * 0.05;
    ctx.fillRect(PAD, beamY - cellH * 1.2, aW, cellH * 2.8);
    ctx.globalAlpha = hT * 0.22;
    ctx.fillRect(PAD, beamY - 1, aW, 2);
    ctx.restore();
  }
}

/* ── Background helpers ─────────────────────────────────────── */
function buildFloatingPixels(W, H, count = 22) {
  return Array.from({ length: count }, () => ({
    x: 12 + Math.random() * (W - 24),
    y: 12 + Math.random() * (H - 24),
    s: 2 + Math.floor(Math.random() * 3) * 2,
    vx: (Math.random() - 0.5) * 0.12,
    vy: -0.08 - Math.random() * 0.14,
    alpha: 0.12 + Math.random() * 0.28,
    phase: Math.random() * Math.PI * 2,
  }));
}

function drawIsoGrid(ctx, W, H, color) {
  const spacing = 18;
  const tan30   = Math.tan(Math.PI / 6);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.10;
  ctx.lineWidth   = 0.6;
  for (let x = -H * tan30; x < W + H * tan30; x += spacing) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + H * tan30, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x - H * tan30, H); ctx.stroke();
  }
  ctx.restore();
}

function drawCornerHatch(ctx, x, y, size, theme, flipX, flipY) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, size * (flipX ? -1 : 1), size * (flipY ? -1 : 1));
  ctx.clip();
  ctx.strokeStyle = theme.traceColor;
  ctx.globalAlpha = 0.18;
  ctx.lineWidth   = 0.8;
  const step = 5;
  for (let i = -size * 2; i < size * 2; i += step) {
    ctx.beginPath();
    ctx.moveTo(x + i, y);
    ctx.lineTo(x + i + size * (flipY ? -1 : 1), y + size * (flipY ? -1 : 1));
    ctx.stroke();
  }
  ctx.restore();
}

function drawCornerBracket(ctx, x, y, len, color, sx, sy) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth   = 2;
  ctx.globalAlpha = 0.8;
  ctx.lineCap     = "square";
  ctx.beginPath();
  ctx.moveTo(x, y + sy * len);
  ctx.lineTo(x, y);
  ctx.lineTo(x + sx * len, y);
  ctx.stroke();
  ctx.restore();
}

function drawScanlines(ctx, W, H, scanY, scanColor) {
  ctx.save();
  ctx.strokeStyle = scanColor;
  ctx.lineWidth   = 1;
  ctx.globalAlpha = 0.035;
  for (let y = 0; y < H; y += 3) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  ctx.globalAlpha = 0.08;
  ctx.lineWidth   = 2;
  ctx.beginPath(); ctx.moveTo(0, scanY); ctx.lineTo(W, scanY); ctx.stroke();
  ctx.lineWidth   = 1;
  ctx.globalAlpha = 0.04;
  ctx.beginPath(); ctx.moveTo(0, scanY + 3); ctx.lineTo(W, scanY + 3); ctx.stroke();
  ctx.restore();
}

function drawHUDBar(ctx, W, H, theme, t, hT) {
  const barH = 26;
  const y    = H - barH;
  ctx.save();
  ctx.fillStyle   = theme.hudBg;
  ctx.globalAlpha = 0.15;
  ctx.fillRect(0, y, W, barH);
  ctx.strokeStyle = theme.traceColor;
  ctx.globalAlpha = 0.35;
  ctx.lineWidth   = 1;
  ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  ctx.globalAlpha = 0.22;
  for (let x = 12; x < W - 12; x += 10) {
    const h = x % 30 === 0 ? 5 : 3;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + h); ctx.stroke();
  }
  ctx.font        = "bold 8px monospace";
  ctx.fillStyle   = theme.hudText;
  ctx.globalAlpha = 0.7;
  ctx.textAlign   = "left";
  // Label changes on hover to give retro terminal feedback
  ctx.fillText(hT > 0.5 ? "▶▶ SCANNING..." : "FRONTEND · MOBILE · AI", 12, H - 9);
  ctx.textAlign   = "right";
  // Frame counter accelerates on hover
  const frame = Math.floor(t * 60 * (1 + hT * 12)) % 999;
  ctx.fillText(`F:${String(frame).padStart(3, "0")}`, W - 12, H - 9);
  ctx.restore();
}

/* ── Component ──────────────────────────────────────────────── */
export default function ParticleAvatar({
  src    = null,
  name   = "Your Name",
  title  = "Frontend Developer",
  status = "Available for work",
  tag    = "SATA.DEV",
  theme  = "dark",
  size   = 300,
}) {
  const canvasRef = useRef(null);
  const dotsRef   = useRef(buildSilhouetteDots()); // show silhouette immediately
  const stateRef  = useRef(null);
  const hoverRef  = useRef(false);
  const hoverTRef = useRef(0);

  const W = size;
  const H = Math.round(size * 1.22);
  const T = THEMES[theme] ?? THEMES.dark;

  /* Load + sample image */
  useEffect(() => {
    dotsRef.current = buildSilhouetteDots();
    if (!src) return;
    const img = new Image();
    img.onload = () => { dotsRef.current = sampleImageToDots(img); };
    img.onerror = () => { /* keep silhouette */ };
    img.src = src;
  }, [src]);

  /* Animation loop */
  const startLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const fpx = buildFloatingPixels(W, H, 20);
    const HATCH  = Math.round(W * 0.085);
    let t = Math.random() * 100;
    let animId;

    function tick() {
      t += 0.016;

      // Smooth hover progress: ease in fast, ease out slightly slower
      hoverTRef.current = hoverRef.current
        ? Math.min(1, hoverTRef.current + 0.055)
        : Math.max(0, hoverTRef.current - 0.038);
      const hT = hoverTRef.current;

      const scanY = (t * 28) % H;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = T.canvasBg;
      ctx.fillRect(0, 0, W, H);

      drawIsoGrid(ctx, W, H, T.gridColor);
      drawCornerHatch(ctx, 0, 0, HATCH, T, false, false);
      drawCornerHatch(ctx, W, 0, HATCH, T, true,  false);
      drawCornerHatch(ctx, 0, H, HATCH, T, false, true);
      drawCornerHatch(ctx, W, H, HATCH, T, true,  true);

      const sq = Math.round(W * 0.04);
      [[0, 0],[W - sq, 0],[0, H - sq],[W - sq, H - sq]].forEach(([x, y]) => {
        ctx.save();
        ctx.fillStyle   = T.cornerFill;
        ctx.globalAlpha = 0.7;
        ctx.fillRect(x, y, sq, sq);
        ctx.restore();
      });

      drawDotMatrix(ctx, W, H, dotsRef.current, T, t, hT);

      fpx.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -p.s) { p.y = H + p.s; p.x = 12 + Math.random() * (W - 24); }
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        ctx.save();
        ctx.fillStyle   = T.pixelColor;
        ctx.globalAlpha = p.alpha * (0.5 + 0.5 * Math.sin(t + p.phase));
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.s, p.s);
        ctx.restore();
      });

      drawHUDBar(ctx, W, H, T, t, hT);
      drawScanlines(ctx, W, H, scanY, T.scanColor);

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);
    stateRef.current = { animId };
    return () => cancelAnimationFrame(animId);
  }, [W, H, T]);

  useEffect(() => {
    const cleanup = startLoop();
    return () => {
      cleanup?.();
      if (stateRef.current) cancelAnimationFrame(stateRef.current.animId);
    };
  }, [startLoop]);

  /* ── Render ─────────────────────────────────────────────────── */
  return (
    <div
      style={{ display: "inline-block", position: "relative", cursor: "crosshair" }}
      onMouseEnter={() => { hoverRef.current = true; }}
      onMouseLeave={() => { hoverRef.current = false; }}
    >
      {/* Hard neo-brutalist shadow */}
      <div style={{
        position: "absolute", inset: 0,
        transform: "translate(8px, 8px)",
        background: TOKENS.black,
        zIndex: 0,
      }} />

      {/* Main frame */}
      <div style={{
        position:      "relative",
        zIndex:        1,
        border:        `2px solid ${TOKENS.black}`,
        background:    T.frameBg,
        overflow:      "hidden",
        display:       "flex",
        flexDirection: "column",
      }}>
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          style={{ display: "block", width: W, height: H }}
        />

        {/* Name / title strip */}
        <div style={{
          background: T.canvasBg,
          borderTop:  `2px solid ${TOKENS.black}`,
          padding:    "14px 16px 16px",
          position:   "relative",
        }}>
          <div style={{
            position: "absolute", top: 0, right: 0, bottom: 0, width: 40,
            backgroundImage: `repeating-linear-gradient(-45deg,${T.traceColor} 0px,${T.traceColor} 1.5px,transparent 1.5px,transparent 8px)`,
            opacity: 0.15,
          }} />
          <div style={{ fontFamily:"monospace", fontSize:16, fontWeight:700, letterSpacing:"-0.01em", color:T.traceColor }}>
            {name}
          </div>
        </div>
      </div>

      {/* Top-right tag */}
      <div style={{
        position:"absolute", top:-14, right:-2,
        background:T.tagBg, border:`2px solid ${TOKENS.black}`,
        padding:"3px 10px", zIndex:10,
        fontFamily:"monospace", fontSize:9, fontWeight:700, letterSpacing:".1em", color:T.tagText,
      }}>
        {tag}
      </div>

      {/* Bottom-left status badge */}
      <div style={{
        position:"absolute", bottom:-13, left:12,
        background:TOKENS.charcoal, border:`2px solid ${TOKENS.black}`,
        borderRadius:999, padding:"3px 12px", zIndex:10,
        display:"flex", alignItems:"center", gap:6,
      }}>
        <div style={{ width:6, height:6, borderRadius:"50%", background:TOKENS.green }} />
        <span style={{ fontFamily:"monospace", fontSize:9, fontWeight:700, letterSpacing:".06em", color:TOKENS.sage, textTransform:"uppercase", whiteSpace:"nowrap" }}>
          {status}
        </span>
      </div>
    </div>
  );
}
