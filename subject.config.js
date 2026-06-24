// subject.config.js — Single source of truth for ALL subject-specific content.
// ─────────────────────────────────────────────────────────────────────────────
// This is the ONLY file you should need to edit when forking this app for a new
// subject. After editing it (and swapping the asset files in /public), run:
//     grep -ri "haribhakti" . --exclude-dir=node_modules --exclude-dir=.git
// The only hits should be inside THIS file and the asset filenames. Anything
// else is a leftover that defeats the purpose of a clean fork.
//
// Used by both the backend (server.js, src/interviewerAgent.js) and the
// frontend (served via GET /api/config, consumed in public/app.js).
// ─────────────────────────────────────────────────────────────────────────────

const subjectConfig = {
  // ── Identity ───────────────────────────────────────────────────────────────
  name: 'Shailesh Haribhakti',
  honorific: 'Mr.',
  // Used in the browser tab + frontend headers
  pageTitle: 'Mr. Shailesh Haribhakti — A Life in Service of Integrity',

  // ── Welcome screen (right panel) ─────────────────────────────────────────────
  ui: {
    // Small logo wordmark (top-left of right panel)
    logoText: 'Shailesh Haribhakti',
    // The big display headline. Plain part + emphasised (italic) part.
    titleLine1: 'A life of',
    titleEmphasis: 'integrity & vision.',
    subtitle:
      'A private biographical interview created especially for Mr. Shailesh Haribhakti — to capture four decades of leadership, institution-building, and a philosophy of shared value.',
    // Left-panel nameplate
    nameplateName: 'Shailesh Haribhakti',
    nameplateTitle: 'CA · Author · Board Director · Institution Builder',
    pullQuote:
      'A Chartered Accountant, Entrepreneur, Board Director, Innovator, Author, Teacher, Speaker, and Citizen of the World.',

    // Left-panel milestone timeline (renders in order)
    timeline: [
      { year: '1976', label: 'Joined Haribhakti & Co.' },
      { year: '2018', label: '1,000+ member firm' },
      { year: 'Now', label: 'Audit Renaissance' },
    ],

    // Right-panel bio fact cards (renders in order)
    bioFacts: [
      { icon: '🏛️', label: 'Firm Built', value: 'Haribhakti & Co. LLP' },
      { icon: '📋', label: 'Board Roles', value: 'Adani Total Gas, Blue Star, TVS & more' },
      { icon: '📖', label: 'Authored', value: 'Audit Renaissance · The AI Auditor · The Digital Professional' },
      { icon: '🤝', label: 'Board & Advisory', value: '100+ positions across listed enterprises' },
      { icon: '⚖️', label: 'Governance', value: '40+ years of leadership' },
      { icon: '🌱', label: 'Philosophy', value: 'Innovate to Zero' },
    ],
  },

  // ── Biographical context injected into the LLM system prompts ────────────────
  // This is what makes the interviewer "already know" the subject so it never
  // asks foundational questions it should already have the answer to.
  //
  // ⚠ BOARD ROLES VERIFIED: 24 Jun 2026 against public sources (company board
  // pages, 2025 appointment news). Board memberships drift — re-confirm against
  // his own latest disclosure before each redeploy. Notably REMOVED as stale:
  // Future Lifestyle Fashions (insolvency) and L&T Mutual Fund (sold to HSBC).
  interviewerBackground: `KNOWN BACKGROUND (use this to personalise questions — never ask what you already know):
- Career CA with over four decades of experience; grew Haribhakti & Co. LLP from ~20 to 1,000+ professionals.
- Stepped away from Haribhakti & Co. management in 2018.
- Has held 100+ board and advisory positions across listed enterprises over 40+ years of governance leadership.
- Authored three books: "Audit Renaissance", "The AI Auditor", and "The Digital Professional" — now championing high-quality auditing globally through a not-for-profit initiative.
- Runs Shailesh Haribhakti & Associates (advisory) and Mentorcap Management Pvt. Ltd. (equity investing).
- Founded Planet People & Profit Consulting Pvt. Ltd.; passionate about CSR and "shared value".
- Current board roles (as of Jun 2026): Non-Executive Chairman of Blue Star Limited and Protean eGov Technologies; Independent Director at Adani Total Gas, Adani Power, TVS Motor Company, Bajaj Electricals, Torrent Pharmaceuticals, L&T Finance Holdings, and Swiggy, among others.
- Coined the concept "Innovate to Zero" — focused, co-operative, widespread impact.
- Authored a June 2026 policy white paper for the Government of India, "India Beyond Constraint" (see REFERENCE MATERIAL below).
- Known as: Chartered Accountant, Entrepreneur, Board Director, Innovator, Author, Teacher, Speaker, Citizen of the World.`,

  // Shorter background for the onboarding prompt
  onboardingBackground: `You already know the following about him professionally:
- Name: Shailesh Haribhakti
- Career CA; grew Haribhakti & Co. LLP from ~20 to 1,000+ members over four decades; stepped away from management in 2018.
- Authored "Audit Renaissance", "The AI Auditor", and "The Digital Professional"; runs advisory firm Shailesh Haribhakti & Associates and Mentorcap Management.
- 100+ board and advisory positions over 40+ years; current roles include Chairman of Blue Star and Protean eGov Technologies; Independent Director at Adani Total Gas, Adani Power, TVS Motor, Torrent Pharmaceuticals, and others.
- Founder of Planet People & Profit Consulting; coined "Innovate to Zero".`,

  // ── Reference material the subject has authored ──────────────────────────────
  // This is draft / written material (his book-in-progress and his policy white
  // paper). It is given to the interviewer as CONTEXT to ask richer, more
  // specific, better-informed questions — NOT as answered coverage. The agent
  // should use it to draw him out (the scene, the people, the feeling, the
  // turning point behind each fact) and to discuss his ideas knowledgeably.
  referenceMaterial: `REFERENCE MATERIAL — written/draft work the subject has authored.
IMPORTANT: Do NOT treat the contents below as "already covered" or off-limits. Treat them as a map of where the richest stories live. Where these facts appear, your job is to invite him to expand in his own voice — ask for the scene, the people, the emotion, and the lesson behind the fact. You may also discuss the ideas in his white paper with genuine, informed curiosity.

BOOK-IN-PROGRESS (working concept): "Tesseract for the Abundantly Intelligent Service Company" — framing the building of Haribhakti & Co. as India's first Agentic-AI-led service company.

Chapter One — early life and formation (key facts to draw him out on, not to recite back):
- Prepared for the 1971 Indian School Certificate (Cambridge) exam taking Accounting, Mathematics, Commerce, Geography, English Language, Literature and Hindi; mastered each from prescribed texts and ~20 past papers; so well-prepared he watched five films during the exam month.
- Stood First in India and became a National Scholar at age 16; was offered a Cambridge University scholarship but chose Sydenham College instead.
- Broke his right thumb during the Bombay University Intermediate exams; dictated his first papers to a writer and still scored 85% in Accounting, near the top of his college.
- Later studied at Lala Lajpatrai College (morning classes); was General Secretary of the Students Union at Sydenham; led peaceful black-band support demonstrations, championed teacher evaluation, and won debates and elocution contests (a Nazareth Speakers Academy product). A Sitar player and singer of Mukesh / Bollywood songs.
- Began CA articleship at 18 after clearing the ICAI entrance with ease; earned ranks at both ICAI and ICWA exams and completed two professional qualifications by age 22.
- Married Amita at 21 (he credits her support and understanding as paramount; passed his key exams after marriage); first child, daughter Sejal, born when he was 23.
- In 1979 moved to the USA to join Arthur Young & Co.; topped the competitive Chicago office entrance batch; worked on the 1979 McDonald's audit, plus ABC and John Morrell audits; spent four weeks near Washington DC integrating manual and technology audits; returned to India by late 1980.
- Recurring life lessons he draws from this period: work hard and practise relentlessly while staying relaxed enough to perform; diversify your interests; serve the student and wider community; curiosity, wonder, mastery, and pattern-recognition ("joining the dots"); be an entrepreneur, not a job-seeker; be confident, bold and humble.

POLICY WHITE PAPER (June 2026): "India Beyond Constraint — A National Resilience and Future-Readiness Architecture for India", a submission-ready paper for the Government of India built from a 20-day public LinkedIn dialogue.
- Central doctrine: "Secure oil. Shrink oil. Replace oil. Transcend oil." — turning oil vulnerability, geopolitical uncertainty and AI disruption into "Sustainable Abundance".
- Themes he cares about and can speak to: energy security and maritime chokepoint risk (Hormuz); twelve national missions; a National Energy & Geoeconomic Resilience Council; AI as India's public "operating system"; PSU 2035 transformation balance sheets; an MSME AI Stack and MSME Energy Shield; asset recycling into a National Future Fund; 10X R&D and commercialisation; firm 24x7 green power; district biorefineries; and a national energy-transition skilling stack.`,


  // {name} and {honorific} are substituted at runtime.
  openings: {
    // Very first message of the very first session (onboarding).
    onboarding: `{honorific} {name}, it is a genuine privilege to have this time with you.\n\nBefore we step into the story of your life, I'd love to spend a few moments simply getting to know you as a person — not the professional, not the accolades, just you. So let's begin simply: where in the world did your life begin, and what kind of family did you grow up in?`,

    // First real interview session (after onboarding done at session creation).
    firstInterview: `Wonderful. Now we can begin.\n\nEvery life has a starting point — a place, a family, a set of circumstances that you didn't choose but that shaped everything that followed. So let's go back to the very beginning.\n\nWhere were you born, and what kind of world did you arrive into?`,

    // Appended when onboarding completes mid-turn.
    onboardingComplete: `\n\nWonderful. Now I feel like I know a little of who I'm talking to.\n\nLet's begin. Every life has a starting point — a place, a set of circumstances you didn't choose but that shaped everything that followed. Take me back to the very beginning: where were you born, and what was the world like when you arrived?`,
  },
};

// Substitute {name} / {honorific} placeholders in a template string.
function render(template) {
  if (!template) return template;
  return template
    .replace(/\{name\}/g, subjectConfig.name)
    .replace(/\{honorific\}/g, subjectConfig.honorific);
}

// The subset of config that is safe + useful to expose to the frontend.
// (Excludes the LLM prompt internals.)
function publicConfig() {
  return {
    name: subjectConfig.name,
    honorific: subjectConfig.honorific,
    pageTitle: subjectConfig.pageTitle,
    ui: subjectConfig.ui,
  };
}

module.exports = { subjectConfig, render, publicConfig };
