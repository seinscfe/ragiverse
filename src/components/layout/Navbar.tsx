"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const navItems = [
    { label: "ホーム", path: "/" },
    { label: "ミニゲーム", path: "/minigames" },
    { label: "ファンアート", path: "/fanart" },
  ];

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between bg-surface/80 backdrop-blur-md shadow-lg z-50 border-b border-pink-950"
    >
      <h1 className="font-extrabold text-2xl text-accent">ラギ☆ラギ</h1>

      <nav className="hidden md:flex space-x-6 font-semibold text-lg">
        {navItems.map(({ label, path }) => (
          <Link
            key={label}
            href={path}
            className="relative hover:text-accent transition-all after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-accent after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-surface/90 backdrop-blur-md shadow-lg md:hidden flex flex-col items-center gap-4 py-6 text-lg">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              href={path}
              className="text-white hover:text-accent transition-all text-xl"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
