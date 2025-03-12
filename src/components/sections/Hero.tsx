"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BackgroundScene from "@/components/ui/BackgroundScene";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [bgColor, setBgColor] = useState("from-purple-600 to-pink-600");

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    const gradientColors = [
      "from-blue-600 to-purple-600",
      "from-green-600 to-blue-600",
      "from-yellow-600 to-red-600",
      "from-purple-600 to-pink-600",
    ];
    let index = 0;

    const changeBg = () => {
      index = (index + 1) % gradientColors.length;
      setBgColor(gradientColors[index]);
    };

    const bgInterval = setInterval(changeBg, 5000);

    return () => clearInterval(bgInterval);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative w-full h-auto px-6 py-10 pt-20 pb-32 md:pt-24 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden bg-gradient-to-r ${bgColor} transition-all duration-1000 z-10`}
    >
      <BackgroundScene />

      <div className="h-full bg-white/10 backdrop-blur-lg shadow-lg rounded-xl border border-white/20 p-6 flex flex-col justify-center items-center gap-4 text-center relative z-20 transition-transform hover:scale-105">
        <Image
          src="/images/profile.jpg"
          alt="Profile Icon"
          width={100}
          height={100}
          className="rounded-full border-4 border-accent shadow-md"
          priority
        />
        <h3 ref={textRef} className="text-2xl font-bold text-white">
          <Typewriter
            words={["ラギ☆ラギちゃんねる", "VTuber"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h3>
        <p className="text-gray-300 text-lg">1.31万人</p>
        <a
          href="https://www.youtube.com/@ragiragichannel/"
          target="_blank"
          className="px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent/80 transition-all shadow-md"
        >
          チャンネル登録
        </a>
      </div>

      <div className="h-full shadow-lg rounded-xl overflow-hidden relative z-20 flex items-center justify-center bg-[#3b2f2f]">
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 text-white">
          <span className="text-lg font-bold">🔴 Live Now</span>
          <span className="text-sm text-gray-300">
            この機能はまだ動作していません
          </span>
        </div>
      </div>

      <div className="h-full grid grid-rows-2 gap-4">
        {[
          {
            src: "/images/populer-video.jpg",
            alt: "Popular Video",
            link: "https://www.youtube.com/live/ExIg7kn9NI0?si=POtHB5eD8OwZwE63",
            label: "人気の動画",
          },
          {
            src: "/images/latest-video.jpg",
            alt: "Latest Video",
            link: "https://www.youtube.com/live/xQOqS3nBUkQ?si=hs27W4_sW3JOHlYv",
            label: "最新の動画",
          },
        ].map((video, index) => (
          <div
            key={index}
            className="relative bg-white/10 backdrop-blur-lg shadow-lg rounded-xl overflow-hidden z-20 transition-transform hover:scale-105 flex items-center justify-center min-h-[180px] group"
          >
            <Image
              src={video.src}
              alt={video.alt}
              width={400}
              height={225}
              className="object-cover w-full h-auto aspect-video transition-opacity duration-500 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <a
                href={video.link}
                target="_blank"
                className="text-white font-bold text-lg bg-black/60 px-4 py-2 rounded-md"
              >
                {video.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
