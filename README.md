# Ganesh Kumar Basa — AI Engineer & Full Stack Developer Portfolio

An art-directed, editorial personal portfolio built with **React 18**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Lucide React**.

## 1. Visual Direction & Design Philosophy

This portfolio synthesizes two distinct design references into a cohesive engineering identity:
- **Patrick David (`bepatrickdavid.com`) Influence**: Monumental condensed display typography (`Anton`), italic editorial serif counterpoints (`Instrument Serif`), exposed 1px hairline grids (`#282724`), a geometric availability stamp (`2026 / OPEN TO REMOTE`), right-indented uppercase intro copy, and high-contrast warm ivory (`#F2EFE9`) on obsidian (`#0D0D0C`).
- **Denise Chandler (`denisechandler.com`) Influence**: Generous macro-whitespace, disciplined alignment axes, restrained warm terracotta (`#D4633B`) and sage (`#A8B8A0`) accents, a toggleable **Warm Editorial Paper** light mode (`#F4F1EA`), and bespoke interactive SVG system blueprints for every project.

---

## 2. Project Structure

```text
my-portfolio/
├── public/
│   ├── images/
│   │   ├── arogyamitra-preview.svg
│   │   ├── attendx-preview.svg
│   │   ├── smart-pdf-rag-preview.svg
│   │   └── ml-models-preview.svg
│   ├── resume.pdf
│   ├── resume-ai-engineer.pdf
│   ├── resume-fullstack.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ArchitecturePreview.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts       # <-- EDIT ALL YOUR CONTENT HERE
│   ├── styles/
│   │   └── globals.css        # <-- EDIT COLORS & FONTS HERE
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 3. Local Development & Build Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server**:
   ```bash
   npm run dev
   ```
3. **Type-check and build for production**:
   ```bash
   npm run build
   ```
4. **Preview the production bundle**:
   ```bash
   npm run preview
   ```

---

## 4. How to Customize Your Content (`src/data/portfolio.ts`)

All portfolio content is centralized inside `src/data/portfolio.ts` so you never have to dig through React components to update your details:

- **Update Name, Headline, Bio, or Contact Links**: Edit `portfolioData.personalInfo`.
- **Add, Edit, or Remove a Project**: Edit the `portfolioData.projects` array. If a project does not have a live deployment link yet (such as *ArogyaMitra AI*), keep `liveUrl: null` and the card will automatically hide the live deployment button while keeping the GitHub button active.
- **Replace Project Screenshots**: Place your `.png`, `.jpg`, or `.webp` screenshots inside `public/images/` and update the `image` field on the corresponding project in `src/data/portfolio.ts`.
- **Replace Your Resumes**: Both of your uploaded resumes have been converted to PDF and placed in `public/`:
  - `public/resume.pdf` & `public/resume-ai-engineer.pdf` (*AI / LLM Developer Resume*)
  - `public/resume-fullstack.pdf` (*Full Stack Developer Resume*)
  Overwrite these files anytime with updated PDFs of the same filename.
- **Change Colors or Fonts**: Open `src/styles/globals.css` and edit the CSS custom properties (`--bg-primary`, `--text-primary`, `--accent-primary`, `--accent-secondary`) in `:root`.

---

## 5. Deployment (Vercel / Netlify / GitHub Pages)

- **Vercel / Netlify**: Push this folder to a GitHub repository and import it into Vercel or Netlify.
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`
