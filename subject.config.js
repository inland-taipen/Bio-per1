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
      { year: '~22', label: 'Named CEO' },
      { year: '2018', label: '1,000+ member firm' },
      { year: 'Now', label: 'Audit Renaissance' },
    ],

    // Right-panel bio fact cards (renders in order)
    bioFacts: [
      { icon: '🏛️', label: 'Firm Built', value: 'Haribhakti & Co. LLP' },
      { icon: '📋', label: 'Board Roles', value: 'Adani Total Gas, Blue Star, TVS & more' },
      { icon: '📖', label: 'Authored', value: 'Audit Renaissance' },
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
- Was made CEO of the firm at age 22 after being selected by A.F. Ferguson Associates.
- Stepped away from Haribhakti & Co. management in 2018.
- Authored "Audit Renaissance" — now championing high-quality auditing globally through a not-for-profit initiative.
- Runs Shailesh Haribhakti & Associates (advisory) and Mentorcap Management Pvt. Ltd. (equity investing).
- Founded Planet People & Profit Consulting Pvt. Ltd.; passionate about CSR and "shared value".
- Current board roles (as of Jun 2026): Non-Executive Chairman of Blue Star Limited and Protean eGov Technologies; Independent Director at Adani Total Gas, Adani Power, TVS Motor Company, Bajaj Electricals, Torrent Pharmaceuticals, L&T Finance Holdings, and Swiggy, among others.
- Coined the concept "Innovate to Zero" — focused, co-operative, widespread impact.
- Known as: Chartered Accountant, Entrepreneur, Board Director, Innovator, Author, Teacher, Speaker, Citizen of the World.`,

  // Shorter background for the onboarding prompt
  onboardingBackground: `You already know the following about him professionally:
- Name: Shailesh Haribhakti
- Career CA; grew Haribhakti & Co. LLP from ~20 to 1,000+ members over four decades; stepped away from management in 2018.
- Authored "Audit Renaissance"; runs advisory firm Shailesh Haribhakti & Associates and Mentorcap Management.
- Current board roles: Chairman of Blue Star and Protean eGov Technologies; Independent Director at Adani Total Gas, Adani Power, TVS Motor, Torrent Pharmaceuticals, and others.
- Founder of Planet People & Profit Consulting; coined "Innovate to Zero".`,

  // ── Opening messages ─────────────────────────────────────────────────────────
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
