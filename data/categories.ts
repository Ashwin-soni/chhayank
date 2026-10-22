export interface Category {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  heroQuote: string;
  heroImage: string;
  subcategories: string[];
  description: string;
  accentColor: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "love",
    name: "Love & Poetry",
    hindiName: "इश्क़ और नज़्में",
    tagline: "Letters, longing, memories and unspoken feelings",
    heroQuote: "Some stories don't need an ending, they just need to be felt.",
    heroImage: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1600&q=80",
    subcategories: ["All", "Love", "Heartbreak", "Memories", "Her", "Unsent Letters"],
    description: "Intimate verses on romance, bittersweet separation, midnight confessions, and timeless devotion.",
    accentColor: "#be3a34",
  },
  {
    id: "vedanta",
    name: "Vedanta",
    hindiName: "वेदान्त एवं दर्शन",
    tagline: "The self, truth, consciousness and a deeper way of living",
    heroQuote: "Not an escape from life, but a deeper way to live it...",
    heroImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80",
    subcategories: ["All", "Advaita Vedanta", "Life & Mind", "Spiritual Reflections", "Quotes"],
    description: "The exploration of non-duality, silence, atman, witness consciousness, and inner liberation beyond words.",
    accentColor: "#d97706",
  },
  {
    id: "patriotic",
    name: "Desh & Mitti",
    hindiName: "देश, माटी और वीर रस",
    tagline: "Verses on motherland, soil, sacrifice and timeless pride",
    heroQuote: "Yeh mitti sirf zameen nahi, hamari aashaaon aur astitva ka aasmaan hai...",
    heroImage: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=80",
    subcategories: ["All", "Matrubhoomi", "Veer Ras", "Tricolor", "Soldiers", "Mitti"],
    description: "Heartfelt patriotic and nationalistic verses celebrating our sacred land, unsung heroes, and civilizational ethos.",
    accentColor: "#ea580c",
  },
  {
    id: "sad",
    name: "The Quiet Mind",
    hindiName: "वीरानियाँ और ख़ामोशी",
    tagline: "Solitude, reflections, silent teardrops and everything in between",
    heroQuote: "Sometimes solitude isn't loneliness; it is the soul catching its breath.",
    heroImage: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&w=1600&q=80",
    subcategories: ["All", "Solitude", "Virah", "Midnight Thoughts", "Rain & Tears"],
    description: "Melancholic and quiet stanzas exploring heartbreak, silence, emptiness, and gentle healing in solitude.",
    accentColor: "#4f46e5",
  },
  {
    id: "perspectives",
    name: "Perspectives",
    hindiName: "ज़िन्दगी और नज़रिए",
    tagline: "My views on life, society, people and the world around us",
    heroQuote: "In a world that never stops, can we still find a quiet mind?",
    heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80",
    subcategories: ["All", "Life & Society", "Conversations", "Modern Silence", "Reflections"],
    description: "Reflections on contemporary life, unhurried chai, old diaries, and human connections in a fast-paced world.",
    accentColor: "#78716c",
  },
];
