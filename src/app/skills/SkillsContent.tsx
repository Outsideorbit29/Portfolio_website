"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Database, Lightbulb, Wrench, Cpu, Zap, Activity, Code2 } from "lucide-react";
import Link from "next/link";

const skillsData = [
    {
        category: "Languages",
        id: "LANG_CORE",
        icon: <Code2 className="w-8 h-8 text-pink-500" />,
        items: [
            { name: "TypeScript / ES6+", spec: "Strong Typing / Async Control" },
            { name: "Python / 3.x", spec: "Algorithmic Efficiency" },
            { name: "Java / Bash", spec: "Core Programming & Scripting" },
            { name: "PostgreSQL / SQL", spec: "Structured Query Logic" }
        ]
    },
    {
        category: "Frontend",
        id: "FRONT_UX",
        icon: <MonitorPlay className="w-8 h-8 text-blue-500" />,
        items: [
            { name: "React / Next.js", spec: "Scalable SSR Architecture" },
            { name: "Tailwind / Framer", spec: "Advanced Motion Systems" },
            { name: "Three.js / WebGL", spec: "Immersive 3D Rendering" },
            { name: "Redux / Responsive UI", spec: "State Management & Layout" }
        ]
    },
    {
        category: "Backend",
        id: "CORE_API",
        icon: <Database className="w-8 h-8 text-emerald-500" />,
        items: [
            { name: "Node.js / Express", spec: "High-throughput Runtime" },
            { name: "FastAPI / Python", spec: "Typed API Acceleration" },
            { name: "Docker / GitHub Actions", spec: "CI/CD & Deployment" },
            { name: "MongoDB / MySQL", spec: "Query Optimization & Data Modeling" }
        ]
    },
    {
        category: "AI / ML",
        id: "AI_ML",
        icon: <Lightbulb className="w-8 h-8 text-violet-500" />,
        items: [
            { name: "TensorFlow / Scikit-learn", spec: "Deep Learning Frameworks" },
            { name: "LangChain / RAG", spec: "LLM Orchestration Systems" },
            { name: "NLP / Generative AI", spec: "Foundation Models & Prompt Engineering" },
            { name: "DataViz / Pandas", spec: "Statistical Synthesis" }
        ]
    }
];

export default function SkillsContent() {
    return (
        <div className="min-h-screen bg-transparent pt-20 md:pt-28 pb-16 px-4 md:px-8 lg:px-12 relative overflow-x-hidden">

            {/* Header HUD */}
            <div className="flex flex-col mb-12 md:mb-16 gap-4 relative z-10 max-w-[2200px] mx-auto items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-pink-500" />
                    <span className="text-pink-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Skills</span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8]">
                    Anish Kumar <br />
                    <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">Arsenal</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 relative z-10 max-w-[2200px] mx-auto">
                {skillsData.map((category, idx) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col glass-card bg-black/40 border border-white/5 rounded-[2rem] p-6 md:p-8 overflow-hidden relative hover:border-pink-500/20 transition-all duration-700 text-left"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:scale-110 transition-all">
                                    {category.icon}
                                </div>
                                <h2 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase">{category.category}</h2>
                            </div>
                        </div>

                        <ul className="flex flex-col gap-5 md:gap-6">
                            {category.items.map((skill) => (
                                <li key={skill.name} className="flex flex-col gap-1">
                                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{skill.name}</h3>
                                    <p className="text-gray-400 text-base">{skill.spec}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Footer Project Link */}
            <div className="mt-16 md:mt-24 text-center relative z-10 mb-12">
                <Link href="/projects" className="group text-4xl md:text-7xl lg:text-9xl font-black text-white hover:text-pink-400 transition-colors duration-500 tracking-tighter uppercase leading-none md:leading-[0.8] block font-heading">
                    See My <br />
                    <span className="text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Projects </span>
                    <span className="text-pink-400">→</span>
                </Link>
            </div>

        </div>
    );
}
