"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Bookmark, Heart, Clock, Headphones } from "lucide-react";
import { POEMS, Poem } from "@/data/poems";

interface FeaturedWritingsProps {
  onSelectPoem: (poem: Poem) => void;
  onToggleBookmark: (poemId: string) => void;
  bookmarkedIds: string[];
  likedIds: string[];
  onToggleLike: (poemId: string) => void;
  onViewAllClick: () => void;
}

export default function FeaturedWritings({
  onSelectPoem,
  onToggleBookmark,
  bookmarkedIds,
  likedIds,
  onToggleLike,
  onViewAllClick,
}: FeaturedWritingsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Writings" },
    { id: "love", label: "Love & Poetry" },
    { id: "vedanta", label: "Vedanta" },
    { id: "patriotic", label: "Desh & Mitti" },
    { id: "sad", label: "The Quiet Mind" },
    { id: "perspectives", label: "Perspectives" },
  ];

  const filteredPoems = selectedCategory === "all"
    ? POEMS.slice(0, 8)
    : POEMS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 bg-[#fbf8f2] text-[#221815] bg-parchment-texture border-b border-[#e5d9ca]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference image: "Featured Writings" + "View All ->" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#943820] font-editorial font-bold">
              Handpicked Verses
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1e140f] font-normal mt-1">
              Featured Writings
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onViewAllClick}
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-editorial text-[#943820] hover:text-[#521b0e] font-semibold transition-colors"
            >
              <span>View All Writings</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Filter Pills for easy exploration */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-editorial whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#251812] text-[#fff6ec] font-semibold shadow-xs"
                  : "bg-[#eee4d6] hover:bg-[#e2d5c3] text-[#55463c]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 4-Column Cards Grid matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPoems.map((poem) => {
            const isBookmarked = bookmarkedIds.includes(poem.id);
            const isLiked = likedIds.includes(poem.id);

            return (
              <article
                key={poem.id}
                className="bg-white rounded-xl overflow-hidden border border-[#e4d7c5] hover:border-[#b88c67] flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
              >
                {/* Image & Quick Action Header */}
                <div
                  className="relative w-full h-48 sm:h-52 bg-[#e8ded3] overflow-hidden cursor-pointer"
                  onClick={() => onSelectPoem(poem)}
                >
                  <Image
                    src={poem.image}
                    alt={poem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#1e1511]/80 backdrop-blur-xs text-[#fed7aa] text-[10px] uppercase font-editorial tracking-wider border border-[#5a3825]/40 font-semibold">
                    {poem.category.toUpperCase()}
                  </span>

                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(poem.id);
                    }}
                    title={isBookmarked ? "Remove Bookmark" : "Save Poem"}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-[#fcedda] backdrop-blur-xs transition-colors"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isBookmarked ? "fill-[#ea580c] text-[#ea580c]" : ""
                      }`}
                    />
                  </button>

                  {/* Audio badge if available */}
                  {poem.audioDuration && (
                    <span className="absolute bottom-2.5 left-3 flex items-center gap-1 text-[10px] text-[#fcedda] font-editorial bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                      <Headphones className="w-3 h-3 text-[#f9bc7b]" />
                      <span>Recital {poem.audioDuration}</span>
                    </span>
                  )}
                </div>

                {/* Card Body matching reference: Title, excerpt, and Read More -> */}
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

                    <p className="font-editorial text-sm text-[#5f5147] line-clamp-2 leading-relaxed">
                      {poem.excerpt}
                    </p>
                  </div>

                  {/* Footer Action Links */}
                  <div className="pt-3 border-t border-[#f2e9de] flex items-center justify-between">
                    <button
                      onClick={() => onSelectPoem(poem)}
                      className="inline-flex items-center gap-1.5 text-xs font-editorial font-bold text-[#943820] hover:text-[#521b0e] transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Like / Hearts count */}
                    <button
                      onClick={() => onToggleLike(poem.id)}
                      className="flex items-center gap-1 text-xs text-[#7d695c] hover:text-[#dc2626] transition-colors"
                      title="Applaud verse"
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
      </div>
    </section>
  );
}
