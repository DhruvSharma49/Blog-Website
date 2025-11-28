import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Store/authSlice";
import authService from "../Appwrite/auth";
import { Button, Input, Logo } from "./index";
import appwriteService from "../Appwrite/config";

function Signup({ setShowSignup }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    setError("");
    try {
      const currentUser = await authService.createAccount(data); // now returns currentUser
      if (currentUser) {
        // create user doc in DB (use ID.unique() internally in service)
        await appwriteService.createUserDoc({
          userid: currentUser.$id, // account id
          name: data.name,
          bio: "",
          avatarURL: "",
          coverURL: "",
        });

        // fetch user doc and store in Redux
        const userDoc = await appwriteService.getUserByAccountId(
          currentUser.$id
        );
        if (userDoc) dispatch(login(userDoc));
        navigate("/");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message || "Signup failed");
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-12 flex flex-col items-center w-full max-w-lg transition-transform duration-300 hover:scale-[1.03]">
      <Logo width="80px" />
      <h2 className="mt-6 text-3xl font-bold text-white text-center drop-shadow-lg">
        Sign Up
      </h2>
      <p className="mt-2 text-white/70 text-center">
        Already have an account?{" "}
        <button
          onClick={() => setShowSignup(false)}
          className="text-pink-400 hover:underline font-semibold"
        >
          Sign In
        </button>
      </p>

      {error && <p className="text-red-400 mt-4">{error}</p>}

      <form
        onSubmit={handleSubmit(create)}
        className="w-full mt-6 space-y-6 text-white"
      >
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          {...register("name", { required: true })}
        />
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
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default Signup;
