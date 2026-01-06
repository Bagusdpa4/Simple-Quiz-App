import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BiPlayCircle,
  BiTrophy,
  BiUserCircle,
  BiChevronRight,
  BiBoltCircle,
  BiCategory,
  BiMedal,
  BiTrendingUp,
  BiGlobe,
  BiShieldQuarter,
  BiInfinite,
  BiMessageDetail,
  BiCodeAlt,
} from "react-icons/bi";
import { Footer } from "../assets/components/footer/Footer";

export const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = false;
  const user = isLoggedIn
    ? { username: "Pejuang Kuis", rank: 12, totalScore: 1250 }
    : null;

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
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 1. Header Section */}
      <header className="relative bg-slate-900 pb-32 pt-8 text-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-black tracking-tighter text-blue-500">
              QUIZ<span className="text-white">MASTER</span>
            </h1>
            {!isLoggedIn && (
              <div className="flex gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="text-xs cursor-pointer font-bold hover:text-blue-400 transition-colors"
                >
                  Masuk
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="rounded-lg cursor-pointer bg-blue-600 px-4 py-1.5 text-xs font-bold hover:bg-blue-500 shadow-lg"
                >
                  Daftar
                </button>
              </div>
            )}
          </div>

          <div className="mt-14 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Jelajahi Dunia Lewat{" "}
                <span className="text-blue-500">Pertanyaan.</span>
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Akses ribuan tantangan intelektual dari sumber global yang telah
                diadaptasi ke Bahasa Indonesia. Uji pengetahuanmu secara instan
                dan kompetitif.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/setup")}
                  className="flex items-center cursor-pointer justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500 hover:-translate-y-0.5 transition-all shadow-lg text-sm"
                >
                  Mulai Tantangan <BiChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="hidden lg:block opacity-10">
              <BiGlobe size={200} className="animate-pulse" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full"></div>
      </header>

      {/* 2. Stats Section */}
      <div className="mx-auto -mt-12 max-w-6xl px-6 relative z-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-center gap-4">
            <BiShieldQuarter size={24} className="text-blue-600 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Smart Translation
              </h4>
              <p className="text-xs text-slate-500">
                Adaptasi bahasa yang akurat.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-center gap-4">
            <BiTrendingUp size={24} className="text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Dynamic Difficulty
              </h4>
              <p className="text-xs text-slate-500">Level Easy hingga Hard.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-center gap-4">
            <BiInfinite size={24} className="text-orange-600 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Unlimited Access
              </h4>
              <p className="text-xs text-slate-500">
                Ribuan soal diperbarui berkala.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto mt-16 max-w-6xl px-6">
        {/* 3. Category Selection */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-extrabold text-slate-800">
            Pilih Bidang Keahlianmu
          </h3>
          <p className="text-slate-500 text-sm mt-1">
            Buktikan seberapa jauh wawasanmu di berbagai topik dunia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/setup?id=${cat.id}`)}
              className="group rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${cat.color} text-white shadow-md`}
              >
                {React.cloneElement(cat.icon, { size: 24 })}
              </div>
              <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600">
                {cat.name}
              </h4>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 4. Feature Excellence Section (Keunggulan Fitur) */}
        <section className="mt-20 rounded-3xl bg-white p-10 border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 leading-tight">
              Didesain untuk Pengalaman Belajar Modern.
            </h3>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Kami mengintegrasikan teknologi API edukasi terbaik dengan
              algoritma kuis dinamis untuk memberikan pengalaman yang segar dan
              kompetitif setiap saat.
            </p>
            <div className="mt-6 flex gap-8">
              <div>
                <span className="text-2xl font-black text-blue-600">20+</span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Kategori Aktif
                </p>
              </div>
              <div>
                <span className="text-2xl font-black text-slate-900">100%</span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Open Source API
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-auto bg-slate-50 rounded-2xl p-6 space-y-3">
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
                className="flex flex-col gap-1 bg-white p-3 rounded-lg border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <BiChevronRight className="text-blue-600" /> {item.title}
                </div>
                <p className="text-[10px] text-slate-500 ml-5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Feedback Section (Kolom Saran Developer) */}
        <section className="mt-20 mb-20 rounded-3xl bg-linear-to-br from-slate-800 to-slate-950 p-10 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex p-3 rounded-full bg-blue-500/20 text-blue-400 mb-4">
              <BiMessageDetail size={32} />
            </div>
            <h3 className="text-2xl font-bold italic">
              Punya Ide atau Masukan?
            </h3>
            <p className="mt-2 text-slate-400 text-sm max-w-lg mx-auto">
              Bantu kami mengembangkan QuizMaster menjadi lebih baik. Setiap
              kritik dan saran sangat berarti bagi perjalanan kami.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sugab.dwi88@gmail.com"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold text-white hover:bg-blue-500 transition-all shadow-lg"
              >
                Hubungi Developer
              </a>
              <a
                href="https://github.com/Bagusdpa4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-700/50 px-8 py-3 text-sm font-bold text-white border border-slate-600 hover:bg-slate-700 transition-all"
              >
                <BiCodeAlt size={18} /> Kontribusi di GitHub
              </a>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
