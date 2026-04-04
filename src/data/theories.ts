export interface HumorTheory {
  id: string;
  name: string;
  era: string;
  originators: string[];
  core_claim: string;
  explanation: string;
  strengths: string[];
  weaknesses: string[];
  modern_relevance: string;
  examples: string[];
}

export const HUMOR_THEORIES: HumorTheory[] = [
  {
    id: "superiority",
    name: "Superiority Theory",
    era: "Ancient–17th century",
    originators: ["Plato", "Aristotle", "Thomas Hobbes"],
    core_claim: "We laugh at others' misfortune, stupidity, or inferiority, feeling a sudden sense of our own superiority.",
    explanation: "Hobbes called it a 'sudden glory' — an abrupt awareness that we are better off than the subject of the joke. Aristotle noted comedy depicts people as worse than they are, giving the audience safe distance to feel elevated. This explains why mockery, roast comedy, and slapstick pain are funny — they let us feel safer or smarter by comparison.",
    strengths: [
      "Explains schadenfreude and mockery humor",
      "Accounts for why jokes about outgroups land within ingroups",
      "Consistent with evolutionary thinking (status hierarchies)"
    ],
    weaknesses: [
      "Doesn't explain wordplay, absurdist humor, or self-deprecating comedy",
      "Overly cynical — ignores kind or nonsensical humor",
      "Fails when we laugh at things involving no person at all"
    ],
    modern_relevance: "Roast comedy, political satire, cringe humor, and memes mocking public figures all draw on superiority dynamics. Also shapes research on bullying and in-group/out-group joke targeting.",
    examples: [
      "A man slipping on a banana peel (classic slapstick)",
      "Roast jokes at a comedy roast dinner",
      "Political cartoons exaggerating a leader's flaws",
      "Schadenfreude at a rival sports team losing"
    ]
  },
  {
    id: "incongruity",
    name: "Incongruity Theory",
    era: "18th–19th century",
    originators: ["Francis Hutcheson", "Immanuel Kant", "Arthur Schopenhauer", "James Beattie"],
    core_claim: "Humor arises from the perception of something that violates our expectations — a mismatch between what we anticipate and what actually occurs.",
    explanation: "Kant described laughter as the 'sudden transformation of a strained expectation into nothing.' Schopenhauer argued we laugh when we perceive an incongruity between an abstract concept and the concrete object it is supposed to represent. The brain builds a model of what should happen, that model is violated in an unexpected way, and the resulting mismatch triggers laughter. Most joke structures (setup → punchline) are incongruity engines: the setup builds a frame, the punchline violates it.",
    strengths: [
      "Explains the structure of most jokes (setup/punchline, misdirection)",
      "Works for puns, wordplay, absurdism, and non-social humor",
      "Aligns with cognitive neuroscience — surprise and prediction error"
    ],
    weaknesses: [
      "Not all incongruity is funny (a car crash is surprising but not funny)",
      "Needs a qualifier: the incongruity must be 'safe' or 'benign'",
      "Doesn't fully explain why resolution of incongruity matters"
    ],
    modern_relevance: "Foundation of most joke-writing craft. Every setup-punchline structure relies on incongruity. Studied heavily in computational humor, AI joke generation, and cognitive science of language.",
    examples: [
      "Anti-jokes (absurd literal answers to joke setups)",
      "Puns exploiting dual meanings",
      "Deadpan delivery of ridiculous premises",
      "Surreal/absurdist humor (Monty Python)"
    ]
  },
  {
    id: "relief",
    name: "Relief / Release Theory",
    era: "19th–20th century",
    originators: ["Herbert Spencer", "Sigmund Freud"],
    core_claim: "Laughter releases psychological tension or nervous energy that has built up. Humor provides a socially acceptable outlet for repressed urges and anxieties.",
    explanation: "Spencer argued laughter is an overflow of nervous energy when emotions are suddenly defused. Freud refined this: jokes are a socially permitted outlet for taboo wishes (aggression, sexuality) that the superego would otherwise suppress. The 'tendentious joke' allows us to bypass our own censorship by disguising forbidden content as harmless play. Relief theory also explains gallows humor — people in genuine distress laugh to release unbearable tension.",
    strengths: [
      "Explains why taboo, dark, and edgy humor exists and appeals",
      "Accounts for gallows humor in high-stress occupations (surgeons, soldiers)",
      "Explains the physical sensation of laughter as tension release",
      "Links humor to mental health — laughter as coping mechanism"
    ],
    weaknesses: [
      "Freudian underpinnings are scientifically unfalsifiable",
      "Doesn't explain humor that involves no built-up tension at all",
      "Tension release alone doesn't distinguish funny from merely startling"
    ],
    modern_relevance: "Dark humor research, trauma comedy, and 'too soon' debates. Explains why comedians from marginalized groups joke about their own oppression. Central to therapeutic uses of humor and laughter yoga research.",
    examples: [
      "Gallows humor among ER doctors and soldiers",
      "Dark comedy about death, illness, or tragedy",
      "Sexual or aggressive jokes circumventing social norms",
      "Nervous laughter in awkward or high-stakes situations"
    ]
  },
  {
    id: "benign_violation",
    name: "Benign Violation Theory",
    era: "21st century",
    originators: ["Peter McGraw", "Caleb Warren"],
    core_claim: "Something is funny when it simultaneously seems wrong/threatening AND okay/safe — a violation that is benign. All three conditions must be true at once: it must be a violation, it must be benign, and both must be perceived simultaneously.",
    explanation: "McGraw and Warren propose this as a unified theory reconciling earlier accounts. A 'violation' is anything that threatens one's sense of how the world should be — moral norms, social norms, logical expectations, or physical safety. But the violation must also be 'benign' — harmless, distant, or reframed as acceptable. Too much violation = horror/disgust. Too much benignness = no humor. The sweet spot between them produces laughter. This explains why the same joke can be funny or offensive depending on social distance, timing, and framing.",
    strengths: [
      "Unifies incongruity, superiority, and relief theories",
      "Predicts when jokes will fail (too dark = only violation; too safe = only benign)",
      "Testable and falsifiable — has substantial empirical support",
      "Explains cultural and contextual variation in what's funny"
    ],
    weaknesses: [
      "Definition of 'benign' is culturally relative and hard to operationalize",
      "May not fully account for non-social wordplay or purely intellectual humor",
      "Critics argue it's a restatement of incongruity theory with extra steps"
    ],
    modern_relevance: "Most influential contemporary humor theory in psychology. Guides comedy writing workshops, explains 'too soon' timing, and is used in marketing (playful brand violations) and legal cases involving offensive speech.",
    examples: [
      "A cat video where an animal looks undignified but is unhurt",
      "A roast joke that's mean but said with obvious affection",
      "'Too soon' timing — the same joke becomes funny after enough time passes",
      "Tickling (physical threat that is simultaneously safe)"
    ]
  },
  {
    id: "incongruity_resolution",
    name: "Incongruity-Resolution Theory",
    era: "20th century",
    originators: ["Jerry Suls", "Thomas Shultz"],
    core_claim: "A joke is funny when the listener detects an incongruity in the punchline and then resolves it by discovering a reinterpretation that makes the punchline make sense — but only retrospectively.",
    explanation: "This is a refinement of pure incongruity theory. The two-stage model: (1) perceive the incongruity — 'this doesn't fit,' (2) find the hidden rule that suddenly makes it cohere. The resolution gives the 'aha' feeling, but the incongruity remains — you can't fully eliminate the dual reading. This is why jokes are harder to explain than to get: explanation collapses the tension. Studies show jokes with an optimal level of incongruity (not too obvious, not too obscure) are rated funniest.",
    strengths: [
      "Explains why understanding a joke feels satisfying",
      "Predicts that purely random or fully predictable jokes won't be funny",
      "Well-supported by cognitive psychology experiments",
      "Explains 'getting' a joke as a cognitive achievement"
    ],
    weaknesses: [
      "Doesn't explain humor without a clear resolution (absurdism)",
      "Overemphasizes cognition — misses social and emotional dimensions",
      "Some humor works without any 'resolution' at all"
    ],
    modern_relevance: "Core framework in computational humor and AI joke evaluation. Used to design humor in educational materials (optimal incongruity for memory retention) and in studying children's developing sense of humor.",
    examples: [
      "Classic riddles where the answer reframes the question",
      "Puns (dual meaning provides resolution of the linguistic incongruity)",
      "Misdirection jokes where the punchline recontextualizes the setup",
      "Why did the scarecrow win an award? Because he was outstanding in his field."
    ]
  },
  {
    id: "play_frame",
    name: "Play Frame / Non-Serious Mode Theory",
    era: "20th century",
    originators: ["Gregory Bateson", "Erving Goffman", "Victor Raskin"],
    core_claim: "Humor operates in a special 'play frame' or non-serious mode. When the frame is established (wink, tone of voice, 'a man walks into a bar...'), normal rules of sincerity and truth are suspended, making otherwise unacceptable content safe.",
    explanation: "Bateson observed that animals at play must signal 'this is play' — the same bite that is a fight in earnest is harmless in the play frame. Goffman extended this to human interaction: humor depends on establishing a 'keying' — a meta-signal that reframes what follows as non-serious. Raskin's Script-based Semantic Theory of Humor formalizes this: a joke flips between two incompatible 'scripts' (understood scenarios), and the trigger for the shift is the punchline. The play frame also explains why comedians can say offensive things that would cause outrage if said seriously.",
    strengths: [
      "Explains why intent and framing matter (same words, different frames = joke vs. insult)",
      "Accounts for irony, sarcasm, parody, and self-aware meta-humor",
      "Strongly supported by sociolinguistics and conversation analysis"
    ],
    weaknesses: [
      "Doesn't explain what makes content funny within the frame",
      "Frame violations can be weaponized ('just joking') to excuse harm",
      "Hard to define where the frame begins and ends in practice"
    ],
    modern_relevance: "Explains 'just joking' defenses, why comedians get away with edgy material, and how comedic framing affects political communication. Foundation of computational humor via Raskin's SSTH and its successors.",
    examples: [
      "'A priest, a rabbi, and a minister walk into a bar...' (frame signal)",
      "Satire publications (The Onion) — everything in the frame is non-serious",
      "An actor playing a villain saying terrible things (dramatic frame)",
      "Ironic social media posts that are misread as sincere"
    ]
  },
  {
    id: "gelotology",
    name: "Gelotology & Neuroscience of Laughter",
    era: "Late 20th century–present",
    originators: ["William Fry", "Robert Provine", "Jaak Panksepp"],
    core_claim: "Laughter is a distinct physiological and neurological phenomenon with evolutionary origins predating language. Its neural substrates, health effects, and social functions can be studied empirically.",
    explanation: "Gelotology is the scientific study of laughter and its effects on the body. Provine's field studies found laughter is 30x more common in social settings than alone — it's primarily a social signal, not a response to humor. Panksepp identified a 'PLAY' circuit in mammalian brains that produces chirping/laughter in rats when tickled. Laughter activates the mesolimbic dopamine system (reward), reduces cortisol (stress), and releases endorphins. Duchenne laughter (genuine, reaching the eyes) differs neurologically from non-Duchenne (polite/fake) laughter and has different health effects.",
    strengths: [
      "Empirically grounded — testable claims about brains, hormones, and behavior",
      "Explains laughter as social bonding mechanism (not just humor response)",
      "Links to real health outcomes (pain tolerance, immune function, cardiovascular health)"
    ],
    weaknesses: [
      "Explains the mechanism of laughter but not what makes things funny",
      "Much research has small samples or replication issues",
      "Tendency to oversell health benefits of laughter ('laughter is the best medicine')"
    ],
    modern_relevance: "Laughter therapy, laughter yoga, comedy interventions in hospitals. Also relevant to AI emotion detection (distinguishing real vs. fake laughter) and the science of stand-up comedy performance.",
    examples: [
      "Rats chirp at 50kHz when tickled — proto-laughter",
      "Laughter clubs that use voluntary laughter for health benefits",
      "Contagious laughter in social groups",
      "Duchenne vs. non-Duchenne (social) smiling in photos predicting life outcomes"
    ]
  }
];
