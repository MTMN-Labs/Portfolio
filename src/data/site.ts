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
    bio: "Agentic AI engineer with over two years of industry experience across generative AI, data science and enterprise backends. He works on a multi-tenant agentic automation platform built on FastAPI, Temporal, LangGraph, PostgreSQL with pgvector, Redis and Azure Container Apps, spanning 55 feature modules and 41 third party connectors, where he designed and shipped the self-improving agent memory: semantic recall over pgvector, fact extraction behind a single write chokepoint, deduplication, contradiction retirement and time decay, with security built in through a secret-pattern guard, refusal of text lifted from tool output and a full audit trail. He also acts as the platform's agentic security reviewer, covering prompt injection, tool poisoning across MCP clients and servers, sandbox escape, capability gating and multi-tenant isolation. Earlier he engineered on a retail banking platform used by more than seven million people. His final year project, SecureSphere-LLM, is a security middleware that inspects prompts between developer tools and LLMs. A four time gold medalist in computer science.",
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
    kicker: "Audio AI for devotional recitation",
    status: "In build",
    summary:
      "A vocal studio for reciters of Noha, Naat, Manqabat and Soz. It listens to a take, finds probable pitch slips and tells them apart from intentional ornament by comparing each line with the other repeats of the same line, then cleans and renders the recording.",
    points: [
      "Slip Finder: pitch tracked in cents against a drifting tonic, lines aligned with DTW, every flagged event comes with a reason a human can read",
      "A full DSP chain from declip and hum removal to loudness, built on a permissive licence stack with a Python reference and golden test vectors",
      "Web Lite runs in the browser on WebAssembly; Desktop Pro ships as a Tauri shell with a native core",
    ],
    stack: ["Python", "NumPy", "librosa", "C++", "WebAssembly", "ONNX Runtime", "Tauri"],
  },
  {
    index: "02",
    name: "Final Year Project",
    kicker: "Applied AI research, placeholder",
    status: "Docs pending",
    summary:
      "Placeholder. This card will describe the final year project once its documents are shared. Replace this text in src/data/site.ts.",
    points: [
      "Problem statement and who it is for",
      "Approach, data and models",
      "Results and what ships",
    ],
    stack: ["PyTorch", "FastAPI", "Next.js"],
    placeholder: true,
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
