"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Phone, Activity, Cpu, Sparkles, ShieldCheck, Linkedin, Github } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
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
            
            {/* Header HUD */}
            <div className="flex flex-col mb-16 md:mb-24 gap-6 relative z-10 max-w-[2200px] mx-auto items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-cyan-500" />
                    <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Communication / Uplink</span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8]">
                    Initiate <br />
                    <span className="text-transparent [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Contact</span>
                </h1>
                <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl text-gray-600 font-mono text-[9px] md:text-[10px] tracking-widest leading-relaxed uppercase">
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[SIG] CHANNEL_ENCRYPTED</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[PRT] SMTP_GATEWAY</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[LAT] 24ms_OPTIMAL</div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">[SEC] SSL_ACTIVE</div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 md:gap-20 relative z-10 max-w-[2200px] mx-auto items-center lg:items-stretch">
                
                {/* Left: Communication Hub Info */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10 md:gap-12 text-center lg:text-left items-center lg:items-start">
                     <div className="flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white flex items-center justify-center lg:justify-start gap-4">
                            <Activity className="text-cyan-400" size={32} />
                            Signal Path.
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-xl">
                            The communication line is open. Whether you have a specific system requirement or just want to discuss the future of AI, initiate the sequence below.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                         {[
                            { label: "Direct Uplink", value: "anish.grd2004@gmail.com", icon: Mail, color: "text-blue-400", href: "https://mail.google.com/mail/?view=cm&fs=1&to=anish.grd2004@gmail.com" },
                            { label: "Geo Location", value: "Madhya Pradesh, India", icon: MapPin, color: "text-violet-400" },
                            { label: "Github Profile", value: "github.com/anish-kumar-gupta", icon: Github, color: "text-gray-400", href: "https://github.com/anish2753" },
                            { label: "Linkedin Network", value: "linkedin.com/in/anish-kumar-gupta", icon: Linkedin, color: "text-blue-500", href: "https://www.linkedin.com/in/anish-kumar-gupta-0382022b7/" },
                            { label: "Voice Frequency", value: "+91 6299293388", icon: Phone, color: "text-cyan-400" },
                            { label: "System Status", value: "Secure & Online", icon: ShieldCheck, color: "text-emerald-400" }
                         ].map((info, i) => (
                             info.href ? (
                                <a key={i} href={info.href} target="_blank" rel="noopener noreferrer" className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-3 group hover:border-white/20 transition-all text-left overflow-hidden">
                                    <info.icon size={18} className={`${info.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                                    <div className="flex flex-col">
                                       <span className="text-[8px] md:text-[9px] text-gray-600 font-mono uppercase tracking-widest">{info.label}</span>
                                       <span className="text-gray-300 font-medium tracking-tight text-sm md:text-base truncate">{info.value}</span>
                                    </div>
                                </a>
                             ) : (
                                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-3 group hover:border-white/20 transition-all text-left overflow-hidden">
                                     <info.icon size={18} className={`${info.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                                     <div className="flex flex-col">
                                        <span className="text-[8px] md:text-[9px] text-gray-600 font-mono uppercase tracking-widest">{info.label}</span>
                                        <span className="text-gray-300 font-medium tracking-tight text-sm md:text-base truncate">{info.value}</span>
                                     </div>
                                </div>
                             )
                         ))}
                     </div>

                     <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex items-center gap-6 w-full">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                            <Cpu className="text-cyan-400 animate-pulse w-5 h-5" />
                        </div>
                        <p className="text-[9px] md:text-xs text-gray-500 font-mono leading-relaxed uppercase tracking-widest text-left">
                            Estimated Response Latency: <span className="text-cyan-400">Under 24 Hours</span>
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
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center justify-center h-full gap-8 text-center py-16 md:py-20 relative z-10"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                    <CheckCircle size={40} className="text-emerald-400" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter">Transmission Successful</h2>
                                    <p className="text-gray-500 font-mono text-[10px] md:text-xs uppercase tracking-widest">Digital Packet Cached in Gateway</p>
                                </div>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="px-8 py-3 rounded-full border border-white/10 text-[10px] md:text-xs font-mono text-gray-400 hover:text-white uppercase tracking-widest transition-all"
                                >
                                    New Sequence [RESET]
                                </button>
                            </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10 relative z-10 h-full justify-between">
                                <div className="flex flex-col gap-8 md:gap-10">
                                    {/* Command Inputs */}
                                    <div className="flex flex-col gap-3 md:gap-4">
                                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                                            <span className="text-[9px] md:text-[10px] text-cyan-500 font-mono">1.0 / ENTITY_ID</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 px-0 py-3 md:py-4 text-white text-lg md:text-xl font-bold focus:outline-none focus:border-cyan-400 placeholder:text-gray-800 transition-colors uppercase font-heading"
                                            placeholder="ENTER NAME..."
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3 md:gap-4">
                                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                                            <span className="text-[9px] md:text-[10px] text-cyan-500 font-mono">2.0 / RETURN_FREQ</span>
                                        </div>
                                        <input
                                            type="email"
                                            name="user_email"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 px-0 py-3 md:py-4 text-white text-lg md:text-xl font-bold focus:outline-none focus:border-cyan-400 placeholder:text-gray-800 transition-colors uppercase font-heading"
                                            placeholder="ENTER EMAIL..."
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3 md:gap-4">
                                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                                            <span className="text-[9px] md:text-[10px] text-cyan-500 font-mono">3.0 / PAYLOAD</span>
                                        </div>
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full bg-transparent border-b border-white/10 px-0 py-3 md:py-4 text-white text-lg md:text-xl font-bold focus:outline-none focus:border-cyan-400 placeholder:text-gray-800 transition-colors resize-none mb-2 md:mb-4 uppercase font-heading"
                                            placeholder="WRITE MESSAGE..."
                                        />
                                    </div>
                                </div>

                                <button
                                    disabled={formState === "submitting"}
                                    className="w-full bg-white text-black font-heading font-black py-5 md:py-6 rounded-xl md:rounded-2xl flex items-center justify-center gap-4 hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl group"
                                >
                                    {formState === "submitting" ? (
                                        <span className="flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
                                            Processing...
                                        </span>
                                    ) : (
                                        <>
                                            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">Execute Transmission</span>
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                    
                    {/* Perspective Decals - Hidden on small screens */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-cyan-500/20 rounded-br-3xl pointer-events-none hidden sm:block" />
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
