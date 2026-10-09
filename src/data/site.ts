// Every piece of copy on the site lives here. Edit text, links and
// placeholders in this file; the components only render what they find.

export const site = {
  name: "MTMN Labs",
  short: "MTMN",
  tagline: "Software and AI development studio",
  email: "mehdiali78666@gmail.com",
  location: "Karachi, Pakistan",
  description:
    "MTMN Labs is a four person engineering studio building AI systems, web platforms and custom software for founders and businesses, from first call to production.",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { value: "4", label: "Engineers" },
    { value: "3", label: "Products in build" },
    { value: "25+", label: "Projects shipped" },
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "PyTorch",
    "LangChain",
    "LangGraph",
    "vLLM",
    "PostgreSQL",
    "Docker",
    "Azure",
    "AWS",
    "ONNX",
    "WebAssembly",
    "Tauri",
  ],
};

export type Member = {
  slug: string;
  name: string;
  first: string;
  role: string;
  line: string;
  bio: string;
  skills: string[];
  photo: string;
  // where the face sits in the photo, used for object-position
  focus: string;
  linkedin: string;
  github: string;
  email: string;
};

// Order matters: this is the order the orbit and the team swapper follow.
export const team: Member[] = [
  {
    slug: "mehdi",
    name: "Syed Muhammad Mehdi Abidi",
    first: "Mehdi",
    role: "Agentic AI and Backend Engineer",
    line: "Agent memory, LLM security, multi-tenant platforms",
    bio: "Agentic AI engineer with over two years of experience across generative AI, data science and enterprise backends. He works on a multi-tenant agentic automation platform (FastAPI, Temporal, LangGraph, pgvector, Azure) with 55 feature modules and 41 connectors, where he designed and shipped its self-improving agent memory with security built in, and acts as its agentic security reviewer covering prompt injection, tool poisoning across MCP, sandbox escape and tenant isolation. Earlier he engineered on a banking platform used by more than seven million people. A four time gold medalist in computer science.",
    skills: ["Python", "FastAPI", "LangGraph", "Temporal", "pgvector", "MCP", "LLM Guardrails", "Redis", "Azure", "PostgreSQL"],
    photo: "/team/mehdi.png",
    focus: "50% 20%",
    linkedin: "https://linkedin.com/in/mehdiabidii",
    github: "https://github.com/Mehdi-Abidi",
    email: "mehdiali78666@gmail.com",
  },
  {
    slug: "mufeed",
    name: "Syed Muhammad Mufeed Haider",
    first: "Mufeed",
    role: "Machine Learning Engineer",
    line: "Time series forecasting, model evaluation, MLOps",
    bio: "Machine learning engineer focused on forecasting, rigorous evaluation and systems that run without supervision. He built a city scale air quality forecaster that retrains itself every night, has run unattended for more than 110 nights, and beats a persistence baseline by 30 percent on live data. He led a three person research team on cross lingual audio deepfake detection, with a first author paper in preparation. On the business side he has closed over PKR 14 million in sponsorships for national technology events.",
    skills: ["Python", "XGBoost", "LightGBM", "PyTorch", "scikit-learn", "SHAP", "Conformal Prediction", "GitHub Actions", "FastAPI", "Streamlit"],
    photo: "/team/mufeed.png",
    focus: "50% 25%",
    linkedin: "https://linkedin.com/in/mufeed-zaidi",
    github: "https://github.com/MufeedHaider",
    email: "mufeedzaidi786@gmail.com",
  },
  {
    slug: "taha",
    name: "Syed Taha Zaidi",
    first: "Taha",
    role: "AI Engineer, Speech and LLMs",
    line: "Custom LLM serving, voice AI, multi agent systems",
    bio: "AI engineer and researcher working on speech, LLMs and multi agent systems, with full stack and business development experience. He owns the production deployment of a custom enterprise LLM on bare metal GPUs, fine tuned and served with vLLM, and architected the AI services around it for ERP, HR and voice platforms. He leads an Urdu first conversational voice AI engine and a demand forecasting engine. Rector's Gold Medalist, with more than two years of B2B sales experience closing five figure software deals.",
    skills: ["Python", "TypeScript", "vLLM", "LoRA / QLoRA", "LangGraph", "Whisper", "Pipecat", "Next.js", ".NET", "Docker"],
    photo: "/team/taha.png",
    focus: "50% 30%",
    linkedin: "https://linkedin.com/in/taha-zaidii",
    github: "https://github.com/taha-zaidii",
    email: "tahazaidi2004@gmail.com",
  },
  {
    slug: "naqi",
    name: "Syed Ali Naqi Naqvi",
    first: "Naqi",
    role: "AI Engineer, Applied ML",
    line: "Chatbots, RAG pipelines, computer vision, FastAPI",
    bio: "AI engineer building LLM powered chatbots, RAG pipelines, computer vision systems and full stack automation tools. He has taken AI systems from prototype to deployment across industry roles and academic work, with projects covering a company policy assistant, a car damage inspector built on YOLO, and an IELTS speaking coach that combines vision and NLP. Comfortable across Python, FastAPI, React and the Microsoft Power Platform.",
    skills: ["Python", "FastAPI", "Streamlit", "React", "Node.js", "YOLO", "RAG", "Fine-tuning", "Power Platform", "SQL"],
    photo: "/team/naqi.jpg",
    focus: "50% 18%",
    linkedin: "https://linkedin.com/in/naqi-naqvi-6b4050323",
    github: "https://github.com/naqinaqviii",
    email: "snaqi1512@gmail.com",
  },
];

