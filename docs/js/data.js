// Data for German Cases Exercise
const caseCategories = [
  { case: "N", gender: "M", description: "Nominativ Masculine" },
  { case: "N", gender: "F", description: "Nominativ Feminine" },
  { case: "N", gender: "N", description: "Nominativ Neuter" },
  { case: "N", gender: "P", description: "Nominativ Plural" },
  { case: "A", gender: "M", description: "Akkusativ Masculine" },
  { case: "A", gender: "F", description: "Akkusativ Feminine" },
  { case: "A", gender: "N", description: "Akkusativ Neuter" },
  { case: "A", gender: "P", description: "Akkusativ Plural" },
  { case: "D", gender: "M", description: "Dativ Masculine" },
  { case: "D", gender: "F", description: "Dativ Feminine" },
  { case: "D", gender: "N", description: "Dativ Neuter" },
  { case: "D", gender: "P", description: "Dativ Plural" },
];

// Questions for definite articles (der, die, das)
const definiteArticleQuestions = [
  // Nominativ
  { id: 1, type: "N/M", pronoun: "der", correctAnswer: "der", options: ["der", "die", "das"] },
  { id: 2, type: "N/F", pronoun: "der", correctAnswer: "die", options: ["der", "die", "das"] },
  { id: 3, type: "N/N", pronoun: "der", correctAnswer: "das", options: ["der", "die", "das"] },
  { id: 4, type: "N/P", pronoun: "der", correctAnswer: "die", options: ["der", "die", "das"] },
  
  // Akkusativ
  { id: 5, type: "A/M", pronoun: "der", correctAnswer: "den", options: ["der", "den", "dem"] },
  { id: 6, type: "A/F", pronoun: "der", correctAnswer: "die", options: ["der", "die", "das"] },
  { id: 7, type: "A/N", pronoun: "der", correctAnswer: "das", options: ["der", "die", "das"] },
  { id: 8, type: "A/P", pronoun: "der", correctAnswer: "die", options: ["der", "die", "das"] },
  
  // Dativ
  { id: 9, type: "D/M", pronoun: "der", correctAnswer: "dem", options: ["der", "den", "dem"] },
  { id: 10, type: "D/F", pronoun: "der", correctAnswer: "der", options: ["der", "die", "dem"] },
  { id: 11, type: "D/N", pronoun: "der", correctAnswer: "dem", options: ["der", "dem", "das"] },
  { id: 12, type: "D/P", pronoun: "der", correctAnswer: "den", options: ["der", "die", "den"] },
];

