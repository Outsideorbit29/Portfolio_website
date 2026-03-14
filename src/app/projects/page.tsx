"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Cpu, Target, Sparkles } from "lucide-react";
import { ParallaxImage } from "@/components/ParallaxImage";
import Link from "next/link";

interface Project {
    id: string;
    title: string;
    description: string;
    year: string;
    featured: boolean;
    tech: string[];
    image: string;
    details: {
        role: string;
        context: string;
        outcome: string;
    };
}

const projects: Project[] = [
    {
        id: "01", 
        title: "Trading Hand", 
        description: "AI-powered algorithmic trading assistant supporting automated workflows and detailed strategy execution analysis.",
        year: "2024",
        featured: true,
        tech: ["React", "MetaTrader5", "Python", "WebSockets"],
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2560&auto=format&fit=crop",
        details: {
            role: "Full Stack Lead",
            context: "A fintech solution for high-frequency trading visualization.",
            outcome: "Reduced manual strategy monitoring time by 60%."
        }
    },
    {
        id: "02", 
        title: "Dhruv Tara", 
        description: "AI-driven e-learning platform integrating automated notes generation, video summarization, and an intelligent tutor.",
        year: "2023",
        featured: true,
        tech: ["Next.js", "GPT-4", "FastAPI", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2560&auto=format&fit=crop",
        details: {
            role: "Backend Architect",
            context: "Educational tool for personalized student learning paths.",
            outcome: "Scaled to support 500+ concurrent students."
        }
    },
    {
        id: "03", 
        title: "AI Risk Analyzer", 
        description: "Machine learning-based financial analytics system to evaluate multi-asset portfolio risk across equities and crypto.",
        year: "2022",
        featured: true,
        tech: ["Scikit-learn", "Pandas", "D3.js", "TensorFlow"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop",
        details: {
            role: "ML Engineer",
            context: "Cross-platform asset risk evaluation tool.",
            outcome: "94% accuracy in volatility forecasting models."
        }
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-transparent pt-20 md:pt-28 pb-16 px-4 md:px-8 lg:px-12 relative overflow-x-hidden">
            
            {/* Header HUD */}
            <div className="flex flex-col mb-12 md:mb-16 gap-4 relative z-10 max-w-[2200px] mx-auto items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-cyan-500" />
                    <span className="text-cyan-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Operations / Work</span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8] font-sans">
                    Selected <br />
                    <span className="text-transparent [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Archive</span>
                </h1>
                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl text-gray-600 font-mono text-[9px] md:text-[10px] tracking-widest leading-relaxed uppercase">
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[01] SEAMLESS_UIs</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[02] SCALABLE_BACKENDS</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[03] AI_INTEGRATIONS</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[04] REAL_TIME_SYSTEMS</div>
                </div>
            </div>

            {/* Immersive Reel */}
            <div className="flex flex-col gap-12 md:gap-20 w-full relative z-10 max-w-[2200px] mx-auto">
                {projects.map((project, index) => (
                    <ProjectSection key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* CTA Footer */}
            <div className="mt-20 md:mt-28 text-center relative z-10 mb-12">
                <Link href="/contact" className="group text-4xl md:text-7xl lg:text-8xl font-black text-white hover:text-cyan-400 transition-colors duration-500 tracking-tighter uppercase leading-none md:leading-[0.8] block font-sans">
                   LET&apos;S CO-CREATE <br />
                   <span className="text-cyan-500 inline-flex items-center gap-4">THE FUTURE <ArrowRight className="w-8 h-8 md:w-16 md:h-16" /></span>
                </Link>
            </div>
        </div>
    );
}

function ProjectSection({ project, index }: { project: Project; index: number }) {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-10%" }}
            className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 relative py-6 md:py-8`}
        >
            {/* Massive Background Number */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false, margin: "-20%" }}
                className={`absolute -top-8 ${index % 2 === 0 ? '-left-6' : '-right-6'} text-[18rem] font-black text-white leading-none select-none pointer-events-none z-0 hidden lg:block`}
            >
                {project.id}
            </motion.div>

            {/* Left: Metadata & Tech HUD */}
            <div className="w-full lg:w-2/5 flex flex-col gap-6 md:gap-8 relative z-10 justify-center text-center lg:text-left items-center lg:items-start text-left">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-left w-full">
                        <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-widest">{project.year}</span>
                        <div className="w-8 h-[1px] bg-white/20" />
                        <span className="text-gray-500 font-mono text-[10px] md:text-xs tracking-widest uppercase">{project.details.role}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight group-hover:text-cyan-400 transition-colors duration-500 font-sans uppercase">
                        {project.title}
                    </h2>
                </div>

                <div className="flex flex-col gap-5 w-full">
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light max-w-xl text-left">
                        {project.description}
                    </p>
                    
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-gray-500 backdrop-blur-sm text-left">
                        <div className="flex flex-col md:flex-row md:justify-between gap-2">
                            <span className="flex items-center gap-2 text-cyan-500/80"><Cpu size={12} /> System_Context</span>
                            <span className="text-gray-300 normal-case tracking-normal">{project.details.context}</span>
                        </div>
                        <div className="h-[1px] bg-white/5 w-full" />
                        <div className="flex flex-col md:flex-row md:justify-between gap-2">
                            <span className="flex items-center gap-2 text-cyan-500/80"><Target size={12} /> Model_Outcome</span>
                            <span className="text-gray-300 normal-case tracking-normal italic">{project.details.outcome}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-lg border border-white/10 bg-white/[0.05] text-[8px] md:text-[10px] font-mono text-gray-300 tracking-wider uppercase">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2 w-full">
                    <Link href={`/projects/${project.id.replace('0','')}`} className="px-8 py-4 rounded-xl bg-white text-black font-black text-xs uppercase tracking-widest hover:scale-105 hover:bg-cyan-400 transition-all shadow-2xl flex-1 sm:flex-none text-center">
                        Explore Deck
                    </Link>
                    <div className="flex gap-2">
                        <button className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 text-white transition-all">
                            <Github size={18} />
                        </button>
                        <button className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 text-white transition-all">
                            <ExternalLink size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: Immersive Img Preview */}
            <div className="w-full lg:w-3/5 relative h-[300px] md:h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden group/img cursor-crosshair">
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
                <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-40">
                    <motion.div 
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,1)]"
                    />
                </div>
                <div className="w-full h-full transform group-hover/img:scale-[1.05] transition-transform duration-[2000ms] ease-out">
                    <ParallaxImage src={project.image} alt={project.title} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
            </div>
        </motion.section>
    );
}
