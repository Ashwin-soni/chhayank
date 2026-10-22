"use client";

import React from "react";
import Link from "next/link";
import { Mail, Heart, ArrowUp, Feather } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0e0806] text-[#e8ded3] border-t border-[#3b2315] relative overflow-hidden font-editorial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-2xl sm:text-3xl font-normal text-[#f8b26a] tracking-tight">
              chhayank&apos;s space
            </span>
            <p className="font-handwritten text-lg text-[#fed7aa] -mt-1">
              where the heart writes and the mind wonders
            </p>
            <p className="text-sm text-[#b5a395] leading-relaxed max-w-sm">
              The digital sanctuary and literary archive of poet Chhayank Vatsa.
              Dedicated to non-duality, unrequited devotion, love for the sacred soil, and the timeless stillness between thoughts.
            </p>

            {/* Instagram connection */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/chhayankvatsa/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#ff8070] hover:text-[#fca5a5] border border-[#ff8070]/30 px-3.5 py-1.5 rounded-full transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Follow on Instagram @chhayankvatsa</span>
              </a>
            </div>
          </div>

          {/* Genres Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f59e0b] font-bold">
              Poetic Genres
            </h4>
            <ul className="space-y-2 text-sm text-[#c8b7a8]">
              <li>
                <a href="#love" className="hover:text-[#f8b26a] transition-colors">
                  Love &amp; Poetry (इश्क़)
                </a>
              </li>
              <li>
                <a href="#vedanta" className="hover:text-[#f8b26a] transition-colors">
                  Vedanta &amp; Darshan (दर्शन)
                </a>
              </li>
              <li>
                <a href="#patriotic" className="hover:text-[#f8b26a] transition-colors">
                  Desh &amp; Mitti (माटी)
                </a>
              </li>
              <li>
                <a href="#sad" className="hover:text-[#f8b26a] transition-colors">
                  The Quiet Mind (ख़ामोशी)
                </a>
              </li>
              <li>
                <a href="#perspectives" className="hover:text-[#f8b26a] transition-colors">
                  Perspectives (ज़िन्दगी)
                </a>
              </li>
            </ul>
          </div>

          {/* Literary Sections */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f59e0b] font-bold">
              Sanctuary
            </h4>
            <ul className="space-y-2 text-sm text-[#c8b7a8]">
              <li>
                <a href="#about" className="hover:text-[#f8b26a] transition-colors">
                  About the Poet
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#f8b26a] transition-colors">
                  Featured Writings
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/chhayankvatsa/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#f8b26a] transition-colors"
                >
                  Spoken Word Reels
                </a>
              </li>
              <li>
                <span className="text-[#99887b] italic text-xs">
                  Dastak Newsletter
                </span>
              </li>
            </ul>
          </div>

          {/* Parting Verse */}
          <div className="space-y-3 bg-[#180f0c] p-5 rounded-xl border border-[#3b2315]">
            <div className="flex items-center gap-1.5 text-xs text-[#f59e0b] font-bold uppercase tracking-wider">
              <Feather className="w-3.5 h-3.5" />
              <span>Parting Stanza</span>
            </div>
            <p className="font-handwritten text-lg text-[#fed7aa] leading-snug">
              &ldquo;तूफान में भी जो चिराग जलता रहा, वो हौसला मेरी माटी ने मुझे दिया है।&rdquo;
            </p>
            <p className="text-[11px] text-[#9c8473]">
              &mdash; Chhayank Vatsa
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#261710] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8f7e71]">
          <div className="flex items-center gap-1">
            <span>&copy; 2025-2026 Chhayank Vatsa. All poetic works copyrighted.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Crafted with devotion &bull; Dedicated to Indian Literature</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#20140e] hover:bg-[#342016] text-[#e8ded3] transition-colors flex items-center gap-1 border border-[#44281a]"
              title="Return to the heavens"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[10px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
