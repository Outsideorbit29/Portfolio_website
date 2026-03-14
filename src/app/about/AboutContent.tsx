"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
    GraduationCap,
    Briefcase,
    Download,
    Heart,
    Code2,
    Database,
    Brain,
    Target,
    Cpu,
    Sparkles,
    Rocket,
    Zap,
    Library,
    Camera,
    Swords,
    BookOpen,
    Wind,
    Gamepad2,
    Music,
    Plane,
    Coffee,
    LineChart
} from "lucide-react";
import { HoverPhotoReveal } from "@/components/HoverPhotoReveal";
import Link from "next/link";

const skills = [
    { name: "React / Next.js", level: 92, color: "from-blue-500 to-cyan-400" },
    { name: "TypeScript / JavaScript", level: 90, color: "from-blue-400 to-indigo-400" },
    { name: "Node.js / Express", level: 88, color: "from-violet-500 to-purple-400" },
    { name: "AI / Machine Learning", level: 85, color: "from-emerald-500 to-teal-400" },
    { name: "UI/UX / Interaction", level: 88, color: "from-pink-500 to-rose-400" },
    { name: "System Architecture", level: 82, color: "from-orange-500 to-amber-400" }
];

const interests = [
    "Neural Architectures",
    "Digital Minimalism",
    "Quantitative Analysis",
    "Generative Systems",
    "Real-time Data",
    "Optimal Experience"
];

const experienceItems = [
    { year: "2024", role: "Full Stack Engineer", company: "Stock Overflow | VIT Bhopal", desc: "Built predictive high-frequency DL models." },
    { year: "2024", role: "Solution Architect", company: "EY Techathon 6.0 | Unstop", desc: "Engineered scalable enterprise modules." },
    { year: "2023", role: "Backend Developer", company: "Open Source Collective", desc: "Optimizing high-throughput API endpoints." }
];

const lifeGoals = [
    { 
        title: "Architect Future Ecosystems", 
        desc: "Building digital spaces that aren't just tools, but extensions of human potential.", 
        icon: Rocket, 
        color: "text-emerald-400" 
    },
    { 
        title: "Sustainable Tech Innovation", 
        desc: "Engineering high-performance systems with minimal digital waste and maximum efficiency.", 
        icon: Zap, 
        color: "text-blue-400" 
    },
    { 
        title: "Universal Knowledge Sync", 
        desc: "Bridging the gap between complex AI logic and intuitive human understanding.", 
        icon: Library, 
        color: "text-violet-400" 
    }
];

const hobbyGrid = [
    { label: "Trading", icon: LineChart, desc: "Analyzing global financial flows." },
    { label: "Learning", icon: BookOpen, desc: "Continuous neural network upgrades." },
    { label: "Gaming", icon: Gamepad2, desc: "Executing strategic simulations." },
    { label: "Music", icon: Music, desc: "Harmonizing frequency and wavelength." },
    { label: "Travel", icon: Plane, desc: "Exploring physical world coordinates." },
    { label: "Coffee", icon: Coffee, desc: "Biological fuel for high-level logic." },
];

