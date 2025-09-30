import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-black">
      {showSignup ? (
        <Signup setShowSignup={setShowSignup} />
      ) : (
        <Login setShowSignup={setShowSignup} />
      )}
    </div>
  );
}
