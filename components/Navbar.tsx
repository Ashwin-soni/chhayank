"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bookmark, Volume2, VolumeX, Menu, X, Sparkles, Music } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { audioEngine } from "@/utils/audioEngine";

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenBookmarks?: () => void;
  onOpenDailyCouplet?: () => void;
  bookmarkedCount?: number;
}

export default function Navbar({
  onOpenSearch,
  onOpenBookmarks,
  onOpenDailyCouplet,
  bookmarkedCount = 0,
}: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioMode, setAudioMode] = useState<"rain" | "drone" | "fire" | "forest">("drone");
  const [showAudioMenu, setShowAudioMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleAudio = (mode?: "rain" | "drone" | "fire" | "forest") => {
    if (!audioEngine) return;
    const targetMode = mode || audioMode;
    const playing = audioEngine.toggle(targetMode);
    setIsAudioPlaying(playing);
    if (playing) {
      setAudioMode(targetMode);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Love & Poetry", href: "/#love", category: "love" },
    { name: "Vedanta", href: "/#vedanta", category: "vedanta" },
    { name: "Desh & Mitti", href: "/#patriotic", category: "patriotic" },
    { name: "The Quiet Mind", href: "/#sad", category: "sad" },
    { name: "Perspectives", href: "/#perspectives", category: "perspectives" },
    { name: "About", href: "/#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#140e0b]/90 backdrop-blur-md shadow-lg border-b border-[#3d2719]/50 py-3"
            : "bg-gradient-to-b from-[#0e0907]/90 via-[#160c08]/50 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo matching reference: 'chhayank's space' */}
          <Link
            href="/"
            className="group flex flex-col items-start transition-transform hover:scale-[1.02]"
          >
            <span className="font-editorial text-2xl sm:text-3xl tracking-tight text-[#f5ebd9] group-hover:text-[#f8b26a] transition-colors font-medium">
              chhayank&apos;s space
            </span>
            <span className="font-handwritten text-xs text-[#d39c6a] tracking-wider -mt-1 opacity-90 hidden sm:block">
              where the heart writes and the mind wonders
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-editorial text-sm lg:text-base tracking-wide transition-all relative py-1 ${
                    isActive
                      ? "text-[#f8b26a] font-semibold"
                      : "text-[#e8ded1]/80 hover:text-[#fcedda]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#f8b26a] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Daily Couplet Trigger */}
            <button
              onClick={onOpenDailyCouplet}
              title="Daily Shayari / Couplet"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4e2c9]/10 hover:bg-[#f4e2c9]/20 text-[#f6deba] border border-[#d2a373]/30 text-xs font-editorial transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#f8b26a] animate-pulse" />
              <span>Rozana Nazm</span>
            </button>

            {/* Ambient Sound Menu */}
            <div className="relative">
              <button
                onClick={() => setShowAudioMenu(!showAudioMenu)}
                title="Ambient Soundscapes"
                className={`p-2 rounded-full border transition-all flex items-center gap-1.5 ${
                  isAudioPlaying
                    ? "bg-[#b94f24]/30 border-[#e0773d] text-[#f8b26a] shadow-[0_0_12px_rgba(224,119,61,0.4)]"
                    : "bg-[#251812]/60 border-[#5a3a29] text-[#d6c3b2] hover:text-[#fcedda] hover:bg-[#34221a]"
                }`}
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="w-4 h-4 animate-bounce" />
                    <span className="text-[11px] font-sans pr-1 hidden xl:inline text-[#ffcaa1]">
                      {audioMode === "rain"
                        ? "Rain"
                        : audioMode === "drone"
                        ? "Tanpura"
                        : audioMode === "fire"
                        ? "Fire"
                        : "Forest"}
                    </span>
                  </>
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>

              {/* Soundscape Dropdown Menu */}
              {showAudioMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-[#1f1510] border border-[#523522] rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-2 py-1.5 text-[11px] uppercase tracking-wider text-[#a88d7b] font-medium border-b border-[#3b2719]">
                    Ambient Atmosphere
                  </div>
                  <div className="mt-1 space-y-1">
                    {[
                      { id: "drone", label: "Tanpura & Om (साधना)" },
                      { id: "rain", label: "Monsoon Rain (बरसात)" },
                      { id: "fire", label: "Midnight Fire (अलाव)" },
                      { id: "forest", label: "Night Crickets (सन्नाटा)" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          handleToggleAudio(item.id as "rain" | "drone" | "fire" | "forest");
                          setShowAudioMenu(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-editorial flex items-center justify-between transition-colors ${
                          isAudioPlaying && audioMode === item.id
                            ? "bg-[#8f3616] text-[#fff0df] font-semibold"
                            : "text-[#e2d3c2] hover:bg-[#332219]"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isAudioPlaying && audioMode === item.id && (
                          <span className="w-2 h-2 rounded-full bg-[#fcd34d] animate-ping" />
                        )}
                      </button>
                    ))}
                    {isAudioPlaying && (
                      <button
                        onClick={() => {
                          if (audioEngine) {
                            audioEngine.stop();
                            setIsAudioPlaying(false);
                          }
                          setShowAudioMenu(false);
                        }}
                        className="w-full text-center px-2 py-1 text-[11px] text-[#f87171] hover:text-[#fca5a5] hover:bg-[#381616] rounded-md transition-colors mt-1"
                      >
                        Turn Off Sound
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              title="Search poems & verses (Ctrl+K)"
              className="p-2 rounded-full bg-[#251812]/60 hover:bg-[#34221a] text-[#d6c3b2] hover:text-[#fcedda] border border-[#5a3a29] transition-all"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Bookmarks Icon */}
            <button
              onClick={onOpenBookmarks}
              title="Saved Poems & Verses"
              className="relative p-2 rounded-full bg-[#251812]/60 hover:bg-[#34221a] text-[#d6c3b2] hover:text-[#fcedda] border border-[#5a3a29] transition-all"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarkedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c2410c] text-[10px] text-white rounded-full flex items-center justify-center font-bold">
                  {bookmarkedCount}
                </span>
              )}
            </button>

            {/* Instagram Profile Link */}
            <a
              href="https://www.instagram.com/chhayankvatsa/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow @chhayankvatsa on Instagram"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#833ab4]/30 via-[#fd1d1d]/30 to-[#fcb045]/30 hover:from-[#833ab4]/50 hover:to-[#fcb045]/50 border border-[#b85b4b]/50 text-[#fdece4] text-xs font-editorial transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#ff8070]" />
              <span className="hidden md:inline font-sans font-medium text-[11px]">@chhayankvatsa</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#251812]/80 text-[#eed9c4] hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#160e0a]/98 border-b border-[#472d1f] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 backdrop-blur-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-editorial text-lg text-[#ecdac6] hover:text-[#f8b26a] transition-colors py-1 border-b border-[#2b1c14]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap gap-2 justify-between items-center">
              <button
                onClick={() => {
                  if (onOpenDailyCouplet) onOpenDailyCouplet();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#3b2417] text-[#fcd34d] text-xs font-editorial border border-[#6b422a]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Rozana Shayari</span>
              </button>

              <a
                href="https://www.instagram.com/chhayankvatsa/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#e1306c]/20 text-[#fca5a5] text-xs border border-[#e1306c]/40"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram Profile</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
