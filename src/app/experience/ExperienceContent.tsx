"use client";

import { motion } from "framer-motion";
import { Download, Award, Briefcase, Calendar, Cpu, Zap, Activity, Globe } from "lucide-react";
import Link from "next/link";

const experienceData = [
    {
        id: "trading-hand",
        role: "Full Stack Developer",
        company: "Trading Hand - AI-Powered Algorithmic Trading Platform",
        date: "Jun 2024 - Present",
        description: "Built a trading analytics platform for real-time multi-asset portfolio tracking, with an ML-based journal that surfaces profitable patterns and recurring mistakes, cutting trade analysis time by 65%.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MetaTrader5 API"],
        type: "Experience"
    },
    {
        id: "dhruv-tara",
        role: "Full Stack Developer",
        company: "Dhruv Tara - AI-Powered EdTech Platform",
        date: "Jan 2024 - May 2024",
        description: "Launched an EdTech platform with lecture transcription, NLP-based summarization, note generation and AI Q&A for 200+ students. Built a modular FastAPI backend that lowered average request latency by 50%.",
        tech: ["React.js", "Python", "FastAPI", "LangChain", "PostgreSQL"],
        type: "Experience"
    },
    {
        id: "stock-overflow",
        role: "Winner - Stock Overflow Hackathon",
        company: "Data Science Club, VIT Bhopal",
        date: "2024",
        description: "Won 1st place, outperforming 50+ competing teams, with ML/DL-based stock price prediction models and predictive visualizations.",
        tech: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
        type: "Achievement"
    },
    {
        id: "ey-techathon",
        role: "Full Stack Developer",
        company: "EY Techathon 6.0 | Unstop",
        date: "2024",
        description: "Selected as Full Stack Developer for the techathon, working across a React and Node.js solution from frontend to backend.",
        tech: ["React.js", "Node.js", "Express", "MongoDB"],
        type: "Experience"
    }
];

const certifications = [
    { title: "Generative AI Certification", issuer: "IBM", year: "2025" },
    { title: "Full Stack Web Development Certification", issuer: "Udemy Professional", year: "2024" }
];

export default function ExperienceContent() {
    return (
        <div className="min-h-screen bg-transparent pt-20 md:pt-28 pb-16 px-4 md:px-8 lg:px-12 relative overflow-x-hidden">

            {/* Header HUD */}
            <div className="flex flex-col mb-12 md:mb-16 gap-4 relative z-10 max-w-[2200px] mx-auto items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-emerald-500" />
                    <span className="text-emerald-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Experience</span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8]">
                    Anish Kumar <br />
                    <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">Gupta Log</span>
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 md:gap-16 relative z-10 max-w-[2200px] mx-auto">

                {/* Left: Interactive Timeline Reel */}
                <div className="w-full lg:w-2/3 flex flex-col gap-8 md:gap-10">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                        <Activity className="text-emerald-500 animate-pulse" size={16} />
                        <span className="text-gray-400 font-mono text-xs tracking-widest uppercase text-left">Timeline</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative flex gap-4 md:gap-10 py-6 md:py-8"
                            >
                                <div className="absolute top-0 bottom-0 left-[15px] md:left-[27px] w-[1px] bg-white/10" />

                                <div className="relative z-10">
                                    <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-black border border-white/20 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-500">
                                        <Briefcase size={index === 0 ? 14 : 18} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col gap-3 md:gap-4 text-left">
                                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-emerald-500 font-mono tracking-widest uppercase">{exp.type}</span>
                                            <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors duration-500 tracking-tight uppercase">{exp.role}</h2>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 font-mono text-xs">
                                            <Calendar size={12} /> {exp.date}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 md:gap-3">
                                        <div className="flex items-center gap-2">
                                            <Globe size={14} className="text-gray-400" />
                                            <span className="text-gray-400 font-medium tracking-tight italic text-sm md:text-base">{exp.company}</span>
                                        </div>
                                        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light max-w-2xl">
                                            {exp.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map(t => (
                                            <span key={t} className="px-2 md:px-3 py-1 rounded-lg border border-white/5 bg-white/[0.03] text-xs font-mono text-gray-400 tracking-wider">
                                                +{t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Sideline Certifications HUD */}
                <div className="w-full lg:w-1/3 flex flex-col gap-10">
                    <div className="lg:sticky lg:top-32 bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col gap-6 md:gap-8">
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <Award className="text-emerald-500" size={24} />
                            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">Certifications</h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            {certifications.map((cert, i) => (
                                <motion.div
                                    key={cert.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col gap-1 p-4 rounded-2xl border border-white/5 bg-black/40 hover:border-emerald-500/30 transition-all group text-left"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-emerald-500 font-mono tracking-widest font-bold">Certification</span>
                                        <span className="text-xs text-gray-400 font-mono">{cert.year}</span>
                                    </div>
                                    <h3 className="text-white font-bold tracking-tight text-base group-hover:text-emerald-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <span className="text-xs text-gray-400 italic">{cert.issuer}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link
                            href="/resume"
                            className="mt-2 px-6 py-4 rounded-xl md:rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-emerald-400 transition-all shadow-2xl"
                        >
                            View Resume
                        </Link>
                    </div>
                </div>

            </div>

            {/* Footer Link */}
            <div className="mt-20 md:mt-28 text-center relative z-10 pb-8">
                <Link href="/skills" className="group text-4xl md:text-7xl lg:text-9xl font-black text-white hover:text-emerald-400 transition-colors duration-500 tracking-tighter uppercase leading-none md:leading-[0.8] block font-heading">
                    See My <br />
                    <span className="text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Skills </span>
                    <span className="text-emerald-400">→</span>
                </Link>
            </div>

        </div>
    );
}
