"use client";

import React from "react";
import { X, Bookmark, ArrowRight, Trash2 } from "lucide-react";
import { POEMS, Poem } from "@/data/poems";

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: string[];
  onSelectPoem: (poem: Poem) => void;
  onRemoveBookmark: (poemId: string) => void;
  onClearAll: () => void;
}

export default function BookmarksDrawer({
  isOpen,
  onClose,
  bookmarkedIds,
  onSelectPoem,
  onRemoveBookmark,
  onClearAll,
}: BookmarksDrawerProps) {
  if (!isOpen) return null;

  const savedPoems = POEMS.filter((p) => bookmarkedIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#fdfaf3] text-[#221815] bg-parchment-texture border-l border-[#d6c5af] h-full shadow-2xl flex flex-col justify-between">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#e5d9c8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#943820] fill-[#943820]" />
            <div>
              <h3 className="font-editorial text-lg font-bold text-[#1f1612]">
                Saved Verses ({savedPoems.length})
              </h3>
              <p className="text-[11px] text-[#8c7a6e] font-editorial">
                Your personal poetry sanctuary
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

        {/* Saved List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {savedPoems.length === 0 ? (
            <div className="py-20 text-center text-[#7e6d62] space-y-3 font-editorial">
              <Bookmark className="w-8 h-8 mx-auto text-[#caa68e] opacity-50" />
              <p className="text-base">No poems bookmarked yet.</p>
              <p className="text-xs text-[#9c897c] max-w-xs mx-auto">
                Tap the bookmark icon on any poem card to keep it in your quiet collection.
              </p>
            </div>
          ) : (
            savedPoems.map((poem) => (
              <div
                key={poem.id}
                className="p-3.5 rounded-xl border border-[#e4d8c9] bg-white hover:border-[#943820] shadow-xs hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div
                  onClick={() => {
                    onSelectPoem(poem);
                    onClose();
                  }}
                  className="flex-1 cursor-pointer pr-3"
                >
                  <span className="text-[10px] uppercase font-editorial tracking-wider text-[#943820] font-bold">
                    {poem.category}
                  </span>
                  <h4 className="font-editorial text-base font-medium text-[#1f1510] group-hover:text-[#943820] transition-colors">
                    {poem.title}
                  </h4>
                  <p className="text-xs font-editorial text-[#63544a] line-clamp-1">
                    {poem.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onRemoveBookmark(poem.id)}
                    className="p-1.5 rounded-full text-[#9c897c] hover:text-[#dc2626] hover:bg-rose-50 transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onSelectPoem(poem);
                      onClose();
                    }}
                    className="p-1.5 rounded-full text-[#943820] hover:bg-amber-50"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {savedPoems.length > 0 && (
          <div className="p-4 border-t border-[#e2d5c2] bg-[#f5ede0] flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs font-editorial text-[#dc2626] hover:underline"
            >
              Clear all bookmarks
            </button>
            <span className="text-[11px] font-editorial text-[#8c7a6e]">
              Stored on your device
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
