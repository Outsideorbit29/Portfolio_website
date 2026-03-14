"use client";

import { motion } from "framer-motion";
import { Download, Award, Briefcase, Calendar, Cpu, Zap, Activity, Globe } from "lucide-react";
import Link from "next/link";

const experienceData = [
    {
        id: "ARCH_01",
        role: "Winner - Stock Overflow",
        company: "Data Science Club, VIT Bhopal",
        date: "2024",
        description: "Engineered high-frequency ML/DL-based stock price prediction models. Analyzed multi-source financial noise and synthesized into predictive visualizations.",
        tech: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
        type: "ACHIEVEMENT"
    },
    {
        id: "DEV_02",
        role: "Full Stack Developer",
        company: "EY Techathon 6.0 | Unstop",
        date: "2024",
        description: "Architected enterprise-grade solution delivery during the techathon. Managed full-cycle React-Node integration under high-pressure system environments.",
        tech: ["React.js", "Node.js", "Express", "MongoDB"],
        type: "LOG_ENTRY"
    }
];

const certifications = [
    { title: "Generative AI Foundations", issuer: "IBM", year: "2024", status: "VERIFIED" },
    { title: "Full Stack Software Engineering", issuer: "Udemy Professional", year: "2024", status: "VERIFIED" }
];

export default function ExperienceContent() {
    return (
        <div className="min-h-screen bg-transparent pt-20 md:pt-28 pb-16 px-4 md:px-8 lg:px-12 relative overflow-x-hidden">

            {/* Header HUD */}
            <div className="flex flex-col mb-12 md:mb-16 gap-4 relative z-10 max-w-[2200px] mx-auto items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-emerald-500" />
                    <span className="text-emerald-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Chronology / Dev_Log</span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8] font-sans">
                    System <br />
                    <span className="text-transparent [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Timeline</span>
                </h1>
                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl text-gray-600 font-mono text-[9px] md:text-[10px] tracking-widest leading-relaxed uppercase">
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[VER] 4.0.2</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[LOGS] PERSISTENT_STORAGE</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[STATUS] UPDATED_REALTIME</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[ENC] SHA-256_ACTIVE</div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 md:gap-16 relative z-10 max-w-[2200px] mx-auto">

                {/* Left: Interactive Timeline Reel */}
                <div className="w-full lg:w-2/3 flex flex-col gap-8 md:gap-10">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                        <Activity className="text-emerald-500 animate-pulse" size={16} />
                        <span className="text-gray-400 font-mono text-[10px] md:text-xs tracking-widest uppercase text-left">Live_History_Feed</span>
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
                                            <span className="text-[8px] md:text-[9px] text-emerald-500 font-mono tracking-widest uppercase">{exp.type} // {exp.id}</span>
                                            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors duration-500 tracking-tight font-sans uppercase">{exp.role}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] md:text-xs">
                                            <Calendar size={12} /> {exp.date}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 md:gap-3">
                                        <div className="flex items-center gap-2">
                                            <Globe size={14} className="text-gray-600" />
                                            <span className="text-gray-400 font-medium tracking-tight italic text-sm md:text-base">{exp.company}</span>
                                        </div>
                                        <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light max-w-2xl">
                                            {exp.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map(t => (
                                            <span key={t} className="px-2 md:px-3 py-1 rounded-lg border border-white/5 bg-white/[0.03] text-[8px] md:text-[10px] font-mono text-gray-500 tracking-wider">
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
                            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">Nodes_Certified</h2>
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
                                        <span className="text-[8px] text-emerald-500 font-mono tracking-widest font-bold">ST_CODE/{cert.status}</span>
                                        <span className="text-[9px] text-gray-600 font-mono">{cert.year}</span>
                                    </div>
                                    <h4 className="text-white font-bold tracking-tight text-base group-hover:text-emerald-400 transition-colors">
                                        {cert.title}
                                    </h4>
                                    <span className="text-[10px] text-gray-500 italic">{cert.issuer}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link
                            href="/api/resume"
                            download="Anish_Resume.pdf"
                            className="mt-2 px-6 py-4 rounded-xl md:rounded-2xl bg-white text-black font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-center hover:bg-emerald-400 transition-all shadow-2xl"
                        >
                            Pull Full CV
                        </Link>
                    </div>
                </div>

            </div>

            {/* Footer Link */}
            <div className="mt-20 md:mt-28 text-center relative z-10 pb-8">
                <Link href="/skills" className="group text-4xl md:text-7xl lg:text-9xl font-black text-white hover:text-emerald-400 transition-colors duration-500 tracking-tighter uppercase leading-none md:leading-[0.8] block font-sans">
                    ACCESS SYSTEM <br />
                    <span className="text-white [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">CAPABILITIES </span>
                    <span className="text-emerald-400">→</span>
                </Link>
            </div>

        </div>
    );
}
