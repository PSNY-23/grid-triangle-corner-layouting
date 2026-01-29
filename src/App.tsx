import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { DesignPage } from "./pages/DesignPage";
import { AuthPage } from "./pages/AuthPage";
import { BeamPage } from "./pages/BeamPage";
import { BentoPage } from "./pages/BentoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/beam-card" element={<BeamPage />} />
        <Route path="/bento" element={<BentoPage />} />
        {/* Placeholders for demo links */}
        <Route
          path="/profile"
          element={
            <div className="flex items-center justify-center h-screen text-2xl font-bold bg-[#f4f1ea] text-[#0f3e3c]">
              Profile Page (Demo)
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="flex items-center justify-center h-screen text-2xl font-bold bg-[#f4f1ea] text-[#0f3e3c]">
              Settings Page (Demo)
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
