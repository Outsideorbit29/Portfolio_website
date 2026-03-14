"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GraduationCap, Briefcase, Download, Heart, Code2, Database, Brain, Target, Cpu, Sparkles } from "lucide-react";
import { HoverPhotoReveal } from "@/components/HoverPhotoReveal";
import Link from "next/link";

const skills = [
    { name: "React / Next.js", level: 92, color: "from-blue-500 to-cyan-400" },
    { name: "TypeScript / JavaScript", level: 90, color: "from-blue-400 to-indigo-400" },
    { name: "Node.js / FastAPI", level: 86, color: "from-emerald-500 to-teal-400" },
    { name: "Python / ML", level: 85, color: "from-violet-500 to-purple-400" },
    { name: "PostgreSQL / Prisma", level: 80, color: "from-orange-500 to-amber-400" },
    { name: "LangChain / LLMs", level: 78, color: "from-pink-500 to-rose-400" },
];

const interests = [
    "Algorithmic Trading", "Machine Learning", "WebGL / Three.js",
    "Data Visualization", "UI/UX Design", "Quantitative Finance",
];

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    // Parallax values for deep layers
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    // Watermark transitions
    const profileScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    const profileOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.15, 0]);

    return (
        <div className="min-h-screen bg-transparent pt-20 md:pt-28 pb-16 px-4 md:px-8 lg:px-12 relative overflow-x-hidden" ref={containerRef}>

            {/* Massive Background Title */}
            <motion.div
                style={{ scale: profileScale, opacity: profileOpacity }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8vw] lg:text-[12vw] font-heading font-black text-white select-none pointer-events-none z-0 tracking-tighter uppercase whitespace-nowrap"
            >
                PROFILE
            </motion.div>

            {/* Header HUD */}
            <div className="flex flex-col mb-10 md:mb-12 gap-4 relative z-10 max-w-[2000px] mx-auto items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-violet-500" />
                    <span className="text-violet-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">System_Entity / 001</span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8]">
                    Anish <br />
                    <span className="text-transparent [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Kumar Gupta</span>
                </h1>
                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl text-gray-600 font-mono text-[9px] md:text-[10px] tracking-widest leading-relaxed uppercase">
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[UUID] 8B9CAD-0E1F20</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[CLASS] FULL_STACK_ENGINEER</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[SPEC] AI_ML_ARCHITECTURE</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[LOC] INDIA_VIRTUAL</div>
                </div>
            </div>

            <div className="flex flex-col gap-12 md:gap-20 lg:gap-24 pb-12 relative z-10 max-w-[2000px] mx-auto">

                {/* Section 1: Core Bio Immersive */}
                <section className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative aspect-[3/4] w-full max-w-[320px] md:max-w-md mx-auto lg:ml-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
                            <HoverPhotoReveal
                                primarySrc="/anish-anime.png"
                                secondarySrc="/anish-anime-hover.png"
                                alt="Anish Kumar Gupta"
                                revealSize={180}
                            />
                            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 z-30 flex flex-col gap-1">
                                <span className="text-[9px] md:text-[10px] text-violet-400 font-mono tracking-widest uppercase text-left">Verified Entity</span>
                                <p className="text-2xl md:text-3xl font-black text-white leading-none text-left">Anish K. Gupta</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight flex items-center justify-center lg:justify-start gap-4">
                                <Cpu className="text-violet-400" size={32} />
                                The Protocol.
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-2xl">
                                I am a <span className="text-white font-medium">Full Stack Engineer</span> obsessed with the intersection of scalable architecture and cognitive computing.
                            </p>
                            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-2xl">
                                From crafting high-fidelity neural interfaces to architecting robust backends, my methodology is rooted in <span className="text-white">Clean Code Paradigms</span>.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link href="/api/resume" download="Anish_Resume.pdf" className="px-8 py-4 rounded-xl bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:scale-105 hover:bg-violet-400 transition-all shadow-2xl inline-flex items-center gap-3">
                                <Download size={14} /> Fetch Dossier (PDF)
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4">
                            {[
                                { label: "Nodes Connected", val: "10+", icon: Target },
                                { label: "Logic Circuits", val: "20+", icon: Brain },
                                { label: "System Uptime", val: "24/7", icon: Sparkles }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-row items-center gap-6 relative overflow-hidden group hover:border-violet-500/30 transition-all text-left">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center">
                                        <stat.icon size={16} className="text-violet-400 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-heading font-black text-white tracking-tighter">{stat.val}</span>
                                        <span className="text-[9px] text-gray-500 uppercase tracking-widest font-mono">{stat.label}</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-violet-500 group-hover:w-full transition-all duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 2: Core Matrix (Skills HUD) */}
                <section className="flex flex-col gap-10 md:gap-12">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                        <div className="w-12 h-[1px] bg-blue-500" />
                        <span className="text-blue-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Core_Modules</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative glass-card bg-black/40 border border-white/5 p-6 md:p-8 rounded-3xl hover:border-violet-500/30 transition-all duration-500"
                            >
                                <div className="flex flex-col gap-4 text-left">
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-lg md:text-xl font-heading font-bold text-white group-hover:text-violet-300 transition-colors uppercase tracking-tighter">{skill.name}</h3>
                                        <span className="text-gray-500 font-mono text-[9px] md:text-[10px] tracking-widest">{skill.level}%_LOAD</span>
                                    </div>
                                    <div className="w-full bg-white/5 h-[2px] rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className={`h-full bg-gradient-to-r ${skill.color}`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section 3: Specializations */}
                <section className="flex flex-col lg:flex-row gap-12 md:gap-16">
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white flex items-center gap-4">
                            <Target className="text-blue-400" size={32} />
                            Objectives.
                        </h2>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {interests.map((tag, i) => (
                                <span key={tag} className="px-5 md:px-6 py-2 md:py-3 rounded-xl border border-white/5 bg-white/[0.02] text-[10px] md:text-sm text-gray-400 font-mono tracking-wider hover:bg-white/[0.05] hover:text-white transition-all uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 flex flex-col gap-6 relative overflow-hidden text-center lg:text-left items-center lg:items-start group hover:border-white/10 transition-all">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-widest">Philosophy</h3>
                        <p className="text-gray-500 font-light leading-relaxed italic text-lg md:text-xl lg:text-2xl max-w-xl">
                            "I believe in systems that are not just technically sound, but inherently human."
                        </p>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mt-2">
                            <div className="hidden lg:block w-10 h-[1px] bg-violet-500" />
                            <span className="text-[9px] md:text-[10px] text-violet-500 font-mono uppercase tracking-[0.2em] md:tracking-[0.3em]">Code is Poetry. Efficiency is Art.</span>
                        </div>
                    </div>
                </section>

            </div>

            {/* CTA Link */}
            <div className="mt-20 md:mt-24 text-center relative z-10">
                <Link href="/experience" className="group text-4xl md:text-7xl font-heading font-black text-white hover:text-violet-400 transition-colors duration-500 tracking-tighter uppercase leading-none md:leading-[0.8] block">
                    View History <br />
                    <span className="text-white [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Timeline </span>
                    <span className="text-violet-400">→</span>
                </Link>
            </div>

        </div>
    );
}
