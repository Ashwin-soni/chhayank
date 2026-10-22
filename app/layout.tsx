import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "chhayank's space | where the heart writes and the mind wonders",
  description:
    "Official poetry & writings archive of Chhayank Vatsa. Exploring love, heartbreak, Vedanta philosophy, patriotism, and quiet reflections through the beauty of the written word.",
  keywords: [
    "Chhayank Vatsa",
    "Chhayank",
    "Poet",
    "Hindi Poetry",
    "English Poetry",
    "Shayari",
    "Vedanta",
    "Love Poems",
    "Patriotic Poems",
    "Indian Poet",
  ],
  authors: [{ name: "Chhayank Vatsa", url: "https://www.instagram.com/chhayankvatsa/?hl=en" }],
  openGraph: {
    title: "chhayank's space — Poems & Musings",
    description: "Where the heart writes and the mind wonders. Official literary sanctuary of Chhayank Vatsa.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${jakarta.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#fcf9f2] text-[#1e1713] antialiased selection:bg-[#eedbc5] selection:text-[#3d2314]">
        {children}
      </body>
    </html>
  );
}
