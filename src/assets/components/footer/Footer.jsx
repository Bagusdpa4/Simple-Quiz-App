import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const emailAddress = "sugab.dwi88@gmail.com";

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 font-sans text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6">
        <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo / Name */}
          <div className="text-lg font-black tracking-tighter text-white">
            QUIZ<span className="text-blue-500">MASTER</span>
            <p className="text-[10px] font-medium text-slate-500 tracking-normal mt-0.5 uppercase">
              By Bagus Dwi Putra
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {[
              {
                icon: <FaGithub />,
                href: "https://github.com/Bagusdpa4",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/bagusdwiputraadiyono/",
                label: "LinkedIn",
              },
              {
                icon: <FaWhatsapp />,
                href: "https://wa.me/+6282229749462",
                label: "WhatsApp",
              },
              {
                icon: <FaInstagram />,
                href: "https://www.instagram.com/bagusdwiputraa/",
                label: "Instagram",
              },
              {
                icon: <AiOutlineMail />,
                href: `mailto:${emailAddress}`,
                label: "Email",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-slate-500 transition-all hover:text-blue-500 hover:-translate-y-1"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-slate-800"></div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col items-center justify-between w-full gap-4 sm:flex-row text-[11px] font-medium uppercase tracking-widest text-slate-500">
          <p>&copy; {currentYear} QuizMaster. All Rights Reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-slate-300 transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
