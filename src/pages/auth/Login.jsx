import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BiUser,
  BiLockAlt,
  BiShow,
  BiHide,
} from "react-icons/bi";
import bgAuth from "../../assets/img/bg-auth.jpg";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4 font-sans bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgAuth})` }}
    >
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl mt-20">
        {/* Header Section */}
        <div className="bg-blue-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Login Akun</h2>
          <p className="mt-1 text-sm text-blue-100">
            Silakan masuk ke akun kuis Anda
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6 p-8">
          {/* Input Username */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-600">
              Username
            </label>
            <div className="group relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 transition-colors group-focus-within:text-blue-500">
                <BiUser size={20} />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan username"
                required
              />
            </div>
          </div>

          {/* Input Password */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <div className="group relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 transition-colors group-focus-within:text-blue-500">
                <BiLockAlt size={20} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-12 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="********"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 cursor-pointer right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 active:scale-95"
          >
            Masuk Sekarang
          </button>

          {/* Footer Link (Opsional) */}
          <p className="text-center text-sm text-gray-500">
            Belum punya akun?{" "}
            <span
              onClick={() => navigate("/register")}
              className="cursor-pointer text-blue-600 font-semibold hover:underline"
            >
              Daftar di sini
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
