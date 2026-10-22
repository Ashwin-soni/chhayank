"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, BookOpen, Clock } from "lucide-react";
import { POEMS, Poem } from "@/data/poems";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPoem: (poem: Poem) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectPoem,
}: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? POEMS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          (p.hindiTitle && p.hindiTitle.includes(query)) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.subcategory.toLowerCase().includes(query.toLowerCase()) ||
          p.contentEnglish.some((line) =>
            line.toLowerCase().includes(query.toLowerCase())
          ) ||
          (p.contentHindi &&
            p.contentHindi.some((line) => line.includes(query)))
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#fdfaf3] text-[#221815] bg-parchment-texture border border-[#d6c5af] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Bar Input */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-[#e5d9c8] gap-3">
          <Search className="w-5 h-5 text-[#943820]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search poems by title, theme, lines or Hindi words (e.g. Love, Vedanta, Mitti, Ramana)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-base sm:text-lg font-editorial placeholder:text-[#9e8d80] text-[#1f1510] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-[#8c7a6e] hover:text-black font-editorial"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-black/5 text-[#8c7a6e] hover:text-black"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim() === "" ? (
            <div className="py-12 text-center text-[#7e6d62] space-y-3 font-editorial">
              <BookOpen className="w-8 h-8 mx-auto text-[#caa68e] opacity-70" />
              <p className="text-base">Type any phrase, theme, or feeling to find verses.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {["Love & Poetry", "Vedanta", "Mitti", "Unsent Letters", "Solitude"].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="px-3 py-1 rounded-full bg-[#f2e6d6] hover:bg-[#e4d3bf] text-xs text-[#524135] transition-colors"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-[#7e6d62] font-editorial">
              <p className="text-base">No writings found matching &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-[#9c897c] mt-1">
                Try searching for broader keywords like &apos;love&apos;, &apos;self&apos;, &apos;silence&apos;, or &apos;soil&apos;.
              </p>
            </div>
          ) : (
            results.map((poem) => (
              <div
                key={poem.id}
                onClick={() => {
                  onSelectPoem(poem);
                  onClose();
                }}
                className="p-3.5 rounded-xl border border-[#e8ddcf] hover:border-[#943820] bg-white hover:bg-[#fffcf7] cursor-pointer transition-all flex items-center justify-between group shadow-xs hover:shadow-md"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] uppercase font-editorial tracking-wider text-[#943820] font-bold">
                    <span>{poem.category}</span>
                    <span>&bull;</span>
                    <span className="text-[#8c786a]">{poem.subcategory}</span>
                  </div>
                  <h4 className="font-editorial text-lg text-[#1e140f] font-medium group-hover:text-[#943820] transition-colors">
                    {poem.title}
                  </h4>
                  {poem.hindiTitle && (
                    <div className="text-xs text-[#8f523c] font-editorial italic">
                      {poem.hindiTitle}
                    </div>
                  )}
                  <p className="text-xs font-editorial text-[#63544a] line-clamp-1">
                    {poem.excerpt}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#caa68e] group-hover:text-[#943820] transition-transform group-hover:translate-x-1 shrink-0 ml-4" />
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#f5ede0] border-t border-[#e2d5c2] flex items-center justify-between text-[11px] font-editorial text-[#786659]">
          <span>
            {results.length} verse{results.length === 1 ? "" : "s"} found
          </span>
          <span className="hidden sm:inline">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
