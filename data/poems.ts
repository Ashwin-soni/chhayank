export interface Poem {
  id: string;
  title: string;
  hindiTitle?: string;
  category: "love" | "vedanta" | "patriotic" | "sad" | "perspectives";
  subcategory: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  likes: number;
  contentEnglish: string[];
  contentHindi?: string[];
  authorNote?: string;
  audioDuration?: string;
  recitalLines?: string[];
}

export const POEMS: Poem[] = [
  {
    id: "the-kind-of-love-that-stays",
    title: "The Kind of Love That Stays",
    hindiTitle: "वो इश्क़ जो ठहर जाता है",
    category: "love",
    subcategory: "Love",
    date: "Jan 17, 2025",
    readTime: "5 min read",
    excerpt: "Some people leave, but the way they made you feel never really does...",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    likes: 342,
    audioDuration: "2:45",
    contentEnglish: [
      "Some people come into your life like a question,",
      "and leave behind an entire universe of feelings.",
      "They may not stay, but the way they made you see",
      "life, love, and yourself — that never really leaves.",
      "",
      "It isn't about holding hands in the crowded rain,",
      "nor is it about promises carved on autumn bark.",
      "It is the quiet reassurance that even in absence,",
      "their remembrance softens the corners of the dark.",
      "",
      "You do not possess love like a captured river.",
      "You drink from it once, and let it quench your thirst,",
      "knowing that what was genuine cannot be forgotten,",
      "and what was eternal was already yours from the first."
    ],
    contentHindi: [
      "कुछ लोग ज़िन्दगी में सवाल बनकर आते हैं,",
      "और जवाबों की तलाश में एक कायनात छोड़ जाते हैं।",
      "वो साथ रहें या न रहें, पर जिस तरह उन्होंने",
      "ज़िन्दगी को देखना सिखाया, वो अहसास कभी नहीं छूटता।",
      "",
      "इश्क़ सिर्फ़ हाथ थामने का नाम नहीं होता,",
      "न ही ये वादों की ज़ंजीरों में बंधा परिंदा है।",
      "ये वो धीमी सी रौशनी है जो वीरान रातों में भी,",
      "दिल के किसी कोने को बुझने नहीं देती।",
      "",
      "बहती हुई नदी को कभी बाँधा नहीं जाता,",
      "बस एक घूँट पीकर प्यास को अमर कर लिया जाता है।"
    ],
    authorNote: "Written on a quiet evening in Banaras, looking at the dusk reflection upon the Ganga waters. Love doesn't require permanence to be complete.",
    recitalLines: [
      "Some people come into your life like a question...",
      "And leave behind an entire universe of feelings.",
      "They may not stay, but the way they made you feel...",
      "Never really leaves."
    ]
  },
  {
    id: "who-am-i",
    title: "Who Am I?",
    hindiTitle: "मैं कौन हूँ?",
    category: "vedanta",
    subcategory: "Advaita Vedanta",
    date: "Jan 5, 2025",
    readTime: "4 min read",
    excerpt: "A simple reflection on identity, the self and what truly remains when words fall away...",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    likes: 418,
    audioDuration: "3:10",
    contentEnglish: [
      "Strip away the name they gave you at dawn.",
      "Strip away the roles you rehearse in the daylight.",
      "Strip away the memories, both the triumphs and the scars —",
      "what remains when the breath settles into silence?",
      "",
      "You are not the storm of thoughts that passes,",
      "nor the fragile vessel of bone and blood.",
      "You are the silent sky through which every cloud wanders,",
      "untouched by rain, unburned by the sun.",
      "",
      "The seer does not drown in the seen.",
      "When the seeker stops running,",
      "the destination is found in the very first step."
    ],
    contentHindi: [
      "छीन लो वो नाम जो सुबह की धूप ने दिया था,",
      "मिटा दो वो सारे किरदार जो दिन भर निभाए गए।",
      "दर्द और फ़तह की लकीरों को अगर अलग कर दें —",
      "तो फिर सांसों के ठहरने पर क्या बाकी रहता है?",
      "",
      "तुम वो तूफ़ान नहीं हो जो गुज़र जाता है,",
      "न ही मिट्टी का ये कमज़ोर सा दिया हो तुम।",
      "तुम तो वो अथाह आसमान हो जिसमें बादल आते हैं,",
      "न बारिश तुम्हें भिगोती है, न आग तुम्हें जलाती है।",
      "",
      "साक्षी कभी दृश्य में खोया नहीं करता,",
      "जब खोजने वाला ठहर जाता है, तो मंज़िल कदम चूमती है।"
    ],
    authorNote: "Inspired by the timeless inquiry of Bhagavan Ramana Maharshi and Adi Shankaracharya's Nirvana Shatkam.",
    recitalLines: [
      "Strip away the name they gave you at dawn...",
      "You are not the storm of thoughts that passes.",
      "You are the silent sky."
    ]
  },
  {
    id: "on-a-noisy-world",
    title: "On a Noisy World",
    hindiTitle: "इस शोरभरी दुनिया में",
    category: "perspectives",
    subcategory: "Modern Silence",
    date: "Jan 12, 2025",
    readTime: "3 min read",
    excerpt: "In a world that never stops, can we still find a quiet mind?",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    likes: 289,
    audioDuration: "2:15",
    contentEnglish: [
      "Everyone has something urgent to declare.",
      "Screens glowing like synthetic fireflies,",
      "shouting into microphones of glass and steel,",
      "yet no one stops to listen to the breath between their ribs.",
      "",
      "We measure life in pixels and notifications,",
      "forgetting how the jasmine smells at four in the morning,",
      "forgetting how tea tastes when sipped without a rush.",
      "",
      "Perhaps rebellion today is not shouting louder.",
      "Perhaps the purest defiance is to close the door,",
      "light a single earthen lamp,",
      "and sit in reverence of the silence."
    ],
    contentHindi: [
      "हर किसी को कुछ न कुछ शोर मचाकर कहना है,",
      "हाथों में चमकते ये शीशे के जुगनू,",
      "बटन दबाते ही दुनिया से जुड़ जाने का दावा,",
      "मगर सीने में चलती सांस को सुनने की फुर्सत किसे है?",
      "",
      "हम ज़िन्दगी को नोटिफिकेशनों के तराज़ू में तौल रहे हैं,",
      "भूल गए हैं कि भोर की चमेली की खुशबू कैसी होती है,",
      "भूल गए हैं कि बेपरवाह बैठकर चाय पीने का सुख क्या है।",
      "",
      "शायद आज की सबसे बड़ी बगावत और तेज़ चिल्लाना नहीं,",
      "बल्कि दरवाज़ा बंद करके, एक मिट्टी का दिया जलाना,",
      "और ख़ामोशी के पाँवों पर सर रख देना है।"
    ],
    authorNote: "A personal contemplation on modern hyper-connectivity and the sacred necessity of solitude.",
    recitalLines: [
      "Everyone has something urgent to declare...",
      "Perhaps the purest defiance is to close the door,",
      "And sit in reverence of the silence."
    ]
  },
  {
    id: "unsent-letters",
    title: "Unsent Letters",
    hindiTitle: "वो खत जो कभी भेजे नहीं गए",
    category: "love",
    subcategory: "Unsent Letters",
    date: "Feb 3, 2025",
    readTime: "4 min read",
    excerpt: "Some letters are never sent, but they are still a part of my story...",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    likes: 512,
    audioDuration: "3:30",
    contentEnglish: [
      "The desk drawer keeps secrets better than any confidant.",
      "Folded creases of yellowed parchment,",
      "words written in haste when loneliness overflowed,",
      "now dried into quiet ink constellations.",
      "",
      "I never put a stamp on your address.",
      "Not because I doubted what was written,",
      "but because some truths are too fragile for postal bags.",
      "They belong only to the silence in which they were born.",
      "",
      "You will never read how your laughter was described,",
      "yet every bird outside my window repeats the rhythm.",
      "Some letters aren't meant to arrive;",
      "they are meant to save the one who held the pen."
    ],
    contentHindi: [
      "मेज़ की दराज़ किसी भी दोस्त से बेहतर राज़दार होती है।",
      "पीले पड़ते काग़ज़ की सिलवटें,",
      "वो लफ़्ज़ जो तन्हाई की शिद्दत में लिखे गए थे,",
      "अब ख़ामोश स्याही बनकर जम चुके हैं।",
      "",
      "मैंने कभी तुम्हारे पते पर टिकट नहीं लगाई,",
      "इसलिए नहीं कि मुझे अपनी लिखी बातों पर शक था,",
      "बल्कि इसलिए कि कुछ सच इतने नाज़ुक होते हैं,",
      "कि वो डाक के झोलों में बिखर जाते।",
      "",
      "तुम कभी नहीं जान पाओगे कि तुम्हारी हँसी को कैसे लिखा गया था,",
      "मगर खिड़की पर बैठी हर चिड़िया उस धुन को जानती है।"
    ],
    authorNote: "Found in my 2021 journal. Some words serve as medicine for the writer rather than messages for the recipient.",
    recitalLines: [
      "The desk drawer keeps secrets better than any confidant...",
      "Some letters aren't meant to arrive;",
      "They are meant to save the one who held the pen."
    ]
  },
  {
    id: "the-way-you-look-at-ordinary-things",
    title: "The Way You Look at Ordinary Things",
    hindiTitle: "साधारण चीज़ों को तुम्हारी नज़र",
    category: "love",
    subcategory: "Memories",
    date: "Jan 12, 2025",
    readTime: "3 min read",
    excerpt: "You had a way of turning an ordinary cup of tea into a sacred ritual...",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    likes: 275,
    audioDuration: "2:20",
    contentEnglish: [
      "You looked at an ordinary porcelain cup",
      "as if the clay still remembered the hands of the potter.",
      "You looked at a fallen leaf on the cobblestones",
      "not as debris, but as summer's handwritten farewell.",
      "",
      "That was your grace —",
      "you didn't ask the world to become spectacular;",
      "you simply unveiled the magic",
      "it had hidden in its everyday dust."
    ],
    contentHindi: [
      "तुमने चीनी मिट्टी के उस प्याले को ऐसे देखा था,",
      "जैसे मिट्टी अब भी कुम्हार के हाथों की गर्माहट याद करती हो।",
      "रास्ते पर पड़े सूखे पत्ते को तुमने कचरा नहीं समझा,",
      "बल्कि वो तो रुख़सत होती गर्म ऋतु का आख़िरी सलाम था।",
      "",
      "यही तो तुम्हारी नज़ाकत थी —",
      "तुमने कभी दुनिया से करिश्मे की मांग नहीं की,",
      "बस रोज़मर्रा की धूल में छुपा हुआ जादू पहचान लिया।"
    ],
    authorNote: "Dedicated to the souls who find poetry in routine mornings.",
    recitalLines: [
      "You looked at an ordinary porcelain cup...",
      "As if the clay still remembered the potter.",
      "You didn't ask the world to be spectacular; you found magic in dust."
    ]
  },
  {
    id: "some-people-stay",
    title: "Some People Stay",
    hindiTitle: "कुछ लोग ठहर जाते हैं",
    category: "love",
    subcategory: "Her",
    date: "Mar 28, 2025",
    readTime: "4 min read",
    excerpt: "They don't occupy your rooms, but they inhabit your poetry...",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    likes: 310,
    audioDuration: "2:50",
    contentEnglish: [
      "They do not sit on the vintage armchairs,",
      "nor do their shoes wait by the threshold.",
      "Yet whenever an old song plays from a passing car,",
      "or the first raindrops touch the burning asphalt,",
      "they step into the room without knocking.",
      "",
      "Some people stay, not as a physical presence,",
      "but as a filter through which you perceive tenderness.",
      "You become softer because they existed.",
      "You forgive more easily because they taught you how deeply you could feel."
    ],
    contentHindi: [
      "वो न तो कमरे की पुरानी कुर्सी पर बैठते हैं,",
      "न ही देहलीज़ पर उनकी जूतियाँ रखी होती हैं।",
      "मगर जब भी किसी गुज़रती गाड़ी से पुराना नगमा बजता है,",
      "या तपती ज़मीन पर पहली बूँद गिरती है —",
      "वो बिना दस्तक दिए रूह में उतर आते हैं।"
    ],
    authorNote: "Love transforms into architecture inside the heart.",
    recitalLines: [
      "Some people stay, not as a physical presence...",
      "But as a filter through which you perceive tenderness."
    ]
  },
  {
    id: "what-is-the-self",
    title: "What is the Self?",
    hindiTitle: "स्वयं क्या है?",
    category: "vedanta",
    subcategory: "Advaita Vedanta",
    date: "Jun 5, 2025",
    readTime: "5 min read",
    excerpt: "Beyond the intellect, the senses, and the mirror — finding that which observes...",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    likes: 388,
    audioDuration: "3:40",
    contentEnglish: [
      "The mirror shows the contour of a cheek,",
      "the grey streak running through dark temples,",
      "the laughter lines carved around tired eyes.",
      "But who is the one looking into the glass?",
      "",
      "Not the eye, for the eye is seen.",
      "Not the mind, for thoughts come and go like migrating birds.",
      "You are the unmoving ground,",
      "the luminous witness (Sakshi) that illuminates both daylight and dream.",
      "",
      "Rest there. Do not manufacture stillness.",
      "Recognize that you have never moved."
    ],
    contentHindi: [
      "आईना गालों की बनावट दिखा देता है,",
      "बालों में चुपके से आई सफेदी भी,",
      "और थकी आँखों के गिर्द हंसी की लकीरें भी।",
      "मगर शीशे में झांकने वाला वो कौन है?",
      "",
      "आंख नहीं, क्योंकि आंख को तो देखा जाता है।",
      "मन भी नहीं, क्योंकि विचार तो परिंदों की तरह आते-जाते हैं।",
      "तुम तो वो अचल भूमि हो —",
      "वो साक्षी चेतना जो धूप और नींद दोनों को प्रकाशित करती है।"
    ],
    authorNote: "From the Upanishadic contemplation: 'Neti, Neti' (Not this, not this).",
    recitalLines: [
      "Who is the one looking into the glass?",
      "You are the unmoving ground, the luminous witness."
    ]
  },
  {
    id: "silence-and-clarity",
    title: "Silence and Clarity",
    hindiTitle: "सन्नाटा और स्पष्टता",
    category: "vedanta",
    subcategory: "Spiritual Reflections",
    date: "May 18, 2025",
    readTime: "4 min read",
    excerpt: "Silence is not the absence of sound; it is the presence of everything...",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    likes: 422,
    audioDuration: "2:40",
    contentEnglish: [
      "When the pond is disturbed by pebbles,",
      "the bottom cannot be seen.",
      "We spend our years throwing opinions and judgments,",
      "then wonder why our reflection appears distorted.",
      "",
      "Let the water be.",
      "Do not try to smoothen the waves with your palms.",
      "In total inaction, clarity returns on its own accord.",
      "The mud settles, and the golden truth shines."
    ],
    contentHindi: [
      "जब तालाब में कंकड़ उछाले जाते हैं,",
      "तो उसकी तलहटी कभी नज़र नहीं आती।",
      "हम उम्र भर राय और तकरार के पत्थर फेंकते रहते हैं,",
      "और फिर सोचते हैं कि अक्स इतना धुंधला क्यों है?",
      "",
      "पानी को बस ठहर जाने दो।",
      "लहरों को अपनी हथेलियों से शांत करने की कोशिश मत करो।"
    ],
    authorNote: "Meditation notes written in Rishikesh on the banks of the Bhagirathi.",
    recitalLines: [
      "Silence is not the absence of sound; it is the presence of everything.",
      "In total stillness, clarity returns."
    ]
  },
  {
    id: "detachment-in-modern-life",
    title: "Detachment in Modern Life",
    hindiTitle: "आधुनिक जीवन में अनासक्ति",
    category: "vedanta",
    subcategory: "Life & Mind",
    date: "Apr 2, 2025",
    readTime: "4 min read",
    excerpt: "Living wholeheartedly without being consumed by expectations...",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    likes: 360,
    audioDuration: "3:05",
    contentEnglish: [
      "Vairagya does not mean abandoning the home,",
      "nor turning away from the fragrance of dinner.",
      "It means loving without clenching your fists.",
      "",
      "Hold everything as you would hold a wild butterfly —",
      "gentle enough that it does not hurt,",
      "open enough that its wings may take flight at will.",
      "To love without possessing is the highest worship."
    ],
    contentHindi: [
      "वैराग्य का अर्थ घर छोड़ना नहीं होता,",
      "न ही शाम के खाने की महक से मुँह मोड़ना है।",
      "इसका मतलब सिर्फ इतना है — मुट्ठी भींचे बिना प्यार करना।",
      "",
      "हर रिश्ते को ऐसे थामो जैसे तितली को हथेली पर रखा जाता है,",
      "इतनी नरमी से कि उसके पर न टूटे,",
      "और इतनी आज़ादी से कि जब चाहे वो आसमान छू सके।"
    ],
    authorNote: "On the meaning of true Vairagya according to the Bhagavad Gita.",
    recitalLines: [
      "Hold everything as you would hold a wild butterfly...",
      "To love without possessing is the highest worship."
    ]
  },
  {
    id: "mitti-ki-sugandh",
    title: "Mitti Ki Sugandh (The Sacred Soil)",
    hindiTitle: "माटी की सौंधी खुशबू",
    category: "patriotic",
    subcategory: "Matrubhoomi",
    date: "Aug 14, 2025",
    readTime: "4 min read",
    excerpt: "This soil has drunk our ancestors' prayers and our martyrs' blood...",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    likes: 640,
    audioDuration: "3:25",
    contentEnglish: [
      "When the first monsoon drop kisses the thirsty earth,",
      "it isn't merely petrichor rising into the air —",
      "it is the fragrance of five thousand years of resilience,",
      "the breath of sages, the sweat of farmers, the vows of patriots.",
      "",
      "This land is not a geopolitical border on paper.",
      "It is a living consciousness.",
      "From the snowy crown of the Himalayas to Kanyakumari's roaring foam,",
      "every pebble carries a mantra, every river a lullaby.",
      "",
      "O Mother, if I take a thousand rebirths,",
      "let my dust always merge into your sacred terracotta soil."
    ],
    contentHindi: [
      "जब सावन की पहली बूँद इस प्यासी ज़मीन को चूमती है,",
      "तो हवा में सिर्फ सोंधी महक नहीं उठती —",
      "उसमें पाँच हज़ार सालों का अटूट स्वाभिमान महकता है,",
      "ऋषियों का तपोबल, किसानों का पसीना, और वीरों की सौगंध।",
      "",
      "ये देश महज़ नक्शों पर खिंची हुई सीमाएं नहीं है,",
      "ये एक जाग्रत और अमर चेतना है।",
      "हिमालय के बर्फ़ीले मुकुट से लेकर कन्याकुमारी के सागर तक,",
      "हर कंकर में शंकर है, हर नदी में माँ की ममता।",
      "",
      "हे मातृभूमि! अगर मुझे सौ जन्म भी मिलें,",
      "तो मेरी राख सिर्फ तेरी माटी में मिलकर महके।"
    ],
    authorNote: "A tribute to Bharat Mata and the timeless civilizational roots of our soil.",
    recitalLines: [
      "This land is not a border on paper; it is a living consciousness.",
      "From the snowy crown of Himalayas to Kanyakumari's foam,",
      "Every pebble carries a mantra, every river a lullaby."
    ]
  },
  {
    id: "tirange-ke-dhaage",
    title: "Tirange Ke Dhaage (Threads of the Tricolor)",
    hindiTitle: "तिरंगे के तीन रंग",
    category: "patriotic",
    subcategory: "Tricolor",
    date: "Jan 26, 2025",
    readTime: "3 min read",
    excerpt: "Saffron for courage, white for inner peace, green for fertile hope...",
    image: "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    likes: 520,
    audioDuration: "2:50",
    contentEnglish: [
      "Saffron is the flame of courage burning upon icy frontiers.",
      "White is the river of truth washing through our ancient hymns.",
      "Green is the pledge of harvest blooming in the darkest drought.",
      "",
      "And the blue chakra turns, untiring and profound,",
      "reminding us that freedom is not an inheritance,",
      "but a daily responsibility of honor and integrity.",
      "May it flutter forever under the vast, sovereign sky."
    ],
    contentHindi: [
      "केसरिया वो शोला है जो सरहदों की बर्फ़ में भी धधकता है,",
      "श्वेत वो पावन सत्य है जो हमारी ऋचाओं में बहता है,",
      "हरा वो विश्वास है जो अकाल में भी फसलें उगा देता है।",
      "",
      "और बीच में घूमता वो नील चक्र हमें याद दिलाता है —",
      "कि आज़ादी सिर्फ विरासत नहीं, एक रोज़ाना की साधना है।",
      "ये तिरंगा हमेशा इस आज़ाद आसमाँ में लहराता रहे।"
    ],
    authorNote: "Reflections on Republic Day and national duty.",
    recitalLines: [
      "Saffron is the flame of courage.",
      "White is the river of truth.",
      "Green is the pledge of harvest blooming in drought."
    ]
  },
  {
    id: "the-empty-room",
    title: "The Empty Room (Khaali Kamra)",
    hindiTitle: "ख़ाली कमरा",
    category: "sad",
    subcategory: "Solitude",
    date: "Nov 14, 2024",
    readTime: "4 min read",
    excerpt: "When the lights turn off, silence is the only occupant that remains...",
    image: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    likes: 470,
    audioDuration: "3:15",
    contentEnglish: [
      "The walls do not echo anymore.",
      "They have absorbed every sigh, every unfinished argument,",
      "every telephone call that ended in a heavy click.",
      "",
      "An unread book lies open on page forty-two,",
      "the ceiling fan turns with a slow, mechanical dirge.",
      "Grief does not always come with thunder and rain;",
      "sometimes it is simply sitting on the edge of the bed,",
      "wondering when you became a stranger in your own skin."
    ],
    contentHindi: [
      "दीवारें अब पलटकर आवाज़ नहीं देतीं,",
      "इन्होंने हर सिसकी, हर अधूरी बात को सोख लिया है।",
      "हर वो फ़ोन कॉल जो एक भारी सन्नाटे के साथ कट गया था,",
      "यहाँ किसी कोने में आज भी ठहरा हुआ है।",
      "",
      "बयालीसवें पन्ने पर खुली पड़ी किताब धूल खा रही है,",
      "पंखा धीमी चाल से अपना ही दर्द बयां कर रहा है।",
      "उदासी हमेशा तूफ़ान बनकर नहीं आती,",
      "कभी-कभी ये बस बिस्तर के कोने पर बैठकर ख़ुद से पूछना है —",
      "कि हम अपने ही वजूद में इतने अजनबी कब हो गए?"
    ],
    authorNote: "Written during a melancholic winter midnight in Delhi.",
    recitalLines: [
      "The walls do not echo anymore...",
      "Grief does not always come with thunder and rain;",
      "Sometimes it is simply sitting on the edge of the bed."
    ]
  },
  {
    id: "the-art-of-letting-go",
    title: "The Art of Letting Go",
    hindiTitle: "छूट जाने का हुनर",
    category: "sad",
    subcategory: "Virah",
    date: "Feb 19, 2025",
    readTime: "3 min read",
    excerpt: "You cannot hold autumn by grabbing its leaves...",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    likes: 395,
    audioDuration: "2:30",
    contentEnglish: [
      "The trees never weep when their leaves turn gold and fall.",
      "They know the naked branch is necessary",
      "for the spring blossoms to find their breath.",
      "",
      "Why then do we hold on to dead memories",
      "with bruised knuckles and frantic prayers?",
      "Open your hands. Let the wind carry what must depart.",
      "Only the empty palm has room for tomorrow."
    ],
    contentHindi: [
      "पेड़ कभी रोते नहीं जब उनके पत्ते पीले पड़कर झड़ते हैं,",
      "वो जानते हैं कि शाखों का नंगा होना ज़रूरी है,",
      "ताकि आने वाली बहार सांस ले सके।",
      "",
      "फिर हम क्यों मरी हुई यादों को भींचकर रखते हैं?",
      "अपनी हथेलियों को खोलो। जो जाना चाहता है उसे हवा में उड़ जाने दो।",
      "क्योंकि सिर्फ़ ख़ाली हाथ ही आने वाले कल को थाम सकते हैं।"
    ],
    authorNote: "Lessons from the trees on non-attachment and emotional healing.",
    recitalLines: [
      "The trees never weep when leaves turn gold and fall.",
      "Open your hands. Let the wind carry what must depart."
    ]
  },
  {
    id: "conversations-with-strangers",
    title: "Conversations with Strangers",
    hindiTitle: "अजनबियों से गुफ़्तगू",
    category: "perspectives",
    subcategory: "Conversations",
    date: "Jan 30, 2025",
    readTime: "4 min read",
    excerpt: "A roadside chai stall on a winter evening teaches more than a library of philosophy...",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    likes: 312,
    audioDuration: "2:45",
    contentEnglish: [
      "He poured the ginger chai into earthenware kulhads,",
      "steam rising like prayer into the December fog.",
      "An old man leaned on his wooden cane and said,",
      "'Beta, people don't run out of time; they run out of presence.'",
      "",
      "We exchanged ten minutes of warmth under a blue tarpaulin sheet,",
      "no names asked, no identities demanded.",
      "Sometimes the most honest confessions happen with someone",
      "you will never see again in this lifetime."
    ],
    contentHindi: [
      "उसने कुल्हड़ में अदरक वाली चाय ढाली,",
      "दिसंबर के कोहरे में भाप किसी दुआ की तरह उठी।",
      "लाठी टिकाए एक बुज़ुर्ग ने धीरे से कहा,",
      "'बेटा, लोगों के पास वक़्त की कमी नहीं होती, बस मौजूदगी खत्म हो जाती है।'",
      "",
      "दस मिनट की वो गर्माहट किसी नीले तिरपाल के नीचे,",
      "न कोई नाम पूछा गया, न कोई पहचान मांगी गई।",
      "कभी-कभी सबसे सच्ची बातें उन अजनबियों से होती हैं,",
      "जिनसे ज़िन्दगी दोबारा कभी नहीं मिलने वाली।"
    ],
    authorNote: "Observed at a roadside tea stall in Old Lucknow.",
    recitalLines: [
      "'Beta, people don't run out of time; they run out of presence.'",
      "Sometimes the most honest confessions happen with strangers."
    ]
  }
];

