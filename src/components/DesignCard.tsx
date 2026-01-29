import React, { useState } from "react";
import {
  Users,
  Target,
  Sparkles,
  Mail,
  Fingerprint,
  Lock,
  ChevronRight,
} from "lucide-react";
import "./DesignCard.css";

export const DesignCard = () => {
  const [activeItem, setActiveItem] = useState("targets");

  return (
    <div className="design-card-container">
      <div className="design-card-content">
        {/* Header */}
        <div className="card-header">
          <div className="profile-section">
            <div className="avatar-stack">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
                alt="Profile"
                className="avatar"
              />
              <div className="avatar-count">+23</div>
            </div>
            <div className="user-info">
              <h3>Neto Design</h3>
              <p>neto@contact.com</p>
            </div>
          </div>
          <div className="team-badge">TEAM</div>
        </div>

        {/* Menu Items */}
        <div className="menu-list">
          <div
            className={`menu-item ${activeItem === "members" ? "active" : ""}`}
            onClick={() => setActiveItem("members")}
          >
            <div className="icon-box">
              <Users size={20} strokeWidth={1.5} />
            </div>
            <span className="item-label">Members</span>
            <span className="item-value">24</span>
          </div>

          <div
            className={`menu-item ${activeItem === "targets" ? "active" : ""}`}
            onClick={() => setActiveItem("targets")}
          >
            <div className="icon-box">
              <Target size={20} strokeWidth={1.5} />
            </div>
            <span className="item-label">Business Targets</span>
            <ChevronRight size={16} className="chevron" />
          </div>

          <div
            className={`menu-item ${activeItem === "achievements" ? "active" : ""}`}
            onClick={() => setActiveItem("achievements")}
          >
            <div className="icon-box">
              <Sparkles size={20} strokeWidth={1.5} />
            </div>
            <span className="item-label">Achievements</span>
            <span className="new-badge">3 NEW</span>
          </div>

          <div
            className={`menu-item ${activeItem === "mailbox" ? "active" : ""}`}
            onClick={() => setActiveItem("mailbox")}
          >
            <div className="icon-box">
              <Mail size={20} strokeWidth={1.5} />
            </div>
            <span
              className="item-label"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              Mailbox{" "}
              <span
                style={{
                  color: "#ef4444",
                  fontSize: "20px",
                  lineHeight: 0,
                  marginTop: "-2px",
                }}
              >
                •
              </span>
            </span>
            <ChevronRight size={16} className="chevron" />
          </div>
        </div>

        <div className="divider"></div>

        <div className="menu-list">
          <div
            className={`menu-item ${activeItem === "fingerprint" ? "active" : ""}`}
            onClick={() => setActiveItem("fingerprint")}
          >
            <div className="icon-box">
              <Fingerprint size={20} strokeWidth={1.5} />
            </div>
            <span className="item-label">Reset Fingerprints</span>
            <ChevronRight size={16} className="chevron" />
          </div>

          <div className="menu-item">
            <div className="icon-box">
              <Lock size={20} strokeWidth={1.5} />
            </div>
            <span className="item-label">Make Private</span>
            <div className="toggle-switch">
              <div className="toggle-knob"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
