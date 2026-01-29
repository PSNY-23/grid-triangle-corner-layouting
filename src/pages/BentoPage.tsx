import React from "react";
import { BentoGrid } from "../components/BentoGrid";

export const BentoPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        backgroundImage: `radial-gradient(circle at 50% 0%, #111 0%, #000 70%)`,
      }}
    >
      <div
        style={{
          paddingTop: "80px",
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "16px",
            letterSpacing: "-1px",
          }}
        >
          Platform Features
        </h1>
        <p
          style={{
            color: "#71717a",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Everything you need to build, deploy, and scale your applications with
          speed and confidence.
        </p>
      </div>
      <BentoGrid />
    </div>
  );
};