// Questions for possessive pronouns (mein, dein, etc.)
const possessivePronounQuestions = [
  // Nominativ - mein
  { id: 13, type: "N/M", pronoun: "mein", correctAnswer: "mein", options: ["mein", "meine", "meinem"] },
  { id: 14, type: "N/F", pronoun: "mein", correctAnswer: "meine", options: ["mein", "meine", "meiner"] },
  { id: 15, type: "N/N", pronoun: "mein", correctAnswer: "mein", options: ["mein", "meine", "meinem"] },
  { id: 16, type: "N/P", pronoun: "mein", correctAnswer: "meine", options: ["mein", "meine", "meinen"] },
  
  // Akkusativ - mein
  { id: 17, type: "A/M", pronoun: "mein", correctAnswer: "meinen", options: ["mein", "meinen", "meinem"] },
  { id: 18, type: "A/F", pronoun: "mein", correctAnswer: "meine", options: ["mein", "meine", "meiner"] },
  { id: 19, type: "A/N", pronoun: "mein", correctAnswer: "mein", options: ["mein", "meine", "meinem"] },
  { id: 20, type: "A/P", pronoun: "mein", correctAnswer: "meine", options: ["mein", "meine", "meinen"] },
  
  // Dativ - mein
  { id: 21, type: "D/M", pronoun: "mein", correctAnswer: "meinem", options: ["mein", "meinen", "meinem"] },
  { id: 22, type: "D/F", pronoun: "mein", correctAnswer: "meiner", options: ["meine", "meiner", "meinem"] },
  { id: 23, type: "D/N", pronoun: "mein", correctAnswer: "meinem", options: ["mein", "meinem", "meinen"] },
  { id: 24, type: "D/P", pronoun: "mein", correctAnswer: "meinen", options: ["meine", "meiner", "meinen"] },
  
  // Nominativ - dein
  { id: 25, type: "N/M", pronoun: "dein", correctAnswer: "dein", options: ["dein", "deine", "deinem"] },
  { id: 26, type: "N/F", pronoun: "dein", correctAnswer: "deine", options: ["dein", "deine", "deiner"] },
  { id: 27, type: "N/N", pronoun: "dein", correctAnswer: "dein", options: ["dein", "deine", "deinem"] },
  { id: 28, type: "N/P", pronoun: "dein", correctAnswer: "deine", options: ["dein", "deine", "deinen"] },
  
  // Akkusativ - dein
  { id: 29, type: "A/M", pronoun: "dein", correctAnswer: "deinen", options: ["dein", "deinen", "deinem"] },
  { id: 30, type: "A/F", pronoun: "dein", correctAnswer: "deine", options: ["dein", "deine", "deiner"] },
  { id: 31, type: "A/N", pronoun: "dein", correctAnswer: "dein", options: ["dein", "deine", "deinem"] },
  { id: 32, type: "A/P", pronoun: "dein", correctAnswer: "deine", options: ["dein", "deine", "deinen"] },
  
  // Dativ - dein
  { id: 33, type: "D/M", pronoun: "dein", correctAnswer: "deinem", options: ["dein", "deinen", "deinem"] },
  { id: 34, type: "D/F", pronoun: "dein", correctAnswer: "deiner", options: ["deine", "deiner", "deinem"] },
  { id: 35, type: "D/N", pronoun: "dein", correctAnswer: "deinem", options: ["dein", "deinem", "deinen"] },
  { id: 36, type: "D/P", pronoun: "dein", correctAnswer: "deinen", options: ["deine", "deiner", "deinen"] },
  
  // sein (his)
  { id: 37, type: "N/M", pronoun: "sein", correctAnswer: "sein", options: ["sein", "seine", "seinem"] },
  { id: 38, type: "A/M", pronoun: "sein", correctAnswer: "seinen", options: ["sein", "seinen", "seinem"] },
  { id: 39, type: "D/F", pronoun: "sein", correctAnswer: "seiner", options: ["seine", "seiner", "seinem"] },
  
  // ihr (her)
  { id: 40, type: "N/M", pronoun: "ihr", correctAnswer: "ihr", options: ["ihr", "ihre", "ihrem"] },
  { id: 41, type: "A/M", pronoun: "ihr", correctAnswer: "ihren", options: ["ihr", "ihren", "ihrem"] },
  { id: 42, type: "D/F", pronoun: "ihr", correctAnswer: "ihrer", options: ["ihre", "ihrer", "ihrem"] },
  
  // unser (our)
  { id: 43, type: "N/M", pronoun: "unser", correctAnswer: "unser", options: ["unser", "unsere", "unserem"] },
  { id: 44, type: "A/M", pronoun: "unser", correctAnswer: "unseren", options: ["unser", "unseren", "unserem"] },
  { id: 45, type: "D/F", pronoun: "unser", correctAnswer: "unserer", options: ["unsere", "unserer", "unserem"] },
];

