import React from "react";
import { DesignCard } from "../components/DesignCard";
import { Calendar } from "lucide-react";

export const DesignPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b1120",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: '"Outfit", sans-serif',
      }}
    >
      {/* Background Glow Effect */}
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120vw",
          height: "80vh",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(37, 99, 235, 0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      ></div>

      {/* Top Header Pills */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        <div
          style={{
            background: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            color: "#cbd5e1",
            padding: "8px 16px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
          }}
        >
          <Calendar size={16} />
          <span>Daily Design Challenge</span>
        </div>

        <div
          style={{
            background: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            color: "#cbd5e1",
            padding: "8px 16px",
            borderRadius: "20px",
            fontSize: "14px",
          }}
        >
          Day 21 / 23
        </div>
      </div>

      <div style={{ zIndex: 10, position: "relative" }}>
        <DesignCard />
      </div>

      {/* Bottom User Reference */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          zIndex: 10,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
          alt="Creator"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.1)",
          }}
        />
        <div style={{ textAlign: "left" }}>
          <div style={{ color: "#fff", fontSize: "14px", fontWeight: "600" }}>
            @mhmoradii
          </div>
          <div style={{ color: "#64748b", fontSize: "12px" }}>
            Product Designer
          </div>
        </div>
      </div>
    </div>
  );
};
