/**
 * ============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION — src/data/portfolio.ts
 * ============================================================================
 *
 * HOW TO CUSTOMIZE YOUR PORTFOLIO (NO COMPONENT EDITS REQUIRED):
 *
 * 1. PERSONAL DETAILS & HEADLINES:
 *    Edit `personalInfo` below to update your name, title, location, availability
 *    status, hero headline words, and short bio.
 *
 * 2. ADD, EDIT, OR REMOVE A PROJECT:
 *    Go to the `projects` array below. Each project follows the `ProjectItem`
 *    interface. To add a new project, copy an existing object, give it a unique
 *    `id` and `index` (e.g. "05"), fill in `problem`, `solution`, `contribution`,
 *    `techStack`, and set `githubUrl` or `liveUrl` (set `liveUrl: null` if a
 *    project does not have a live deployment yet—the UI handles `null` gracefully).
 *
 * 3. REPLACE PROJECT SCREENSHOTS:
 *    Drop your screenshot (e.g. `my-app.png` or `my-app.webp`) into `public/images/`
 *    and update `image: "/images/my-app.png"` on that project. Every project also
 *    includes a custom interactive `blueprint` schematic so your portfolio looks
 *    art-directed even before you take product screenshots.
 *
 * 4. UPDATE SKILLS & EXPERIENCE:
 *    Edit `skillCategories` to add/remove technologies, and `experience` / `education`
 *    to add new internships, roles, or academic milestones.
 *
 * 5. REPLACE YOUR RESUME PDF:
 *    Replace `public/resume.pdf` (and optionally `public/resume-ai-engineer.pdf`
 *    and `public/resume-fullstack.pdf`) with your latest PDF file.
 * ============================================================================
 */

export type FocusTrack = 'all' | 'ai' | 'fullstack';

export interface BlueprintNode {
  stage: string;
  title: string;
  detail: string;
  accent?: 'terracotta' | 'sage' | 'neutral';
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'fullstack' | 'both';
  categoryLabel: string;
  role: string;
  year: string;
  featured: boolean;
  problem: string;
  solution: string;
  contribution: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  githubUrl: string | null;
  liveUrl: string | null;
  image: string;
  imageAlt: string;
  blueprintTitle: string;
  blueprintNodes: BlueprintNode[];
  architectureNotes: string;
}

export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  category: 'ai' | 'fullstack' | 'both';
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  index: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Freelance' | 'Leadership & Volunteering';
  category: 'ai' | 'fullstack' | 'both';
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  highlights: string[];
}

