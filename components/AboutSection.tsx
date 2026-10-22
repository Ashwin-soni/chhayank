"use client";

import React from "react";
import Image from "next/image";
import { Feather, BookOpen, Heart, Sparkles, Mail } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { POET_PROFILE } from "@/data/poems";

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f9f5ed] text-[#221815] bg-parchment-texture border-b border-[#e5d9ca]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Artistic Portrait & Floating Wax Stamp */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md aspect-3/4 rounded-2xl overflow-hidden border-2 border-[#d5c3ad] shadow-xl bg-[#e3d4c1]">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
                alt="Chhayank Vatsa"
                fill
                className="object-cover sepia-[0.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Inscription on photo */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs font-editorial uppercase tracking-widest text-[#f8b26a]">
                  Poet &bull; Spoken Word Artist
                </div>
                <h3 className="font-editorial text-2xl font-medium">Chhayank Vatsa</h3>
                <p className="font-handwritten text-lg text-[#fed7aa]">
                  &ldquo;writing between silence and words&rdquo;
                </p>
              </div>
            </div>

            {/* Vintage Wax Seal / Stamp badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#992c24] text-[#fcedda] border-2 border-[#e7a972] flex flex-col items-center justify-center shadow-2xl rotate-12">
              <span className="text-[10px] uppercase font-editorial tracking-wider">ESTD</span>
              <span className="font-editorial text-xs font-bold">2018</span>
              <span className="text-[9px] font-editorial">POETRY</span>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-editorial uppercase tracking-widest text-[#943820] font-bold">
              <Feather className="w-4 h-4 text-[#be3a34]" />
              <span>About the Poet</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1e140f] font-normal leading-tight">
              &ldquo;Where the heart writes and the mind wonders&rdquo;
            </h2>

            <div className="space-y-4 font-editorial text-base sm:text-lg text-[#52443c] leading-relaxed">
              {POET_PROFILE.longBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats Row */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-y border-[#dfd2c0] py-4">
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#943820]">
                  {POET_PROFILE.socials.stats.readers}
                </div>
                <div className="text-xs font-editorial text-[#78695d]">Readers Worldwide</div>
              </div>
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#943820]">
                  {POET_PROFILE.socials.stats.poems}
                </div>
                <div className="text-xs font-editorial text-[#78695d]">Verses &amp; Nazms</div>
              </div>
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#943820]">
                  {POET_PROFILE.socials.stats.recitals}
                </div>
                <div className="text-xs font-editorial text-[#78695d]">Spoken Word Recitals</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="px-6 py-3 rounded-full bg-[#943820] hover:bg-[#6e2714] text-[#fff7ed] font-editorial text-base font-semibold shadow-md transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Invite for Mushaira / Recital</span>
              </button>

              <a
                href="https://www.instagram.com/chhayankvatsa/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white hover:bg-[#f6eee0] text-[#241711] font-editorial text-sm font-semibold border border-[#d5c3ad] transition-all flex items-center gap-2 shadow-xs"
              >
                <InstagramIcon className="w-4 h-4 text-[#e1306c]" />
                <span>Instagram Archive</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
