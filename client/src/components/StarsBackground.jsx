/*
Reusable React component that renders a fullscreen twinkling starfield + subtle clouds/night gradients.

Features:
- Randomly generates thousands of stars (CSS via large box-shadow lists produced at render-time).
- Multiple star layers for depth with different twinkle speeds.
- Subtle animated cloud layer and night gradient.
- Responds automatically to OS dark mode (prefers-color-scheme) but also accepts a `forceTheme` prop.
- Lightweight: no per-star DOM nodes, uses 1px elements with box-shadow.

Usage:
import StarsBackground from './StarsBackground';

function App(){
  return (
    <div>
      <StarsBackground starCount={3000} />
      <main>Your app UI here</main>
    </div>
  )
}

Props:
- starCount?: total number of stars (default 2500). Stars are distributed across 3 layers.
- nearBrightness?: number (0..1) brightness multiplier for near stars.
- forceTheme?: 'dark' | 'light' | undefined — when provided, overrides prefers-color-scheme.
- className?: string additional classes to put on root container.

Note: this component injects a small amount of inline CSS that contains the generated box-shadow lists. It is fast in modern browsers but generating tens of thousands of shadow entries can be heavy for extremely large counts. Default is tuned for performance.
*/

import { useMemo } from "react";
const StarsBackground = ({
  starCount = 2500,
  nearBrightness = 1.0,
  forceTheme,
  className = "",
}) => {
  // Distribute stars across three layers (far, mid, near)
  const counts = useMemo(() => {
    const far = Math.round(starCount * 0.55);
    const mid = Math.round(starCount * 0.3);
    const near = Math.max(1, starCount - far - mid);
    return { far, mid, near };
  }, [starCount]);

  // Helper to generate N random box-shadow entries

  const makeShadows = (
    n,
    sizeMin = 0.6,
    sizeMax = 1.6,
    alphaMin = 0.35,
    alphaMax = 1,
  ) => {
    const parts = [];
    for (let i = 0; i < n; i++) {
      // place across a larger virtual canvas to avoid visible tiling when animating background-position
      const x = Math.floor(Math.random() * 10000) - 5000; // negative..positive range
      const y = Math.floor(Math.random() * 10000) - 5000;
      const size = (Math.random() * (sizeMax - sizeMin) + sizeMin).toFixed(2);
      const alpha = (Math.random() * (alphaMax - alphaMin) + alphaMin).toFixed(
        2,
      );
      parts.push(`${x}px ${y}px 0 ${size}px rgba(255,255,255,${alpha})`);
    }
    return parts.join(",\n");
  };

  // Generate shadow lists memoized for consistent layout between renders
  const { farShadows, midShadows, nearShadows } = useMemo(() => {
    const farShadows = makeShadows(counts.far, 0.3, 0.9, 0.25, 0.7);
    const midShadows = makeShadows(counts.mid, 0.6, 1.2, 0.4, 0.9);
    // near get slightly larger sizes and optionally brighter
    const nearShadows = makeShadows(
      counts.near,
      0.9,
      2.2,
      0.6 * nearBrightness,
      1 * nearBrightness,
    );
    return { farShadows, midShadows, nearShadows };
  }, [counts, nearBrightness]);

  // Inline styles that use the computed box-shadows.
  // Each layer is a 1px/1px element with a giant box-shadow list; that renders thousands of dots.
  const layerStyleBase = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "1px",
    height: "1px",
    background: "transparent",
    // Will be visible through box-shadow values
    pointerEvents: "none",
  };

  return (
    <>
      <div
        aria-hidden
        className={`stars-background-root ${className}`}
        style={{ position: "fixed", inset: 0, zIndex: -9999 }}
      >
        {/* background gradients + clouds layer */}
        <div className="stars-sky" />

        {/* far (faint) stars */}
        <div
          className="stars-layer stars-far"
          style={{
            ...layerStyleBase,
            boxShadow: farShadows,
            transform: "scale(1)",
          }}
        />

        {/* mid stars */}
        <div
          className="stars-layer stars-mid"
          style={{
            ...layerStyleBase,
            boxShadow: midShadows,
            transform: "scale(1.02)",
          }}
        />

        {/* near stars (brighter, twinkle faster) */}
        <div
          className="stars-layer stars-near"
          style={{
            ...layerStyleBase,
            boxShadow: nearShadows,
            transform: "scale(1.04)",
          }}
        />
        <style>{`
        
        `}</style>
      </div>
    </>

    // <>
    //   <div className="stars"></div>
    //   <div className="twinkling"></div>
    // </>
  );
};

export default StarsBackground;