export interface Couplet {
  id: string;
  hindi: string;
  english: string;
  theme: "Love" | "Vedanta" | "Life" | "Solitude" | "Patriotism";
}

export const DAILY_COUPLETS: Couplet[] = [
  {
    id: "c1",
    hindi: "कुछ इस तरह से गुज़री है ज़िन्दगी अपनी,\nकि दिल भी धड़का तो किसी की यादों के साए में।",
    english: "Such has been the passage of my life,\nthat even when my heart beat, it was in the shadow of remembrance.",
    theme: "Love"
  },
  {
    id: "c2",
    hindi: "मैं वो समंदर हूँ जिसकी गहराई में खामोशी है,\nतुम किनारे पर खड़े सिर्फ़ लहरों को देखते रहे।",
    english: "I am that ocean whose depths harbor quiet stillness,\nwhile you stood on the shore, watching only the waves.",
    theme: "Solitude"
  },
  {
    id: "c3",
    hindi: "जो खो गया वो सिर्फ़ वहम था मेरा,\nजो बच गया वही तो मेरा अस्तिव है।",
    english: "What was lost was merely my illusion,\nwhat remained alone is my true existence.",
    theme: "Vedanta"
  },
  {
    id: "c4",
    hindi: "इस मिट्टी की खुशबू में जो बात है,\nवो दुनिया के किसी इत्र में कहाँ।",
    english: "The fragrance that rises from this sacred soil,\ncan never be matched by all the perfumes of the world.",
    theme: "Patriotism"
  },
  {
    id: "c5",
    hindi: "मंज़िलों की फ़िक्र में रास्ते मत छोड़ देना,\nसफ़र ही तो वो दौलत है जो साथ जाएगी।",
    english: "In your haste for the destination, don't forget the pathway;\nfor the journey alone is the wealth that stays with you.",
    theme: "Life"
  },
  {
    id: "c6",
    hindi: "तूफान में भी जो चिराग जलता रहा,\nवो हौसला मेरी माटी ने मुझे दिया है।",
    english: "The lamp that kept burning even in the gale,\nthat quiet courage was gifted to me by my motherland.",
    theme: "Patriotism"
  },
  {
    id: "c7",
    hindi: "ख़ामोशी कोई खालीपन नहीं होती,\nये तो वो इबादत है जिसमें लफ़्ज़ कम पड़ जाते हैं।",
    english: "Silence is never an emptiness;\nit is that devotion where all spoken words fall short.",
    theme: "Vedanta"
  }
];

