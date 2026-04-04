export interface ComedyTechnique {
  id: string;
  name: string;
  category: string;
  description: string;
  how_it_works_psychologically: string;
  examples: string[];
  common_mistakes: string[];
  best_used_for: string[];
}

export const COMEDY_TECHNIQUES: ComedyTechnique[] = [
  {
    id: "rule_of_three",
    name: "Rule of Three",
    category: "Structure",
    description: "Set up a pattern with two items, then violate it with a surprising third. Or: two normal items establish expectation, the third breaks it. Alternatively, pile three increasingly absurd things to escalate.",
    how_it_works_psychologically: "The brain recognizes patterns fast — two items are enough to establish one. The third item is anticipated, and violating that anticipation is the source of the laugh (incongruity theory). Three is also a natural cognitive chunk — it's long enough to build expectation but short enough to maintain tension.",
    examples: [
      "'I like long walks on the beach, candlelit dinners, and destroying my enemies.'",
      "Listing two mundane inconveniences then a catastrophe",
      "The third item in a Monty Python list is always the absurd escalation"
    ],
    common_mistakes: [
      "The third item is too predictable — the rule of three fails if the pattern break is obvious",
      "Making the second item too similar to the first (no momentum)",
      "Using it when the material is too dark for the format"
    ],
    best_used_for: ["Stand-up punchlines", "Joke list construction", "Speech writing", "Social media comedy"]
  },
  {
    id: "callbacks",
    name: "Callback",
    category: "Structure",
    description: "Reference a joke or premise established earlier in the set. When done at an unexpected moment, the callback reactivates the original laugh while adding a new layer of meaning.",
    how_it_works_psychologically: "Callbacks work on multiple levels: (1) the recognition surprise — 'oh, that thing from earlier!' — triggers reward circuitry; (2) the new context reframes the original joke, producing a fresh incongruity; (3) the callback creates a sense of coherence in the set, rewarding the audience for paying attention. The longer the gap before the callback, the bigger the payoff.",
    examples: [
      "Returning to the opening premise at the close of a set (bookend callback)",
      "Stewart Lee's 20-minute delayed callbacks",
      "A seemingly throwaway detail in act one becoming the punchline of act three"
    ],
    common_mistakes: [
      "Calling back a joke that wasn't funny the first time",
      "Too short a gap — needs time for the original to feel distant",
      "Over-explaining the callback, removing the reward of recognition"
    ],
    best_used_for: ["Stand-up specials", "Long-form narrative comedy", "Sitcom writing", "Character-based improv"]
  },
  {
    id: "misdirection",
    name: "Misdirection",
    category: "Structure",
    description: "The setup deliberately points the audience toward one expected conclusion; the punchline reveals an entirely different — but retrospectively logical — interpretation. Classic setup/punchline structure.",
    how_it_works_psychologically: "Misdirection exploits the brain's predictive machinery. The setup builds a strong 'script' (expected scenario). The punchline triggers a reappraisal — the same words or situation suddenly snap into a different, valid but unexpected meaning. This two-stage process (incongruity → resolution) produces the 'click' of laughter. The key is that the misdirection must be genuine — the audience should not see it coming, but in retrospect the setup should have supported both interpretations.",
    examples: [
      "Norm Macdonald's anti-jokes — setups that promise a standard joke form, punchlines that deny it",
      "Any pun — the setup establishes one meaning, the punchline activates a second",
      "'I just flew in from Chicago — and boy, are my arms tired'"
    ],
    common_mistakes: [
      "The punchline interpretation doesn't actually follow logically from the setup",
      "Telegraph — giving away the direction of the misdirection",
      "The two interpretations are so unequal that the 'surprising' one feels forced"
    ],
    best_used_for: ["Traditional joke writing", "Puns and wordplay", "Tag lines"]
  },
  {
    id: "escalation",
    name: "Escalation / Topper",
    category: "Structure",
    description: "Build a joke to a punchline, then immediately top it with an even more extreme version, then top that again. Each new topper escalates the absurdity or reveals a new dimension. Also called 'going up the ladder' or 'pile-on.'",
    how_it_works_psychologically: "After the initial laugh, the audience thinks the joke is over. A topper violates that expectation — the joke continues. Each new layer reactivates the original incongruity at higher intensity. The escalation creates cumulative momentum: the laugh grows with each topper because the gap between reality and the joke's premise keeps widening. Rhythm is critical — toppers must come before the laugh dies.",
    examples: [
      "The 'Aristocrats' joke — pure escalation with no ceiling",
      "Monty Python's Black Knight scene — 'It's just a flesh wound' toppers",
      "The extended family dinner scene escalating from awkward to surreal"
    ],
    common_mistakes: [
      "Escalating too slowly — losing the momentum between laughs",
      "The escalation becomes predictable (audiences anticipate the next level)",
      "No ceiling — escalation without an eventual landing becomes tiresome"
    ],
    best_used_for: ["Stand-up", "Sketch comedy", "Sitcom", "Improv 'yes-and' structure"]
  },
  {
    id: "deadpan",
    name: "Deadpan / Straight Man",
    category: "Delivery",
    description: "Delivering absurd, outrageous, or ridiculous material with complete seriousness — no winking at the audience. The comedian's affect is deliberately incongruent with the content.",
    how_it_works_psychologically: "Deadpan creates incongruity at the level of delivery rather than content. The straight face signals 'I am not performing comedy right now' while the content clearly is comedy. This forces the audience to resolve the incongruity themselves, which creates a stronger laugh than being told something is funny. It also plays with the authority of seriousness — the more gravely absurd things are stated, the more absurd they become.",
    examples: [
      "Mitch Hedberg's flat delivery of surreal one-liners",
      "Steven Wright's utterly expressionless philosophical non-sequiturs",
      "The Office's documentary format — cameras treating absurdity as normal",
      "Norm Macdonald's 'The moth joke' on Conan"
    ],
    common_mistakes: [
      "Breaking — cracking a smile destroys the deadpan entirely",
      "Tone mismatch — material that isn't strong enough for deadpan just reads as flat",
      "Mistaking deadpan for mumbling or unclear delivery"
    ],
    best_used_for: ["One-liners", "Absurdist character comedy", "Mockumentary format", "Dry social satire"]
  },
  {
    id: "act_out",
    name: "Act-Out",
    category: "Delivery",
    description: "Instead of describing a scene or person, the comedian physically becomes them — embodying the character, voices, and physicality within the story being told. The transition from narrator to character and back is a key comedic beat.",
    how_it_works_psychologically: "Act-outs work through the sudden vividness of embodiment — the abstract becomes concrete and specific. They also exploit social recognition: watching someone perfectly capture a recognizable type (the oblivious boss, the panicking parent) produces the 'that's exactly it' pleasure of accurate observation. The transition itself is funny because it's a mini-surprise — narrator becomes character without warning.",
    examples: [
      "Richard Pryor becoming different characters in a single story",
      "Dave Chappelle inhabiting multiple people in one narrative",
      "Eddie Murphy's James Brown impressions mid-stand-up"
    ],
    common_mistakes: [
      "The character voice is unclear — audiences can't track who is speaking",
      "Staying in character too long — losing the narrative thread",
      "Act-out that's accurate but not funny — specificity without a payoff"
    ],
    best_used_for: ["Character-based stand-up", "Storytelling comedy", "Improv", "Sketch comedy"]
  },
  {
    id: "persona",
    name: "Comedian Persona",
    category: "Identity",
    description: "A crafted, stable version of the comedian's public self that is distinct from (though related to) their real personality. The persona has consistent values, flaws, and relationships that the audience understands and trusts.",
    how_it_works_psychologically: "A strong persona gives the audience a lens through which to interpret everything — the same statement from two different personas has different meanings. Personas also create productive tension: the gap between how the comedian presents (pompous, naive, self-destructive) and what the audience suspects about the 'real' person is itself a source of comedy. Recognizing a persona is a form of play — both parties know it's a construction.",
    examples: [
      "Chaplin's Tramp — innocent, dignified in poverty",
      "Larry David (Curb) — exact amplification of stated real self",
      "Ali G — satirist hiding inside a fictional character",
      "Stewart Lee's 'pompous' version of himself"
    ],
    common_mistakes: [
      "Persona that is indistinguishable from the actual person (no productive gap)",
      "Persona that becomes a trap — comedian can't move beyond it",
      "Relying on the persona to carry material that isn't strong enough"
    ],
    best_used_for: ["Stand-up career building", "Character sketch comedy", "Satire", "Long-form sitcom writing"]
  },
  {
    id: "taboo_violation",
    name: "Taboo Violation",
    category: "Content",
    description: "Addressing subjects that are normally off-limits — death, sex, bodily functions, race, violence — in a way that releases the tension built up by the taboo itself. The comedy comes from the permission to go where social convention forbids.",
    how_it_works_psychologically: "Freud's relief theory applies most directly here: taboo subjects generate psychic pressure (the effort of not thinking/saying something). Comedy releases that pressure. But the violation must be framed correctly — as play, satire, or self-deprecation — or it becomes mere offense. The key variable is who is making the joke (in-group/out-group), who it targets (up vs. down), and how it's framed (benign violation vs. pure violation).",
    examples: [
      "Gallows humor among healthcare workers about death",
      "Race comedians addressing racial dynamics that can't be discussed 'seriously'",
      "Sarah Silverman's deliberately offensive persona (the joke is her obliviousness)",
      "Norm Macdonald's OJ Simpson jokes on Weekend Update"
    ],
    common_mistakes: [
      "Violation without the benign frame — pure shock, not comedy",
      "Punching down — targeting people with less power than the comedian",
      "Mistaking shock for wit — the taboo itself isn't funny, the handling of it is"
    ],
    best_used_for: ["Dark comedy", "Political satire", "In-group comedy", "Therapeutic humor"]
  },
  {
    id: "timing",
    name: "Timing and Rhythm",
    category: "Delivery",
    description: "The precise management of pace, pause, and rhythm within a joke or set. Great timing means delivering the punchline at exactly the moment when the audience's expectation is maximally primed. The pause before the punchline is often as important as the punchline itself.",
    how_it_works_psychologically: "Timing works with the brain's predictive processing. A pause after the setup holds the audience in a state of heightened prediction — every millisecond of sustained expectation increases the energy that will be released on the punchline. Going too fast gives the audience no time to build expectation; going too slow lets them figure out where you're headed. Comedians describe finding the 'pocket' — the precise beat where the laugh will land.",
    examples: [
      "Jack Benny's famous 39-second pause after 'Your money or your life'",
      "Norm Macdonald's deliberately anti-rhythmic pauses that create comedy from discomfort",
      "The slow burn — letting a situation develop past comfort before the release"
    ],
    common_mistakes: [
      "Rushing the punchline — not giving the setup time to land",
      "Killing your own joke by laughing before the punchline",
      "Ignoring the rhythm of the audience's laughter — talking through a laugh"
    ],
    best_used_for: ["All comedy performance", "Critical in live stand-up", "Interview comedy and late-night appearances"]
  },
  {
    id: "self_deprecation",
    name: "Self-Deprecation",
    category: "Content",
    description: "Making oneself the target of the joke — one's appearance, failures, social awkwardness, or circumstances. A way of pre-empting attack by attacking oneself first, and building audience trust through apparent vulnerability.",
    how_it_works_psychologically: "Self-deprecation works on multiple levels: (1) it disarms potential hostility — you can't insult someone who's already insulted themselves; (2) it creates likeability and identification — the comedian becomes 'one of us' rather than above us; (3) it grants permission to explore uncomfortable truths about shared human experience. Research shows self-deprecating humor increases perceived authenticity and likability. But fake self-deprecation ('I'm so humble') inverts into boasting and destroys the effect.",
    examples: [
      "Joan Rivers on her own appearance and romantic failures",
      "Gary Gulman and Maria Bamford on mental illness",
      "Jewish comedy tradition of 'oy, my people' self-examination",
      "British cultural tendency toward comic self-effacement"
    ],
    common_mistakes: [
      "Self-deprecation that invites real pity rather than comic deflection",
      "Using self-deprecation as a backdoor brag",
      "Deprecating characteristics the audience disagrees are flaws"
    ],
    best_used_for: ["Opening material to establish rapport", "Dark personal subject matter", "Punching up at institutions while disarming status concerns"]
  },
  {
    id: "absurdism",
    name: "Absurdism",
    category: "Content",
    description: "Comedy built on premises that are entirely illogical, surreal, or divorced from recognizable reality — but treated with complete internal consistency. The humor comes not from resolution of the absurdity but from commitment to it.",
    how_it_works_psychologically: "Absurdism bypasses the incongruity-resolution pathway by offering incongruity without resolution. The laugh comes from the surrender to irresolvable strangeness. This appeals particularly to audiences who have deeply internalized cognitive frameworks — the pleasure is in the framework's complete failure to apply. Psychologically, absurdism may also function as controlled chaos: experiencing reality's unreliability in a safe context.",
    examples: [
      "Monty Python — the Spanish Inquisition sketch (nobody expects it)",
      "Mitch Hedberg — 'I used to do drugs. I still do, but I used to, too.'",
      "The Mighty Boosh — narrative logic replaced by dream logic",
      "Kafka's The Trial — literary absurdism applied to bureaucratic horror"
    ],
    common_mistakes: [
      "Random ≠ absurd: surrealism requires internal logic, just not external logic",
      "Absurdism without commitment — winking at the audience breaks the dream",
      "Mistaking absurdism for shock — the point is internal coherence, not transgression"
    ],
    best_used_for: ["Sketch comedy", "Animated comedy", "Conceptual stand-up", "Character comedy with distinctive worldview"]
  }
];
