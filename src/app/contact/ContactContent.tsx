"use client";

import { motion } from "framer-motion";
import { 
    Send, 
    CheckCircle, 
    Mail, 
    MapPin, 
    Phone, 
    Activity, 
    Cpu, 
    Sparkles, 
    ShieldCheck, 
    Linkedin, 
    Github, 
    Instagram, 
    Twitter, 
    ExternalLink, 
    Zap, 
    Brain,
    Rocket,
    Coffee,
    GraduationCap
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Link from "next/link";

export default function ContactContent() {
    const [formState, setFormState] = useState("idle"); // idle, submitting, success, error
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setFormState("submitting");

        emailjs.sendForm(
            'service_2s31y3j', 
            'template_hrv8bxw', 
            formRef.current, 
            'Z02mX_1sQOWwpSwl4'
        )
        .then(() => {
            setFormState("success");
            if (formRef.current) formRef.current.reset();
        })
        .catch((error) => {
            console.error('Email failed to send:', error);
            setFormState("error");
        });
    };

    return (
        <div className="min-h-screen bg-transparent pt-24 md:pt-32 pb-24 px-6 md:px-12 lg:px-20 relative overflow-x-hidden">
            
            {/* 1. TOP HERO SECTION */}
            <div className="flex flex-col mb-16 md:mb-20 gap-6 relative z-10 max-w-[2000px] mx-auto items-center text-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-cyan-500" />
                        <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Contact</span>
                        <div className="w-8 h-[1px] bg-cyan-500" />
                    </div>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8]">
                        Let&apos;s Build <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">Something Amazing</span>
                    </h1>
                    <p className="mt-8 text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed italic">
                        &quot;Turning complex ideas into high-performance digital reality.&quot;
                    </p>
                </div>
            </div>

            {/* 2. INTERACTIVE SHORTCUTS GRID */}
            <div className="max-w-[2000px] mx-auto mb-20 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    {/* Status: Open to Opportunities */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-card bg-black/40 border border-emerald-500/20 p-6 rounded-[2rem] flex flex-col justify-between group hover:border-emerald-500/50 transition-all cursor-default relative overflow-hidden h-40"
                    >
                         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Rocket size={60} className="text-emerald-400" />
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                             <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Status</span>
                         </div>
                         <div className="flex flex-col">
                            <span className="text-xl font-bold text-white uppercase tracking-tight">Open to <br /> Opportunities</span>
                         </div>
                    </motion.div>

                    {/* Status: Always Learning */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="glass-card bg-black/40 border border-blue-500/20 p-6 rounded-[2rem] flex flex-col justify-between group hover:border-blue-500/50 transition-all cursor-default relative overflow-hidden h-40"
                    >
                         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Brain size={60} className="text-blue-400" />
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-blue-500 animate-[bounce_2s_infinite]" />
                             <span className="text-xs text-blue-400 font-mono uppercase tracking-widest">Currently</span>
                         </div>
                         <div className="flex flex-col">
                            <span className="text-xl font-bold text-white uppercase tracking-tight">Always <br /> Learning</span>
                         </div>
                    </motion.div>

                    {/* Quick Connect Grid (Bento style) */}
                    <div className="lg:col-span-2 lg:row-span-2 grid grid-cols-2 gap-4">
                        <a 
                            href="https://www.linkedin.com/in/anish-kumar-gupta-6a9b50251" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="glass-card bg-black/40 border border-white/5 p-6 rounded-[2rem] flex flex-col justify-between group hover:border-blue-500/30 hover:bg-blue-500/5 transition-all h-40 overflow-hidden relative"
                        >
                            <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                            <div className="flex flex-col text-left">
                                <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">Connect on</span>
                                <span className="text-lg font-bold text-white">Linkedin</span>
                            </div>
                            <ExternalLink size={14} className="absolute bottom-6 right-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        
                        <a 
                            href="https://github.com/Outsideorbit29" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="glass-card bg-black/40 border border-white/5 p-6 rounded-[2rem] flex flex-col justify-between group hover:border-white/20 hover:bg-white/5 transition-all h-20 sm:h-auto overflow-hidden relative"
                        >
                            <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                            <div className="flex flex-col text-left">
                                <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">See my code on</span>
                                <span className="text-lg font-bold text-white">Github</span>
                            </div>
                            <ExternalLink size={14} className="absolute bottom-6 right-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>

                        <a 
                            href="https://x.com/Anish_029" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="glass-card bg-black/40 border border-white/5 p-6 rounded-[2rem] flex flex-col justify-between group hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all h-20 sm:h-auto overflow-hidden relative"
                        >
                            <Twitter size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            <div className="flex flex-col text-left">
                                <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">Follow on</span>
                                <span className="text-lg font-bold text-white">Twitter</span>
                            </div>
                            <ExternalLink size={14} className="absolute bottom-6 right-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>

                        <a 
                            href="https://instagram.com/k_anish_29" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="glass-card bg-black/40 border border-white/5 p-6 rounded-[2rem] flex flex-col justify-between group hover:border-pink-500/30 hover:bg-pink-500/5 transition-all h-20 sm:h-auto overflow-hidden relative"
                        >
                            <Instagram size={24} className="text-gray-400 group-hover:text-pink-400 transition-colors" />
                            <div className="flex flex-col text-left">
                                <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">Follow on</span>
                                <span className="text-lg font-bold text-white">Instagram</span>
                            </div>
                            <ExternalLink size={14} className="absolute bottom-6 right-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>

                    {/* Status: Innovation Mode */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card bg-black/40 border border-violet-500/20 p-6 rounded-[2rem] flex flex-col justify-between group hover:border-violet-500/50 transition-all cursor-default relative overflow-hidden h-40"
                    >
                         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Sparkles size={60} className="text-violet-400" />
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                             <span className="text-xs text-violet-400 font-mono uppercase tracking-widest">Currently</span>
                         </div>
                         <div className="flex flex-col">
                            <span className="text-xl font-bold text-white uppercase tracking-tight">Building <br /> The Future</span>
                         </div>
                    </motion.div>

                    {/* Status: Coffee Drive */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card bg-black/40 border border-orange-500/20 p-6 rounded-[2rem] flex flex-col justify-between group hover:border-orange-500/50 transition-all cursor-default relative overflow-hidden h-40"
                    >
                         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Coffee size={60} className="text-orange-400" />
                         </div>
                         <div className="flex items-center gap-2">
                             <Activity size={12} className="text-orange-500 animate-[spin_3s_linear_infinite]" />
                             <span className="text-xs text-orange-400 font-mono uppercase tracking-widest">Powered by</span>
                         </div>
                         <div className="flex flex-col">
                            <span className="text-xl font-bold text-white uppercase tracking-tight">Caffeine <br /> & Code</span>
                         </div>
                    </motion.div>

                </div>
            </div>

            {/* 3. MAIN CONTACT AREA (Form + Secondary Info) */}
            <div className="flex flex-col lg:flex-row gap-16 md:gap-20 relative z-10 max-w-[2000px] mx-auto items-center lg:items-stretch">
                
                {/* Left: Communication Hub Info */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10 md:gap-12 text-center lg:text-left items-center lg:items-start">
                     <div className="flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white flex items-center justify-center lg:justify-start gap-4">
                            <Zap className="text-cyan-400" size={32} />
                            Get in Touch.
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-xl">
                            This form is the quickest way to reach me about a job, a project, or a collaboration.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                         {[
                            { label: "Email", value: "anish.grd2004@gmail.com", icon: Mail, color: "text-blue-400", href: "mailto:anish.grd2004@gmail.com" },
                            { label: "Phone", value: "+91 6299293388", icon: Phone, color: "text-cyan-400", href: "tel:+916299293388" },
                            { label: "Location", value: "Dhanbad, India", icon: MapPin, color: "text-violet-400" }
                         ].map((info, i) => (
                             info.href ? (
                                <a key={i} href={info.href} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-3 group hover:border-white/20 transition-all text-left overflow-hidden">
                                    <info.icon size={18} className={`${info.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                                    <div className="flex flex-col">
                                       <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">{info.label}</span>
                                       <span className="text-gray-300 font-medium tracking-tight text-sm md:text-base truncate">{info.value}</span>
                                    </div>
                                </a>
                             ) : (
                                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-3 group hover:border-white/20 transition-all text-left overflow-hidden">
                                     <info.icon size={18} className={`${info.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                                     <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">{info.label}</span>
                                        <span className="text-gray-300 font-medium tracking-tight text-sm md:text-base truncate">{info.value}</span>
                                     </div>
                                </div>
                             )
                         ))}
                     </div>

                     <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex items-center gap-6 w-full">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                            <Cpu className="text-cyan-400 w-5 h-5" />
                        </div>
                        <p className="text-xs text-gray-400 font-mono leading-relaxed uppercase tracking-widest text-left">
                            I usually reply <span className="text-cyan-400">within 24 hours</span>
                        </p>
                     </div>
                </div>

                {/* Right: Immersive Input Terminal */}
                <div className="w-full lg:w-1/2 relative">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-card bg-black/40 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 h-full relative overflow-hidden"
                    >
                        {/* Background Scanline for the form */}
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
                        
                        {formState === "success" ? (
                             <motion.div
                                role="status"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center justify-center h-full gap-8 text-center py-16 md:py-20 relative z-10"
                             >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                    <CheckCircle size={40} className="text-emerald-400" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter">Message Sent</h2>
                                    <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">Thanks! I&apos;ll get back to you soon.</p>
                                </div>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="px-8 py-3 rounded-full border border-white/10 text-xs font-mono text-gray-400 hover:text-white uppercase tracking-widest transition-all"
                                >
                                    Send Another Message
                                </button>
                             </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10 relative z-10 h-full justify-between">
                                <div className="flex flex-col gap-8 md:gap-10">
                                    {/* Command Inputs */}
                                    <div className="flex flex-col gap-3 md:gap-4">
                                        <label htmlFor="contact-name" className="text-sm text-cyan-400 font-mono">Your Name</label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="user_name"
                                            autoComplete="name"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 px-0 py-3 md:py-4 text-white text-lg md:text-xl font-medium focus:outline-none focus:border-cyan-400 placeholder:text-gray-400 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3 md:gap-4">
                                        <label htmlFor="contact-email" className="text-sm text-cyan-400 font-mono">Your Email</label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="user_email"
                                            autoComplete="email"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 px-0 py-3 md:py-4 text-white text-lg md:text-xl font-medium focus:outline-none focus:border-cyan-400 placeholder:text-gray-400 transition-colors"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3 md:gap-4">
                                        <label htmlFor="contact-message" className="text-sm text-cyan-400 font-mono">Your Message</label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full bg-transparent border-b border-white/10 px-0 py-3 md:py-4 text-white text-lg md:text-xl font-medium focus:outline-none focus:border-cyan-400 placeholder:text-gray-400 transition-colors resize-none mb-2 md:mb-4"
                                            placeholder="How can I help?"
                                        />
                                    </div>
                                </div>

                                {formState === "error" && (
                                    <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-4 text-sm md:text-base text-red-200 leading-relaxed">
                                        Your message couldn&apos;t be sent. Please try again, or email me at{" "}
                                        <a href="mailto:anish.grd2004@gmail.com" className="font-semibold text-white underline underline-offset-2">
                                            anish.grd2004@gmail.com
                                        </a>.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={formState === "submitting"}
                                    className="w-full bg-white text-black font-heading font-black py-5 md:py-6 rounded-xl md:rounded-2xl flex items-center justify-center gap-4 hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:scale-100"
                                >
                                    {formState === "submitting" ? (
                                        <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            <span className="font-mono text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">Send Message</span>
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Footer Symbol */}
            <div className="mt-24 md:mt-40 flex items-center justify-center gap-4 relative z-10 opacity-20">
                 <div className="w-1 h-1 bg-white rounded-full" />
                 <div className="w-24 md:w-40 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                 <Sparkles size={16} className="text-white" />
                 <div className="w-24 md:w-40 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                 <div className="w-1 h-1 bg-white rounded-full" />
            </div>
            
        </div>
    );
}
