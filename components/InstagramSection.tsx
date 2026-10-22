"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Heart, ExternalLink, Sparkles, Volume2 } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { POET_PROFILE } from "@/data/poems";

export default function InstagramSection() {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[#140c09] text-[#f7ede1] relative overflow-hidden border-t border-[#382015]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e1306c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f77737]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#833ab4]/30 via-[#fd1d1d]/30 to-[#fcb045]/30 border border-[#b85b4b]/40 text-[#fca5a5] text-xs font-editorial">
              <InstagramIcon className="w-3.5 h-3.5 text-[#ff8070]" />
              <span>Echoes on Instagram &bull; @chhayankvatsa</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#fff7ee] font-normal leading-tight">
              Spoken Word &amp; Reels
            </h2>
            <p className="font-editorial text-base text-[#d9c3b0] max-w-xl">
              Glimpses of poetry recitals, raw midnight thoughts, and visual verses shared with over 150K+ souls.
            </p>
          </div>

          <div>
            <a
              href="https://www.instagram.com/chhayankvatsa/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-editorial text-sm font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @chhayankvatsa</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* 4 Column Instagram Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POET_PROFILE.instagramHighlights.map((item) => (
            <div
              key={item.id}
              className="group bg-[#20140e] rounded-2xl overflow-hidden border border-[#44281a] hover:border-[#b45309] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-4/5 w-full bg-[#180e0a] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                {/* Play Button Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-[#e1306c] backdrop-blur-md flex items-center justify-center text-white transition-all transform group-hover:scale-110 shadow-lg">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                </div>

                {/* Reel Views Tag */}
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 text-[#fde047] text-[10px] font-mono tracking-wider backdrop-blur-xs border border-white/10">
                  {item.views}
                </span>

                {/* Audio Recital Overlay */}
                <span className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] text-[#fce7d2] font-editorial bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  <Volume2 className="w-3 h-3 text-[#ff8070]" />
                  <span>Original Audio</span>
                </span>
              </div>

              {/* Caption & Card Footer */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-editorial text-base sm:text-lg text-[#fff3e6] font-medium leading-snug group-hover:text-[#f8b26a] transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-editorial text-xs text-[#c4b09e] line-clamp-2 mt-1 leading-relaxed">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#382015] flex items-center justify-between">
                  <span className="text-[11px] text-[#9c8473] font-editorial">
                    Instagram Reel
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-editorial text-[#f87171] hover:text-[#fca5a5] font-semibold"
                  >
                    <span>Watch on Insta</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
