import React from "react";
import { AuthCard } from "../components/AuthCard";

export const AuthPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505" /* Very dark background */,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        fontFamily: '"Outfit", sans-serif',
      }}
    >
      {/* Background Ambience from Image */}

      {/* Top Left Green/Blue Haze */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      ></div>

      {/* Center/Content */}
      <div style={{ zIndex: 10 }}>
        <AuthCard />
      </div>

      {/* Overlay Noise Texture (Optional, reused if available in global css, else simple here) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 100,
        }}
      ></div>
    </div>
  );
};