// Questions for indefinite articles (ein, eine, etc.)
const indefiniteArticleQuestions = [
  // Nominativ
  { id: 46, type: "N/M", pronoun: "ein", correctAnswer: "ein", options: ["ein", "eine", "einem"] },
  { id: 47, type: "N/F", pronoun: "ein", correctAnswer: "eine", options: ["ein", "eine", "einer"] },
  { id: 48, type: "N/N", pronoun: "ein", correctAnswer: "ein", options: ["ein", "eine", "einem"] },
  
  // Akkusativ
  { id: 49, type: "A/M", pronoun: "ein", correctAnswer: "einen", options: ["ein", "einen", "einem"] },
  { id: 50, type: "A/F", pronoun: "ein", correctAnswer: "eine", options: ["ein", "eine", "einer"] },
  { id: 51, type: "A/N", pronoun: "ein", correctAnswer: "ein", options: ["ein", "eine", "einem"] },
  
  // Dativ
  { id: 52, type: "D/M", pronoun: "ein", correctAnswer: "einem", options: ["ein", "einen", "einem"] },
  { id: 53, type: "D/F", pronoun: "ein", correctAnswer: "einer", options: ["eine", "einer", "einem"] },
  { id: 54, type: "D/N", pronoun: "ein", correctAnswer: "einem", options: ["ein", "einem", "einen"] },
];

// Questions for personal pronouns (ich, du, etc.)
const personalPronounQuestions = [
  // Nominativ
  { id: 55, type: "N", pronoun: "ich", correctAnswer: "ich", options: ["ich", "mich", "mir"] },
  { id: 56, type: "N", pronoun: "du", correctAnswer: "du", options: ["du", "dich", "dir"] },
  { id: 57, type: "N", pronoun: "er", correctAnswer: "er", options: ["er", "ihn", "ihm"] },
  { id: 58, type: "N", pronoun: "sie (she)", correctAnswer: "sie", options: ["sie", "sie", "ihr"] },
  { id: 59, type: "N", pronoun: "es", correctAnswer: "es", options: ["es", "es", "ihm"] },
  { id: 60, type: "N", pronoun: "wir", correctAnswer: "wir", options: ["wir", "uns", "uns"] },
  { id: 61, type: "N", pronoun: "ihr", correctAnswer: "ihr", options: ["ihr", "euch", "euch"] },
  { id: 62, type: "N", pronoun: "sie (they)", correctAnswer: "sie", options: ["sie", "sie", "ihnen"] },
  { id: 63, type: "N", pronoun: "Sie (formal)", correctAnswer: "Sie", options: ["Sie", "Sie", "Ihnen"] },
  
  // Akkusativ
  { id: 64, type: "A", pronoun: "ich", correctAnswer: "mich", options: ["ich", "mich", "mir"] },
  { id: 65, type: "A", pronoun: "du", correctAnswer: "dich", options: ["du", "dich", "dir"] },
  { id: 66, type: "A", pronoun: "er", correctAnswer: "ihn", options: ["er", "ihn", "ihm"] },
  { id: 67, type: "A", pronoun: "sie (she)", correctAnswer: "sie", options: ["sie", "sie", "ihr"] },
  { id: 68, type: "A", pronoun: "es", correctAnswer: "es", options: ["es", "es", "ihm"] },
  { id: 69, type: "A", pronoun: "wir", correctAnswer: "uns", options: ["wir", "uns", "uns"] },
  { id: 70, type: "A", pronoun: "ihr", correctAnswer: "euch", options: ["ihr", "euch", "euch"] },
  { id: 71, type: "A", pronoun: "sie (they)", correctAnswer: "sie", options: ["sie", "sie", "ihnen"] },
  { id: 72, type: "A", pronoun: "Sie (formal)", correctAnswer: "Sie", options: ["Sie", "Sie", "Ihnen"] },
  
  // Dativ
  { id: 73, type: "D", pronoun: "ich", correctAnswer: "mir", options: ["ich", "mich", "mir"] },
  { id: 74, type: "D", pronoun: "du", correctAnswer: "dir", options: ["du", "dich", "dir"] },
  { id: 75, type: "D", pronoun: "er", correctAnswer: "ihm", options: ["er", "ihn", "ihm"] },
  { id: 76, type: "D", pronoun: "sie (she)", correctAnswer: "ihr", options: ["sie", "sie", "ihr"] },
  { id: 77, type: "D", pronoun: "es", correctAnswer: "ihm", options: ["es", "es", "ihm"] },
  { id: 78, type: "D", pronoun: "wir", correctAnswer: "uns", options: ["wir", "uns", "uns"] },
  { id: 79, type: "D", pronoun: "ihr", correctAnswer: "euch", options: ["ihr", "euch", "euch"] },
  { id: 80, type: "D", pronoun: "sie (they)", correctAnswer: "ihnen", options: ["sie", "sie", "ihnen"] },
  { id: 81, type: "D", pronoun: "Sie (formal)", correctAnswer: "Ihnen", options: ["Sie", "Sie", "Ihnen"] },
];

