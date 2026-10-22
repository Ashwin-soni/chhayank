"use client";

import React, { useState } from "react";
import { X, Sparkles, Copy, Check, RefreshCw, Share2 } from "lucide-react";
import { DAILY_COUPLETS, Couplet } from "@/data/poems";
import confetti from "canvas-confetti";

interface DailyCoupletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DailyCoupletModal({
  isOpen,
  onClose,
}: DailyCoupletModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentCouplet = DAILY_COUPLETS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DAILY_COUPLETS.length);
    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.7 },
      colors: ["#d97706", "#dc2626", "#ea580c"],
    });
  };

  const handleCopy = () => {
    const text = `${currentCouplet.hindi}\n\n"${currentCouplet.english}"\n\n— Chhayank Vatsa (@chhayankvatsa)\nFrom chhayank's space`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#fdfaf3] text-[#221815] bg-parchment-texture border border-[#d6c5af] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5d9c8] pb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-full bg-amber-500/10 text-[#d97706]">
              <Sparkles className="w-4 h-4 animate-spin" />
            </span>
            <div>
              <h3 className="font-editorial text-lg font-bold text-[#1f1612]">
                Rozana Nazm (Daily Couplet)
              </h3>
              <p className="text-[11px] text-[#8c7a6e] font-editorial">
                Theme: {currentCouplet.theme} &bull; Couplet {currentIndex + 1} of {DAILY_COUPLETS.length}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#8c7a6e] hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Parchment Box with Hindi & English */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#f8f1e4] to-[#f3e7d5] border border-[#d8c8b4] shadow-inner text-center space-y-4">
          <p className="font-editorial text-xl sm:text-2xl text-[#6b2512] font-semibold whitespace-pre-line leading-relaxed">
            {currentCouplet.hindi}
          </p>

          <div className="w-12 h-[1px] bg-[#caa58d] mx-auto my-2" />

          <p className="font-editorial text-sm sm:text-base text-[#524339] italic whitespace-pre-line leading-relaxed">
            &ldquo;{currentCouplet.english}&rdquo;
          </p>

          <div className="pt-2 text-xs font-handwritten text-lg text-[#943820]">
            &mdash; Chhayank Vatsa
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2e6d6] hover:bg-[#e7d8c4] text-[#4d3c32] font-editorial text-xs font-semibold transition-all active:scale-95"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#943820]" />
            <span>Draw Another Couplet</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#943820] hover:bg-[#7a2914] text-white font-editorial text-xs font-semibold shadow-xs transition-all active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : "Copy Couplet"}</span>
            </button>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${currentCouplet.hindi}\n\n"${currentCouplet.english}"\n\n— Chhayank Vatsa\nhttps://www.instagram.com/chhayankvatsa/`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#e6d8c5] hover:bg-[#d8c5ad] text-[#2e2118]"
              title="Share on WhatsApp"
            >
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
