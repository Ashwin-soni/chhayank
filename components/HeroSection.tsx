"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Headphones, BookOpen } from "lucide-react";

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenDailyCouplet: () => void;
}

export default function HeroSection({
  onExploreClick,
  onOpenDailyCouplet,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-8 overflow-hidden bg-[#100907] text-[#f7ede1]">
      {/* Background Sunset Panorama Layer */}
      <div className="absolute inset-0 z-0">
        {/* Rich Sunset Sky Gradient Background */}
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(16, 9, 7, 0.45) 0%, rgba(35, 17, 11, 0.3) 40%, rgba(18, 9, 7, 0.85) 85%, #100907 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=85')`,
          }}
        />

        {/* Sunset Warm Amber & Crimson Glow Radiance */}
        <div className="absolute inset-0 bg-radial from-[#d97736]/25 via-[#991b1b]/15 to-transparent pointer-events-none mix-blend-screen" />

        {/* Subtle Floating Star / Firefly Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[28%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#fcd34d] opacity-70 animate-twinkle shadow-[0_0_8px_#fcd34d]" />
          <span className="absolute top-[42%] left-[45%] w-2 h-2 rounded-full bg-[#fde68a] opacity-60 animate-float-slow shadow-[0_0_10px_#fde68a]" />
          <span className="absolute top-[35%] right-[22%] w-1.5 h-1.5 rounded-full bg-[#fba761] opacity-75 animate-twinkle shadow-[0_0_8px_#fba761]" />
          <span className="absolute top-[55%] right-[38%] w-1 h-1 rounded-full bg-[#fed7aa] opacity-50 animate-float-slow" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Main Headlines and CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Poet Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a170f]/75 border border-[#854d27]/40 text-[#f6ce9a] text-xs font-editorial backdrop-blur-sm shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#e0773d] animate-ping" />
              <span>Chhayank Vatsa &bull; Poetry &bull; Vedanta &bull; Musings</span>
            </div>

            {/* Main Title matching reference image: 'chhayank's space' */}
            <div className="space-y-3">
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#fdf6ec] font-normal leading-[1.05]">
                chhayank&apos;s
                <br />
                <span className="italic font-light text-[#f9bc7b] drop-shadow-[0_2px_18px_rgba(249,188,123,0.35)]">
                  space
                </span>
              </h1>

              {/* Tagline matching reference */}
              <p className="font-handwritten text-xl sm:text-2xl md:text-3xl text-[#e6b185] tracking-wide font-normal pt-1">
                where the heart writes and the mind wonders
              </p>
            </div>

            {/* Subtext description matching reference */}
            <p className="font-editorial text-base sm:text-lg md:text-xl text-[#dfd2c4]/90 max-w-xl leading-relaxed font-light">
              Poems, thoughts, questions and a journey — through love, life and
              a little bit of the infinite.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary button matching reference: Explore My Writings -> */}
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b3471b] via-[#943118] to-[#6d2012] hover:from-[#cf5723] hover:to-[#8a2a16] text-[#fff7ed] font-editorial text-base sm:text-lg border border-[#e07342]/60 shadow-[0_0_24px_rgba(207,87,35,0.4)] hover:shadow-[0_0_36px_rgba(207,87,35,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Writings</span>
                <ArrowRight className="w-4 h-4 text-[#fed7aa] transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              {/* Secondary button: Daily Couplet */}
              <button
                onClick={onOpenDailyCouplet}
                className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-full bg-[#23150e]/80 hover:bg-[#341f15] text-[#f2dac2] font-editorial text-sm sm:text-base border border-[#6b432a] backdrop-blur-sm transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-[#fcd34d]" />
                <span>Daily Couplet</span>
              </button>

              {/* Audio Listen shortcut */}
              <a
                href="#love"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-[#d6bda5] hover:text-white font-editorial text-sm transition-colors"
              >
                <BookOpen className="w-4 h-4 text-[#e0773d]" />
                <span className="underline underline-offset-4 decoration-[#854d27]">
                  Browse Categories
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Handwritten Contemplative Note (Matching Reference Image) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center pt-6 lg:pt-0">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#24150f]/80 via-[#1b100c]/60 to-transparent border border-[#5a3621]/40 backdrop-blur-md max-w-sm text-left lg:text-right shadow-2xl">
              {/* Decorative ink quill mark */}
              <div className="text-xs uppercase tracking-widest text-[#caa07a] font-editorial mb-2 opacity-80">
                &mdash; twilight thoughts &mdash;
              </div>

              {/* Exact Quote from reference image */}
              <p className="font-handwritten text-2xl sm:text-3xl text-[#fed29e] leading-snug">
                &ldquo;same heart,
                <br />
                same questions ...
                <br />
                <span className="text-[#fca5a5] italic font-semibold">
                  a little more aware now ...
                </span>
                &rdquo;
              </p>

              {/* Author signature */}
              <div className="mt-4 pt-3 border-t border-[#4a2b1a]/60 flex items-center justify-between lg:justify-end gap-3 text-xs text-[#d1b399] font-editorial">
                <span>Chhayank Vatsa</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#f8b26a]" />
                <span className="italic">Kashi Ghats, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="relative z-10 mx-auto text-center pt-6">
        <button
          onClick={onExploreClick}
          className="inline-flex flex-col items-center text-[#cbb196]/70 hover:text-[#f8b26a] transition-colors group cursor-pointer"
        >
          <span className="text-[11px] font-editorial tracking-widest uppercase mb-1">
            Scroll to read
          </span>
          <span className="w-5 h-8 rounded-full border border-[#7a4e32] flex items-start justify-center p-1 group-hover:border-[#f8b26a]">
            <span className="w-1 h-2 bg-[#f8b26a] rounded-full animate-bounce" />
          </span>
        </button>
      </div>
    </section>
  );
}
