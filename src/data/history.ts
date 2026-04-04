export interface ComedyEra {
  id: string;
  period: string;
  name: string;
  geography: string;
  key_developments: string[];
  notable_works_or_figures: string[];
  comedy_forms: string[];
  social_context: string;
  legacy: string;
}

export const COMEDY_HISTORY: ComedyEra[] = [
  {
    id: "ancient_greece",
    period: "5th–4th century BCE",
    name: "Ancient Greek Comedy",
    geography: "Athens, Greece",
    key_developments: [
      "Comedy recognized as an art form alongside tragedy at the City Dionysia festival",
      "Old Comedy: direct political satire, fantastical plots, direct audience address (parabasis)",
      "Middle Comedy: transition away from personal satire after Macedonian conquest",
      "New Comedy: focus on domestic life, stock characters, romantic plots — ancestor of sitcom"
    ],
    notable_works_or_figures: [
      "Aristophanes — 'The Clouds' (mocking Socrates), 'Lysistrata' (antiwar sex strike), 'The Frogs'",
      "Menander — master of New Comedy, enormously influential on Roman and modern comedy",
      "The Lenaia festival — comedy competition second only to Dionysia"
    ],
    comedy_forms: ["Old Comedy (political farce)", "Middle Comedy", "New Comedy (domestic/romantic)"],
    social_context: "Comedy was civic ritual — performed at religious festivals honoring Dionysus. Old Comedy was weaponized political speech: Aristophanes openly mocked Cleon, Socrates, and Euripides by name. After Athens' defeat, political targets became dangerous.",
    legacy: "Established the 'comedy of manners,' stock character types (the miser, the braggart soldier, the clever slave), and the romantic comedy structure. Menander's New Comedy directly influenced Plautus and Terence, then Shakespeare, then sitcoms."
  },
  {
    id: "roman_comedy",
    period: "3rd–1st century BCE",
    name: "Roman Comedy",
    geography: "Roman Republic",
    key_developments: [
      "Fabula palliata: Roman adaptations of Greek New Comedy",
      "Introduced elaborate comic plots, mistaken identity, and verbal wit to Latin",
      "Mime and Atellan farce — crude, physical, populist comedy alongside literary comedy",
      "Satire established as a literary genre (Lucilius)"
    ],
    notable_works_or_figures: [
      "Plautus — 'The Menaechmi' (twins confusion, source of Shakespeare's Comedy of Errors), 'Miles Gloriosus'",
      "Terence — more refined, psychologically nuanced; influenced European Renaissance drama",
      "Horace and Juvenal — Roman satirists whose work defined the genre"
    ],
    comedy_forms: ["Fabula palliata", "Mime", "Atellan farce", "Satire"],
    social_context: "Roman public entertainment demanded broad, physical, accessible comedy. Mime was the most popular form — crude, often obscene, requiring no literary education. Literary comedy coexisted with this populist tradition.",
    legacy: "The 'Comedy of Errors' plot (mistaken identity, twins), the braggart soldier (miles gloriosus), and the clever servant all trace to Roman comedy. Latin satire established irony and critique as literary tools."
  },
  {
    id: "medieval",
    period: "5th–15th century CE",
    name: "Medieval Comedy",
    geography: "Europe, Middle East",
    key_developments: [
      "Church controlled most formal culture — comedy survived in margins and folk traditions",
      "Feast of Fools: annual inversion of hierarchy, clergy mocking sacred ritual",
      "Carnival tradition: Bakhtin's 'carnivalesque' — licensed transgression, bodily humor",
      "Fabliaux: short comic tales in Old French, often bawdy and anti-clerical",
      "Court jesters institutionalized as licensed truth-tellers"
    ],
    notable_works_or_figures: [
      "Geoffrey Chaucer — Canterbury Tales (comic tales including The Miller's Tale, bawdy farce)",
      "Dante Alighieri — titled his masterwork 'Commedia' (comedy = work with happy ending)",
      "Court jesters: Triboulet (France), Will Somers (England — Henry VIII's fool)"
    ],
    comedy_forms: ["Fabliaux", "Mystery/morality plays with comic relief", "Court jester performance", "Carnival ritual"],
    social_context: "The Church's grip on public life meant comedy was dangerous or marginal. Carnival and Feast of Fools were safety valves: permitted temporary inversions of the social order. The jester's license to speak truth was one of the few protected forms of critique.",
    legacy: "The jester as licensed truth-teller anticipates the stand-up comedian. Carnival's 'transgressive humor from below' is the ancestor of counterculture comedy. Bakhtin's theory of the carnivalesque is influential in comedy studies."
  },
  {
    id: "renaissance_comedy",
    period: "15th–17th century",
    name: "Renaissance and Elizabethan Comedy",
    geography: "England, Italy, France, Spain",
    key_developments: [
      "Rediscovery of classical comedy (Plautus, Terence, Aristophanes) fueled new forms",
      "Commedia dell'arte: improvised masked comedy with stock characters, toured Europe",
      "Shakespeare's comedies established sophisticated romantic comedy genre",
      "Molière in France: comedy of manners targeting social hypocrisy",
      "Comedy of Humours (Ben Jonson): characters defined by dominant trait/obsession"
    ],
    notable_works_or_figures: [
      "William Shakespeare — A Midsummer Night's Dream, Much Ado About Nothing, Twelfth Night",
      "Molière — Tartuffe, The Misanthrope, The Miser",
      "Ben Jonson — Volpone, The Alchemist",
      "Commedia dell'arte: Arlecchino (Harlequin), Pantalone, Il Dottore stock characters"
    ],
    comedy_forms: ["Romantic comedy", "Comedy of manners", "Comedy of humours", "Commedia dell'arte", "Farce"],
    social_context: "The printing press and public theatres democratized comedy. Commedia troupes traveled to courts and town squares alike. Shakespeare's theatre served both groundlings (crude puns) and nobles (sophisticated wordplay) simultaneously.",
    legacy: "The romantic comedy structure (obstacles to love, resolution in marriage) from Shakespeare still drives Hollywood films. Commedia stock characters became standard theatrical archetypes. Molière's social satire remains a template for comedy targeting elite hypocrisy."
  },
  {
    id: "vaudeville_music_hall",
    period: "1840s–1930s",
    name: "Vaudeville and Music Hall",
    geography: "USA (vaudeville), UK (music hall)",
    key_developments: [
      "Variety show format: mix of comedy, singing, juggling, magic — democratized entertainment",
      "Immigrant humor: Jewish, Irish, Italian comics processing assimilation through comedy",
      "Blackface minstrelsy: deeply racist but dominant commercial form, shaped American comedy",
      "Women comedians emerged in significant numbers for the first time",
      "Radio killed vaudeville by 1930s — comics had to adapt to audio-only performance"
    ],
    notable_works_or_figures: [
      "Buster Keaton, Charlie Chaplin, Harold Lloyd — vaudeville roots led to silent film",
      "W.C. Fields — misanthropic persona born in vaudeville",
      "Marie Dressler, Eva Tanguay — pioneering women in variety comedy",
      "The Marx Brothers — started in vaudeville, moved to Broadway then film"
    ],
    comedy_forms: ["Variety/sketch comedy", "Physical comedy", "Stand-up monologue predecessors", "Comic song"],
    social_context: "Industrial urbanization created large working-class audiences hungry for cheap entertainment. Vaudeville circuits were the TV networks of their era — national distribution systems for comedy talent. The form required comics to develop material that worked across vastly different venues.",
    legacy: "Vaudeville is the direct ancestor of television variety shows, sketch comedy, and stand-up. Almost every major comic of early Hollywood (Chaplin, Keaton, Marx Brothers, W.C. Fields) was forged in vaudeville."
  },
  {
    id: "golden_age_hollywood",
    period: "1920s–1950s",
    name: "Golden Age of Screen Comedy",
    geography: "Hollywood, USA; UK",
    key_developments: [
      "Silent film comedy: physicality, pantomime, and visual gags as universal language",
      "Sound film added verbal wit, timing, and wordplay — radio comics crossed over",
      "Screwball comedy: fast-talking, battle-of-the-sexes romantic comedies",
      "British Ealing comedies: dark, satirical, understated humor",
      "Film censorship (Hays Code) pushed sex and politics into subtext"
    ],
    notable_works_or_figures: [
      "Charlie Chaplin — The Tramp persona, 'The Great Dictator' (1940)",
      "Buster Keaton — 'The General', 'Sherlock Jr.'",
      "The Marx Brothers — 'Duck Soup', 'A Night at the Opera'",
      "Cary Grant, Katharine Hepburn, Claudette Colbert — screwball leads",
      "Kind Hearts and Coronets, The Lavender Hill Mob (Ealing)"
    ],
    comedy_forms: ["Slapstick film", "Screwball comedy", "Romantic comedy", "Satirical comedy"],
    social_context: "The Depression era made escapist comedy economically essential. Chaplin's Tramp spoke to mass unemployment. Screwball comedies let audiences fantasize about class mobility through romantic comedy. WWII brought propaganda comedy and morale-boosting entertainment.",
    legacy: "Defined the visual grammar of screen comedy. Chaplin's social conscience comedy influenced every political comedian. Screwball comedy's DNA is in every rom-com. Keaton's physical comedy influenced Jackie Chan, Mr. Bean, and modern action comedy."
  },
  {
    id: "stand_up_golden_age",
    period: "1950s–1970s",
    name: "Stand-Up Comedy's First Golden Age",
    geography: "USA (New York Borscht Belt, LA clubs), UK",
    key_developments: [
      "The 'sick comics' of the late 1950s: dark, political, taboo-breaking material",
      "African American stand-up emerged: Dick Gregory, Richard Pryor pioneering personal truth-telling",
      "The Borscht Belt: Jewish resort circuit trained Bob Hope, Danny Kaye, Mel Brooks, Carl Reiner",
      "Television's Ed Sullivan Show created national exposure for stand-up",
      "Comedy albums made stand-up a recorded art form (Cosby, Newhart, Nichols & May)"
    ],
    notable_works_or_figures: [
      "Lenny Bruce — free speech martyr, destroyed the 'clean comedy' consensus",
      "Richard Pryor — autobiography as comedy, racial truth-telling",
      "Dick Gregory — civil rights activism through comedy",
      "Mort Sahl — political satire with newspaper as prop",
      "Phyllis Diller, Joan Rivers — women breaking into male-dominated stand-up"
    ],
    comedy_forms: ["Stand-up monologue", "Observational comedy", "Political satire", "Character comedy"],
    social_context: "Post-WWII prosperity, Cold War anxiety, and the Civil Rights Movement created pressure that comedy processed. The FCC and club owners enforced 'clean' standards; the sick comics deliberately violated them. Lenny Bruce's obscenity trials changed comedy law.",
    legacy: "Established the confessional, personal, politically aware stand-up tradition. Pryor's influence is in every comedian who uses personal pain as material. The clean/dirty comedy split created the 'alternative comedy' impulse that still drives the form."
  },
  {
    id: "television_comedy",
    period: "1950s–present",
    name: "Television Comedy",
    geography: "USA, UK, global",
    key_developments: [
      "Sitcom format established: recurring characters, domestic/workplace settings, laugh tracks",
      "Sketch comedy shows: Your Show of Shows, Saturday Night Live, Monty Python's Flying Circus",
      "British sitcoms: more cynical, character-driven, smaller episode counts",
      "Late night talk shows as home for stand-up and political comedy",
      "Cable TV deregulation opened space for darker, more explicit comedy (HBO)",
      "Streaming era fragmented audiences and enabled niche comedy forms"
    ],
    notable_works_or_figures: [
      "I Love Lucy — defined the sitcom format and physical comedy on TV",
      "Monty Python's Flying Circus — absurdist, anti-format, deconstructive",
      "All in the Family — brought social realism and controversy to sitcom",
      "Saturday Night Live (1975–present) — launched generations of comedians",
      "The Office (UK/US), Curb Your Enthusiasm — mockumentary and cringe comedy",
      "Seinfeld — 'show about nothing,' pure observational comedy"
    ],
    comedy_forms: ["Sitcom", "Sketch comedy", "Late night monologue", "Mockumentary", "Animated comedy"],
    social_context: "TV homogenized American comedy for decades, requiring broad appeal. Cable and streaming reversed this — finding the 200,000 people who love your very specific comedy became viable. The laugh track debate mirrors broader debates about authenticity vs. convention.",
    legacy: "The sitcom is the most economically dominant comedy form in history. SNL created an assembly line for American comedy talent. The streaming era's global distribution means British, South Korean, and Australian comedy now have global audiences."
  },
  {
    id: "alternative_comedy",
    period: "1980s–present",
    name: "Alternative Comedy Movement",
    geography: "UK (London), USA, global",
    key_developments: [
      "Rejection of racist/sexist club comedy in favor of personal, surreal, and political material",
      "UK: The Comic Strip, alternative cabaret, Ben Elton's aggressive political comedy",
      "USA: alt-comedy clubs (Upright Citizens Brigade), post-observational material",
      "Edinburgh Fringe became alternative comedy's proving ground",
      "Podcast era: comedians built audiences outside traditional gatekeepers"
    ],
    notable_works_or_figures: [
      "Alexei Sayle, Rik Mayall, Ben Elton — UK alternative comedy founders",
      "Mitch Hedberg, David Cross, Patton Oswalt — US alt-comedy",
      "Stewart Lee — meta-comedy, deconstructing the form of stand-up itself",
      "Hannah Gadsby — 'Nanette' (2018) challenged stand-up structure from within",
      "Maria Bamford, Bo Burnham — mental health and self-awareness as material"
    ],
    comedy_forms: ["Alt-stand-up", "Surrealism", "Meta-comedy", "Character comedy", "Long-form narrative"],
    social_context: "Alternative comedy arose in opposition to 'working men's club' comedy that relied on racism, sexism, and homophobia. The movements' politics were left-wing and identity-conscious. Today 'alternative' has become mainstream, prompting debates about whether comedy has lost its edge.",
    legacy: "Alternative comedy's values (no punching down, personal truth-telling, surrealism) are now the dominant values in prestige comedy. The tension between this tradition and 'anti-woke' comedy is the central debate in contemporary stand-up."
  }
];
