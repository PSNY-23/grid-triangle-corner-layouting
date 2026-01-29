import React from "react";
import { motion } from "motion/react";
import {
  Settings,
  ShieldCheck,
  Database,
  Terminal,
  MousePointer2,
  User,
  MessageSquare,
  Github,
  Gitlab,
  Slack,
  Trello, // Generic placeholder
  Box,
  Layers,
} from "lucide-react";
import "./BentoGrid.css";

const RadarCard = () => {
  return (
    <div className="card-visual">
      {/* Concentric Circles */}
      {[100, 180, 260].map((size, i) => (
        <div
          key={i}
          className="radar-circle"
          style={{ width: size, height: size }}
        />
      ))}

      {/* Animated Ripples */}
      {[1, 2].map((i) => (
        <motion.div
          key={`ripple-${i}`}
          className="radar-circle"
          style={{
            width: 100,
            height: 100,
            borderColor: "rgba(59, 130, 246, 0.4)",
          }}
          animate={{
            width: [100, 300],
            height: [100, 300],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Center Icon */}
      <div className="z-10 bg-zinc-900/80 p-4 rounded-2xl border border-zinc-700 backdrop-blur-md">
        <Settings size={32} className="text-blue-500" />
      </div>

      {/* Sound wave icons / indicators */}
      <motion.div
        className="absolute top-1/3 left-1/3"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-1 bg-white rounded-full" />
      </motion.div>
    </div>
  );
};

const SecurityCard = () => {
  return (
    <div className="card-visual flex-col gap-4">
      {/* Simple Tree Structure */}
      {/* We can use SVGs or just simple flex + absolute lines */}
      <div className="relative flex flex-col items-center h-full justify-center w-full">
        {/* Top Node */}
        <motion.div
          className="z-10 bg-zinc-800 p-4 rounded-full border border-zinc-700 mb-12 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(16,185,129,0.4)",
          }}
        >
          <ShieldCheck size={32} className="text-emerald-500" />
        </motion.div>

        {/* Connecting Lines (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          {/* Left Branch */}
          <motion.path
            d="M190 60 C 190 120, 100 80, 100 160"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <motion.path
            d="M190 60 C 190 120, 280 80, 280 160"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />

          {/* Scanning Beam Animation */}
          <motion.circle r="3" fill="#10b981">
            <motion.animateMotion
              path="M190 60 C 190 120, 100 80, 100 160"
              dur="2s"
              repeatCount="indefinite"
            />
          </motion.circle>
          <motion.circle r="3" fill="#10b981">
            <motion.animateMotion
              path="M190 60 C 190 120, 280 80, 280 160"
              dur="2s"
              begin="1s"
              repeatCount="indefinite"
            />
          </motion.circle>
        </svg>

        {/* Bottom Nodes */}
        <div className="flex gap-32 z-10 mt-8">
          <div className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs font-mono text-zinc-400">
            CD
          </div>
          <div className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs font-mono text-zinc-400">
            CI
          </div>
        </div>
      </div>
    </div>
  );
};

const EditorCard = () => {
  return (
    <div className="card-visual">
      <div className="editor-ui hover:scale-[1.02] transition-transform duration-300">
        <div className="editor-sidebar">
          <div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-500">
            T
          </div>
          <div className="w-5 h-5 rounded bg-zinc-800/50" />
          <div className="w-5 h-5 rounded bg-zinc-800/50" />
          <div className="mt-auto mb-2 w-5 h-5 rounded bg-zinc-800/30" />
        </div>
        <div className="editor-main">
          {/* Mock blocks */}
          <div className="flex gap-4 mb-4">
            <div className="w-24 h-16 ui-block bg-zinc-800 border border-zinc-700" />
            <div className="w-16 h-16 ui-block bg-zinc-800/50 border border-dashed border-zinc-700" />
          </div>
          <div className="w-full h-24 ui-block bg-zinc-800/30 border border-zinc-800" />

          {/* Floating Hand Cursor */}
          <motion.div
            className="absolute z-20 text-white drop-shadow-md"
            initial={{ top: "60%", left: "70%" }}
            animate={{
              top: ["60%", "30%", "30%"],
              left: ["70%", "30%", "30%"],
              scale: [1, 1, 0.9, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              times: [0, 0.4, 0.5, 1],
              repeatDelay: 1,
            }}
          >
            <MousePointer2 size={24} fill="currentColor" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeedbackCard = () => {
  return (
    <div className="card-visual relative overflow-hidden">
      {/* Background Arcs */}
      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-zinc-800 rounded-full" />
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-[450px] h-[450px] border border-zinc-800 rounded-full" />
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] border border-zinc-800 rounded-full" />

      {/* Orbiting Users */}
      <motion.div
        className="absolute top-[60%] left-1/2 w-[300px] h-[300px] -translate-x-1/2 -mt-[150px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-10 h-10 bg-zinc-800 rounded-full border border-zinc-600 flex items-center justify-center">
          <User size={16} className="text-zinc-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[70%] left-1/2 w-[450px] h-[450px] -translate-x-1/2 -mt-[225px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        <div className="absolute bottom-[20%] right-[10%] w-8 h-8 bg-zinc-800 rounded-full border border-zinc-600 flex items-center justify-center">
          <MessageSquare size={14} className="text-zinc-400" />
        </div>
      </motion.div>

      {/* Center focus */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 translate-y-20 z-10 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
    </div>
  );
};

const StackCard = () => {
  return (
    <div className="card-visual relative">
      {/* Center Hub */}
      <div className="relative z-10 w-24 h-24 bg-zinc-900 rounded-3xl border border-zinc-700 shadow-2xl flex items-center justify-center group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Layers size={40} className="text-indigo-400" />
      </div>

      {/* Satellites */}
      {/* We'll position them absolutely relative to center */}
      {[
        { icon: Github, x: -120, y: -60, color: "#fff" },
        { icon: Gitlab, x: 120, y: -60, color: "#fc6d26" },
        { icon: Slack, x: -120, y: 60, color: "#4a154b" },
        { icon: Trello, x: 120, y: 60, color: "#0079bf" },
      ].map((Item, i) => (
        <React.Fragment key={i}>
          {/* Connecting Line */}
          <div
            className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-zinc-700 to-transparent origin-left z-0"
            style={{
              width: 120,
              transform: `translate(-50%, -50%) rotate(${Math.atan2(Item.y, Item.x) * (180 / Math.PI)}deg) translate(50px, 0)`, // Maths to point line outward
            }}
          >
            {/* Pulse traveling on line */}
            <motion.div
              className="absolute top-1/2 left-0 w-8 h-[2px] bg-indigo-500 shadow-[0_0_5px_#6366f1]"
              animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          </div>

          {/* Icon Bubble */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center z-10"
            style={{
              marginLeft: Item.x - 24, // Center offset
              marginTop: Item.y - 24, // Center offset
            }}
            whileHover={{ scale: 1.2, borderColor: Item.color }}
          >
            <Item.icon
              size={20}
              color={Item.color === "#fff" ? "#94a3b8" : Item.color}
            />
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  );
};

export const BentoGrid = () => {
  return (
    <div className="bento-container">
      <div className="bento-grid-6">
        {/* Item 1 */}
        <div className="bento-card col-span-2">
          <RadarCard />
          <div className="card-content">
            <div className="card-title">Smart Deployment Automation</div>
            <div className="card-description">
              Automate your deployment flow with customizable triggers and
              rollbacks.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bento-card col-span-2">
          <SecurityCard />
          <div className="card-content">
            <div className="card-title">Security-First CI/CD</div>
            <div className="card-description">
              Built-in vulnerability scans and permission-based controls.
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bento-card col-span-2">
          <EditorCard />
          <div className="card-content">
            <div className="card-title">Drag & Drop Pipeline Editor</div>
            <div className="card-description">
              No YAML nightmares. Visually design and connect your pipeline.
            </div>
          </div>
        </div>

        {/* Item 4 (Wide) */}
        <div className="bento-card col-span-3">
          <FeedbackCard />
          <div className="card-content relative z-10">
            <div className="card-title">Effortless Feedback Loops</div>
            <div className="card-description">
              Collaborate better with live comments on failed builds.
            </div>
          </div>
        </div>

        {/* Item 5 (Wide) */}
        <div className="bento-card col-span-3">
          <StackCard />
          <div className="card-content">
            <div className="card-title">Integrated with Your Stack</div>
            <div className="card-description">
              Connect GitHub, GitLab, Slack, Jira and more without writing code.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
