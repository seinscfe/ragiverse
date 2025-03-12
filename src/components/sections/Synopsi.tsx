"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Synopsis() {
  const synopsisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      synopsisRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={synopsisRef}
      className="relative w-full flex flex-col items-center text-center px-6 py-20"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl max-w-4xl mx-auto shadow-lg border border-white/20" />

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl font-bold text-white mb-6">VTuberについて</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          <span className="text-accent font-bold">【VTuber名】</span>は、
          <br />
          魔王として君臨するゲーマーVTuber！👑🔥
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          ゲーム実況や歌枠、雑談配信で世界を征服中！🎮🎤💬 <br />
          カリスマ溢れるトークと圧倒的な存在感で、視聴者を虜にする！✨
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          さあ、魔王軍の一員となり、共に世界を征服しよう！💜⚡
        </p>
      </div>
    </section>
  );
}
