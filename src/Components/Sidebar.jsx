import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser, FaCog, FaQuestionCircle } from "react-icons/fa";
import LogoutBtn from "../Components/LogoutBtn";

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const LoogedInUserName = useSelector((state) => state.auth.userData);

  const navTo = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(0,0,0,0.35)",
          backdropFilter: isOpen ? "blur(6px)" : "none",
        }}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[90vw] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className="h-full flex flex-col px-4 py-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.28), rgba(255,255,255,0.12))",
            boxShadow: "0 10px 30px rgba(2,6,23,0.5)",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "saturate(140%) blur(8px)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-white/20 transition"
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Main Content */}
          <div className="flex-1 overflow-y-auto">
            <nav className="space-y-2">
    

              <button
                onClick={() => navTo("/accountsetting")}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition text-gray-900"
              >
                <FaCog /> <span>Account Settings</span>
              </button>

            

              <div className="border-t my-4 border-amber-800" />

              <div className="text-sm text-gray-900">
                <h3 className="text-lg font-semibold text-gray-900">
                  Quick links
                </h3>
                <div className="flex flex-col gap-2 mt-2">
                  <Link to="/home" onClick={onClose} className="hover:underline">
                  Home
                  </Link>
                  <Link to="/profile/edit" onClick={onClose} className="hover:underline">
                  Edit Profile
                  </Link>
                  <Link
                    to="/add-post"
                    onClick={onClose}
                    className="hover:underline"
                  >
                    Create Post
                  </Link>
                  <Link
                    to="/help"
                    onClick={onClose}
                    className="hover:underline"
                  >
                    Help & Support
                  </Link>
                </div>
              </div>
            </nav>

            <div className="mt-8 text-xs">
              <p className="font-semibold text-gray-900">Signed in as</p>
              <p className="mt-1 font-medium text-red-950">
                {LoogedInUserName?.name || LoogedInUserName?.email || "Unknown User"}
              </p>
            </div>
          </div>

          {/* ✅ Fixed Bottom Logout Button */}
          <div className="pt-4 border-t border-amber-800 mt-4">
            <LogoutBtn />
          </div>
        </div>
      </aside>
    </>
  );
}
