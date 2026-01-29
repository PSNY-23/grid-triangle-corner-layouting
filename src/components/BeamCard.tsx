import React, { useState } from "react";
import {
  Database,
  LockKeyhole,
  Unlock,
  Shield,
  Brain,
  Activity,
  User,
} from "lucide-react";
import { motion, useAnimation } from "motion/react";
import "./BeamCard.css";

export const BeamCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const transition = {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 1,
  };

  // We offset the beams so they travel along the path.
  // pathLength isn't enough for a traveling "bullet".
  // We will use strokeDasharray and animate strokeDashoffset.
  // A path of length ~150px.
  // strokeDasharray: "40 300" -> 40px beam, 300px gap.
  // animate offset from 340 to 0 ?

  // Actually, Motion allow us to just animate 'pathLength' and 'pathOffset' if we use the right shape.
  // But let's stick to the trusted strokeDashoffset for "bullet" effect.

  // Let's define the paths data once
  const topPaths = [
    "M134 64 C 134 128, 250 88, 250 188", // Left to Center (Curved S-shape attempt)
    "M250 64 L 250 188", // Mid straight
    "M366 64 C 366 128, 250 88, 250 188", // Right to center
  ];

  /* 
     Correction on Bezier Control Points:
     Start: 134, 64. End: 250, 188.
     Mid-ish Y is (64+188)/2 = 126.
     C (134, 126) (250, 126) (250, 188) -> Vertical start, horizontal-ish mid, vertical end?
     Actually, we want to go DOWN then IN.
     C 134 110, 250 100, 250 188 ?
     Let's use a cleaner simple curve: M start C c1 c2 end.
     c1 = startX, endY * 0.5 ? 
     Let's try standard smooth curve vertical:
     M134,64 C134,140 250,110 250,188 - might be wonky.
     Let's stick to the "circuit" look but with rounded corners or just clean straight lines?
     User said "not joined properly", so "straight to center" might be safest and cleanest 
     if I extend into the boxes (which I am doing, 64 is center of top box, 188 is center of shield).
  */

  const containerPadding = 40;
  // Top Icon Center (Y=64)
  // Shield Center (Y=188)
  // Bottom Icon Center (Y=312)

  // Top Paths (Targeting Shield Top or Center?)
  // If we go to Center (188), it's behind the shield. Good.

  // Bezier for Smoothness
  // x1=134 y1=64. x2=250 y2=188.
  // Control Point 1: 134, 140 (Go down first)
  // Control Point 2: 250, 110 (Then curve to center)
  const pathTopLeft = "M134 64 C 134 130, 250 100, 250 188";
  const pathTopMid = "M250 64 L 250 188";
  const pathTopRight = "M366 64 C 366 130, 250 100, 250 188";

  // Bottom Paths (From Shield Center 188 to Bottom 312)
  // x1=250 y1=188. x2=134 y2=312.
  // CP1: 250 260
  // CP2: 134 240
  const pathBottomLeft = "M250 188 C 250 270, 134 230, 134 312";
  const pathBottomMid = "M250 188 L 250 312";
  const pathBottomRight = "M250 188 C 250 270, 366 230, 366 312";

  return (
    <div
      className="beam-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="beam-content">
        {/* Top Row */}
        <div className="node-row top-row">
          <div className="icon-box">
            <Database size={20} />
          </div>
          <div className="icon-box">
            <LockKeyhole size={20} />
          </div>
          <div className="icon-box">
            <Unlock size={20} />
          </div>
        </div>

        {/* Center Shield */}
        <motion.div
          className="icon-box center-node"
          animate={
            isHovered
              ? {
                  borderColor: "#3b82f6",
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
                  color: "#3b82f6",
                }
              : {
                  borderColor: "#27272a",
                  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.5)",
                  color: "#71717a",
                }
          }
          transition={{ duration: 0.5, delay: 0.8 }} // Wait for top beams
        >
          <Shield size={48} fill="#18181b" strokeWidth={1.5} />
          <motion.div
            style={{
              position: "absolute",
              width: "6px",
              height: "12px",
              borderRadius: "4px",
              background: "#3b82f6",
              boxShadow: "0 0 10px #3b82f6",
              opacity: 0,
            }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Bottom Row */}
        <div className="node-row bottom-row">
          <motion.div
            className="icon-box bottom-node"
            animate={
              isHovered
                ? {
                    color: "#3b82f6",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    background: "rgba(59, 130, 246, 0.1)",
                  }
                : {}
            }
            transition={{ duration: 0.3, delay: 1.6 }}
          >
            <Brain size={20} />
          </motion.div>

          <motion.div
            className="icon-box bottom-node"
            animate={
              isHovered
                ? {
                    color: "#3b82f6",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    background: "rgba(59, 130, 246, 0.1)",
                  }
                : {}
            }
            transition={{ duration: 0.3, delay: 1.6 }}
          >
            <Activity size={20} />
          </motion.div>

          <motion.div
            className="icon-box bottom-node"
            animate={
              isHovered
                ? {
                    color: "#3b82f6",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    background: "rgba(59, 130, 246, 0.1)",
                  }
                : {}
            }
            transition={{ duration: 0.3, delay: 1.6 }}
          >
            <User size={20} />
          </motion.div>
        </div>

        <div className="text-section">
          <h3>Unmatched Data Protection</h3>
          <p>Keep your sensitive health data secure from threats.</p>
        </div>

        {/* SVG Drawing Layer */}
        <svg
          className="lines-svg"
          viewBox="0 0 500 450"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tracks (Static Background Lines) */}
          <path d={pathTopLeft} className="line-track" />
          <path d={pathTopMid} className="line-track" />
          <path d={pathTopRight} className="line-track" />

          <path d={pathBottomLeft} className="line-track" />
          <path d={pathBottomMid} className="line-track" />
          <path d={pathBottomRight} className="line-track" />

          {/* TOP BEAMS (Grayish) 
                Travel from Top to Shield.
            */}
          {[pathTopLeft, pathTopMid, pathTopRight].map((d, i) => (
            <motion.path
              key={`top-beam-${i}`}
              d={d}
              fill="none"
              stroke="#e4e4e7" // Zinc-200 (Greyish white)
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isHovered
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                delay: 0, // Start immediately
              }}
              // To act like a "beam", we can animate strokeDasharray
              // But simpler: animate pathLength 0->1, but use a separate mask or dasharray trick.
              // "Light beam ... form the icons to the middle"
              // Standard drawing animation often looks like a filling pipe.
              // For a "Pulse" that TRAVELS, we use strokeDasharray.
              strokeDasharray="0 1"
              style={{
                pathLength: isHovered ? 1 : 0,
                // Override style for advanced control if needed
              }}
            />
          ))}

          {/* Let's try the Traveling Beam approach properly for Top Lines */}
          {[pathTopLeft, pathTopMid, pathTopRight].map((d, i) => (
            <motion.path
              key={`top-travel-${i}`}
              d={d}
              fill="none"
              stroke="url(#topGradient)" // Gradient tail
              strokeWidth="3"
              strokeLinecap="round"
              // Beam length ~60. Total ~150.
              strokeDasharray="60 300"
              initial={{ strokeDashoffset: 360, opacity: 0 }}
              animate={
                isHovered
                  ? { strokeDashoffset: 0, opacity: 1 }
                  : { strokeDashoffset: 360, opacity: 0 }
              }
              transition={{
                duration: 1.0,
                ease: "circOut",
              }}
              filter="drop-shadow(0 0 2px white)"
            />
          ))}

          {/* BOTTOM BEAMS (Blue)
                Travel from Shield to Bottom.
            */}
          {[pathBottomLeft, pathBottomMid, pathBottomRight].map((d, i) => (
            <motion.path
              key={`btm-travel-${i}`}
              d={d}
              fill="none"
              stroke="#3b82f6" // Blue
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="60 300"
              initial={{ strokeDashoffset: 360, opacity: 0 }}
              animate={
                isHovered
                  ? { strokeDashoffset: 0, opacity: 1 }
                  : { strokeDashoffset: 360, opacity: 0 }
              }
              transition={{
                duration: 1.0,
                ease: "circOut",
                delay: 0.8, // Wait for top beam + process
              }}
              filter="drop-shadow(0 0 4px #3b82f6)"
            />
          ))}

          <defs>
            <linearGradient id="topGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