export default function AboutContent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="min-h-screen bg-transparent relative overflow-hidden">
            
            {/* Background Decorative Layer */}
            <motion.div 
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0 pointer-events-none opacity-20"
            >
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />
            </motion.div>

            {/* Main Content */}
            <div className="max-w-[2200px] mx-auto px-4 md:px-8 lg:px-12 pt-28 md:pt-36 pb-20 relative z-10">
                
                {/* Hero Section: The Entity Restructured */}
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-12 mb-16 md:mb-24"
                >
                    {/* 1. My Name at the top */}
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <div className="w-16 h-[1px] bg-blue-500" />
                            <span className="text-blue-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase">Identity_Module / Profile</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8]">
                            Anish <br />
                            <span className="text-white [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Kumar Gupta</span>
                        </h1>
                    </div>

                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-start">
                        {/* 2. Photo below name (Left side) */}
                        <div className="lg:col-span-4 flex flex-col gap-8 w-full max-w-sm mx-auto lg:mx-0">
                            <div className="relative w-full aspect-[4/5] shrink-0">
                                <HoverPhotoReveal 
                                    primarySrc="/anish-anime.png" 
                                    secondarySrc="/anish-anime-hover.png"
                                    alt="Anish Kumar Gupta - Full Stack Engineer Portrait"
                                />
                            </div>
                            
                            {/* 3. Resume download link below photo */}
                            <Link 
                                href="/api/resume" 
                                download="Anish_Resume.pdf"
                                className="w-full flex items-center justify-center gap-4 bg-white text-black px-8 py-5 rounded-2xl font-heading font-black text-[11px] uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all duration-500 shadow-2xl group"
                            >
                                Get_Resume 
                                <motion.div
                                    animate={{ y: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <Download size={16} />
                                </motion.div>
                            </Link>
                        </div>

                        {/* 4. Written text beside photo (Right side) */}
                        <div className="lg:col-span-8 flex flex-col gap-10">
                            <p className="text-gray-400 text-xl md:text-2xl lg:text-3xl font-light leading-[1.5] text-left">
                                As a digital architect, <span className="text-white font-medium">Anish Kumar Gupta</span> focuses on the intersection of <span className="text-blue-400 font-medium">high-performance systems</span> and <span className="text-violet-400 font-medium font-heading italic">cognitive computing</span>. Every line of code I write is a step toward building a more connected, intelligent, and efficient future.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {experienceItems.map((item, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group flex flex-col gap-3 p-8 border border-white/5 bg-white/[0.02] rounded-[2rem] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 text-left relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                            <Briefcase size={48} />
                                        </div>
                                        <span className="text-blue-500 font-mono text-xs tracking-widest">{item.year}</span>
                                        <h4 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors">{item.role}</h4>
                                        <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest italic">{item.company}</span>
                                        <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* System Registry - Grouped Stats inside hero flow */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-400 font-mono text-[9px] tracking-widest uppercase mt-4">
                                <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 flex flex-col gap-1">
                                    <span className="text-gray-600 text-[7px]">UUID</span>
                                    8B9CAD
                                </div>
                                <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 flex flex-col gap-1">
                                    <span className="text-gray-600 text-[7px]">LOC</span>
                                    IN_MP
                                </div>
                                <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 flex flex-col gap-1">
                                    <span className="text-gray-600 text-[7px]">CLASS</span>
                                    ARCHITECT
                                </div>
                                <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 flex flex-col gap-1">
                                    <span className="text-gray-600 text-[7px]">AUTH</span>
                                    LEVEL_9
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="flex flex-col gap-20 md:gap-32">

                {/* Section: System Directives (Life Goals) */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-12"
                >
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <div className="w-16 h-[1px] bg-emerald-500" />
                        <span className="text-emerald-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase">System_Directives</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {lifeGoals.map((goal, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group relative glass-card bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] hover:border-emerald-500/30 transition-all duration-500 flex flex-col gap-6 text-left"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                                <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/5 ${goal.color} group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-500`}>
                                    <goal.icon size={28} />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">{goal.title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed text-base md:text-lg">{goal.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Section 2: Core Matrix (Skills HUD) */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-12"
                >
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <div className="w-16 h-[1px] bg-blue-500" />
                        <span className="text-blue-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase">Core_Modules</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-violet-500/20 hover:bg-white/[0.04] transition-all duration-500"
                            >
                                <div className="flex flex-col gap-6 text-left">
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-xl font-heading font-bold text-white group-hover:text-violet-300 transition-colors uppercase tracking-tight">{skill.name}</h3>
                                        <span className="text-gray-500 font-mono text-[10px] tracking-widest">{skill.level}%_LOADED</span>
                                    </div>
                                    <div className="w-full bg-white/5 h-[3px] rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className={`h-full bg-gradient-to-r ${skill.color} shadow-[0_0_15px_rgba(139,92,246,0.3)]`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Section: Encoded Interests (Hobbies) */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-12"
                >
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <div className="w-16 h-[1px] bg-pink-500" />
                        <span className="text-pink-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase">Encoded_Interests</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                        {hobbyGrid.map((hobby, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative glass-card bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:border-pink-500/40 hover:bg-white/[0.05] transition-all duration-500 flex flex-col gap-4 text-left"
                            >
                                <hobby.icon size={24} className="text-pink-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                                <div className="flex flex-col gap-2">
                                    <span className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-pink-300 transition-colors">{hobby.label}</span>
                                    <span className="text-[10px] text-gray-500 font-mono leading-relaxed uppercase tracking-tighter opacity-70">{hobby.desc}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Section 4: Specializations */}
                <motion.section 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row gap-16 md:gap-24"
                >
                    <div className="w-full lg:w-1/2 flex flex-col gap-10 text-center lg:text-left items-center lg:items-start">
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white flex items-center gap-6 uppercase tracking-tighter">
                            <Target className="text-blue-400 animate-pulse" size={40} />
                            Objectives.
                        </h2>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            {interests.map((tag, i) => (
                                <motion.span 
                                    key={tag} 
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                                    className="px-8 md:px-10 py-4 md:py-5 rounded-2xl border border-white/5 bg-white/[0.02] text-xs md:text-base text-gray-400 font-mono tracking-widest hover:text-white transition-all uppercase"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 md:p-20 flex flex-col gap-10 relative overflow-hidden text-center lg:text-left items-center lg:items-start group hover:border-violet-500/20 transition-all duration-700">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-[0.3em] opacity-50">Philosophy</h3>
                            <div className="w-20 h-[1px] bg-violet-500/50" />
                        </div>
                        <p className="text-gray-400 font-light leading-[1.6] italic text-2xl md:text-3xl lg:text-4xl max-w-2xl">
                            "I believe in systems that are not just technically sound, but <span className="text-white font-medium">inherently human</span> — where the precision of machines meets the creative depth of the soul."
                        </p>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-4">
                            <div className="hidden lg:block w-16 h-[1px] bg-violet-500" />
                            <span className="text-[10px] md:text-xs text-violet-400 font-mono uppercase tracking-[0.4em] leading-relaxed">Code is Poetry. <br className="md:hidden" /> Efficiency is Art.</span>
                        </div>
                    </div>
                </motion.section>

                </div>

                {/* CTA Link */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 md:mt-32 text-center relative z-10"
                >
                    <Link href="/experience" className="group flex flex-col items-center gap-6">
                        <span className="text-gray-500 font-mono text-xs tracking-[0.5em] uppercase mb-4">UPLINK_TO_CHRONICLES</span>
                        <div className="text-5xl md:text-8xl lg:text-9xl font-heading font-black text-white hover:text-violet-400 transition-colors duration-700 tracking-tighter uppercase leading-[0.85] text-center">
                            View History <br />
                            <span className="text-white [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Timeline </span>
                            <motion.span 
                                animate={{ x: [0, 20, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="text-violet-400 inline-block"
                            >
                                →
                            </motion.span>
                        </div>
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
