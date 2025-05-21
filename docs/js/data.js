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
  // People and Family
  { id: 1, word: "MANN", article: "der", meaning: "man", level: "A1" },
  { id: 2, word: "FRAU", article: "die", meaning: "woman", level: "A1" },
  { id: 3, word: "KIND", article: "das", meaning: "child", level: "A1" },
  { id: 4, word: "JUNGE", article: "der", meaning: "boy", level: "A1" },
  { id: 5, word: "MÄDCHEN", article: "das", meaning: "girl", level: "A1" },
  { id: 6, word: "FAMILIE", article: "die", meaning: "family", level: "A1" },
  { id: 7, word: "VATER", article: "der", meaning: "father", level: "A1" },
  { id: 8, word: "MUTTER", article: "die", meaning: "mother", level: "A1" },
  { id: 9, word: "BRUDER", article: "der", meaning: "brother", level: "A1" },
  { id: 10, word: "SCHWESTER", article: "die", meaning: "sister", level: "A1" },
  
  // Food and Drink
  { id: 11, word: "WASSER", article: "das", meaning: "water", level: "A1" },
  { id: 12, word: "BROT", article: "das", meaning: "bread", level: "A1" },
  { id: 13, word: "KAFFEE", article: "der", meaning: "coffee", level: "A1" },
  { id: 14, word: "TEE", article: "der", meaning: "tea", level: "A1" },
  { id: 15, word: "MILCH", article: "die", meaning: "milk", level: "A1" },
  { id: 16, word: "APFEL", article: "der", meaning: "apple", level: "A1" },
  { id: 17, word: "BANANE", article: "die", meaning: "banana", level: "A1" },
  { id: 18, word: "ORANGE", article: "die", meaning: "orange", level: "A1" },
  { id: 19, word: "KARTOFFEL", article: "die", meaning: "potato", level: "A1" },
  { id: 20, word: "FLEISCH", article: "das", meaning: "meat", level: "A1" },
  
  // Home
  { id: 21, word: "HAUS", article: "das", meaning: "house", level: "A1" },
  { id: 22, word: "WOHNUNG", article: "die", meaning: "apartment", level: "A1" },
  { id: 23, word: "ZIMMER", article: "das", meaning: "room", level: "A1" },
  { id: 24, word: "KÜCHE", article: "die", meaning: "kitchen", level: "A1" },
  { id: 25, word: "BADEZIMMER", article: "das", meaning: "bathroom", level: "A1" },
  { id: 26, word: "SCHLAFZIMMER", article: "das", meaning: "bedroom", level: "A1" },
  { id: 27, word: "TISCH", article: "der", meaning: "table", level: "A1" },
  { id: 28, word: "STUHL", article: "der", meaning: "chair", level: "A1" },
  { id: 29, word: "BETT", article: "das", meaning: "bed", level: "A1" },
  { id: 30, word: "FENSTER", article: "das", meaning: "window", level: "A1" },
  
  // Time
  { id: 31, word: "TAG", article: "der", meaning: "day", level: "A1" },
  { id: 32, word: "WOCHE", article: "die", meaning: "week", level: "A1" },
  { id: 33, word: "MONAT", article: "der", meaning: "month", level: "A1" },
  { id: 34, word: "JAHR", article: "das", meaning: "year", level: "A1" },
  { id: 35, word: "STUNDE", article: "die", meaning: "hour", level: "A1" },
  { id: 36, word: "MINUTE", article: "die", meaning: "minute", level: "A1" },
  { id: 37, word: "MORGEN", article: "der", meaning: "morning", level: "A1" },
  { id: 38, word: "MITTAG", article: "der", meaning: "noon", level: "A1" },
  { id: 39, word: "ABEND", article: "der", meaning: "evening", level: "A1" },
  { id: 40, word: "NACHT", article: "die", meaning: "night", level: "A1" },
  
  // Places
  { id: 41, word: "STADT", article: "die", meaning: "city", level: "A1" },
  { id: 42, word: "DORF", article: "das", meaning: "village", level: "A1" },
  { id: 43, word: "LAND", article: "das", meaning: "country", level: "A1" },
  { id: 44, word: "SCHULE", article: "die", meaning: "school", level: "A1" },
  { id: 45, word: "UNIVERSITÄT", article: "die", meaning: "university", level: "A1" },
  { id: 46, word: "BÜRO", article: "das", meaning: "office", level: "A1" },
  { id: 47, word: "SUPERMARKT", article: "der", meaning: "supermarket", level: "A1" },
  { id: 48, word: "RESTAURANT", article: "das", meaning: "restaurant", level: "A1" },
  { id: 49, word: "PARK", article: "der", meaning: "park", level: "A1" },
  { id: 50, word: "BAHNHOF", article: "der", meaning: "train station", level: "A1" },
];