export const POET_PROFILE = {
  name: "Chhayank Vatsa",
  tagline: "where the heart writes and the mind wonders",
  shortBio: "Chhayank Vatsa is an Indian poet, philosopher, and spoken word artist. Rooted in the profound wisdom of Vedanta and the romantic lyrical traditions of Hindi and English verse, his writings bridge the ancient silence of contemplation with the tender longings of the contemporary human heart.",
  longBio: [
    "Born with an instinctive reverence for words, Chhayank Vatsa has spent over a decade crafting poetry that navigates between the fiery currents of youthful passion and the still waters of Advaita philosophy.",
    "His works have touched millions across digital mediums, spoken word stages, and literary gatherings. He writes both in lyrical Hindi (Shayari and Nazms) and evocative English free verse, refusing to confine the emotional spectrum to linguistic boundaries.",
    "Whether writing about the silent anguish of unsent letters, the fierce pride for the soil of Bharat, or the timeless inquiry of 'Who am I?', Chhayank’s words invite the reader to pause, breathe, and rediscover the sacred space within themselves."
  ],
  socials: {
    instagram: "https://www.instagram.com/chhayankvatsa/?hl=en",
    handle: "@chhayankvatsa",
    email: "contact@chhayankvatsa.com",
    stats: {
      readers: "150K+",
      poems: "200+",
      recitals: "80+"
    }
  },
  instagramHighlights: [
    {
      id: "ig-1",
      title: "वो इश्क़ जो ठहर जाता है (Spoken Word)",
      views: "1.2M plays",
      caption: "Some stories do not need an ending, they just need to be felt with all your heart.",
      link: "https://www.instagram.com/chhayankvatsa/?hl=en",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ig-2",
      title: "मैं कौन हूँ? (Vedanta Reflections)",
      views: "890K plays",
      caption: "Beyond the mind and its stories, what remains is the witness.",
      link: "https://www.instagram.com/chhayankvatsa/?hl=en",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ig-3",
      title: "माटी की सौंधी खुशबू (Desh & Mitti)",
      views: "2.1M plays",
      caption: "Yeh mitti sirf zameen nahi, hamare purvajon ka aashirwaad hai.",
      link: "https://www.instagram.com/chhayankvatsa/?hl=en",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ig-4",
      title: "वो खत जो कभी भेजे नहीं गए (Unsent Letters)",
      views: "1.5M plays",
      caption: "Some letters are meant to heal the one who wrote them.",
      link: "https://www.instagram.com/chhayankvatsa/?hl=en",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
