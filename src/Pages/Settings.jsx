import { useState, useEffect } from "react";

const Settings = () => {
  // Load settings from localStorage or default values
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") === "true"
  );
  const [autoplay, setAutoplay] = useState(
    localStorage.getItem("autoplay") === "true"
  );
  const [scrollBehavior, setScrollBehavior] = useState(
    localStorage.getItem("scrollBehavior") || "normal"
  );

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkmode", newMode.toString());
    if (newMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  // Toggle Autoplay
  const toggleAutoplay = () => {
    const newValue = !autoplay;
    setAutoplay(newValue);
    localStorage.setItem("autoplay", newValue.toString());
  };

  // Toggle Scroll Behavior
  const toggleScrollBehavior = () => {
    const newValue = scrollBehavior === "normal" ? "instagram" : "normal";
    setScrollBehavior(newValue);
    localStorage.setItem("scrollBehavior", newValue);
  };

  // Clear Watch History
  const clearHistory = () => {
    localStorage.removeItem("watchHistory");
    alert("Watch history cleared!");
  };

  // Apply dark mode on mount
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="p-6 bg-white text-black dark:text-white dark:bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="flex flex-col gap-4">
        {/* Dark Mode */}
        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-md transition ${
              darkMode
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {darkMode ? "Disable" : "Enable"}
          </button>
        </div>

        {/* Autoplay */}
        <div className="flex items-center justify-between">
          <span>Autoplay Next Video</span>
          <button
            onClick={toggleAutoplay}
            className={`px-4 py-2 rounded-md transition ${
              autoplay
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {autoplay ? "Disable" : "Enable"}
          </button>
        </div>

        {/* Scroll Behavior */}
        <div className="flex items-center justify-between">
          <span>Scroll Behavior (Shorts)</span>
          <button
            onClick={toggleScrollBehavior}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {scrollBehavior === "normal"
              ? "Instagram Style"
              : "Normal Scroll"}
          </button>
        </div>

        {/* Clear Watch History */}
        <div className="flex items-center justify-between">
          <span>Clear Watch History</span>
          <button
            onClick={clearHistory}
            className="px-4 py-2 rounded-md bg-yellow-600 text-white hover:bg-yellow-700 transition"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
