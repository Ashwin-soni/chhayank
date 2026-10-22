"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Bookmark, Heart, Clock, Headphones } from "lucide-react";
import { CATEGORIES, Category } from "@/data/categories";
import { POEMS, Poem } from "@/data/poems";
import TornPaperDivider from "./TornPaperDivider";

interface GenreShowcaseProps {
  initialCategoryId?: string;
  onSelectPoem: (poem: Poem) => void;
  onToggleBookmark: (poemId: string) => void;
  bookmarkedIds: string[];
  likedIds: string[];
  onToggleLike: (poemId: string) => void;
}

export default function GenreShowcase({
  initialCategoryId = "love",
  onSelectPoem,
  onToggleBookmark,
  bookmarkedIds,
  likedIds,
  onToggleLike,
}: GenreShowcaseProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(initialCategoryId);
  const [activeSubFilter, setActiveSubFilter] = useState<string>("All");

  const currentCategory =
    CATEGORIES.find((c) => c.id === activeCategoryId) || CATEGORIES[0];

  // Filter poems belonging to current category & sub-filter
  const categoryPoems = POEMS.filter((p) => p.category === activeCategoryId);
  const displayedPoems =
    activeSubFilter === "All"
      ? categoryPoems
      : categoryPoems.filter(
          (p) =>
            p.subcategory.toLowerCase() === activeSubFilter.toLowerCase()
        );

  return (
    <section id={currentCategory.id} className="relative bg-[#fcf9f2] text-[#221815]">
      {/* Category Tabs Switcher at top for seamless browsing */}
      <div className="bg-[#180f0a] border-b border-[#3b2315] py-3 sticky top-14 sm:top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto scrollbar-none gap-2">
          <div className="flex items-center space-x-1 sm:space-x-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setActiveSubFilter("All");
                }}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-editorial transition-all whitespace-nowrap ${
                  activeCategoryId === cat.id
                    ? "bg-[#a63d1a] text-[#fff7ee] font-semibold shadow-[0_0_12px_rgba(166,61,26,0.5)]"
                    : "text-[#d6c3b2] hover:text-[#fff4e8] hover:bg-[#2d1b12]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:block text-xs font-handwritten text-[#e8b584]">
            {currentCategory.hindiName}
          </div>
        </div>
      </div>

      {/* Atmospheric Dark Hero Banner matching pages 2 & 3 in reference image */}
      <div className="relative min-h-[380px] sm:min-h-[460px] flex items-center justify-center bg-[#0d0806] text-[#f7ede1] overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src={currentCategory.heroImage}
            alt={currentCategory.name}
            fill
            priority
            className="object-cover opacity-45 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0806] via-[#1a0f0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-radial from-amber-900/20 via-transparent to-black/80" />
        </div>

        {/* Hero Title & Quote matching reference */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 py-16">
          <span className="inline-block text-xs font-editorial uppercase tracking-widest text-[#f5bc7b] bg-[#2d1a11]/80 px-4 py-1 rounded-full border border-[#6d3e23]/50">
            {currentCategory.hindiName}
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#fff8ee] font-normal tracking-tight">
            {currentCategory.name}
          </h2>

          <p className="font-editorial text-base sm:text-lg text-[#dec6b3] max-w-xl mx-auto font-light leading-relaxed">
            {currentCategory.tagline}
          </p>

          {/* Cursive handwritten hero quote matching reference image */}
          <div className="pt-4">
            <p className="font-handwritten text-xl sm:text-2xl md:text-3xl text-[#fcd34d] max-w-2xl mx-auto leading-relaxed">
              &ldquo;{currentCategory.heroQuote}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Realistic Torn Paper Divider between hero and content */}
      <TornPaperDivider fillColor="#fdfbf7" position="bottom" />

      {/* Cream Parchment Content Area */}
      <div className="py-12 sm:py-16 bg-[#fdfbf7] bg-parchment-texture border-b border-[#e5d9ca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sub-theme Filter Pills matching reference image */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {currentCategory.subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubFilter(sub)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-editorial transition-all ${
                  activeSubFilter === sub
                    ? "bg-[#2b1b14] text-[#fff8f0] font-semibold shadow-xs"
                    : "bg-[#eee4d6] hover:bg-[#e4d6c2] text-[#5e4f45]"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Poems Grid */}
          {displayedPoems.length === 0 ? (
            <div className="text-center py-16 text-[#756458] font-editorial">
              <p className="text-lg">No writings found under this sub-category yet.</p>
              <button
                onClick={() => setActiveSubFilter("All")}
                className="mt-2 text-sm text-[#943820] underline"
              >
                View all {currentCategory.name} poems
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedPoems.map((poem) => {
                const isBookmarked = bookmarkedIds.includes(poem.id);
                const isLiked = likedIds.includes(poem.id);

                return (
                  <article
                    key={poem.id}
                    className="bg-white rounded-xl overflow-hidden border border-[#e2d5c2] hover:border-[#b88c67] flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group"
                  >
                    <div
                      className="relative w-full h-52 bg-[#e8ded3] overflow-hidden cursor-pointer"
                      onClick={() => onSelectPoem(poem)}
                    >
                      <Image
                        src={poem.image}
                        alt={poem.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#1e1511]/80 backdrop-blur-xs text-[#fed7aa] text-[10px] uppercase font-editorial tracking-wider">
                        {poem.subcategory}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(poem.id);
                        }}
                        className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-[#fcedda] backdrop-blur-xs"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            isBookmarked ? "fill-[#ea580c] text-[#ea580c]" : ""
                          }`}
                        />
                      </button>

                      {poem.audioDuration && (
                        <span className="absolute bottom-2.5 left-3 flex items-center gap-1 text-[10px] text-[#fcedda] font-editorial bg-black/50 px-2 py-0.5 rounded">
                          <Headphones className="w-3 h-3 text-[#f9bc7b]" />
                          <span>Recital {poem.audioDuration}</span>
                        </span>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[11px] text-[#8c786a] font-editorial">
                          <span>{poem.date}</span>
                          <span>&bull;</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {poem.readTime}
                          </span>
                        </div>

                        <h3
                          onClick={() => onSelectPoem(poem)}
                          className="font-editorial text-xl sm:text-2xl text-[#1f1510] font-medium leading-snug group-hover:text-[#a03d1f] transition-colors cursor-pointer"
                        >
                          {poem.title}
                        </h3>

                        {poem.hindiTitle && (
                          <div className="text-xs text-[#8f523c] font-editorial italic">
                            {poem.hindiTitle}
                          </div>
                        )}

                        <p className="font-editorial text-sm text-[#5f5147] line-clamp-3 leading-relaxed">
                          {poem.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#f2e9de] flex items-center justify-between">
                        <button
                          onClick={() => onSelectPoem(poem)}
                          className="inline-flex items-center gap-1.5 text-xs font-editorial font-bold text-[#943820] hover:text-[#521b0e]"
                        >
                          <span>Read Full Verse</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </button>

                        <button
                          onClick={() => onToggleLike(poem.id)}
                          className="flex items-center gap-1 text-xs text-[#7d695c] hover:text-[#dc2626]"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${
                              isLiked ? "fill-[#dc2626] text-[#dc2626]" : ""
                            }`}
                          />
                          <span>{poem.likes + (isLiked ? 1 : 0)}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
