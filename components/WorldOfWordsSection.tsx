"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Feather } from "lucide-react";
import { CATEGORIES, Category } from "@/data/categories";

interface WorldOfWordsSectionProps {
  onSelectCategory: (catId: string) => void;
  onReadStoryClick: () => void;
}

export default function WorldOfWordsSection({
  onSelectCategory,
  onReadStoryClick,
}: WorldOfWordsSectionProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-[#fdfbf7] text-[#221815] bg-parchment-texture overflow-hidden border-b border-[#e7ddd1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Card: "A little world of words" matching reference image */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#f8f2e6] via-[#f5ede0] to-[#ece1cf] border border-[#d8c8b4] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            {/* Delicate Botanical Sprig Illustration / SVG in background */}
            <div className="absolute top-2 right-2 opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
              <svg
                width="140"
                height="180"
                viewBox="0 0 100 130"
                fill="none"
                stroke="#66462c"
                strokeWidth="1.2"
              >
                <path d="M50,120 Q52,70 50,20 Q65,40 75,35 Q65,60 50,65 Q35,50 25,55 Q35,75 50,85 Q65,95 70,110" />
                <circle cx="50" cy="18" r="7" fill="#be3a34" opacity="0.4" />
                <circle cx="76" cy="34" r="5" fill="#be3a34" opacity="0.3" />
                <circle cx="24" cy="54" r="5" fill="#be3a34" opacity="0.3" />
              </svg>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2 text-[#99582a] text-xs font-editorial uppercase tracking-widest font-semibold">
                <Feather className="w-4 h-4 text-[#be3a34]" />
                <span>Sanctuary of Verses</span>
              </div>

              {/* Exact headline from reference image */}
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#1e140f] font-normal leading-tight">
                A little world
                <br />
                <span className="italic font-light text-[#943820]">
                  of words
                </span>
              </h2>

              {/* Exact quote from reference image */}
              <p className="font-editorial text-base sm:text-lg text-[#52443c] leading-relaxed pt-2">
                Some feelings become poetry.
                <br />
                Some questions become philosophy.
                <br />
                <span className="font-medium text-[#2d1e16]">
                  And somewhere in between, there is life.
                </span>
              </p>
            </div>

            {/* Read My Story Link matching reference */}
            <div className="relative z-10 pt-8">
              <button
                onClick={onReadStoryClick}
                className="group inline-flex items-center gap-2 text-[#943820] hover:text-[#5c1c0d] font-editorial text-base font-semibold transition-all"
              >
                <span className="underline underline-offset-4 decoration-[#caa68e] group-hover:decoration-[#943820]">
                  Read My Story
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Cards: Category Grid matching reference image */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {CATEGORIES.slice(0, 4).map((cat: Category) => (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="bg-[#ffffff] hover:bg-[#fffdf9] border border-[#e4d8c8] hover:border-[#b88c67] rounded-xl p-3 sm:p-4 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
              >
                {/* Thumbnail Image matching reference */}
                <div className="relative w-full h-36 sm:h-40 rounded-lg overflow-hidden mb-3 bg-[#e8ded3]">
                  <Image
                    src={cat.heroImage}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[#fcedda] text-[10px] font-editorial uppercase tracking-wider backdrop-blur-xs">
                    {cat.hindiName}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-editorial text-lg sm:text-xl text-[#221711] font-medium group-hover:text-[#a03d1f] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="font-editorial text-xs sm:text-sm text-[#66574c] line-clamp-2 mt-1 leading-relaxed">
                      {cat.tagline}
                    </p>
                  </div>

                  {/* Explore Link matching reference */}
                  <div className="pt-3 flex items-center justify-between border-t border-[#f0e7db] mt-2">
                    <span className="text-xs font-editorial text-[#943820] font-semibold group-hover:text-[#5c1c0d]">
                      Explore &rarr;
                    </span>
                    <span className="text-[11px] text-[#9c8a7c] font-sans">
                      {cat.subcategories.length - 1} sub-themes
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patriotic (Desh & Mitti) & Perspectives Showcase Ribbon */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {CATEGORIES.slice(2, 4).map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="bg-gradient-to-r from-[#f7f0e4] to-[#fcf8f0] border border-[#e1d3c1] hover:border-[#b88c67] rounded-xl p-4 flex items-center gap-4 cursor-pointer group shadow-xs hover:shadow-md transition-all"
            >
              <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={cat.heroImage}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#b4431d] uppercase tracking-wider font-editorial">
                    Special Genre
                  </span>
                  <span className="text-xs text-[#8c7766]">&bull; {cat.hindiName}</span>
                </div>
                <h4 className="font-editorial text-lg text-[#20150f] font-semibold group-hover:text-[#943820]">
                  {cat.name}
                </h4>
                <p className="text-xs text-[#615146] line-clamp-1 font-editorial">
                  {cat.tagline}
                </p>
              </div>
              <span className="text-xs font-semibold text-[#943820] group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
