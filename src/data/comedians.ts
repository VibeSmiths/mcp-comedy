export interface Comedian {
  id: string;
  name: string;
  born: string;
  died?: string;
  nationality: string;
  era: string;
  style: string[];
  signature_themes: string[];
  influence: string;
  key_works: string[];
  psychological_profile: string;
  techniques: string[];
}

export const COMEDIANS: Comedian[] = [
  {
    id: "chaplin",
    name: "Charlie Chaplin",
    born: "1889",
    died: "1977",
    nationality: "British",
    era: "Silent film / Early sound (1910s–1960s)",
    style: ["Physical comedy", "Pathos", "Social satire", "Pantomime"],
    signature_themes: ["Poverty and class", "The underdog vs. authority", "Immigration and identity", "Romance against the odds"],
    influence: "Arguably the most influential comedian in history. Defined physical comedy for film and showed that comedy and tragedy are inseparable. Influenced Jim Carrey, Mr. Bean, Sacha Baron Cohen, and virtually every physical comedian.",
    key_works: ["The Kid (1921)", "The Gold Rush (1925)", "City Lights (1931)", "Modern Times (1936)", "The Great Dictator (1940)"],
    psychological_profile: "Chaplin's Tramp persona was drawn from his impoverished Cockney childhood. The character combines innocence with cunning, vulnerability with resilience — psychologically it enacts wish-fulfillment for working-class audiences while maintaining dignity in the face of systemic cruelty. His comedy always contains pathos (Chaplin's word: 'laughter through tears').",
    techniques: ["Pratfalls timed to near-miss precision", "Pantomime of inanimate objects as living things", "Status reversal — dignity maintained under humiliation", "Contrast between the Tramp's delusion and reality"]
  },
  {
    id: "pryor",
    name: "Richard Pryor",
    born: "1940",
    died: "2005",
    nationality: "American",
    era: "1960s–1990s",
    style: ["Confessional", "Character comedy", "Social commentary", "Tragicomedy"],
    signature_themes: ["Race and racism in America", "Addiction and self-destruction", "Poverty and Peoria childhood", "Police brutality", "Relationships and masculinity"],
    influence: "The most influential stand-up comedian of the 20th century. Every personal, confessional stand-up — Dave Chappelle, Chris Rock, Louis CK, Eddie Murphy — descends from Pryor. He proved stand-up could be literature.",
    key_works: ["That Nigger's Crazy (1974)", "Is It Something I Said? (1975)", "Bicentennial Nigger (1976)", "Live in Concert (1979)", "Live on the Sunset Strip (1982)"],
    psychological_profile: "Pryor's comedy was inseparable from his trauma: raised in a brothel run by his grandmother, absent father, early racism, drug addiction, self-immolation. He processed real events on stage in near-real-time. His genius was using specificity — exact details of experience — to reach universal truths about race and humanity. Bill Cosby called him 'the eye of the hurricane.'",
    techniques: ["Character embodiment — becoming multiple voices in a story", "Specificity of detail (named streets, exact words)", "Building from self-deprecation outward to social critique", "Strategic use of profanity as punctuation and emphasis", "Confessing vulnerability that audiences expected comedians to hide"]
  },
  {
    id: "carlin",
    name: "George Carlin",
    born: "1937",
    died: "2008",
    nationality: "American",
    era: "1960s–2000s",
    style: ["Social commentary", "Wordplay", "Observational comedy", "Dark nihilism"],
    signature_themes: ["Language and euphemism", "Political hypocrisy", "American consumer culture", "Religion", "Death"],
    influence: "The intellectual stand-up's model. Stewart Lee, Bill Hicks, Doug Stanhope, and most 'thinking person's comedian' types trace directly to Carlin. His seven dirty words case (FCC v. Pacifica) is landmark First Amendment law.",
    key_works: ["Class Clown (1972)", "Occupation: Foole (1973)", "Seven Words You Can Never Say on Television (1972)", "Back in Town (1996)", "Life is Worth Losing (2005)"],
    psychological_profile: "Carlin underwent a major persona shift in the early 1970s — from mainstream, suit-wearing, TV-friendly comedian to the counterculture truth-teller he became. He described this as becoming 'an outsider' after years of self-betrayal for commercial success. His later comedy grew genuinely misanthropic and nihilistic — he said he found the human species disappointing and watched its decline with sardonic detachment.",
    techniques: ["Deconstruction of language to expose hidden assumptions", "Building logical arguments to absurd but inevitable conclusions", "List construction — accelerating absurdity through accumulation", "Repetition and rhythm as comedy tools", "Rhetorical questions that indict the audience"]
  },
  {
    id: "rivers",
    name: "Joan Rivers",
    born: "1933",
    died: "2014",
    nationality: "American",
    era: "1960s–2010s",
    style: ["Self-deprecating", "Insult comedy", "Fashion critique", "Confessional"],
    signature_themes: ["Aging and beauty standards", "Money and status", "Marriage and relationships", "Hollywood hypocrisy"],
    influence: "The template for women in stand-up. Her willingness to be harsh, ugly, and self-critical demolished the expectation that women must be likeable in comedy. Influenced every female stand-up who followed, from Roseanne to Amy Schumer.",
    key_works: ["Can We Talk? (1983)", "Joan Rivers: A Piece of Work (documentary, 2010)", "Fashion Police (TV, 2010–2015)", "Tonight Show guest host appearances"],
    psychological_profile: "Rivers weaponized self-deprecation as power. Her jokes about her own appearance were pre-emptive strikes — she humiliated herself before anyone else could. Psychologically this is consistent with research on humor as coping: Rivers' entire career emerged from personal pain (multiple failures, husband's suicide, years of blacklisting) converted into comedy. She worked compulsively — up to 300 dates per year late in life — suggesting comedy as both vocation and defense.",
    techniques: ["Self-deprecation as armor", "Escalation — pushing jokes past the point of comfort", "Rapid topic pivots to prevent audience defensiveness", "Callback to established punchlines in new contexts", "Audience address and direct eye contact as intimacy"]
  },
  {
    id: "hicks",
    name: "Bill Hicks",
    born: "1961",
    died: "1994",
    nationality: "American",
    era: "1980s–1990s",
    style: ["Philosophical commentary", "Rant comedy", "Dark satire", "Mystical humor"],
    signature_themes: ["Media and consumerism", "American imperialism", "Drugs as consciousness expansion", "Marketing and advertising", "Death and meaninglessness"],
    influence: "Massively influential in UK comedy (Stewart Lee calls him a key influence). The template for the comedian-as-truth-prophet persona. Dave Chappelle, Doug Stanhope, and most 'edgy philosopher' comics descend from Hicks.",
    key_works: ["Sane Man (1989)", "Relentless (1992)", "Revelations (1993)", "Rant in E-Minor (posthumous, 1997)"],
    psychological_profile: "Hicks presents as a prophet-comedian — someone using comedy to deliver genuine spiritual and political conviction. His anger was real, not performed: he was genuinely disgusted by consumerism, war, and media manipulation. He struggled with alcohol throughout his career and was diagnosed with pancreatic cancer at 32. His awareness of his own death infuses his later work with genuine urgency — comedy against the clock.",
    techniques: ["Building rhetorical arguments with comedy as punctuation, not the point", "Voice characterization of archetypal enemies (marketing man, war hawk)", "Strategic profanity for emotional impact", "Using personal drug experiences as philosophical launching pads", "The 'I've had a vision' rhetorical stance — prophet delivering uncomfortable truth"]
  },
  {
    id: "burnham",
    name: "Bo Burnham",
    born: "1990",
    died: undefined,
    nationality: "American",
    era: "2000s–present",
    style: ["Musical comedy", "Meta-comedy", "Theatrical stand-up", "Psychological horror-comedy"],
    signature_themes: ["Anxiety and depression", "Social media and attention economy", "Self-consciousness as comedy", "The performance of authenticity", "Coming of age"],
    influence: "Defining voice of millennial/Gen Z comedy. 'Inside' (2021) created a new genre: pandemic isolation as artistic statement. His work on the nature of performing and being watched is uniquely self-aware.",
    key_works: ["what. (2013)", "Make Happy (2016)", "Inside (2021)", "Eighth Grade (film, 2018)"],
    psychological_profile: "Burnham's work is a sustained meditation on the psychic cost of public performance. He began on YouTube at 16 and has spent his career dissecting what that early exposure to audience attention did to him. 'Inside' was made during the COVID lockdown with no crew — he shot, lit, edited, wrote, and performed everything himself — and is a documentary of a mental health crisis that is also a comedy special. His comedy is built on the collapse of the distinction between performing and being.",
    techniques: ["Fourth wall breaks as the subject matter, not just a device", "Musical genre-switching to manipulate emotional register", "Meta-layering — the joke is about the joke being a joke", "Confessional sincerity emerging from ironic distance", "Technical precision (lighting, editing, timing) in service of emotional effect"]
  },
  {
    id: "gadsby",
    name: "Hannah Gadsby",
    born: "1978",
    died: undefined,
    nationality: "Australian",
    era: "2000s–present",
    style: ["Narrative comedy", "Anti-comedy", "Autobiographical", "Trauma comedy"],
    signature_themes: ["Queer identity", "Gender and misogyny in art history", "Trauma and its aftermath", "The structure of comedy itself"],
    influence: "'Nanette' (2018) is the most discussed comedy special of the 21st century and provoked a genuine debate about what stand-up is for. It introduced the concept of the 'tension without resolution' as a deliberate structural choice against comedy's conventional catharsis.",
    key_works: ["Nanette (2018)", "Douglas (2020)", "Something Special (2023)"],
    psychological_profile: "Gadsby explicitly theorizes her own work: in 'Nanette' she argues that traditional comedy structure (tension → release → punchline) is itself a political tool that lets audiences off the hook from sitting with difficult truths. Her decision to build tension without release in 'Nanette' was a deliberate rupture of the comedy contract. This is not just a structural decision but a claim about the psychology of humor — that relief is complicity.",
    techniques: ["Slow narrative build that withholds the punchline indefinitely", "Genre switching — from comedy to testimony mid-special", "Art history as comic subject (the deep knowledge that surprises the audience)", "Explicit theorizing of the comedy form from within it", "Long pauses as structural elements rather than awkward silences"]
  },
  {
    id: "lee",
    name: "Stewart Lee",
    born: "1968",
    died: undefined,
    nationality: "British",
    era: "1990s–present",
    style: ["Meta-comedy", "Repetition", "Deconstruction", "Long-form argument"],
    signature_themes: ["The nature of comedy itself", "Right-wing politics and culture", "Religion", "Multiculturalism", "His own persona as comedian"],
    influence: "The foremost theorist-practitioner of self-aware comedy. His 'How I Escaped My Certain Fate' (book) is the most serious analysis of stand-up craft written by a practitioner. Influenced a generation of British alt-comedians.",
    key_works: ["90s Comedian (2006)", "If You Prefer a Milder Comedian... (2010)", "Content Provider (2018)", "Snowflake/Tornado (2023)"],
    psychological_profile: "Lee constructs a persona — 'Stewart Lee,' a pompous, self-important stand-up who is simultaneously aware of and constituted by his own pomposity — and uses that constructed persona as the subject of the comedy. He practices extreme deliberateness: his callbacks and repetitions are engineered over months. His audience has a 'difficult Radiohead fan' profile — they enjoy the effort required to follow his argumentative comedy.",
    techniques: ["Deliberate repetition with escalating variation to produce hypnotic effect", "Breaking the fourth wall to comment on the audience's reaction to the joke", "Conspicuously withholding the punchline to create meta-tension", "Constructing false arguments that collapse themselves", "Callbacks so extended (20+ minutes) they function as structural architecture"]
  },
  {
    id: "chappelle",
    name: "Dave Chappelle",
    born: "1973",
    died: undefined,
    nationality: "American",
    era: "1990s–present",
    style: ["Character comedy", "Social commentary", "Confessional", "Taboo-breaking"],
    signature_themes: ["Race in America", "Fame and the entertainment industry", "Gender and sexuality", "Personal freedom vs. social expectation"],
    influence: "Chappelle's Show is the most influential sketch comedy series of the 2000s. His Netflix specials reignited the most heated debates in contemporary comedy about punching down, trans representation, and comedians' responsibility.",
    key_works: ["Chappelle's Show (2003–2004, 2006)", "Sticks & Stones (2019)", "The Closer (2021)", "Dave Chappelle: For What It's Worth (2004)"],
    psychological_profile: "Chappelle's career trajectory — abandoning a $50M deal at the height of fame, self-imposed exile in South Africa, decade-long absence, return to controversy — is its own psychological case study. He has spoken about feeling that the entertainment industry was asking him to compromise his integrity, that his comedy about race was being consumed in ways that made him complicit in what he was critiquing. His return has been marked by deliberate provocation that functions partly as a test of his own unconditional freedom.",
    techniques: ["Character embodiment — full inhabiting of multiple personas in narrative", "Deliberate transgression calibrated just past the comfort zone", "Personal disclosure as both subject and structural device", "Long-form storytelling with embedded jokes rather than joke-driven material", "Strategic silence and pause to allow audience to catch up"]
  }
];
