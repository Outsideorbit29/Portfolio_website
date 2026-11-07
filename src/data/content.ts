// Site content, shared by the long home page and the individual pages.
// The resume (public/resume.pdf) is the source of truth for these facts.

export const person = {
    name: "Anish Kumar Gupta",
    shortName: "Anish Kumar",
    title: "Full Stack Software Engineer",
    location: "Dhanbad, India",
    education: "B.Tech CSE, VIT Bhopal (2022 - 2026)",
    email: "anish.grd2004@gmail.com",
    phone: "+91 6299293388",
    phoneHref: "tel:+916299293388",
};

export const socials = [
    { name: "GitHub", href: "https://github.com/Outsideorbit29" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/anish-kumar-gupta-6a9b50251" },
    { name: "X (Twitter)", href: "https://x.com/Anish_029" },
    { name: "Instagram", href: "https://instagram.com/k_anish_29" },
];

export interface Project {
    id: string;
    title: string;
    description: string;
    year: string;
    tech: string[];
    image: string;
    // Each button only appears when its URL is set.
    links?: {
        github?: string;
        demo?: string;
    };
    details: {
        role: string;
        context: string;
        outcome: string;
    };
}

export const projects: Project[] = [
    {
        id: "01",
        title: "EdgeBook",
        description: "Trading journal for Delta Exchange that rebuilds every trade from your account history and shows what each habit costs you, with AI reviews and a Telegram bot for journaling.",
        year: "2026",
        tech: ["Next.js", "TypeScript", "Turso", "Clerk", "AI SDK"],
        image: "/projects/edgebook.png",
        links: {
            demo: "https://delta-journal-three.vercel.app",
        },
        details: {
            role: "Full Stack Developer",
            context: "Helps traders find the behaviours that lose them money, such as moving stops or trading on a losing streak.",
            outcome: "Live with a public demo account and an open waitlist.",
        },
    },
    {
        id: "02",
        title: "BullAI",
        description: "Generates equity research report PDFs from company financial documents. Upload a PDF, CSV or TXT file and AI extracts the key data into a report with tables, charts and written analysis.",
        year: "2026",
        tech: ["FastAPI", "Python", "Gemini", "ReportLab", "Matplotlib"],
        image: "/projects/bullai.png",
        links: {
            github: "https://github.com/Outsideorbit29/Bullai",
            demo: "https://bullai-9she.onrender.com",
        },
        details: {
            role: "Full Stack Developer",
            context: "Automates brokerage-style research reports from raw financial filings.",
            outcome: "Live tool that turns an uploaded document into a downloadable PDF report.",
        },
    },
    {
        id: "03",
        title: "CartShare",
        description: "Collaborative shopping cart for dorm rooms, office teams and travel groups. Create a room, share its code, and add items to one cart with an activity log and printable receipt.",
        year: "2026",
        tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap 5", "BroadcastChannel API"],
        image: "/projects/cartshare.png",
        links: {
            github: "https://github.com/Outsideorbit29/Cartshare",
            demo: "https://cartshare-delta.vercel.app",
        },
        details: {
            role: "Frontend Developer",
            context: "Makes shared group purchases transparent, with no backend or framework.",
            outcome: "57-product catalog with instant cart sync across browser tabs.",
        },
    },
    {
        id: "04",
        title: "Trading Hand",
        description: "AI-powered algorithmic trading platform for real-time multi-asset portfolio tracking, with an ML-based trade journal that surfaces profitable patterns and recurring mistakes.",
        year: "2024",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MetaTrader5 API"],
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2560&auto=format&fit=crop",
        details: {
            role: "Full Stack Developer",
            context: "Dashboards for win rate, drawdown, Sharpe ratio and portfolio performance.",
            outcome: "Cut trade analysis time by 65%.",
        },
    },
    {
        id: "05",
        title: "Dhruv Tara",
        description: "AI-powered EdTech platform with lecture transcription, NLP-based summarization, structured note generation and context-aware AI Q&A.",
        year: "2024",
        tech: ["React.js", "Python", "FastAPI", "LangChain", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2560&auto=format&fit=crop",
        details: {
            role: "Full Stack Developer",
            context: "Helps students prepare faster from their lecture content.",
            outcome: "Used by 200+ students, cutting preparation time to about one-third.",
        },
    },
];

// Anchor id for a project on the Projects page, e.g. "trading-hand".
export const projectSlug = (p: Project) => p.title.toLowerCase().replace(/\s+/g, "-");

export const experience = [
    {
        id: "trading-hand",
        role: "Full Stack Developer",
        company: "Trading Hand - AI-Powered Algorithmic Trading Platform",
        shortCompany: "Trading Hand",
        date: "Jun 2024 - Present",
        description: "Built a trading analytics platform for real-time multi-asset portfolio tracking, with an ML-based journal that surfaces profitable patterns and recurring mistakes, cutting trade analysis time by 65%.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MetaTrader5 API"],
        type: "Experience",
    },
    {
        id: "dhruv-tara",
        role: "Full Stack Developer",
        company: "Dhruv Tara - AI-Powered EdTech Platform",
        shortCompany: "Dhruv Tara",
        date: "Jan 2024 - May 2024",
        description: "Launched an EdTech platform with lecture transcription, NLP-based summarization, note generation and AI Q&A for 200+ students. Built a modular FastAPI backend that lowered average request latency by 50%.",
        tech: ["React.js", "Python", "FastAPI", "LangChain", "PostgreSQL"],
        type: "Experience",
    },
    {
        id: "stock-overflow",
        role: "Winner - Stock Overflow Hackathon",
        company: "Data Science Club, VIT Bhopal",
        shortCompany: "Stock Overflow Hackathon",
        date: "2024",
        description: "Won 1st place, outperforming 50+ competing teams, with ML/DL-based stock price prediction models and predictive visualizations.",
        tech: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
        type: "Achievement",
    },
    {
        id: "ey-techathon",
        role: "Full Stack Developer",
        company: "EY Techathon 6.0 | Unstop",
        shortCompany: "EY Techathon 6.0",
        date: "2024",
        description: "Selected as Full Stack Developer for the techathon, working across a React and Node.js solution from frontend to backend.",
        tech: ["React.js", "Node.js", "Express", "MongoDB"],
        type: "Experience",
    },
];

export const certifications = [
    { title: "Generative AI Certification", issuer: "IBM", year: "2025" },
    { title: "Full Stack Web Development Certification", issuer: "Udemy Professional", year: "2024" },
];

export const skillGroups = [
    {
        category: "Languages",
        items: [
            { name: "TypeScript / ES6+", spec: "Strong Typing / Async Control" },
            { name: "Python / 3.x", spec: "Algorithmic Efficiency" },
            { name: "Java / Bash", spec: "Core Programming & Scripting" },
            { name: "PostgreSQL / SQL", spec: "Structured Query Logic" },
        ],
    },
    {
        category: "Frontend",
        items: [
            { name: "React / Next.js", spec: "Scalable SSR Architecture" },
            { name: "Tailwind / Framer", spec: "Advanced Motion Systems" },
            { name: "Three.js / WebGL", spec: "Immersive 3D Rendering" },
            { name: "Redux / Responsive UI", spec: "State Management & Layout" },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js / Express", spec: "High-throughput Runtime" },
            { name: "FastAPI / Python", spec: "Typed API Acceleration" },
            { name: "Docker / GitHub Actions", spec: "CI/CD & Deployment" },
            { name: "MongoDB / MySQL", spec: "Query Optimization & Data Modeling" },
        ],
    },
    {
        category: "AI / ML",
        items: [
            { name: "TensorFlow / Scikit-learn", spec: "Deep Learning Frameworks" },
            { name: "LangChain / RAG", spec: "LLM Orchestration Systems" },
            { name: "NLP / Generative AI", spec: "Foundation Models & Prompt Engineering" },
            { name: "DataViz / Pandas", spec: "Statistical Synthesis" },
        ],
    },
];

// Where each core skill was used, shown on the About page.
export const coreSkills = [
    { name: "React / Next.js", usedIn: "EdgeBook, Trading Hand, Dhruv Tara" },
    { name: "TypeScript / JavaScript", usedIn: "EdgeBook, CartShare, this site" },
    { name: "Node.js / Express", usedIn: "Trading Hand, EY Techathon" },
    { name: "Python / FastAPI", usedIn: "BullAI, Dhruv Tara" },
    { name: "AI / Machine Learning", usedIn: "BullAI, Dhruv Tara, Stock Overflow" },
    { name: "UI / Interaction", usedIn: "CartShare, this site" },
];

