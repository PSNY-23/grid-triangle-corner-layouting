import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import "./AuthCard.css";

export const AuthCard = () => {
  const [email, setEmail] = useState("vladderkach@mail.com");

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h2>Welcome back</h2>
        <p>Sign in to your account</p>
      </div>

      <div className="input-group">
        <label className="input-label">Email</label>
        <input
          type="email"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="submit-btn">
          <ArrowRight size={20} strokeWidth={2.5} />
        </button>
      </div>

      <div className="divider">OR</div>

      <div className="social-btn">
        <div className="social-left">
          {/* Google G Icon (SVG) */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="social-text">Continue with Google</span>
        </div>
        <ArrowRight size={16} className="social-arrow" />
      </div>

      <div className="social-btn">
        <div className="social-left">
          {/* X Icon (SVG) */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h.001zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
          </svg>
          <span className="social-text">Continue with X</span>
        </div>
        <ArrowRight size={16} className="social-arrow" />
      </div>

      <div className="auth-footer">
        Don't have an account?
        <a href="#" className="link">
          Sign up
        </a>
      </div>
    </div>
  );
};
