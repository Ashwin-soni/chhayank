"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Sparkles, Copy, Check } from "lucide-react";

export default function StarryQuoteBanner() {
  const quotes = [
    {
      text: "Between the chaos of the world, I keep a space — for poems, for questions, for a quieter me.",
      hindi: "दुनिया के इस शोर और आपाधापी के दरमियाँ, मैंने एक कोना बचा रखा है — कुछ नज़्मों के लिए, कुछ सवालों के लिए, और अपने उस रूप के लिए जो ख़ामोशी में जीता है।",
      context: "From 'A Quiet Life', Chhayank Vatsa",
    },
    {
      text: "Some stories don't need an ending, they just need to be felt with every fragment of your existence.",
      hindi: "कुछ कहानियों को अंजाम की ज़रूरत नहीं होती, उन्हें सिर्फ़ रूह के हर कतरे से महसूस किया जाना चाहिए।",
      context: "Love & Poetry Archive, 2025",
    },
    {
      text: "Not an escape from life, but a deeper, more sacred way to truly live it.",
      hindi: "वेदान्त ज़िन्दगी से पलायन नहीं है, बल्कि ज़िन्दगी को उसकी संपूर्ण गहराई में जीने का मार्ग है।",
      context: "Vedanta Notes, Kashi",
    },
    {
      text: "Yeh mitti sirf zameen nahi, hamare purvajon ka aashirwaad aur astitva ka aasmaan hai.",
      hindi: "यह मिट्टी सिर्फ ज़मीन का टुकड़ा नहीं है, यह हमारे पुरखों का आशीर्वाद और हमारी पहचान का आकाश है।",
      context: "Desh & Mitti, 2025",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  const handleCopy = () => {
    const q = quotes[currentIndex];
    navigator.clipboard.writeText(`"${q.text}"\n— Chhayank Vatsa (@chhayankvatsa)`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentQuote = quotes[currentIndex];

  return (
    <section className="relative py-24 sm:py-32 bg-[#060913] text-[#f7ede1] overflow-hidden">
      {/* Deep Night Sky Background with Starlight & Glowing Cottage */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-60 mix-blend-screen scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#090e1c]/80 to-[#060913]" />

        {/* Twinkling CSS Stars */}
        <span className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-white opacity-80 animate-twinkle" />
        <span className="absolute top-[35%] right-[25%] w-1 h-1 rounded-full bg-[#fde68a] opacity-70 animate-twinkle" />
        <span className="absolute top-[60%] left-[30%] w-2 h-2 rounded-full bg-[#e0e7ff] opacity-60 animate-twinkle" />
        <span className="absolute top-[15%] right-[10%] w-1.5 h-1.5 rounded-full bg-white opacity-90 animate-twinkle" />
        <span className="absolute top-[75%] right-[40%] w-1 h-1 rounded-full bg-[#fbcfe8] opacity-50 animate-twinkle" />
      </div>

      {/* Main Quote Carousel Container matching reference bottom banner */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glowing Decorative Quote Icon */}
        <div className="inline-flex p-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#f59e0b] mb-6 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
          <Quote className="w-6 h-6 animate-pulse" />
        </div>

        {/* Exact Quote Box */}
        <div className="space-y-6 min-h-[190px] flex flex-col justify-center">
          <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#fdf6ec] leading-relaxed font-light tracking-wide max-w-3xl mx-auto drop-shadow-md">
            &ldquo;{currentQuote.text}&rdquo;
          </p>

          <p className="font-editorial text-sm sm:text-base text-[#fed7aa]/80 italic max-w-2xl mx-auto">
            {currentQuote.hindi}
          </p>

          <div className="pt-2 flex items-center justify-center gap-3 text-xs sm:text-sm font-editorial text-[#d1bfae]">
            <span className="font-handwritten text-xl sm:text-2xl text-[#f59e0b]">
              &mdash; chhayank
            </span>
            <span>&bull;</span>
            <span className="opacity-75">{currentQuote.context}</span>
          </div>
        </div>

        {/* Carousel Navigation Buttons & Quick Copy */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prevQuote}
            className="p-2.5 rounded-full bg-[#172036]/80 hover:bg-[#253356] border border-[#2e3e68] text-[#d6e0ff] hover:text-white transition-all transform hover:scale-105"
            title="Previous thought"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2 px-3">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === i
                    ? "w-8 bg-[#f59e0b]"
                    : "w-2 bg-[#2d3a5a] hover:bg-[#4b5d8a]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextQuote}
            className="p-2.5 rounded-full bg-[#172036]/80 hover:bg-[#253356] border border-[#2e3e68] text-[#d6e0ff] hover:text-white transition-all transform hover:scale-105"
            title="Next thought"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleCopy}
            className="ml-2 px-3 py-1.5 rounded-full bg-[#172036]/80 hover:bg-[#253356] border border-[#2e3e68] text-xs font-editorial text-[#cbd5e1] hover:text-white flex items-center gap-1.5 transition-all"
            title="Copy Quote"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