// A2 Level Vocabulary (More advanced everyday words)
const a2Vocabulary = [
  // More advanced people and relationships
  { id: 1001, word: "KOLLEGE", article: "der", meaning: "colleague", level: "A2" },
  { id: 1002, word: "FREUNDSCHAFT", article: "die", meaning: "friendship", level: "A2" },
  { id: 1003, word: "NACHBAR", article: "der", meaning: "neighbor", level: "A2" },
  { id: 1004, word: "VERWANDTE", article: "der", meaning: "relative", level: "A2" },
  { id: 1005, word: "ENKELKIND", article: "das", meaning: "grandchild", level: "A2" },
  { id: 1006, word: "GESELLSCHAFT", article: "die", meaning: "society", level: "A2" },
  { id: 1007, word: "BEZIEHUNG", article: "die", meaning: "relationship", level: "A2" },
  { id: 1008, word: "MITGLIED", article: "das", meaning: "member", level: "A2" },
  { id: 1009, word: "GAST", article: "der", meaning: "guest", level: "A2" },
  { id: 1010, word: "GRUPPE", article: "die", meaning: "group", level: "A2" },
  
  // More advanced food and cooking
  { id: 1011, word: "GERICHT", article: "das", meaning: "dish", level: "A2" },
  { id: 1012, word: "REZEPT", article: "das", meaning: "recipe", level: "A2" },
  { id: 1013, word: "GEWÜRZ", article: "das", meaning: "spice", level: "A2" },
  { id: 1014, word: "NACHTISCH", article: "der", meaning: "dessert", level: "A2" },
  { id: 1015, word: "GETRÄNK", article: "das", meaning: "beverage", level: "A2" },
  { id: 1016, word: "ZUTATEN", article: "die", meaning: "ingredients", level: "A2" },
  { id: 1017, word: "KOCHEN", article: null, meaning: "to cook", level: "A2" },
  { id: 1018, word: "BACKEN", article: null, meaning: "to bake", level: "A2" },
  { id: 1019, word: "SCHNEIDEN", article: null, meaning: "to cut", level: "A2" },
  { id: 1020, word: "MISCHEN", article: null, meaning: "to mix", level: "A2" },
  
  // Home and furniture
  { id: 1021, word: "MÖBEL", article: "das", meaning: "furniture", level: "A2" },
  { id: 1022, word: "REGAL", article: "das", meaning: "shelf", level: "A2" },
  { id: 1023, word: "SCHRANK", article: "der", meaning: "cabinet", level: "A2" },
  { id: 1024, word: "SOFA", article: "das", meaning: "sofa", level: "A2" },
  { id: 1025, word: "SESSEL", article: "der", meaning: "armchair", level: "A2" },
  { id: 1026, word: "TEPPICH", article: "der", meaning: "carpet", level: "A2" },
  { id: 1027, word: "VORHANG", article: "der", meaning: "curtain", level: "A2" },
  { id: 1028, word: "KISSEN", article: "das", meaning: "pillow", level: "A2" },
  { id: 1029, word: "DECKE", article: "die", meaning: "blanket", level: "A2" },
  { id: 1030, word: "LAMPE", article: "die", meaning: "lamp", level: "A2" },
  
  // Work and education
  { id: 1031, word: "BERUF", article: "der", meaning: "profession", level: "A2" },
  { id: 1032, word: "ARBEIT", article: "die", meaning: "work", level: "A2" },
  { id: 1033, word: "GEHALT", article: "das", meaning: "salary", level: "A2" },
  { id: 1034, word: "TERMIN", article: "der", meaning: "appointment", level: "A2" },
  { id: 1035, word: "BESPRECHUNG", article: "die", meaning: "meeting", level: "A2" },
  { id: 1036, word: "PROJEKT", article: "das", meaning: "project", level: "A2" },
  { id: 1037, word: "PRÜFUNG", article: "die", meaning: "exam", level: "A2" },
  { id: 1038, word: "HAUSAUFGABE", article: "die", meaning: "homework", level: "A2" },
  { id: 1039, word: "UNTERRICHT", article: "der", meaning: "lesson", level: "A2" },
  { id: 1040, word: "STUDIUM", article: "das", meaning: "studies", level: "A2" },
  
  // Health and body
  { id: 1041, word: "GESUNDHEIT", article: "die", meaning: "health", level: "A2" },
  { id: 1042, word: "KRANKHEIT", article: "die", meaning: "illness", level: "A2" },
  { id: 1043, word: "ARZT", article: "der", meaning: "doctor", level: "A2" },
  { id: 1044, word: "APOTHEKE", article: "die", meaning: "pharmacy", level: "A2" },
  { id: 1045, word: "MEDIKAMENT", article: "das", meaning: "medication", level: "A2" },
  { id: 1046, word: "SCHMERZ", article: "der", meaning: "pain", level: "A2" },
  { id: 1047, word: "KOPF", article: "der", meaning: "head", level: "A2" },
  { id: 1048, word: "HERZ", article: "das", meaning: "heart", level: "A2" },
  { id: 1049, word: "HAND", article: "die", meaning: "hand", level: "A2" },
  { id: 1050, word: "BEIN", article: "das", meaning: "leg", level: "A2" },
];

// Combine all vocabulary
const allVocabulary = [
  ...a1Vocabulary,
  ...a2Vocabulary
];
