import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Heart, Bookmark, Share2, Sparkles, Feather, Volume2 } from "lucide-react";
import { POEMS, Poem } from "@/data/poems";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return POEMS.map((poem) => ({
    id: poem.id,
  }));
}

export default async function PoemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const poem = POEMS.find((p) => p.id === id);

  if (!poem) {
    notFound();
  }

  const relatedPoems = POEMS.filter(
    (p) => p.id !== poem.id && p.category === poem.category
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#221815] bg-parchment-texture flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full space-y-10">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between border-b border-[#e5d9c8] pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-editorial text-[#943820] hover:text-[#521b0e] font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Sanctuary</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-editorial text-[#786659]">
            <span className="uppercase tracking-wider font-bold text-[#943820]">
              {poem.category}
            </span>
            <span>&bull;</span>
            <span>{poem.date}</span>
            <span>&bull;</span>
            <span>{poem.readTime}</span>
          </div>
        </div>

        {/* Article Header matching Blog Post Page in reference */}
        <div className="space-y-4">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#1e140f] font-medium leading-tight">
            {poem.title}
          </h1>

          {poem.hindiTitle && (
            <p className="font-editorial text-2xl text-[#943820] italic">
              {poem.hindiTitle}
            </p>
          )}

          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-[#943820] text-white flex items-center justify-center font-editorial font-bold text-sm">
              CV
            </div>
            <div>
              <div className="text-sm font-editorial font-bold text-[#1e140f]">
                Chhayank Vatsa
              </div>
              <a
                href="https://www.instagram.com/chhayankvatsa/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#943820] hover:underline font-editorial"
              >
                @chhayankvatsa
              </a>
            </div>
          </div>
        </div>

        {/* Feature Image / Banner */}
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#d8c8b4] shadow-md">
          <Image
            src={poem.image}
            alt={poem.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <p className="font-handwritten text-xl sm:text-2xl text-[#fed7aa]">
              &ldquo;{poem.excerpt}&rdquo;
            </p>
          </div>
        </div>

        {/* The Poem Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-8 font-editorial text-lg sm:text-xl leading-relaxed text-[#2a1d17]">
            {poem.contentHindi && (
              <div className="p-6 rounded-2xl bg-[#f7efe3] border border-[#d8c8b4] space-y-3">
                <span className="text-xs uppercase tracking-widest font-bold text-[#943820]">
                  हिन्दी मूल
                </span>
                <div className="whitespace-pre-line text-[#6b2512] font-medium">
                  {poem.contentHindi.join("\n")}
                </div>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-white border border-[#e4d8c8] space-y-3 shadow-xs">
              <span className="text-xs uppercase tracking-widest font-bold text-[#943820]">
                English Verse
              </span>
              <div className="whitespace-pre-line text-[#261c16]">
                {poem.contentEnglish.join("\n")}
              </div>
            </div>
          </div>

          {/* Side Poet Note */}
          <div className="md:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-[#e4d8c8] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#943820]">
                <Feather className="w-4 h-4" />
                <span>Poet&apos;s Reflection</span>
              </div>
              <p className="text-xs font-editorial text-[#5c4c41] leading-relaxed italic">
                {poem.authorNote ||
                  "Some words are not merely written; they are surrendered to the page."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f3e9db] border border-[#d8c8b4] space-y-2 text-center">
              <div className="text-xs font-editorial text-[#735e50]">
                Appreciate this verse?
              </div>
              <a
                href="https://www.instagram.com/chhayankvatsa/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-xs font-editorial font-bold text-[#943820] hover:underline"
              >
                Send words to @chhayankvatsa &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Related Poems */}
        {relatedPoems.length > 0 && (
          <div className="pt-12 border-t border-[#e2d5c2] space-y-6">
            <h3 className="font-editorial text-2xl font-medium text-[#1e140f]">
              More from {poem.category.toUpperCase()}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPoems.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/poem/${rel.id}`}
                  className="p-4 rounded-xl bg-white border border-[#e4d8c8] hover:border-[#943820] shadow-xs hover:shadow-md transition-all group block space-y-2"
                >
                  <span className="text-[10px] uppercase font-editorial tracking-wider text-[#943820] font-bold">
                    {rel.subcategory}
                  </span>
                  <h4 className="font-editorial text-lg text-[#1e140f] font-medium group-hover:text-[#943820] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs font-editorial text-[#66564c] line-clamp-2">
                    {rel.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