export type Project = {
  index: string;
  name: string;
  kicker: string;
  status: string;
  summary: string;
  points: string[];
  stack: string[];
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Vivid Vocal Studio",
    kicker: "Audio AI for singers",
    status: "In build",
    summary:
      "A vocal studio for singers who record on their phones in ordinary rooms. It cleans up a take, suggests pitch fixes it is sure about, leaves everything else to the singer, and renders a finished recording. Priced for emerging markets first, with a global Pro tier to follow.",
    points: [
      "Lite is an installable web app that works offline after the first visit: clean-up, room reverb, key correction, Slip Finder in review-only mode, backing-voice thickener and 720p export, sold as a season pass through local payment wallets",
      "Pro is a desktop app built on a Tauri shell with a native core: auto-fix with review, pitch contour editor, 1080p long-form export and a commercial licence",
      "One DSP chain from declip and hum removal to loudness, specified once in a Python reference with golden test vectors, then compiled to WebAssembly for the browser and to native code for the desktop",
      "Validated before any build: a month of singer interviews, real room recordings, and microphone capture tests on budget Android phones",
    ],
    stack: ["WebAssembly", "C++", "Tauri", "ONNX Runtime", "Supabase", "Cloudflare", "Python"],
  },
  {
    index: "02",
    name: "FYP Copilot",
    kicker: "From first idea to first job",
    status: "Pilot from November 2026",
    summary:
      "One app where a final year project group plans and does its work, every member's share is confirmed by teammates and the supervisor, and that verified record becomes a profile companies use to hire fresh graduates. Built from a survey of students whose biggest pains were teammates not pulling their weight, choosing a strong idea, and finding a job after graduation.",
    points: [
      "Group room with tasks that a teammate confirms, 30 second weekly check-ins, private share ratings three times a project, and a one screen supervisor view with a sign-off button and no account needed",
      "Fair credit shown as a band, Core, Major or Supporting, with evidence beside it from confirmed tasks and read-only GitHub activity; students preview and can contest before anything goes public",
      "A verified student profile and one page resume that recruiters search skills first, with university and grade filters off by default and a knock-first rule before any contact",
      "Free for students; companies, departments and partners pay. AI coaches and checks but never writes graded work, and student data is never sold",
    ],
    stack: ["Next.js", "Supabase", "Cloudflare", "GitHub API", "Groq", "PostHog"],
  },
  {
    index: "03",
    name: "Carpool Platform",
    kicker: "Mobility, placeholder",
    status: "Docs pending",
    summary:
      "Placeholder. A ride sharing platform for daily commuters with route matching, live tracking and trusted profiles. Replace this text in src/data/site.ts once the docs are shared.",
    points: [
      "Route matching for recurring commutes",
      "Live tracking and trusted, verified profiles",
      "Payments and ride history",
    ],
    stack: ["Next.js", "PostgreSQL", "Maps API"],
    placeholder: true,
  },
];

export const services = [
  {
    index: "01",
    title: "AI product development",
    text: "LLM applications, RAG pipelines, agents and voice systems, designed around your data and shipped with guardrails, evaluation and monitoring.",
    tags: ["LLM apps", "RAG", "Agents", "Voice AI"],
  },
  {
    index: "02",
    title: "Machine learning systems",
    text: "Forecasting, classification and computer vision models that are evaluated honestly, retrain on schedule and run without supervision.",
    tags: ["Forecasting", "Computer vision", "MLOps"],
  },
  {
    index: "03",
    title: "Web platforms",
    text: "Fast, accessible products on Next.js and React with typed APIs, clean data models and the deployment pipeline to match.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    index: "04",
    title: "Backend and APIs",
    text: "Python and .NET services, PostgreSQL schemas, authentication, queues and integrations built for systems that have to stay up.",
    tags: ["FastAPI", ".NET", "PostgreSQL"],
  },
  {
    index: "05",
    title: "Custom LLM deployment",
    text: "Fine tuning, quantisation and self hosted serving on your own GPUs, so your model and your data stay in your building.",
    tags: ["Fine-tuning", "vLLM", "On-prem"],
  },
  {
    index: "06",
    title: "Audio and signal processing",
    text: "Pitch tracking, noise reduction, speech pipelines and DSP chains that run in the browser and on the desktop from one codebase.",
    tags: ["DSP", "WebAssembly", "Speech"],
  },
];

export const process = [
  { step: "01", title: "Call", text: "A short conversation about the problem, the users and what done looks like." },
  { step: "02", title: "Scope", text: "A written plan with milestones, a stack decision and a price before any code." },
  { step: "03", title: "Build", text: "Weekly demos on a live link. You see the product grow, not a status report." },
  { step: "04", title: "Ship", text: "Deployment, handover docs and a month of support after launch." },
];
