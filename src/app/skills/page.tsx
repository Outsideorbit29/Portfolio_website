"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Database, Lightbulb, Wrench, Cpu, Zap, Activity, Code2 } from "lucide-react";
import Link from "next/link";

const skillsData = [
    {
        category: "Logic_Execution",
        id: "LANG_CORE",
        icon: <Code2 className="w-8 h-8 text-pink-500" />,
        items: [
            { name: "TypeScript / ES6+", level: 90, spec: "Strong Typing / Async Control" },
            { name: "Python / 3.x", level: 88, spec: "Algorithmic Efficiency" },
            { name: "C++ / Fundamentals", level: 75, spec: "Low-level Concepts" },
            { name: "PostgreSQL / SQL", level: 82, spec: "Structured Query Logic" }
        ]
    },
    {
        category: "Interface_Modules",
        id: "FRONT_UX",
        icon: <MonitorPlay className="w-8 h-8 text-blue-500" />,
        items: [
            { name: "React / Next.js", level: 92, spec: "Scalable SSR Architecture" },
            { name: "Tailwind / Framer", level: 90, spec: "Advanced Motion Systems" },
            { name: "Three.js / WebGL", level: 75, spec: "Immersive 3D Rendering" },
            { name: "Figma / Interaction", level: 78, spec: "Rapid Visual Prototyping" }
        ]
    },
    {
        category: "Engine_Backends",
        id: "CORE_API",
        icon: <Database className="w-8 h-8 text-emerald-500" />,
        items: [
            { name: "Node.js / Express", level: 88, spec: "High-throughput Runtime" },
            { name: "FastAPI / Python", level: 85, spec: "Typed API Acceleration" },
            { name: "Docker / Deploy", level: 78, spec: "Containerized Orchestration" },
            { name: "Prisma / TypeORM", level: 82, spec: "Data Object Management" }
        ]
    },
    {
        category: "Cognitive_Intelligence",
        id: "AI_ML",
        icon: <Lightbulb className="w-8 h-8 text-violet-500" />,
        items: [
            { name: "TensorFlow / PT", level: 84, spec: "Deep Learning Frameworks" },
            { name: "LangChain / RAG", level: 82, spec: "LLM Orchestration Systems" },
            { name: "Ollama / LocalAI", level: 80, spec: "Edge Inference Deployments" },
            { name: "DataViz / Pandas", level: 88, spec: "Statistical Synthesis" }
        ]
    }
];

export default function Skills() {
    return (
        <div className="min-h-screen bg-transparent pt-20 md:pt-28 pb-16 px-4 md:px-8 lg:px-12 relative overflow-x-hidden">

            {/* Header HUD */}
            <div className="flex flex-col mb-12 md:mb-16 gap-4 relative z-10 max-w-[2200px] mx-auto items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-pink-500" />
                    <span className="text-pink-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Inventory / Capabilities</span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8] font-sans">
                    System <br />
                    <span className="text-transparent [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Arsenal</span>
                </h1>
                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl text-gray-600 font-mono text-[9px] md:text-[10px] tracking-widest leading-relaxed uppercase">
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[MOD] 12_LOADED</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[SYS] CAP_ALLOCATED</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[OPT] HIGH_PRECISION</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[INT] NEURAL_CONNECTED</div>
                </div>
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
                                <div className="flex flex-col">
                                    <span className="text-[8px] md:text-[10px] text-pink-500 font-mono tracking-widest uppercase">Sub_System / {category.id}</span>
                                    <h2 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase font-sans">{category.category}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 md:gap-8">
                            {category.items.map((skill, i) => (
                                <div key={skill.name} className="flex flex-col gap-2 md:gap-3">
                                    <div className="flex justify-between items-end">
                                        <div className="flex flex-col">
                                            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{skill.name}</h3>
                                            <span className="text-[8px] md:text-[9px] text-gray-500 font-mono uppercase tracking-[0.2em]">{skill.spec}</span>
                                        </div>
                                        <span className="text-gray-400 font-mono text-[10px] md:text-xs">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-white/[0.02] h-[3px] rounded-full overflow-hidden border border-white/5 p-[1px]">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-pink-600 via-pink-400 to-violet-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Footer Project Link */}
            <div className="mt-16 md:mt-24 text-center relative z-10 mb-12">
                <Link href="/projects" className="group text-4xl md:text-7xl lg:text-9xl font-black text-white hover:text-pink-400 transition-colors duration-500 tracking-tighter uppercase leading-none md:leading-[0.8] block font-sans">
                    Deploy <br />
                    <span className="text-white [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Execution </span>
                    <span className="text-pink-400">→</span>
                </Link>
            </div>

        </div>
    );
}