// Combine all questions
const allCaseQuestions = [
  ...definiteArticleQuestions,
  ...possessivePronounQuestions,
  ...indefiniteArticleQuestions,
  ...personalPronounQuestions
];

// A1 Level Vocabulary (Common everyday words)
const a1Vocabulary = [
  // People and Family (1-10)
  { id: 1, word: "Mann", article: "der", meaning: "man", level: "A1" },
  { id: 2, word: "Frau", article: "die", meaning: "woman", level: "A1" },
  { id: 3, word: "Kind", article: "das", meaning: "child", level: "A1" },
  { id: 4, word: "Junge", article: "der", meaning: "boy", level: "A1" },
  { id: 5, word: "Mädchen", article: "das", meaning: "girl", level: "A1" },
  { id: 6, word: "Familie", article: "die", meaning: "family", level: "A1" },
  { id: 7, word: "Vater", article: "der", meaning: "father", level: "A1" },
  { id: 8, word: "Mutter", article: "die", meaning: "mother", level: "A1" },
  { id: 9, word: "Bruder", article: "der", meaning: "brother", level: "A1" },
  { id: 10, word: "Schwester", article: "die", meaning: "sister", level: "A1" },

  // Food and Drink (11-20)
  { id: 11, word: "Wasser", article: "das", meaning: "water", level: "A1" },
  { id: 12, word: "Brot", article: "das", meaning: "bread", level: "A1" },
  { id: 13, word: "Kaffee", article: "der", meaning: "coffee", level: "A1" },
  { id: 14, word: "Tee", article: "der", meaning: "tea", level: "A1" },
  { id: 15, word: "Milch", article: "die", meaning: "milk", level: "A1" },
  { id: 16, word: "Apfel", article: "der", meaning: "apple", level: "A1" },
  { id: 17, word: "Banane", article: "die", meaning: "banana", level: "A1" },
  { id: 18, word: "Orange", article: "die", meaning: "orange", level: "A1" },
  { id: 19, word: "Kartoffel", article: "die", meaning: "potato", level: "A1" },
  { id: 20, word: "Fleisch", article: "das", meaning: "meat", level: "A1" },

  // Home (21-30)
  { id: 21, word: "Haus", article: "das", meaning: "house", level: "A1" },
  { id: 22, word: "Wohnung", article: "die", meaning: "apartment", level: "A1" },
  { id: 23, word: "Zimmer", article: "das", meaning: "room", level: "A1" },
  { id: 24, word: "Küche", article: "die", meaning: "kitchen", level: "A1" },
  { id: 25, word: "Badezimmer", article: "das", meaning: "bathroom", level: "A1" },
  { id: 26, word: "Schlafzimmer", article: "das", meaning: "bedroom", level: "A1" },
  { id: 27, word: "Tisch", article: "der", meaning: "table", level: "A1" },
  { id: 28, word: "Stuhl", article: "der", meaning: "chair", level: "A1" },
  { id: 29, word: "Bett", article: "das", meaning: "bed", level: "A1" },
  { id: 30, word: "Fenster", article: "das", meaning: "window", level: "A1" },

  // Time (31-40)
  { id: 31, word: "Tag", article: "der", meaning: "day", level: "A1" },
  { id: 32, word: "Woche", article: "die", meaning: "week", level: "A1" },
  { id: 33, word: "Monat", article: "der", meaning: "month", level: "A1" },
  { id: 34, word: "Jahr", article: "das", meaning: "year", level: "A1" },
  { id: 35, word: "Stunde", article: "die", meaning: "hour", level: "A1" },
  { id: 36, word: "Minute", article: "die", meaning: "minute", level: "A1" },
  { id: 37, word: "Morgen", article: "der", meaning: "morning", level: "A1" },
  { id: 38, word: "Mittag", article: "der", meaning: "noon", level: "A1" },
  { id: 39, word: "Abend", article: "der", meaning: "evening", level: "A1" },
  { id: 40, word: "Nacht", article: "die", meaning: "night", level: "A1" },

  // Places (41-50)
  { id: 41, word: "Stadt", article: "die", meaning: "city", level: "A1" },
  { id: 42, word: "Dorf", article: "das", meaning: "village", level: "A1" },
  { id: 43, word: "Land", article: "das", meaning: "country", level: "A1" },
  { id: 44, word: "Schule", article: "die", meaning: "school", level: "A1" },
  { id: 45, word: "Universität", article: "die", meaning: "university", level: "A1" },
  { id: 46, word: "Büro", article: "das", meaning: "office", level: "A1" },
  { id: 47, word: "Supermarkt", article: "der", meaning: "supermarket", level: "A1" },
  { id: 48, word: "Restaurant", article: "das", meaning: "restaurant", level: "A1" },
  { id: 49, word: "Park", article: "der", meaning: "park", level: "A1" },
  { id: 50, word: "Bahnhof", article: "der", meaning: "train station", level: "A1" },

  // Colors (51-60)
  { id: 51, word: "Rot", article: "das", meaning: "red", level: "A1" },
  { id: 52, word: "Blau", article: "das", meaning: "blue", level: "A1" },
  { id: 53, word: "Grün", article: "das", meaning: "green", level: "A1" },
  { id: 54, word: "Gelb", article: "das", meaning: "yellow", level: "A1" },
  { id: 55, word: "Schwarz", article: "das", meaning: "black", level: "A1" },
  { id: 56, word: "Weiß", article: "das", meaning: "white", level: "A1" },
  { id: 57, word: "Braun", article: "das", meaning: "brown", level: "A1" },
  { id: 58, word: "Orange", article: "das", meaning: "orange", level: "A1" },
  { id: 59, word: "Grau", article: "das", meaning: "gray", level: "A1" },
  { id: 60, word: "Lila", article: "das", meaning: "purple", level: "A1" },

 // Animals (61-75)
 { id: 61, word: "Hund", article: "der", meaning: "dog", level: "A1" },
 { id: 62, word: "Katze", article: "die", meaning: "cat", level: "A1" },
 { id: 63, word: "Vogel", article: "der", meaning: "bird", level: "A1" },
 { id: 64, word: "Fisch", article: "der", meaning: "fish", level: "A1" },
 { id: 65, word: "Pferd", article: "das", meaning: "horse", level: "A1" },
 { id: 66, word: "Maus", article: "die", meaning: "mouse", level: "A1" },
 { id: 67, word: "Kuh", article: "die", meaning: "cow", level: "A1" },
 { id: 68, word: "Schwein", article: "das", meaning: "pig", level: "A1" },
 { id: 69, word: "Hase", article: "der", meaning: "rabbit", level: "A1" },
 { id: 70, word: "Ente", article: "die", meaning: "duck", level: "A1" },
 { id: 71, word: "Schaf", article: "das", meaning: "sheep", level: "A1" },
 { id: 72, word: "Ziege", article: "die", meaning: "goat", level: "A1" },
 { id: 73, word: "Bär", article: "der", meaning: "bear", level: "A1" },
 { id: 74, word: "Elefant", article: "der", meaning: "elephant", level: "A1" },
 { id: 75, word: "Tiger", article: "der", meaning: "tiger", level: "A1" },

 // Transportation (76-90)
 { id: 76, word: "Auto", article: "das", meaning: "car", level: "A1" },
 { id: 77, word: "Bus", article: "der", meaning: "bus", level: "A1" },
 { id: 78, word: "Zug", article: "der", meaning: "train", level: "A1" },
 { id: 79, word: "Fahrrad", article: "das", meaning: "bicycle", level: "A1" },
 { id: 80, word: "Flugzeug", article: "das", meaning: "airplane", level: "A1" },
 { id: 81, word: "Schiff", article: "das", meaning: "ship", level: "A1" },
 { id: 82, word: "Straße", article: "die", meaning: "street", level: "A1" },
 { id: 83, word: "Brücke", article: "die", meaning: "bridge", level: "A1" },
 { id: 84, word: "Motorrad", article: "das", meaning: "motorcycle", level: "A1" },
 { id: 85, word: "Taxi", article: "das", meaning: "taxi", level: "A1" },
 { id: 86, word: "U-Bahn", article: "die", meaning: "subway", level: "A1" },
 { id: 87, word: "Tram", article: "die", meaning: "tram", level: "A1" },
 { id: 88, word: "Helikopter", article: "der", meaning: "helicopter", level: "A1" },
 { id: 89, word: "Roller", article: "der", meaning: "scooter", level: "A1" },
 { id: 90, word: "Boot", article: "das", meaning: "boat", level: "A1" },

 // Clothing (91-105)
 { id: 91, word: "Hose", article: "die", meaning: "pants", level: "A1" },
 { id: 92, word: "Hemd", article: "das", meaning: "shirt", level: "A1" },
 { id: 93, word: "Kleid", article: "das", meaning: "dress", level: "A1" },
 { id: 94, word: "Schuh", article: "der", meaning: "shoe", level: "A1" },
 { id: 95, word: "Mütze", article: "die", meaning: "cap", level: "A1" },
 { id: 96, word: "Jacke", article: "die", meaning: "jacket", level: "A1" },
 { id: 97, word: "Rock", article: "der", meaning: "skirt", level: "A1" },
 { id: 98, word: "Socke", article: "die", meaning: "sock", level: "A1" },
 { id: 99, word: "Handschuh", article: "der", meaning: "glove", level: "A1" },
 { id: 100, word: "Gürtel", article: "der", meaning: "belt", level: "A1" },
 { id: 101, word: "Schal", article: "der", meaning: "scarf", level: "A1" },
 { id: 102, word: "Pullover", article: "der", meaning: "sweater", level: "A1" },
 { id: 103, word: "Tasche", article: "die", meaning: "bag", level: "A1" },
 { id: 104, word: "Krawatte", article: "die", meaning: "tie", level: "A1" },
 { id: 105, word: "Uhr", article: "die", meaning: "watch/clock", level: "A1" },

 // Weather & Nature (106-120)
 { id: 106, word: "Sonne", article: "die", meaning: "sun", level: "A1" },
 { id: 107, word: "Regen", article: "der", meaning: "rain", level: "A1" },
 { id: 108, word: "Schnee", article: "der", meaning: "snow", level: "A1" },
 { id: 109, word: "Wind", article: "der", meaning: "wind", level: "A1" },
 { id: 110, word: "Wolke", article: "die", meaning: "cloud", level: "A1" },
 { id: 111, word: "Himmel", article: "der", meaning: "sky", level: "A1" },
 { id: 112, word: "Blitz", article: "der", meaning: "lightning", level: "A1" },
 { id: 113, word: "Donner", article: "der", meaning: "thunder", level: "A1" },
 { id: 114, word: "Fluss", article: "der", meaning: "river", level: "A1" },
 { id: 115, word: "Berg", article: "der", meaning: "mountain", level: "A1" },
 { id: 116, word: "See", article: "der", meaning: "lake", level: "A1" },
 { id: 117, word: "Meer", article: "das", meaning: "sea", level: "A1" },
 { id: 118, word: "Wald", article: "der", meaning: "forest", level: "A1" },
 { id: 119, word: "Blume", article: "die", meaning: "flower", level: "A1" },
 { id: 120, word: "Gras", article: "das", meaning: "grass", level: "A1" },

 // Body Parts (121-135)
 { id: 121, word: "Kopf", article: "der", meaning: "head", level: "A1" },
 { id: 122, word: "Auge", article: "das", meaning: "eye", level: "A1" },
 { id: 123, word: "Nase", article: "die", meaning: "nose", level: "A1" },
 { id: 124, word: "Mund", article: "der", meaning: "mouth", level: "A1" },
 { id: 125, word: "Ohr", article: "das", meaning: "ear", level: "A1" },
 { id: 126, word: "Hand", article: "die", meaning: "hand", level: "A1" },
 { id: 127, word: "Fuß", article: "der", meaning: "foot", level: "A1" },
 { id: 128, word: "Bein", article: "das", meaning: "leg", level: "A1" },
 { id: 129, word: "Arm", article: "der", meaning: "arm", level: "A1" },
 { id: 130, word: "Zahn", article: "der", meaning: "tooth", level: "A1" },
 { id: 131, word: "Rücken", article: "der", meaning: "back", level: "A1" },
 { id: 132, word: "Bauch", article: "der", meaning: "stomach", level: "A1" },
 { id: 133, word: "Herz", article: "das", meaning: "heart", level: "A1" },
 { id: 134, word: "Finger", article: "der", meaning: "finger", level: "A1" },
 { id: 135, word: "Haar", article: "das", meaning: "hair", level: "A1" },

 // Professions (136-150)
 { id: 136, word: "Lehrer", article: "der", meaning: "teacher", level: "A1" },
 { id: 137, word: "Arzt", article: "der", meaning: "doctor", level: "A1" },
 { id: 138, word: "Koch", article: "der", meaning: "cook", level: "A1" },
 { id: 139, word: "Ingenieur", article: "der", meaning: "engineer", level: "A1" },
 { id: 140, word: "Polizist", article: "der", meaning: "police officer", level: "A1" },
 { id: 141, word: "Feuerwehrmann", article: "der", meaning: "firefighter", level: "A1" },
 { id: 142, word: "Künstler", article: "der", meaning: "artist", level: "A1" },
 { id: 143, word: "Student", article: "der", meaning: "student", level: "A1" },
 { id: 144, word: "Kellner", article: "der", meaning: "waiter", level: "A1" },
 { id: 145, word: "Fahrer", article: "der", meaning: "driver", level: "A1" },
 { id: 146, word: "Verkäufer", article: "der", meaning: "salesperson", level: "A1" },
 { id: 147, word: "Musiker", article: "der", meaning: "musician", level: "A1" },
 { id: 148, word: "Bauer", article: "der", meaning: "farmer", level: "A1" },
 { id: 149, word: "Schreiner", article: "der", meaning: "carpenter", level: "A1" },
 { id: 150, word: "Friseur", article: "der", meaning: "hairdresser", level: "A1" },
];

