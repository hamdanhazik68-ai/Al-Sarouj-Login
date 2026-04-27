"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
    });
    alert("Check your email for login link");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Login</h1>

      <input
        className="border p-2 mt-3"
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-black text-white px-4 py-2 mt-3"
      >
        Login
      </button>
    </div>
  );
}