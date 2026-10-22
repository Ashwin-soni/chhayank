"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Heart,
  Bookmark,
  Share2,
  Copy,
  Check,
  Headphones,
  Volume2,
  VolumeX,
  Sparkles,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Poem, POEMS } from "@/data/poems";
import confetti from "canvas-confetti";

interface PoemReaderModalProps {
  poem: Poem | null;
  onClose: () => void;
  onSelectPoem: (poem: Poem) => void;
  isBookmarked: boolean;
  onToggleBookmark: (poemId: string) => void;
  isLiked: boolean;
  onToggleLike: (poemId: string) => void;
}

export default function PoemReaderModal({
  poem,
  onClose,
  onSelectPoem,
  isBookmarked,
  onToggleBookmark,
  isLiked,
  onToggleLike,
}: PoemReaderModalProps) {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "huge">("normal");
  const [languageMode, setLanguageMode] = useState<"both" | "english" | "hindi">("both");
  const [copied, setCopied] = useState(false);
  const [claps, setClaps] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [readerTheme, setReaderTheme] = useState<"parchment" | "midnight" | "sepia">("parchment");
  const [comments, setComments] = useState<Array<{ name: string; text: string; time: string }>>([
    {
      name: "Aarav Sharma",
      text: "These lines hit right where words usually fail to reach. Truly profound.",
      time: "2 hours ago",
    },
    {
      name: "Meera Sen",
      text: "The transition from physical presence to emotional permanence is so gently captured.",
      time: "1 day ago",
    },
  ]);
  const [newCommentName, setNewCommentName] = useState("");
  const [newCommentText, setNewCommentText] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (poem) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [poem]);

  // Simulated recital player audio progress
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAudioPlaying) {
      timer = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsAudioPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isAudioPlaying]);

  if (!poem) return null;

  const handleClap = () => {
    setClaps((prev) => prev + 1);
    onToggleLike(poem.id);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#be3a34", "#f59e0b", "#ec4899", "#d97706"],
    });
  };

  const handleCopyStanza = () => {
    const textToCopy = `"${poem.title}"\nby Chhayank Vatsa (@chhayankvatsa)\n\n${poem.contentEnglish.join(
      "\n"
    )}\n\nRead more at chhayank's space`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    setComments([
      {
        name: newCommentName.trim() || "Gentle Reader",
        text: newCommentText.trim(),
        time: "Just now",
      },
      ...comments,
    ]);
    setNewCommentText("");
    setNewCommentName("");
  };

  // Theme styling helpers
  const themeClasses = {
    parchment: "bg-[#fdfaf3] text-[#241a15] bg-parchment-texture border-[#e2d5c2]",
    midnight: "bg-[#0f121a] text-[#ede6dd] border-[#293245]",
    sepia: "bg-[#f3ebd9] text-[#2b211a] border-[#d8c8b4]",
  };

  const relatedPoems = POEMS.filter((p) => p.id !== poem.id && p.category === poem.category).slice(
    0,
    3
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-4xl my-auto rounded-2xl shadow-2xl overflow-hidden border transition-colors duration-300 ${themeClasses[readerTheme]}`}
      >
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-8 py-3.5 border-b backdrop-blur-md bg-inherit/90">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-editorial">
            <span className="uppercase tracking-wider font-semibold text-[#a34424]">
              {poem.category.toUpperCase()}
            </span>
            <span className="opacity-40">&bull;</span>
            <span className="opacity-70">{poem.date}</span>
            <span className="opacity-40 hidden sm:inline">&bull;</span>
            <span className="opacity-70 hidden sm:inline">{poem.readTime}</span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme selector */}
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-full p-1 border border-black/10">
              <button
                onClick={() => setReaderTheme("parchment")}
                title="Parchment Theme"
                className={`w-5 h-5 rounded-full bg-[#fdfaf3] border border-[#d6c5af] ${
                  readerTheme === "parchment" ? "ring-2 ring-[#a34424]" : ""
                }`}
              />
              <button
                onClick={() => setReaderTheme("sepia")}
                title="Sepia Warmth"
                className={`w-5 h-5 rounded-full bg-[#ece0ce] border border-[#bfae99] mx-1 ${
                  readerTheme === "sepia" ? "ring-2 ring-[#a34424]" : ""
                }`}
              />
              <button
                onClick={() => setReaderTheme("midnight")}
                title="Midnight Dark"
                className={`w-5 h-5 rounded-full bg-[#121622] border border-[#303c54] ${
                  readerTheme === "midnight" ? "ring-2 ring-[#f8b26a]" : ""
                }`}
              />
            </div>

            {/* Font size toggle */}
            <div className="flex items-center border rounded-lg px-2 py-0.5 text-xs font-editorial">
              <button
                onClick={() => setFontSize("normal")}
                className={`px-1.5 py-0.5 rounded ${
                  fontSize === "normal" ? "font-bold text-[#a34424]" : "opacity-60"
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize("large")}
                className={`px-1.5 py-0.5 rounded text-sm ${
                  fontSize === "large" ? "font-bold text-[#a34424]" : "opacity-60"
                }`}
              >
                A+
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[82vh] overflow-y-auto px-5 sm:px-10 md:px-14 py-8 space-y-8">
          {/* Main Title & Header matching Blog Post Page in reference image */}
          <div className="border-b border-black/10 pb-6 space-y-3">
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
              {poem.title}
            </h1>

            {poem.hindiTitle && (
              <p className="font-editorial text-xl sm:text-2xl text-[#a34424] italic">
                {poem.hindiTitle}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#a34424] text-white flex items-center justify-center font-editorial font-bold text-sm">
                  CV
                </div>
                <div>
                  <div className="text-sm font-editorial font-bold">Chhayank Vatsa</div>
                  <a
                    href="https://www.instagram.com/chhayankvatsa/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#a34424] hover:underline"
                  >
                    @chhayankvatsa
                  </a>
                </div>
              </div>

              {/* Language switcher pills */}
              <div className="flex items-center rounded-full bg-black/5 dark:bg-white/5 p-1 border border-black/10 text-xs font-editorial">
                <button
                  onClick={() => setLanguageMode("both")}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    languageMode === "both"
                      ? "bg-[#a34424] text-white font-semibold"
                      : "opacity-75"
                  }`}
                >
                  Bilingual (Dual)
                </button>
                <button
                  onClick={() => setLanguageMode("english")}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    languageMode === "english"
                      ? "bg-[#a34424] text-white font-semibold"
                      : "opacity-75"
                  }`}
                >
                  English
                </button>
                {poem.contentHindi && (
                  <button
                    onClick={() => setLanguageMode("hindi")}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      languageMode === "hindi"
                        ? "bg-[#a34424] text-white font-semibold"
                        : "opacity-75"
                    }`}
                  >
                    हिन्दी
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Audio Recitation Bar */}
          {poem.recitalLines && (
            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                  className="w-10 h-10 rounded-full bg-[#a34424] hover:bg-[#86351b] text-white flex items-center justify-center shadow-md shrink-0 transition-transform hover:scale-105"
                >
                  {isAudioPlaying ? (
                    <Volume2 className="w-5 h-5 animate-pulse" />
                  ) : (
                    <Headphones className="w-5 h-5" />
                  )}
                </button>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#a34424]">
                    Spoken Recitation
                  </div>
                  <div className="text-xs opacity-70">Voice of Chhayank Vatsa &bull; {poem.audioDuration}</div>
                </div>
              </div>

              {/* Progress bar visualizer */}
              <div className="w-full sm:w-64 bg-black/10 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-[#a34424] h-full transition-all duration-300"
                  style={{ width: `${audioProgress}%` }}
                />
              </div>

              <span className="text-xs font-mono opacity-60">
                {isAudioPlaying ? "Playing recital..." : "Listen"}
              </span>
            </div>
          )}

          {/* Side by Side Image & Verse Container matching reference #4 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* The Poetry Text */}
            <div
              className={`lg:col-span-8 space-y-6 ${
                fontSize === "huge"
                  ? "text-xl sm:text-2xl leading-relaxed"
                  : fontSize === "large"
                  ? "text-lg sm:text-xl leading-relaxed"
                  : "text-base sm:text-lg leading-relaxed"
              }`}
            >
              {/* Hindi verses if active */}
              {(languageMode === "both" || languageMode === "hindi") && poem.contentHindi && (
                <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-4">
                  <div className="text-xs uppercase tracking-widest font-editorial text-[#a34424] font-semibold">
                    मूल हिन्दी नज़्म
                  </div>
                  <div className="font-editorial space-y-2 whitespace-pre-line text-[#6b2512] dark:text-[#f8b26a]">
                    {poem.contentHindi.map((line, idx) => (
                      <p key={idx} className={line === "" ? "h-3" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* English verses if active */}
              {(languageMode === "both" || languageMode === "english") && (
                <div className="space-y-4 font-editorial">
                  {languageMode === "both" && (
                    <div className="text-xs uppercase tracking-widest text-[#a34424] font-semibold">
                      Poetic Rendering
                    </div>
                  )}
                  <div className="space-y-2 whitespace-pre-line">
                    {poem.contentEnglish.map((line, idx) => (
                      <p key={idx} className={line === "" ? "h-3" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Candlelight / Vignette image matching reference image #4 */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-black/10 shadow-md">
                <Image
                  src={poem.image}
                  alt={poem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <p className="font-handwritten text-lg text-[#fed7aa]">
                    &ldquo;{poem.excerpt}&rdquo;
                  </p>
                </div>
              </div>

              {/* Floating Candlelight Vignette note */}
              <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 text-xs font-editorial space-y-1.5">
                <div className="font-bold text-[#a34424] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Poet&apos;s Note</span>
                </div>
                <p className="opacity-80 italic leading-relaxed">
                  {poem.authorNote || "Written in quiet solitude under the open sky."}
                </p>
              </div>
            </div>
          </div>

          {/* Social Appreciation Bar */}
          <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              {/* Medium-style claps with heart animations */}
              <button
                onClick={handleClap}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#be3a34] text-white hover:bg-[#a62f2a] transition-transform active:scale-95 shadow-md font-editorial text-sm font-semibold"
              >
                <Heart className={`w-4 h-4 fill-white ${isLiked ? "scale-110" : ""}`} />
                <span>Applaud ({poem.likes + claps})</span>
              </button>

              {/* Bookmark */}
              <button
                onClick={() => onToggleBookmark(poem.id)}
                className={`p-2 rounded-full border transition-colors ${
                  isBookmarked
                    ? "bg-[#be3a34]/20 border-[#be3a34] text-[#be3a34]"
                    : "border-black/20 hover:bg-black/5"
                }`}
                title={isBookmarked ? "Bookmarked" : "Bookmark poem"}
              >
                <Bookmark className="w-4 h-4" />
              </button>

              {/* Copy Stanza */}
              <button
                onClick={handleCopyStanza}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-black/20 hover:bg-black/5 text-xs font-editorial"
                title="Copy verse to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy Verse"}</span>
              </button>
            </div>

            {/* Share to socials */}
            <div className="flex items-center space-x-2 text-xs font-editorial">
              <span className="opacity-60">Share:</span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `"${poem.title}" by Chhayank Vatsa - Read more at chhayank's space: ${poem.excerpt}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-700 font-semibold"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/chhayankvatsa/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-rose-600/10 hover:bg-rose-600/20 text-rose-700 font-semibold"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Reader Reflections / Comments Section */}
          <div className="pt-6 border-t border-black/10 space-y-4">
            <div className="flex items-center gap-2 font-editorial text-lg font-semibold">
              <MessageCircle className="w-5 h-5 text-[#a34424]" />
              <span>Reflections &amp; Reader Thoughts ({comments.length})</span>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-black/5 border border-black/10 text-sm font-editorial focus:outline-none focus:ring-1 focus:ring-[#a34424]"
                />
                <input
                  type="text"
                  placeholder="Leave a thought or response to this poem..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="sm:col-span-2 px-3 py-2 rounded-lg bg-black/5 border border-black/10 text-sm font-editorial focus:outline-none focus:ring-1 focus:ring-[#a34424]"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-[#a34424] text-white text-xs font-editorial font-semibold hover:bg-[#86351b]"
              >
                Share Reflection
              </button>
            </form>

            {/* Comments List */}
            <div className="space-y-3 pt-2">
              {comments.map((c, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg bg-black/5 border border-black/5 text-xs font-editorial space-y-1"
                >
                  <div className="flex items-center justify-between font-semibold">
                    <span>{c.name}</span>
                    <span className="opacity-50 text-[10px]">{c.time}</span>
                  </div>
                  <p className="opacity-80 leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Poems in this Category */}
          {relatedPoems.length > 0 && (
            <div className="pt-8 border-t border-black/10 space-y-4">
              <h3 className="font-editorial text-xl font-medium">
                More from {poem.category.toUpperCase()}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPoems.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectPoem(rel);
                      setClaps(0);
                    }}
                    className="p-3.5 rounded-xl border border-black/10 hover:border-[#a34424] cursor-pointer transition-colors space-y-2 group bg-black/5"
                  >
                    <div className="text-[11px] opacity-60 font-editorial">
                      {rel.subcategory} &bull; {rel.readTime}
                    </div>
                    <div className="font-editorial font-semibold group-hover:text-[#a34424] transition-colors line-clamp-1">
                      {rel.title}
                    </div>
                    <p className="text-xs opacity-75 line-clamp-2 font-editorial">
                      {rel.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
