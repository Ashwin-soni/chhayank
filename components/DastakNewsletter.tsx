"use client";

import React, { useState } from "react";
import { Mail, Send, Check, Sparkles, Feather, Calendar } from "lucide-react";
import confetti from "canvas-confetti";

interface DastakNewsletterProps {
  isOpenContactModal?: boolean;
  onCloseContactModal?: () => void;
}

export default function DastakNewsletter({
  isOpenContactModal = false,
  onCloseContactModal,
}: DastakNewsletterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Contact / Mushaira booking form states
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [eventType, setEventType] = useState("Mushaira / Spoken Word Fest");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#be3a34", "#f59e0b", "#d97706"],
    });
    setTimeout(() => {
      setEmail("");
    }, 4000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim()) return;
    setIsSent(true);
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      if (onCloseContactModal) onCloseContactModal();
      setIsSent(false);
      setContactName("");
      setContactEmail("");
      setMessage("");
    }, 2500);
  };

  return (
    <>
      {/* On-Page Newsletter Section */}
      <section className="py-20 sm:py-24 bg-[#f8f2e6] text-[#221815] bg-parchment-texture border-b border-[#e5d9ca] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-editorial uppercase tracking-widest text-[#943820] font-bold">
            <Feather className="w-4 h-4 text-[#be3a34]" />
            <span>Letters from the Quiet Corner</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1e140f] font-normal">
            Dastak &bull; दस्तक
          </h2>

          <p className="font-editorial text-base sm:text-lg text-[#52443c] max-w-xl mx-auto leading-relaxed">
            Every fortnight, I send an unhurried handwritten letter with an unreleased poem, reflections on life and Vedanta, and recommended books. No noise. Only quiet words.
          </p>

          {isSubscribed ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-editorial flex items-center justify-center gap-2 max-w-md mx-auto">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Shukriya! Your soul has been welcomed into our quiet circle.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full bg-white border border-[#d6c5af] text-sm font-editorial text-[#1e140f] placeholder:text-[#9e8d80] focus:outline-none focus:ring-2 focus:ring-[#943820]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#943820] hover:bg-[#6e2714] text-[#fff7ed] font-editorial text-sm font-semibold shadow-md transition-all active:scale-95 shrink-0 flex items-center justify-center gap-2"
              >
                <span>Receive Letters</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="pt-2 text-xs font-editorial text-[#8c786a]">
            Read by over 24,000 lovers of literature worldwide &bull; Unsubscribe anytime
          </div>
        </div>
      </section>

      {/* Booking / Mushaira Contact Modal */}
      {isOpenContactModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#fdfaf3] text-[#221815] bg-parchment-texture border border-[#d6c5af] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#e5d9c8] pb-4">
              <div>
                <h3 className="font-editorial text-2xl font-medium text-[#1f1612]">
                  Invite Chhayank Vatsa
                </h3>
                <p className="text-xs text-[#8c7a6e] font-editorial">
                  Mushairas, Lit Fests, College Slams &amp; Private Recitals
                </p>
              </div>

              {onCloseContactModal && (
                <button
                  onClick={onCloseContactModal}
                  className="p-1 rounded-full hover:bg-black/5 text-[#8c7a6e]"
                >
                  &times;
                </button>
              )}
            </div>

            {isSent ? (
              <div className="p-8 text-center space-y-3 font-editorial">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-medium text-emerald-900">
                  Invitation Dispatched!
                </h4>
                <p className="text-sm text-emerald-700">
                  Chhayank and his literary team will review your invitation and respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 font-editorial">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#735e50] mb-1">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Literary Society, IIT Bombay / Aarav Verma"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#d6c5af] text-sm text-[#221815] focus:outline-none focus:ring-1 focus:ring-[#943820]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#735e50] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#d6c5af] text-sm text-[#221815] focus:outline-none focus:ring-1 focus:ring-[#943820]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#735e50] mb-1">
                      Event Type
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#d6c5af] text-sm text-[#221815] focus:outline-none focus:ring-1 focus:ring-[#943820]"
                    >
                      <option>Mushaira / Spoken Word Fest</option>
                      <option>Literature Festival Stage</option>
                      <option>College / Youth Cultural Fest</option>
                      <option>Podcast / Literary Interview</option>
                      <option>Commissioned Custom Poem</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#735e50] mb-1">
                    Proposed Dates &amp; Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the city, theme, expected gathering, and dates..."
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#d6c5af] text-sm text-[#221815] focus:outline-none focus:ring-1 focus:ring-[#943820]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  {onCloseContactModal && (
                    <button
                      type="button"
                      onClick={onCloseContactModal}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-[#665447] hover:bg-black/5"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-[#943820] hover:bg-[#782c18] text-white text-xs font-semibold shadow-md flex items-center gap-2"
                  >
                    <span>Send Invitation</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
