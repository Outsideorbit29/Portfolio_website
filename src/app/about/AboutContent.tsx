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
                
                {/* Hero Section: The Entity */}
                <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start mb-24 md:mb-32">
                    <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <div className="w-12 h-[1px] bg-blue-500" />
                            <span className="text-blue-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Identity_Module / Profile</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8]">
                            Anish <br />
                            <span className="text-white [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Kumar Gupta</span>
                        </h1>
                        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl text-gray-600 font-mono text-[9px] md:text-[10px] tracking-widest leading-relaxed uppercase">
                            <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[UUID] 8B9CAD-0E1F20</div>
                            <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[LOC] MADHYA_PRADESH_IN</div>
                            <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[CLASS] FULL_STACK_ARCHITECT</div>
                            <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[AUTH] LEVEL_9_CLEARANCE</div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <HoverPhotoReveal 
                            primarySrc="/anish-anime.png" 
                            secondarySrc="/anish-anime-hover.png"
                            alt="Anish Kumar Gupta - Full Stack Engineer Portrait"
                        />
                    </div>
                </section>

                <div className="flex flex-col gap-24 md:gap-32">
                
                {/* Section 1: Core Narrative */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
                    <div className="lg:col-span-4 flex flex-col gap-6 sticky top-32">
                        <div className="flex items-center gap-3">
                            <Heart className="text-pink-500 animate-pulse" size={20} />
                            <span className="text-pink-400 font-mono text-xs md:text-sm tracking-widest uppercase">The_Drive</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">Purpose &amp; <br /> Persistence.</h2>
                        <Link 
                            href="/api/resume" 
                            download="Anish_Resume.pdf"
                            className="w-fit flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-heading font-black text-[10px] uppercase tracking-widest hover:bg-pink-400 transition-all shadow-2xl"
                        >
                            Get_Resume <Download size={14} />
                        </Link>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-10 md:gap-12 text-left">
                        <p className="text-gray-400 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-4xl">
                            As a digital architect, <span className="text-white font-medium">Anish Kumar Gupta</span> focuses on the intersection of <span className="text-white font-medium">high-performance systems</span> and <span className="text-white font-medium">cognitive computing</span>. Every line of code I write is a step toward building a more connected, intelligent, and efficient future.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {experienceItems.map((item, i) => (
                                <div key={i} className="flex flex-col gap-3 p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-white/10 transition-all text-left">
                                    <span className="text-blue-500 font-mono text-xs">{item.year}</span>
                                    <h4 className="text-xl font-bold text-white uppercase tracking-tight">{item.role}</h4>
                                    <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mb-2 italic">{item.company}</span>
                                    <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section: System Directives (Life Goals) */}
                <section className="flex flex-col gap-10 md:gap-12">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                        <div className="w-12 h-[1px] bg-emerald-500" />
                        <span className="text-emerald-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">System_Directives</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {lifeGoals.map((goal, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card bg-black/40 border border-white/5 p-8 rounded-3xl hover:border-emerald-500/20 transition-all group flex flex-col gap-4 text-left"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/5 ${goal.color} group-hover:scale-110 transition-transform`}>
                                    <goal.icon size={24} />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-tight">{goal.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{goal.desc}</p>
                            </motion.div>
                        ))}
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

                {/* Section: Encoded Interests (Hobbies) */}
                <section className="flex flex-col gap-10 md:gap-12">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                        <div className="w-12 h-[1px] bg-pink-500" />
                        <span className="text-pink-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Encoded_Interests</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {hobbyGrid.map((hobby, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card bg-black/40 border border-white/5 p-6 rounded-[2rem] hover:border-pink-500/30 transition-all group flex flex-col gap-3 text-left"
                            >
                                <hobby.icon size={20} className="text-pink-400 group-hover:rotate-12 transition-transform" />
                                <div className="flex flex-col gap-1">
                                    <span className="text-lg font-bold text-white uppercase tracking-tight">{hobby.label}</span>
                                    <span className="text-[10px] text-gray-500 font-mono leading-relaxed">{hobby.desc}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section 4: Specializations */}
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
                            "I believe in systems that are not just technically sound, but inherently human — where the precision of machines meets the creative depth of the soul."
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
        </div>
    );
}
