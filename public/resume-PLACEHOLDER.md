# Resume placeholder

Drop your real file here as: `public/resume.pdf`

Then update the two references to it:
1. `src/data/profile.ts` -> `resumeUrl: "/resume.pdf"`
2. Nothing else needs to change — the Navbar "Resume" button and the /resume
   page both read from `profile.ts`.

Recommended: keep the PDF under 2MB so it loads fast on the embedded viewer.