// A2 Level Vocabulary (More advanced everyday words)
const a2Vocabulary = [
  // More advanced people and relationships
  { id: 1001, word: "Kollege", article: "der", meaning: "colleague", level: "A2" },
  { id: 1002, word: "Freundschaft", article: "die", meaning: "friendship", level: "A2" },
  { id: 1003, word: "Nachbar", article: "der", meaning: "neighbor", level: "A2" },
  { id: 1004, word: "Verwandte", article: "der", meaning: "relative", level: "A2" },
  { id: 1005, word: "Enkelkind", article: "das", meaning: "grandchild", level: "A2" },
  { id: 1006, word: "Gesellschaft", article: "die", meaning: "society", level: "A2" },
  { id: 1007, word: "Beziehung", article: "die", meaning: "relationship", level: "A2" },
  { id: 1008, word: "Mitglied", article: "das", meaning: "member", level: "A2" },
  { id: 1009, word: "Gast", article: "der", meaning: "guest", level: "A2" },
  { id: 1010, word: "Gruppe", article: "die", meaning: "group", level: "A2" },

  // More advanced food and cooking
  { id: 1011, word: "Gericht", article: "das", meaning: "dish", level: "A2" },
  { id: 1012, word: "Rezept", article: "das", meaning: "recipe", level: "A2" },
  { id: 1013, word: "Gewürz", article: "das", meaning: "spice", level: "A2" },
  { id: 1014, word: "Nachtisch", article: "der", meaning: "dessert", level: "A2" },
  { id: 1015, word: "Getränk", article: "das", meaning: "beverage", level: "A2" },
  { id: 1016, word: "Zutaten", article: "die", meaning: "ingredients", level: "A2" },
  { id: 1017, word: "Koch", article: "der", meaning: "cook", level: "A2" },
  { id: 1018, word: "Bäcker", article: "der", meaning: " baker", level: "A2" },
  { id: 1019, word: "Messer", article: "das" , meaning: "kinfe", level: "A2" },
  { id: 1020, word: "Schüssel", article: "die", meaning: "bowl", level: "A2" },

  // Home and furniture
  { id: 1021, word: "Möbel", article: "das", meaning: "furniture", level: "A2" },
  { id: 1022, word: "Regal", article: "das", meaning: "shelf", level: "A2" },
  { id: 1023, word: "Schrank", article: "der", meaning: "cabinet", level: "A2" },
  { id: 1024, word: "Sofa", article: "das", meaning: "sofa", level: "A2" },
  { id: 1025, word: "Sessel", article: "der", meaning: "armchair", level: "A2" },
  { id: 1026, word: "Teppich", article: "der", meaning: "carpet", level: "A2" },
  { id: 1027, word: "Vorhang", article: "der", meaning: "curtain", level: "A2" },
  { id: 1028, word: "Kissen", article: "das", meaning: "pillow", level: "A2" },
  { id: 1029, word: "Decke", article: "die", meaning: "blanket", level: "A2" },
  { id: 1030, word: "Lampe", article: "die", meaning: "lamp", level: "A2" },

  // Work and education
  { id: 1031, word: "Beruf", article: "der", meaning: "profession", level: "A2" },
  { id: 1032, word: "Arbeit", article: "die", meaning: "work", level: "A2" },
  { id: 1033, word: "Gehalt", article: "das", meaning: "salary", level: "A2" },
  { id: 1034, word: "Termin", article: "der", meaning: "appointment", level: "A2" },
  { id: 1035, word: "Besprechung", article: "die", meaning: "meeting", level: "A2" },
  { id: 1036, word: "Projekt", article: "das", meaning: "project", level: "A2" },
  { id: 1037, word: "Prüfung", article: "die", meaning: "exam", level: "A2" },
  { id: 1038, word: "Hausaufgabe", article: "die", meaning: "homework", level: "A2" },
  { id: 1039, word: "Unterricht", article: "der", meaning: "lesson", level: "A2" },
  { id: 1040, word: "Studium", article: "das", meaning: "studies", level: "A2" },

  // Health and body
  { id: 1041, word: "Gesundheit", article: "die", meaning: "health", level: "A2" },
  { id: 1042, word: "Krankheit", article: "die", meaning: "illness", level: "A2" },
  { id: 1043, word: "Arzt", article: "der", meaning: "doctor", level: "A2" },
  { id: 1044, word: "Apotheke", article: "die", meaning: "pharmacy", level: "A2" },
  { id: 1045, word: "Medikament", article: "das", meaning: "medication", level: "A2" },
  { id: 1046, word: "Schmerz", article: "der", meaning: "pain", level: "A2" },
  { id: 1047, word: "Kopf", article: "der", meaning: "head", level: "A2" },
  { id: 1048, word: "Herz", article: "das", meaning: "heart", level: "A2" },
  { id: 1049, word: "Hand", article: "die", meaning: "hand", level: "A2" },
  { id: 1050, word: "Bein", article: "das", meaning: "leg", level: "A2" },
];


// Combine all vocabulary
const allVocabulary = [
  ...a1Vocabulary,
  ...a2Vocabulary
];
