import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as authLogin } from "../Store/authSlice";
import authService from "../Appwrite/auth";
import { Button, Input, Logo } from "./index";
import appwriteService from "../Appwrite/config";

function Login({ setShowSignup }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const handleLogin = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      console.log("Session created:", session);

      // Wait a bit to ensure session is registered
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        setError("Failed to fetch user details. Try again.");
        return;
      }

      const userDoc = await appwriteService.getUserByAccountId(currentUser.$id);
      if (userDoc) dispatch(authLogin(userDoc));

      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-12 flex flex-col items-center w-full max-w-lg transition-transform duration-300 hover:scale-[1.03]">
      <Logo width="80px" />
      <h2 className="mt-6 text-3xl font-bold text-white text-center drop-shadow-lg">
        Sign In
      </h2>
      <p className="mt-2 text-white/70 text-center">
        Don’t have an account?{" "}
        <button
          onClick={() => setShowSignup(true)}
          className="text-pink-400 hover:underline font-semibold"
        >
          Sign Up
        </button>
      </p>

      {error && <p className="text-red-400 mt-4">{error}</p>}

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full mt-6 space-y-6 text-white"
      >
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 hover:shadow-xl text-white font-bold transition-all duration-300">
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default Login;
