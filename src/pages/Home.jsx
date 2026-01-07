import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import {
  BiPlayCircle,
  BiTrophy,
  BiChevronRight,
  BiBoltCircle,
  BiCategory,
  BiTrendingUp,
  BiShieldQuarter,
  BiInfinite,
  BiMessageDetail,
  BiCodeAlt,
  BiUserCircle,
  BiLogOut,
} from "react-icons/bi";
import QuizAnimation from "../assets/components/animation/Student.json";
import { Footer } from "../assets/components/footer/Footer";
import { getAuthenticateAction } from "../redux/action/auth/loginAction";
import { CookiesKeys, CookieStorage } from "../utils/cookie";
import { logoutAction } from "../redux/action/auth/logoutAction";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { isLoggedIn, user } = useSelector((state) => state.authLogin);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      CookieStorage.set(CookiesKeys.AuthToken, token);

      dispatch(getAuthenticateAction());

      navigate("/", { replace: true });
    }else {
      if (CookieStorage.get(CookiesKeys.AuthToken)) {
         dispatch(getAuthenticateAction());
      }
    }
  }, []);

  const formatName = (fullname) => {
    if (!fullname) return "User";
    const nameArray = fullname.split(" ");
    if (nameArray.length > 2) {
      return `${nameArray[0]} ${nameArray[1]}`;
    }
    return fullname;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const popularCategories = [
    {
      id: 21,
      name: "Olahraga",
      icon: <BiPlayCircle />,
      color: "bg-orange-600",
      desc: "Uji analisismu mengenai rekor dunia dan atlet legendaris.",
    },
    {
      id: 27,
      name: "Hewan",
      icon: <BiBoltCircle />,
      color: "bg-emerald-600",
      desc: "Fakta unik dunia fauna dan habitat aslinya.",
    },
    {
      id: 23,
      name: "Sejarah",
      icon: <BiTrophy />,
      color: "bg-rose-600",
      desc: "Telusuri jejak peradaban yang membentuk dunia saat ini.",
    },
    {
      id: 11,
      name: "Film",
      icon: <BiCategory />,
      color: "bg-indigo-600",
      desc: "Wawasan mendalam tentang sinema dan industri kreatif.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* 1. Header Section */}
      <header className="bg-slate-900 relative overflow-hidden pb-32 pt-8 text-white">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-black tracking-tighter text-blue-500">
              QUIZ<span className="text-white">MASTER</span>
            </h1>

            <div className="flex items-center gap-4">
              {/* LOGIC: Jika TIDAK Login, tampilkan tombol Masuk & Daftar */}
              {!isLoggedIn ? (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="cursor-pointer text-xs font-bold transition-colors hover:text-blue-400"
                  >
                    Masuk
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="cursor-pointer rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-bold shadow-lg hover:bg-blue-500"
                  >
                    Daftar
                  </button>
                </>
              ) : (
                <div className="relative" ref={menuRef}>
                  <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="bg-slate-800 border-slate-700 hover:bg-slate-700 flex cursor-pointer items-center gap-2 rounded-full border py-1 pl-1 pr-3 transition-all"
                  >
                    <div className="text-slate-900 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[16px] font-bold">
                      {user?.fullname
                        ? user.fullname
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                            .slice(0, 2)
                        : "U"}
                    </div>
                    <span className="text-[14px] text-xs font-bold">
                      {formatName(user?.fullname) || "User"}
                    </span>
                  </div>

                  {/* Dropdown Menu */}
                  {isMenuOpen && (
                    <div className="border-slate-100 animate-in fade-in zoom-in absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border bg-white py-2 shadow-xl duration-200">
                      <button
                        onClick={() => {
                          navigate("/profile");
                          setIsMenuOpen(false);
                        }}
                        className="text-slate-700 hover:bg-slate-200 flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors"
                      >
                        <BiUserCircle size={18} className="text-slate-500" />
                        Profile
                      </button>
                      <div className="my-1 h-px bg-black"></div>{" "}
                      <button
                        onClick={handleLogout}
                        className="text-rose-600 flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors hover:bg-red-100"
                      >
                        <BiLogOut size={18} />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Jelajahi Dunia Lewat{" "}
                <span className="text-blue-500">Pertanyaan.</span>
              </h2>
              <p className="text-slate-400 mx-auto mt-4 max-w-lg text-base leading-relaxed lg:mx-0">
                Akses ribuan tantangan intelektual dari sumber global yang telah
                diadaptasi ke Bahasa Indonesia. Uji pengetahuanmu secara instan
                dan kompetitif.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <button
                  onClick={() => navigate("/setup")}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Mulai Tantangan <BiChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="hidden max-w-md lg:block lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[80px]"></div>

                <Lottie
                  animationData={QuizAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100%", height: "100%" }}
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]"></div>
      </header>

      {/* 2. Stats Section */}
      <div className="relative z-20 mx-auto -mt-12 max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="border-slate-100 flex items-center gap-4 rounded-2xl border bg-white p-6 shadow-sm">
            <BiShieldQuarter size={24} className="shrink-0 text-blue-600" />
            <div>
              <h4 className="text-slate-800 text-sm font-bold">
                Smart Translation
              </h4>
              <p className="text-slate-500 text-xs">
                Adaptasi bahasa yang akurat.
              </p>
            </div>
          </div>
          <div className="border-slate-100 flex items-center gap-4 rounded-2xl border bg-white p-6 shadow-sm">
            <BiTrendingUp size={24} className="text-emerald-600 shrink-0" />
            <div>
              <h4 className="text-slate-800 text-sm font-bold">
                Dynamic Difficulty
              </h4>
              <p className="text-slate-500 text-xs">Level Easy hingga Hard.</p>
            </div>
          </div>
          <div className="border-slate-100 flex items-center gap-4 rounded-2xl border bg-white p-6 shadow-sm">
            <BiInfinite size={24} className="shrink-0 text-orange-600" />
            <div>
              <h4 className="text-slate-800 text-sm font-bold">
                Unlimited Access
              </h4>
              <p className="text-slate-500 text-xs">
                Ribuan soal diperbarui berkala.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto mt-6 max-w-6xl px-6 lg:mt-16">
        {/* 3. Category Selection */}
        <div className="mb-10 text-center">
          <h3 className="text-slate-800 text-2xl font-extrabold">
            Pilih Bidang Keahlianmu
          </h3>
          <p className="text-slate-500 mt-1 text-sm">
            Buktikan seberapa jauh wawasanmu di berbagai topik dunia.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/setup?id=${cat.id}`)}
              className="border-slate-100 group cursor-pointer rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${cat.color} text-white shadow-md`}
              >
                {React.cloneElement(cat.icon, { size: 24 })}
              </div>
              <h4 className="text-slate-800 text-lg font-bold group-hover:text-blue-600">
                {cat.name}
              </h4>
              <p className="text-slate-500 mt-2 text-xs leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 4. Feature Excellence Section (Keunggulan Fitur) */}
        <section className="border-slate-100 mt-6 flex flex-col items-center gap-10 rounded-3xl border bg-white p-10 shadow-sm lg:mt-10 lg:flex-row">
          <div className="flex-1">
            <h3 className="text-slate-800 text-2xl font-bold leading-tight">
              Didesain untuk Pengalaman Belajar Modern.
            </h3>
            <p className="text-slate-500 mt-4 text-sm leading-relaxed">
              Kami mengintegrasikan teknologi API edukasi terbaik dengan
              algoritma kuis dinamis untuk memberikan pengalaman yang segar dan
              kompetitif setiap saat.
            </p>
            <div className="mt-6 flex gap-8">
              <div>
                <span className="text-2xl font-black text-blue-600">20+</span>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                  Kategori Aktif
                </p>
              </div>
              <div>
                <span className="text-slate-900 text-2xl font-black">100%</span>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                  Open Source API
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 w-full flex-1 space-y-3 rounded-2xl p-6 lg:w-auto">
            {[
              {
                title: "Real-time Scoring",
                desc: "Hasil analisis skor dan akurasi muncul seketika setelah kuis.",
              },
              {
                title: "Smart Localizer",
                desc: "Soal internasional yang diterjemahkan otomatis ke Bahasa Indonesia.",
              },
              {
                title: "Instant Access",
                desc: "Mainkan kuis kapan saja tanpa perlu registrasi yang rumit.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border-slate-100 flex flex-col gap-1 rounded-lg border bg-white p-3 shadow-sm"
              >
                <div className="text-slate-800 flex items-center gap-2 text-xs font-bold">
                  <BiChevronRight className="text-blue-600" /> {item.title}
                </div>
                <p className="text-slate-500 ml-5 text-[10px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Feedback Section (Kolom Saran Developer) */}
        <section className="bg-linear-to-br from-slate-800 to-slate-950 relative mb-6 mt-6 overflow-hidden rounded-3xl p-10 text-center text-white lg:mb-10 lg:mt-10">
          <div className="relative z-10">
            <div className="mb-4 inline-flex rounded-full bg-blue-500/20 p-3 text-blue-400">
              <BiMessageDetail size={32} />
            </div>
            <h3 className="text-2xl font-bold italic">
              Punya Ide atau Masukan?
            </h3>
            <p className="text-slate-400 mx-auto mt-2 max-w-lg text-sm">
              Bantu kami mengembangkan QuizMaster menjadi lebih baik. Setiap
              kritik dan saran sangat berarti bagi perjalanan kami.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:sugab.dwi88@gmail.com"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-500"
              >
                Hubungi Developer
              </a>
              <a
                href="https://github.com/Bagusdpa4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 flex items-center justify-center gap-2 rounded-xl border px-8 py-3 text-sm font-bold text-white transition-all"
              >
                <BiCodeAlt size={18} /> Kontribusi di GitHub
              </a>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
