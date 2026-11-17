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
        video?: string;
    };
    details: {
        role: string;
        context: string;
        outcome: string;
    };
    // Optional short "how to use it" steps, shown on the Projects page.
    guide?: string[];
}

export const projects: Project[] = [
    {
        id: "01",
        title: "Wind Forecast Desk",
        description: "Decision tool for a UK utility's day-ahead power buying team. It shows the latest Elexon wind forecast that was actually available at the auction cutoff, turns it into a bias-corrected plan with low-wind cover, and scores every forecast against metered wind output for January 2026.",
        year: "2026",
        tech: ["React", "TypeScript", "FastAPI", "Python", "Docker", "Vercel"],
        image: "/projects/wind-forecast-desk.png",
        links: {
            demo: "https://gb-wind-forecast-desk.vercel.app",
            github: "https://github.com/Outsideorbit29/kkrtj_ffty",
        },
        details: {
            role: "Full Stack Developer",
            context: "Buyers commit to tomorrow's power at 09:20 today, so they need to know how far to trust the wind forecast they had at that moment, not the one published later.",
            outcome: "Bias correction cuts the hourly error by 29% (2.0 GW to 1.4 GW) and beats a naive baseline by 50%, backed by 88 Python and 24 frontend tests.",
        },
        guide: [
            "Overview: pick a delivery range to see how far off the forecast was, which way it missed, and an hour-by-day error heatmap.",
            "Day-ahead decision: choose a decision date and auction cutoff. Only forecast runs published before the cutoff are used, and you get a plan, a low-wind cover figure and a decision ticket.",
            "Forecast accuracy: see how the error changes by hour of day and by how far ahead the forecast was made, and compare models.",
            "Data explorer: filter every delivery hour to check the numbers behind any chart.",
        ],
    },
    {
        id: "02",
        title: "Alex",
        description: "Personal AI voice assistant for Windows. It opens apps, files and sites when you ask in English, Hindi or a mix, builds a ranked daily brief from Gmail and Calendar, and reads Chrome tabs and WhatsApp Web through its own extension.",
        year: "2026",
        tech: ["Python", "FastAPI", "faster-whisper", "Claude API", "Chrome Extension"],
        image: "/projects/alex.png",
        links: {
            github: "https://github.com/Outsideorbit29/alex-voice-assistant",
        },
        details: {
            role: "Full Stack Developer",
            context: "Runs on your own PC, so you can control the computer and catch up on mail, meetings and chats by voice.",
            outcome: "Understands a spoken command in about 0.6 seconds on the GPU, backed by 512 Python and 108 extension tests.",
        },
    },
    {
        id: "03",
        title: "Hardwon",
        description: "AI trading journal that syncs with your broker account, so there is no manual trade logging. It reviews every trade, spots recurring mistakes and habits across sessions, and suggests what to fix.",
        year: "2025",
        tech: ["Next.js", "TypeScript", "Turso", "Clerk", "AI SDK"],
        image: "/projects/edgebook.png",
        links: {
            demo: "https://hardwon.in",
        },
        details: {
            role: "Founder & Full Stack Developer",
            context: "Helps traders find the behaviours that lose them money, such as overtrading, revenge trades and broken rules.",
            outcome: "Grew from a personal tool into a multi-user platform now rolling out to the public.",
        },
    },
    {
        id: "04",
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
        id: "05",
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
        id: "06",
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
        id: "07",
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
        id: "hardwon",
        role: "Founder & Full Stack Developer",
        company: "Hardwon - AI Trading Journal & Performance Analytics",
        shortCompany: "Hardwon",
        date: "2025 - Present",
        description: "Built an AI trading journal that syncs with the trader's broker account, reviews every trade, and flags session-level habits like overtrading, revenge trades and rule breaks. Took it from a personal tool to a multi-user platform, owning product, frontend, backend and deployment.",
        tech: ["Next.js", "TypeScript", "Turso", "Clerk", "AI SDK"],
        type: "Experience",
    },
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
            { name: "LangChain / LangGraph", spec: "Agent Orchestration" },
            { name: "CrewAI / AutoGen / MCP", spec: "Multi-Agent Systems & Tool Calling" },
            { name: "RAG / pgvector", spec: "Retrieval & Vector Databases" },
            { name: "Claude API / Hugging Face", spec: "LLMs & Prompt Engineering" },
            { name: "TensorFlow / Scikit-learn", spec: "Machine Learning Frameworks" },
            { name: "n8n / Zapier / Make", spec: "Workflow Automation" },
        ],
    },
];

// Where each core skill was used, shown on the About page.
export const coreSkills = [
    { name: "React / Next.js", usedIn: "Hardwon, Trading Hand, Dhruv Tara" },
    { name: "TypeScript / JavaScript", usedIn: "Hardwon, CartShare, this site" },
    { name: "Node.js / Express", usedIn: "Trading Hand, EY Techathon" },
    { name: "Python / FastAPI", usedIn: "BullAI, Dhruv Tara" },
    { name: "AI / Machine Learning", usedIn: "BullAI, Dhruv Tara, Stock Overflow" },
    { name: "UI / Interaction", usedIn: "CartShare, this site" },
];

