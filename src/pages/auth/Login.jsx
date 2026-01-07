import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { BiLockAlt, BiShow, BiHide } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { showLoadingToast, showSuccessToast } from "../../helper/ToastHelper";
import { loginAction, redirectToGoogleAction } from "../../redux/action/auth/loginAction";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    const loadingToastId = showLoadingToast("Loading ...");

    const login = await dispatch(
      loginAction({
        email: email,
        password: password,
      }),
    );

    toast.dismiss(loadingToastId);

    if (login === true) {
      showSuccessToast("Login Successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

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
      <div className="mt-12 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header Section */}
        <div className="bg-blue-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Login Akun</h2>
          <p className="mt-1 text-sm text-blue-100">
            Silakan masuk ke akun kuis Anda
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6 p-8">
          {/* Input Email */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <div className="group relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 transition-colors group-focus-within:text-blue-500">
                <MdOutlineMail size={20} />
              </span>
              <input
                id="email"
                type="email"
                value={email}
                name="email"
                required
                onChange={handleInput}
                className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email"
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
                id="password"
                name="password"
                autoComplete="off"
                onChange={handleInput}
                className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-12 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="********"
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

          {/* Container Tombol */}
          <div className="space-y-4">
            {/* Login Button Utama */}
            <button
              type="submit"
              onKeyDown={(e) => e.key === "Enter"}
              onClick={handleLogin}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 active:scale-95"
            >
              Masuk
            </button>

            {/* Divider "Atau" */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-400">Atau</span>
              </div>
            </div>

            {/* Google Login Button */}
            <button
              type="button"
              onClick={() => redirectToGoogleAction()}
              className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-100 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-blue-600 hover:bg-gray-50 active:scale-95"
            >
              <FcGoogle size={22} />
              Masuk dengan Google
            </button>
          </div>

          {/* Footer Link (Opsional) */}
          <p className="text-center text-sm text-gray-500">
            Belum punya akun?{" "}
            <span
              onClick={() => navigate("/register")}
              className="cursor-pointer font-semibold text-blue-600 hover:underline"
            >
              Daftar di sini
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
