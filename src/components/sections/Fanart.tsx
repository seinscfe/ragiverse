"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import FanartBackground from "@/components/ui/FanartBackground";
import gsap from "gsap";

const fanartImages = [
  "/images/fanart-1.jpg",
  "/images/fanart-2.jpg",
  "/images/fanart-3.jpg",
];

export default function Fanart() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      galleryRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    gsap.to(".fanart-item", {
      y: "random(-10, 10)",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="relative w-full py-24 px-6 text-center overflow-hidden">
      <FanartBackground />

      <h2 className="text-5xl font-extrabold text-accent mb-12 tracking-wide animate-pulse">
        ファンアートショーケース
      </h2>

      <div
        ref={galleryRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {fanartImages.map((src, index) => (
          <div
            key={index}
            className="fanart-item group relative overflow-hidden rounded-xl shadow-2xl border-2 border-accent transition-transform duration-500 hover:scale-110 hover:rotate-2 hover:shadow-glow"
          >
            <Image
              src={src}
              alt={`Fanart ${index + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
              <p className="text-white font-bold text-xl drop-shadow-lg">
                Fanart #{index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
