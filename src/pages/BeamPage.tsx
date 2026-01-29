import React from "react";
import { BeamCard } from "../components/BeamCard";

export const BeamPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Inter", sans-serif',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top light - blueish */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      ></div>

      <div style={{ zIndex: 10 }}>
        <BeamCard />
      </div>
    </div>
  );
};