export interface ResumeVariant {
  id: 'ai' | 'fullstack';
  label: string;
  badge: string;
  filename: string;
  path: string;
  summary: string;
  coreFocus: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    firstName: string;
    lastName: string;
    monogram: string;
    rolePrimary: string;
    roleSecondary: string;
    taglineItalic: string;
    heroDisplayLines: [string, string, string];
    availabilityStamp: {
      number: string;
      monthOrYear: string;
      statusLine1: string;
      statusLine2: string;
      isAvailable: boolean;
    };
    heroEditorialIntro: string;
    heroConciseBio: string;
    location: string;
    workPreference: string;
    cgpa: string;
    degreeShort: string;
    email: string;
    phone: string;
    linkedinUrl: string;
    githubUrl: string;
    linkedinHandle: string;
    githubHandle: string;
    defaultResumePath: string;
  };
  resumeVariants: ResumeVariant[];
  about: {
    sectionSubtitle: string;
    headline: string;
    leadParagraph: string;
    bodyParagraphs: string[];
    engineeringPillars: {
      number: string;
      title: string;
      description: string;
    }[];
    keyFacts: {
      label: string;
      value: string;
      detail: string;
    }[];
  };
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Ganesh Kumar Basa',
    firstName: 'Ganesh Kumar',
    lastName: 'Basa',
    monogram: 'GKB',
    rolePrimary: 'AI Engineer',
    roleSecondary: 'Full Stack Developer',
    taglineItalic: 'intelligent systems',
    heroDisplayLines: ['AI ENGINEER', 'FULL STACK', 'DEVELOPER'],
    availabilityStamp: {
      number: '26',
      monthOrYear: '2026',
      statusLine1: 'open to remote',
      statusLine2: 'AI & full-stack roles',
      isAvailable: true,
    },
    heroEditorialIntro:
      'I AM AN AI ENGINEER AND FULL STACK DEVELOPER BASED IN BAPATLA, INDIA (CGPA 9.4/10). I ARCHITECT RAG PIPELINES WITH LANGCHAIN, FAISS & GOOGLE GEMINI API, AND SHIP REAL-TIME FULL-STACK WEB SYSTEMS IN REACT, NEXT.JS, TYPESCRIPT, PYTHON & POSTGRESQL.',
    heroConciseBio:
      'B.Tech Computer Science Engineering student (9.4/10 CGPA) building grounded LLM applications, FAISS vector retrieval pipelines, and production web platforms tested under 400+ concurrent user loads.',
    location: 'Bapatla, Andhra Pradesh, India',
    workPreference: 'Open to Remote Internships & Engineering Roles',
    cgpa: '9.4 / 10',
    degreeShort: 'B.Tech CSE (2024–2028)',
    email: 'ganeshkumarbasa@gmail.com',
    phone: '+91 9999999999',
    linkedinUrl: 'https://www.linkedin.com/in/ganeshkumarbasa',
    githubUrl: 'https://github.com/Ganeshkumar841',
    linkedinHandle: 'linkedin.com/in/ganeshkumarbasa',
    githubHandle: 'github.com/Ganeshkumar841',
    defaultResumePath: '/resume.pdf',
  },

  resumeVariants: [
    {
      id: 'ai',
      label: 'AI / LLM Developer Resume',
      badge: 'RAG · LangChain · Gemini API · Python ML',
      filename: 'Ganesh_Kumar_Basa_AI_Engineer_Resume.pdf',
      path: '/resume-ai-engineer.pdf',
      summary:
        'Tailored for AI Engineer, LLM Developer, and Machine Learning Intern roles. Highlights RAG pipelines, FAISS vector indexing, Google Gemini API integration, and 98% accuracy Random Forest/XGBoost models.',
      coreFocus: ['LLMs & SLMs', 'RAG & FAISS', 'LangChain', 'Google Gemini API', 'Python ML (XGBoost/RF/SVM)', 'FastAPI & Flask'],
    },
    {
      id: 'fullstack',
      label: 'Full Stack Developer Resume',
      badge: 'MERN · Next.js · TypeScript · PostgreSQL · Supabase',
      filename: 'Ganesh_Kumar_Basa_FullStack_Resume.pdf',
      path: '/resume-fullstack.pdf',
      summary:
        'Tailored for Full Stack Software Engineering roles. Emphasizes the MERN stack, Next.js, TypeScript, REST APIs, Supabase/PostgreSQL real-time architecture (400+ concurrent users), and automated Excel reporting.',
      coreFocus: ['React.js & Next.js', 'TypeScript', 'Node.js & Express', 'PostgreSQL & Supabase', 'MongoDB & Firebase', 'REST APIs & CI/CD'],
    },
  ],

  about: {
    sectionSubtitle: '01 // EDITORIAL PROFILE & ENGINEERING PHILOSOPHY',
    headline: 'Where retrieval-augmented intelligence meets resilient full-stack execution.',
    leadParagraph:
      'I am a B.Tech Computer Science Engineering student at Bapatla Engineering College maintaining a 9.4/10 CGPA (following a 95.4% in MPC Intermediate at SASI Junior College). My work sits at the intersection of applied AI engineering and practical full-stack product delivery.',
    bodyParagraphs: [
      'Rather than treating language models as isolated prompt wrappers, I focus on grounding LLMs in verifiable data. Using LangChain, FAISS vector stores, and the Google Gemini API, I build Retrieval-Augmented Generation (RAG) architectures—from a multilingual AI health advisor supporting voice, text, and clinical image inputs to a live academic research paper Q&A platform.',
      'On the systems side, I design and ship end-to-end web applications using React, Next.js, TypeScript, Node.js/Express, Python (Flask/FastAPI), and Go, backed by PostgreSQL, MongoDB, Supabase, and Firebase. Whether replacing manual college event workflows for 400+ concurrent attendees with zero downtime or training 98%-accurate ensemble classifiers during my remote ML internship, I care deeply about clean documentation, asynchronous reliability, and measurable operational impact.',
    ],
    engineeringPillars: [
      {
        number: '01',
        title: 'Grounded RAG & LLM Systems',
        description:
          'Designing retrieval pipelines with LangChain, FAISS vector search, and the Google Gemini API that anchor generative outputs in trusted domain corpora.',
      },
      {
        number: '02',
        title: 'End-to-End Product Architecture',
        description:
          'Owning the complete stack from PostgreSQL/Supabase and REST API design to responsive React, Next.js, and Tailwind CSS interfaces.',
      },
      {
        number: '03',
        title: 'Empirical ML & Data Rigor',
        description:
          'Applying disciplined data preprocessing, Pandas/Matplotlib analysis, and ensemble models (Random Forest, XGBoost, SVM) to real classification problems.',
      },
    ],
    keyFacts: [
      {
        label: 'Academic Standing',
        value: '9.4 / 10 CGPA',
        detail: 'B.Tech CSE, Bapatla Engineering College (2024–2028)',
      },
      {
        label: 'Production Scale',
        value: '400+ Users',
        detail: 'Concurrent real-time event tracking with 1,000+ zero-downtime logs',
      },
      {
        label: 'ML Benchmark',
        value: '98% Accuracy',
        detail: 'Multi-Disease Prediction via Random Forest, XGBoost & SVM',
      },
      {
        label: 'Collaboration Mode',
        value: 'Remote-Ready',
        detail: 'Proven remote internship workflow, Git/GitHub code reviews & docs',
      },
    ],
  },

  projects: [
    {
      id: 'arogyamitra-ai',
      index: '01',
      title: 'ArogyaMitra AI',
      subtitle: 'Multilingual AI Health Advisor & Custom Medical RAG Pipeline',
      category: 'both',
      categoryLabel: 'AI / RAG + FULL STACK',
      role: 'Lead Developer',
      year: '2025',
      featured: true,
      problem:
        'General-purpose conversational AI often produces unverified medical hallucinations and lacks accessible multimodal, multilingual intake for patients checking symptoms.',
      solution:
        'Engineered a full-stack AI health advisor combining a Python Flask backend, Firebase persistence, and a responsive Tailwind CSS frontend. Designed a custom FAISS-backed Retrieval-Augmented Generation (RAG) pipeline with the Google Gemini API to ground every response in curated medical literature across voice, text, and image symptom inputs.',
      contribution: [
        'Built the full-stack health chatbot architecture integrating a Flask backend, Firebase, and a clean Tailwind CSS user interface.',
        'Designed a custom RAG pipeline using FAISS vector indexing and the Google Gemini API so symptom guidance is strictly grounded in medical literature.',
        'Implemented a multimodal user interface supporting voice audio, multilingual text, and image inputs for accessible symptom checking.',
      ],
      techStack: ['Python', 'Flask', 'Google Gemini API', 'RAG', 'FAISS', 'Firebase', 'Tailwind CSS'],
      metrics: [
        { value: '3 Modes', label: 'Voice, Text & Image Intake' },
        { value: 'FAISS RAG', label: 'Literature-Grounded Responses' },
        { value: 'Full Stack', label: 'Flask + Firebase + Tailwind' },
      ],
      githubUrl: 'https://github.com/Ganeshkumar841/bot_healthcare',
      liveUrl: null,
      image: '/images/arogyamitra-preview.svg',
      imageAlt: 'ArogyaMitra AI multimodal RAG pipeline schematic showing Voice, Text, and Image inputs routed through Flask, FAISS vector retrieval, and Google Gemini API.',
      blueprintTitle: 'MULTIMODAL MEDICAL RAG ARCHITECTURE',
      blueprintNodes: [
        {
          stage: '01 / INTAKE',
          title: 'Multimodal Input Layer',
          detail: 'Voice symptom capture, multilingual text queries & image upload via Tailwind UI',
          accent: 'terracotta',
        },
        {
          stage: '02 / RETRIEVAL',
          title: 'FAISS Vector Index',
          detail: 'Semantic chunk retrieval against verified medical reference literature',
          accent: 'sage',
        },
        {
          stage: '03 / SYNTHESIS',
          title: 'Google Gemini API + Flask',
          detail: 'Context-grounded LLM synthesis served via Flask REST endpoints & persisted in Firebase',
          accent: 'neutral',
        },
      ],
      architectureNotes:
        'Combines deterministic vector retrieval (FAISS) with multimodal LLM reasoning (Google Gemini API) behind a lightweight Flask service layer and Firebase real-time state storage.',
    },
    {
      id: 'attendx',
      index: '02',
      title: 'AttendX',
      subtitle: 'Real-Time Event Attendance & Automated Reporting Platform',
      category: 'fullstack',
      categoryLabel: 'FULL-STACK PRODUCTION SYSTEM',
      role: 'Lead Developer',
      year: '2025',
      featured: true,
      problem:
        'Manual paper sheets and disconnected spreadsheets at large college technical events created check-in bottlenecks, duplicate records, and hours of manual post-event sorting.',
      solution:
        'Designed and deployed a real-time full-stack web application on Vercel backed by Supabase authentication and PostgreSQL. Managed 400+ concurrent attendees and 1,000+ attendance logs with zero downtime, complete with CSV pre-registration and one-click automated Excel reports segmented by branch and academic year.',
      contribution: [
        'Architected a real-time full-stack web platform replacing manual attendance tracking for college events across 400+ concurrent attendees.',
        'Implemented secure coordinator authentication and PostgreSQL database management via Supabase, handling 1,000+ live data logs with zero downtime.',
        'Built multi-coordinator event workflows, bulk CSV pre-registration uploads, and automated SheetJS Excel report generation by branch and year—cutting post-event analysis time by 60%.',
      ],
      techStack: ['JavaScript (ES6+)', 'Supabase', 'PostgreSQL', 'SheetJS', 'Authentication', 'Vercel', 'Responsive UI'],
      metrics: [
        { value: '400+', label: 'Concurrent Event Attendees' },
        { value: '1,000+', label: 'Logs with Zero Downtime' },
        { value: '-60%', label: 'Post-Event Analysis Time' },
      ],
      githubUrl: 'https://github.com/Ganeshkumar841/Attendance_Tracker',
      liveUrl: 'https://attendxtracker.vercel.app/',
      image: '/images/attendx-preview.svg',
      imageAlt: 'AttendX system architecture and telemetry showing 400+ concurrent attendees, 1,000+ logs in Supabase PostgreSQL, and 60% faster Excel reporting.',
      blueprintTitle: 'REAL-TIME POSTGRESQL & REPORTING PIPELINE',
      blueprintNodes: [
        {
          stage: '01 / INGESTION',
          title: 'CSV Pre-Registration & Auth',
          detail: 'Bulk participant CSV parsing + role-guarded multi-coordinator Supabase Auth',
          accent: 'terracotta',
        },
        {
          stage: '02 / PERSISTENCE',
          title: 'Supabase PostgreSQL Engine',
          detail: ' ACID-compliant real-time check-in state handling 1,000+ logs at 100% uptime',
          accent: 'sage',
        },
        {
          stage: '03 / ANALYTICS',
          title: 'SheetJS Automated Exports',
          detail: 'Instant branch-wise & year-wise structured Excel workbooks (-60% reporting time)',
          accent: 'neutral',
        },
      ],
      architectureNotes:
        'Built for high-concurrency campus check-in desks where multiple student coordinators scan and verify attendees simultaneously against a shared PostgreSQL instance.',
    },
    {
      id: 'smart-pdf-qna',
      index: '03',
      title: 'Smart PDF & Research Paper Q&A',
      subtitle: 'Retrieval-Augmented Academic Literature Analysis Engine',
      category: 'ai',
      categoryLabel: 'LLM & DOCUMENT INTELLIGENCE',
      role: 'Developer',
      year: '2025',
      featured: true,
      problem:
        'Researchers and engineering students spend hours manually searching dense, multi-page PDFs and technical papers to extract specific experimental setups, formulas, or findings.',
      solution:
        'Built and deployed a live Retrieval-Augmented Generation (RAG) question-answering system using Python, LangChain, FAISS vector search, and the Google Gemini API. Users upload complex PDFs or research papers and query them conversationally with high factual precision.',
      contribution: [
        'Engineered an end-to-end document ingestion and chunking workflow using LangChain to preserve semantic context across long research PDFs.',
        'Integrated FAISS similarity search with the Google Gemini API to retrieve top-k relevant passages and synthesize accurate, context-bound answers.',
        'Deployed the interactive application live on Streamlit Cloud backed by a documented public GitHub repository.',
      ],
      techStack: ['Python', 'LangChain', 'FAISS', 'Google Gemini API', 'RAG', 'Streamlit Cloud'],
      metrics: [
        { value: 'LangChain', label: 'Recursive Document Chunking' },
        { value: 'FAISS', label: 'Dense Semantic Retrieval' },
        { value: 'Live App', label: 'Deployed on Streamlit Cloud' },
      ],
      githubUrl: 'https://github.com/Ganeshkumar841/pdfQnA',
      liveUrl: 'https://pdfanalyzerinternsummer.streamlit.app',
      image: '/images/smart-pdf-rag-preview.svg',
      imageAlt: 'Smart PDF and Research Paper Q&A RAG pipeline diagram illustrating PDF chunking via LangChain, FAISS vector indexing, and Gemini API synthesis.',
      blueprintTitle: 'LANGCHAIN + FAISS DOCUMENT RAG PIPELINE',
      blueprintNodes: [
        {
          stage: '01 / PARSING',
          title: 'LangChain PDF Chunking',
          detail: 'Extracts raw text from academic PDFs and splits into overlapping semantic windows',
          accent: 'terracotta',
        },
        {
          stage: '02 / EMBEDDING',
          title: 'FAISS Vector Store',
          detail: 'Indexes embeddings in memory for low-latency cosine similarity retrieval',
          accent: 'sage',
        },
        {
          stage: '03 / GENERATION',
          title: 'Gemini API + Streamlit UI',
          detail: 'Synthesizes cited answers from retrieved chunks in a live Streamlit Cloud app',
          accent: 'neutral',
        },
      ],
      architectureNotes:
        'Eliminates context-window overflow on long academic papers by retrieving only the highest-relevance semantic chunks prior to Gemini API prompt assembly.',
    },
    {
      id: 'ml-disease-credit-suite',
      index: '04',
      title: 'Multi-Disease & Credit Scoring ML Suite',
      subtitle: 'Supervised Ensemble Classification & Financial Risk Modeling',
      category: 'ai',
      categoryLabel: 'MACHINE LEARNING ENGINEERING',
      role: 'ML Intern (CodeAlpha)',
      year: '2025–2026',
      featured: false,
      problem:
        'Clinical multi-disease screening and financial creditworthiness evaluation demand high-accuracy, interpretable tabular machine learning pipelines with rigorous feature preprocessing.',
      solution:
        'Developed two end-to-end Python machine learning systems during my remote internship at CodeAlpha: a Multi-Disease Prediction classifier benchmarking SVM, XGBoost, and Random Forest (reaching 98% accuracy with Random Forest), and a full-lifecycle financial Credit Scoring model.',
      contribution: [
        'Trained and evaluated Support Vector Machine (SVM), XGBoost, and Random Forest models in Python for Multi-Disease Prediction, achieving 98% accuracy with Random Forest.',
        'Engineered a complete Credit Scoring pipeline to assess borrower creditworthiness, owning data cleaning, feature scaling, model training, and evaluation.',
        'Documented reproducible preprocessing and evaluation workflows using Pandas and Matplotlib.',
      ],
      techStack: ['Python', 'Random Forest', 'XGBoost', 'SVM', 'Pandas', 'Matplotlib', 'Data Preprocessing'],
      metrics: [
        { value: '98.0%', label: 'Random Forest Peak Accuracy' },
        { value: '3 Models', label: 'SVM, XGBoost & Random Forest' },
        { value: 'End-to-End', label: 'Preprocessing to Validation' },
      ],
      githubUrl: 'https://github.com/Ganeshkumar841',
      liveUrl: null,
      image: '/images/ml-models-preview.svg',
      imageAlt: 'Machine Learning benchmark comparison showing 98% accuracy with Random Forest alongside XGBoost and SVM pipelines.',
      blueprintTitle: 'SUPERVISED ENSEMBLE ML PIPELINE',
      blueprintNodes: [
        {
          stage: '01 / PREPROCESSING',
          title: 'Pandas Feature Pipeline',
          detail: 'Missing-value imputation, outlier handling, encoding & feature normalization',
          accent: 'terracotta',
        },
        {
          stage: '02 / BENCHMARKING',
          title: 'SVM vs. XGBoost vs. RF',
          detail: 'Cross-validated model comparison across clinical & financial risk datasets',
          accent: 'sage',
        },
        {
          stage: '03 / VALIDATION',
          title: '98% Peak Classification',
          detail: 'Random Forest ensemble selected for peak generalization & diagnostic precision',
          accent: 'neutral',
        },
      ],
      architectureNotes:
        'Demonstrates classical supervised ML rigor on structured tabular data alongside modern LLM/RAG engineering.',
    },
  ],

  skillCategories: [
    {
      id: 'ai-llm-ml',
      index: '01',
      title: 'AI, LLMs & Machine Learning',
      category: 'ai',
      description: 'Retrieval-augmented generation, vector search, prompt engineering, and supervised classification.',
      skills: [
        'Large Language Models (LLMs)',
        'Small Language Models (SLMs)',
        'RAG Architectures',
        'LangChain',
        'FAISS Vector Search',
        'Google Gemini API',
        'Prompt Engineering',
        'Random Forest',
        'XGBoost',
        'Support Vector Machines (SVM)',
      ],
    },
    {
      id: 'languages',
      index: '02',
      title: 'Programming Languages',
      category: 'both',
      description: 'Core languages used across AI pipelines, backend microservices, and strongly typed web frontends.',
      skills: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'Go', 'SQL', 'C++'],
    },
    {
      id: 'frontend',
      index: '03',
      title: 'Frontend Development',
      category: 'fullstack',
      description: 'Component-driven, accessible, responsive user interfaces with modern React and CSS architecture.',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'HTML5 & Semantic Markup',
        'CSS3',
        'Bootstrap',
        'Responsive Web Design',
        'Asynchronous JS (Promises, async/await)',
      ],
    },
    {
      id: 'backend-apis',
      index: '04',
      title: 'Backend Development & APIs',
      category: 'fullstack',
      description: 'RESTful service design, authentication flows, and scalable application servers across Node, Python, and Go.',
      skills: [
        'Node.js',
        'Express.js',
        'MERN Stack',
        'FastAPI',
        'Flask',
        'Go',
        'REST API Design',
        'Authentication & RBAC',
        'Third-Party API Integration',
      ],
    },
    {
      id: 'databases-cloud',
      index: '05',
      title: 'Databases & Cloud Infrastructure',
      category: 'both',
      description: 'Relational and document databases paired with modern cloud deployment targets.',
      skills: [
        'PostgreSQL',
        'Supabase',
        'MongoDB (NoSQL)',
        'Firebase',
        'MySQL',
        'Relational Database Design',
        'AWS',
        'Vercel',
        'Streamlit Cloud',
      ],
    },
    {
      id: 'data-tools',
      index: '06',
      title: 'Data Analysis & Engineering Workflow',
      category: 'both',
      description: 'Data wrangling, automated reporting, version control, and collaborative engineering practices.',
      skills: [
        'Pandas',
        'Matplotlib & Data Visualization',
        'Data Preprocessing',
        'SheetJS (Automated Excel Reporting)',
        'Git & GitHub',
        'CI/CD Workflows',
        'Code Reviews & Debugging',
        'Technical Documentation',
        'Linux',
      ],
    },
  ],

  experience: [
    {
      id: 'codealpha-ml-intern',
      index: '01',
      role: 'Machine Learning Intern',
      organization: 'CodeAlpha',
      location: 'Remote',
      period: 'Dec 2025 – Jan 2026',
      type: 'Internship',
      category: 'ai',
      highlights: [
        'Applied supervised machine learning techniques to build a Multi-Disease Prediction system in Python using SVM, XGBoost, and Random Forest, with Random Forest reaching 98% classification accuracy.',
        'Developed an end-to-end Credit Scoring model to assess financial creditworthiness, owning the complete lifecycle from data preprocessing and feature engineering to final validation.',
      ],
      technologies: ['Python', 'Random Forest', 'XGBoost', 'SVM', 'Pandas', 'Data Preprocessing'],
    },
    {
      id: 'freelance-billing-web',
      index: '02',
      role: 'Freelance Web Developer',
      organization: 'Billing System Web Application',
      location: 'Remote / Freelance',
      period: '2025',
      type: 'Freelance',
      category: 'fullstack',
      highlights: [
        'Diagnosed and resolved production bugs in a billing and business-management web application integrated with a Railway-hosted backend.',
        'Engineered and verified an offline mock-data fallback mechanism, eliminating client-side crashes during backend connectivity interruptions and improving overall system reliability.',
      ],
      technologies: ['JavaScript', 'REST APIs', 'Railway Backend', 'Offline Fallback Architecture', 'Debugging'],
    },
    {
      id: 'bectagon-volunteer',
      index: '03',
      role: 'Student Volunteer & Technical Coordinator',
      organization: 'Bapatla Engineering College — Bectagon Tech Coding Event',
      location: 'Bapatla, India',
      period: 'Feb 2025',
      type: 'Leadership & Volunteering',
      category: 'both',
      highlights: [
        'Applied administrative and technical coordination skills to run the Bectagon Tech Coding Event for 300+ student attendees.',
        'Streamlined participant onboarding and resolved real-time technical queries on the floor, increasing participant engagement by 25%.',
      ],
      technologies: ['Technical Operations', 'Event Coordination', 'Live Troubleshooting', 'Team Collaboration'],
    },
  ],

  education: [
    {
      id: 'btech-cse',
      degree: 'Bachelor of Technology (B.Tech) — Computer Science Engineering',
      institution: 'Bapatla Engineering College',
      location: 'Bapatla, Andhra Pradesh, India',
      period: '2024 – 2028 (Expected)',
      scoreLabel: 'CGPA',
      scoreValue: '9.4 / 10',
      highlights: [
        'Top-tier academic standing (9.4/10 CGPA) with core coursework in Data Structures, Algorithms, Relational Database Management Systems (MySQL/SQL), Operating Systems, and Object-Oriented Programming in C++ & Python.',
        'Lead developer of AttendX (deployed across college events for 400+ concurrent attendees) and active student technical coordinator.',
      ],
    },
    {
      id: 'intermediate-mpc',
      degree: 'Intermediate Education (MPC — Mathematics, Physics & Chemistry)',
      institution: 'SASI Junior College',
      location: 'Velivennu, Andhra Pradesh, India',
      period: '2022 – 2024',
      scoreLabel: 'Score',
      scoreValue: '95.4%',
      highlights: [
        'Graduated with 95.4% distinction in Mathematics, Physics, and Chemistry, building a strong analytical foundation in linear algebra, calculus, and probability for machine learning.',
      ],
    },
  ],
};
