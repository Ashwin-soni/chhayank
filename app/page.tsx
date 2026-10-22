"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TornPaperDivider from "@/components/TornPaperDivider";
import WorldOfWordsSection from "@/components/WorldOfWordsSection";
import FeaturedWritings from "@/components/FeaturedWritings";
import GenreShowcase from "@/components/GenreShowcase";
import StarryQuoteBanner from "@/components/StarryQuoteBanner";
import InstagramSection from "@/components/InstagramSection";
import AboutSection from "@/components/AboutSection";
import DastakNewsletter from "@/components/DastakNewsletter";
import Footer from "@/components/Footer";
import PoemReaderModal from "@/components/PoemReaderModal";
import DailyCoupletModal from "@/components/DailyCoupletModal";
import SearchModal from "@/components/SearchModal";
import BookmarksDrawer from "@/components/BookmarksDrawer";
import { Poem, POEMS } from "@/data/poems";

export default function Home() {
  const [activePoem, setActivePoem] = useState<Poem | null>(null);
  const [isDailyCoupletOpen, setIsDailyCoupletOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Bookmarks and likes in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [likedIds, setLikedIds] = useState<string[]>([]);

  const writingsRef = useRef<HTMLDivElement>(null);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedBookmarks = localStorage.getItem("chhayank_bookmarks");
      if (savedBookmarks) {
        setBookmarkedIds(JSON.parse(savedBookmarks));
      }
      const savedLikes = localStorage.getItem("chhayank_likes");
      if (savedLikes) {
        setLikedIds(JSON.parse(savedLikes));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleToggleBookmark = (poemId: string) => {
    setBookmarkedIds((prev) => {
      const updated = prev.includes(poemId)
        ? prev.filter((id) => id !== poemId)
        : [...prev, poemId];
      try {
        localStorage.setItem("chhayank_bookmarks", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleToggleLike = (poemId: string) => {
    setLikedIds((prev) => {
      const updated = prev.includes(poemId)
        ? prev.filter((id) => id !== poemId)
        : [...prev, poemId];
      try {
        localStorage.setItem("chhayank_likes", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleClearAllBookmarks = () => {
    setBookmarkedIds([]);
    try {
      localStorage.removeItem("chhayank_bookmarks");
    } catch {
      // ignore
    }
  };

  const scrollToWritings = () => {
    if (writingsRef.current) {
      writingsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategoryFromWorld = (catId: string) => {
    const el = document.getElementById(catId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      scrollToWritings();
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfbf7]">
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenDailyCouplet={() => setIsDailyCoupletOpen(true)}
        bookmarkedCount={bookmarkedIds.length}
      />

      {/* 1. Hero Section matching Desktop Home Page in reference */}
      <HeroSection
        onExploreClick={scrollToWritings}
        onOpenDailyCouplet={() => setIsDailyCoupletOpen(true)}
      />

      {/* Torn Paper Divider between Sunset Hero and Parchment */}
      <TornPaperDivider fillColor="#fdfbf7" position="bottom" />

      {/* 2. "A little world of words" Category Showcase matching reference */}
      <WorldOfWordsSection
        onSelectCategory={handleSelectCategoryFromWorld}
        onReadStoryClick={() => {
          const aboutEl = document.getElementById("about");
          aboutEl?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 3. Featured Writings Section matching reference */}
      <div ref={writingsRef} id="featured">
        <FeaturedWritings
          onSelectPoem={(poem) => setActivePoem(poem)}
          onToggleBookmark={handleToggleBookmark}
          bookmarkedIds={bookmarkedIds}
          likedIds={likedIds}
          onToggleLike={handleToggleLike}
          onViewAllClick={() => {
            const el = document.getElementById("love");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      {/* 4. Dedicated Genre Showcases matching Page 2 & 3 in reference (Love & Poetry, Vedanta, Desh & Mitti, etc.) */}
      <GenreShowcase
        initialCategoryId="love"
        onSelectPoem={(poem) => setActivePoem(poem)}
        onToggleBookmark={handleToggleBookmark}
        bookmarkedIds={bookmarkedIds}
        likedIds={likedIds}
        onToggleLike={handleToggleLike}
      />

      {/* Torn Paper Divider before Starry Night */}
      <TornPaperDivider fillColor="#060913" position="top" />

      {/* 5. Starry Night Cottage Banner matching reference bottom */}
      <StarryQuoteBanner />

      {/* 6. Instagram & Spoken Word Reels Gallery (@chhayankvatsa) */}
      <InstagramSection />

      {/* 7. About the Poet (Chhayank Vatsa) */}
      <AboutSection onContactClick={() => setIsContactModalOpen(true)} />

      {/* 8. "Dastak" Fortnightly Letters Newsletter */}
      <DastakNewsletter
        isOpenContactModal={isContactModalOpen}
        onCloseContactModal={() => setIsContactModalOpen(false)}
      />

      {/* 9. Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <PoemReaderModal
        poem={activePoem}
        onClose={() => setActivePoem(null)}
        onSelectPoem={(poem) => setActivePoem(poem)}
        isBookmarked={activePoem ? bookmarkedIds.includes(activePoem.id) : false}
        onToggleBookmark={handleToggleBookmark}
        isLiked={activePoem ? likedIds.includes(activePoem.id) : false}
        onToggleLike={handleToggleLike}
      />

      <DailyCoupletModal
        isOpen={isDailyCoupletOpen}
        onClose={() => setIsDailyCoupletOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPoem={(poem) => setActivePoem(poem)}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onSelectPoem={(poem) => setActivePoem(poem)}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={handleClearAllBookmarks}
      />
    </main>
  );
}
