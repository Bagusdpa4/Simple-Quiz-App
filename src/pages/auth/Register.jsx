import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiUser, BiLockAlt, BiShow, BiHide } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-center bg-no-repeat p-4 font-sans transition-all duration-700 ${isLoaded ? "blur-0" : "blur-lg"}`}
      style={{
        backgroundColor: "#1e40af",
        backgroundImage: `url('/images/bg-auth.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <img
        src="/images/bg-auth.jpg"
        className="hidden"
        onLoad={() => setIsLoaded(true)}
      />
      <div className="mt-3 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header Section */}
        <div className="bg-blue-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Daftar Akun</h2>
          <p className="mt-1 text-sm text-blue-100">
            Mulai petualangan kuis kamu di sini
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-4 p-8">
          {/* Input Username */}
          <div className="space-y-1">
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
                placeholder="Username baru"
                required
              />
            </div>
          </div>

          {/* Input Email */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <div className="group relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 transition-colors group-focus-within:text-blue-500">
                <MdOutlineMail size={20} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email"
                required
              />
            </div>
          </div>

          {/* Input Password */}
          <div className="space-y-1">
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
                placeholder="Buat password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-600">
              Konfirmasi Password
            </label>
            <div className="group relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 transition-colors group-focus-within:text-blue-500">
                <BiLockAlt size={20} />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-12 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Ulangi password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <BiHide size={20} />
                ) : (
                  <BiShow size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 active:scale-95"
          >
            Daftar Sekarang
          </button>

          {/* Footer Link */}
          <p className="text-center text-sm text-gray-500">
            Sudah punya akun?{" "}
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer font-semibold text-blue-600 hover:underline"
            >
              Masuk di sini
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
