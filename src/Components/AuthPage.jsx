// import React, { useState } from "react";
// import Login from "./Login";
// import Signup from "./Signup";

// export default function AuthPage() {
//   const [showSignup, setShowSignup] = useState(false);

//   return (
//     <div className="flex items-center justify-center w-full min-h-screen bg-black">
//       {showSignup ? (
//         <Signup setShowSignup={setShowSignup} />
//       ) : (
//         <Login setShowSignup={setShowSignup} />
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import Login from "./Login";
// import Signup from "./Signup";

// export default function AuthPage() {
//   const [showSignup, setShowSignup] = useState(false);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-black to-pink-700 px-4">
//       <div className="w-full max-w-md relative">
//         {showSignup ? (
//           <Signup setShowSignup={setShowSignup} />
//         ) : (
//           <Login setShowSignup={setShowSignup} />
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    // <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-black to-pink-700 px-4">

      {/* Left Column - Card */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        {showSignup ? (
          <Signup setShowSignup={setShowSignup} />
        ) : (
          <Login setShowSignup={setShowSignup} />
        )}
      </div>

      {/* Right Column - Dynamic Welcome Message */}
      <div key={showSignup ? "signup" : "login"} className="flex-1 hidden md:flex flex-col justify-center px-12 text-white transition-all duration-500">
        {showSignup ? (
          <>
            <h1 className="text-5xl font-bold mb-6 drop-shadow-lg text-pink-300 animate-fadeIn">
              Join BlockHive Today!
            </h1>
            <p className="text-xl text-white/80 mb-4 animate-fadeIn delay-150">
              Create your account and unlock a world of creative blocks.
            </p>
            <p className="text-lg text-white/70 italic animate-fadeIn delay-300">
              Let's build something amazing together!
            </p>
          </>
        ) : (
          <>
            <h1 className="text-5xl font-bold mb-6 drop-shadow-lg text-indigo-300 animate-fadeIn">
              Welcome Back to BlockHive
            </h1>
            <p className="text-xl text-white/80 mb-4 animate-fadeIn delay-150">
              Sign in to continue exploring your creative blocks.
            </p>
            <p className="text-lg text-white/70 italic animate-fadeIn delay-300">
              Your creativity awaits!
            </p>
          </>
        )}
      </div>
    </div>
  );
}
