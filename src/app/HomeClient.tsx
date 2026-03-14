"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, MonitorPlay, Code2, Sparkles, Send, Cpu, Activity, ShieldCheck, Target, Zap, Brain } from "lucide-react";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Scrollable3DObject } from "@/components/Scrollable3DObject";
import { MouseTilt } from "@/components/MouseTilt";
import { ThreeImage } from "@/components/ThreeImage";
import { FloatingTechCircle } from "@/components/FloatingTechCircle";

export default function HomeContent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  const { scrollYProgress } = useScroll();
  const systemCoreScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const systemCoreOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.15, 0.05]);
  const identityOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 0.1]);
  const identityScale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);

  return (
    <div className="w-full relative min-h-screen overflow-x-hidden">
      {/* Fixed 3D Background */}
      <Scrollable3DObject />

      {/* Massive Background Title - Responsive Font Size */}
      <motion.div
        style={{ scale: systemCoreScale, opacity: systemCoreOpacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6vw] lg:text-[10vw] font-heading font-black text-white select-none pointer-events-none z-0 tracking-tighter uppercase whitespace-nowrap"
      >
        SYSTEM_CORE
      </motion.div>

      {/* Main Content Layer - Reduced Gaps */}
      <div className="w-full flex flex-col gap-16 md:gap-24 lg:gap-32 pb-12 relative z-10 px-0">

        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center relative pt-16 px-4 md:px-8 lg:px-12 w-full">

          {/* Header HUD Metadata - Responsive Display */}
          <div className="absolute top-20 lg:top-24 left-4 md:left-8 lg:left-12 flex flex-col gap-2 z-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-blue-500" />
              <span className="text-blue-400 font-mono text-[9px] lg:text-[10px] tracking-[0.3em] uppercase">Uplink_Established</span>
            </div>
            <div className="font-mono text-[7px] lg:text-[8px] text-gray-600 tracking-widest leading-relaxed">
              [ID] ANISH_SYSTEM_001 <br />
              [AUTH] LEVEL_9_CLEARANCE
            </div>
          </div>

          {/* Animated Background Blob */}
          <motion.div
            className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[150px] pointer-events-none z-0 mix-blend-screen"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full relative z-10 pt-16 lg:pt-0 max-w-[2000px] mx-auto">

            {/* Left Column: Text Content */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-full lg:w-[55%] flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
            >
              <motion.div variants={item} className="inline-flex items-center gap-3 px-4 py-2 rounded-xl glass bg-white/[0.03] border border-white/10 w-fit">
                <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">System Status: Optimal</span>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-5xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-[0.85] md:leading-[0.8] relative z-10 uppercase"
              >
                Anish <br />
                <span className="text-white [ -webkit-text-stroke:1px_rgba(255,255,255,0.25)]">
                  Kumar Gupta
                </span>
              </motion.h1>

              <motion.p variants={item} className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl font-light leading-relaxed">
                Full Stack Engineer crafting end-to-end web applications — from pixel-perfect UIs to robust APIs, databases, and AI-powered features.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mt-2">
                <Link href="/projects" className="group flex items-center gap-3 bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-2xl font-heading font-black text-xs uppercase tracking-widest hover:bg-blue-400 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  Execute Project_Fetch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="/api/resume" download="Anish_Kumar_Gupta_Resume.pdf" className="group flex items-center gap-3 glass-card bg-white/[0.03] px-8 md:px-10 py-4 md:py-5 rounded-2xl text-white font-heading font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  Get_Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: Floating Tech Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:flex lg:w-[45%] justify-center lg:justify-end items-center self-center h-full mt-8 lg:mt-0 relative lg:-translate-x-8 xl:-translate-x-12"
            >
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="w-[350px] md:w-[600px] h-[350px] md:h-[600px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite] opacity-20" />
                <div className="absolute w-[400px] md:w-[700px] h-[400px] md:h-[700px] border-[0.5px] border-dashed border-blue-500/20 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              </div>
              <div className="relative z-10 scale-[1] md:scale-110 lg:scale-120">
                <FloatingTechCircle />
              </div>
            </motion.div>

          </div>

          {/* Bottom HUD Metadata */}
          <div className="absolute bottom-12 right-4 md:right-8 lg:right-12 hidden sm:flex flex-col items-end gap-2 z-20">
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-mono text-[8px] lg:text-[9px] tracking-[0.2em] uppercase">Core_Instruction / Execute</span>
              <div className="w-8 h-[1px] bg-violet-500" />
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={12} className="text-emerald-500" />
                <span className="text-[7px] lg:text-[8px] text-gray-700 font-mono tracking-widest uppercase">Secure_Node</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={12} className="text-orange-500" />
                <span className="text-[7px] lg:text-[8px] text-gray-700 font-mono tracking-widest uppercase">Real_Time_Sync</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured About Preview */}
        <section className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-12 w-full gap-12 lg:gap-32 relative overflow-hidden max-w-[2000px] mx-auto">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-10 h-[1px] bg-blue-500" />
                <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">Process_Overview</span>
              </div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
                className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none"
              >
                Engineering <br />
                <span className="text-transparent [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">with Purpose</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} viewport={{ once: true }}
              className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl"
            >
              I engineer complete digital products — from responsive, animated frontends with React &amp; Next.js to scalable backends with Node.js &amp; FastAPI.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
              <Link href="/about" className="group text-[10px] md:text-xs font-heading font-black uppercase tracking-[0.3em] flex items-center gap-3 text-white hover:text-blue-400 transition-all">
                Access Entity Profile <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center h-full relative">
            <MouseTilt tiltIntensity={10} className="w-full max-w-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
                className="w-full aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden relative glass-card p-3 md:p-4 group border border-white/5"
              >
                <div className="w-full h-full rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center relative inner-shadow overflow-hidden">
                  <ThreeImage
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2560&auto=format&fit=crop"
                    alt="Programming Workspace Setup"
                  />
                  <motion.div
                    animate={{ top: ["-100%", "100%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] z-20 pointer-events-none opacity-40"
                  />
                </div>
              </motion.div>
            </MouseTilt>
          </div>
        </section>

        {/* About Me Preview */}
        <section className="px-4 md:px-8 lg:px-12 w-full flex flex-col gap-10 md:gap-12 relative max-w-[2000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 relative z-10 items-center lg:items-start"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-violet-500" />
              <span className="text-violet-500 font-mono text-[10px] md:text-xs tracking-widest uppercase">System_Entity_Data</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter text-center lg:text-left">About Me</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-8 glass-card bg-black/40 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col gap-6 md:gap-8 hover:border-violet-500/20 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Code2 className="w-6 h-6 md:w-8 md:h-8 text-violet-400" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl md:text-3xl font-heading font-black text-white tracking-tight uppercase text-center lg:text-left">Anish Kumar Gupta</h3>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light group-hover:text-gray-300 transition-colors text-center lg:text-left">
                  I&apos;m a full-stack developer and AI enthusiast passionate about building scalable, meaningful digital experiences. I bridge the gap between complex data science and elegant front-end interfaces.
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 mt-2">
                <Link href="/about" className="flex items-center gap-3 text-xs font-heading font-black uppercase tracking-[0.2em] text-violet-400 hover:text-white transition-all group-hover:gap-5">
                  INITIATE_FULL_READOUT <ArrowRight size={14} />
                </Link>
                <div className="hidden lg:block h-[1px] flex-1 bg-white/5" />
              </div>
            </motion.div>

            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {[
                { label: "Execution_Nodes", value: "10+", icon: Target, color: "text-blue-400" },
                { label: "Loaded_Tech", value: "20+", icon: Cpu, color: "text-violet-400" },
                { label: "Real_Time_Input", value: "WORK", icon: Send, color: "text-emerald-400" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-row items-center gap-6 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color} opacity-70 group-hover:opacity-100`} />
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="text-[9px] md:text-[10px] text-gray-500 font-mono tracking-widest uppercase">{stat.label}</p>
                    <p className="text-xl md:text-2xl font-heading font-black text-white tracking-tighter">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Arsenal Section */}
        <section className="px-4 md:px-8 lg:px-12 w-full flex flex-col gap-10 md:gap-12 relative overflow-hidden max-w-[2000px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 relative z-10">
            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-pink-500" />
                <span className="text-pink-500 font-mono text-xs tracking-widest uppercase">System_Inventory</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none">Arsenal</h2>
            </div>
            <Link href="/skills" className="group text-[10px] md:text-xs font-heading font-black uppercase tracking-[0.3em] flex items-center gap-3 text-gray-500 hover:text-white transition-all pb-1">
              FULL_MANIFEST <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl text-center md:text-left relative z-10"
          >
            A specialized collection of technical protocols and engineering standards used to architect robust digital ecosystems.
            From high-fidelity interfaces to neural-inspired architectures, this is the core engine drive.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:auto-rows-[220px] lg:auto-rows-[250px] w-full relative z-10">
            <MouseTilt tiltIntensity={5} className="md:col-span-2 md:row-span-2 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] glass-card bg-black/40 border border-white/5 hover:border-blue-500/20 group h-full flex flex-col justify-between overflow-hidden relative text-left"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-white/[0.03] w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-all">
                    <MonitorPlay className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <span className="text-[8px] md:text-[10px] text-blue-500 font-mono tracking-widest uppercase mb-1 block">Sub_System / CORE_STACK</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-white tracking-tighter uppercase leading-none">Full-Cycle <br /> Engineering</h3>
                  </div>
                </div>

                <div className="z-10 max-w-lg mt-4">
                  <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed text-left">
                    Architecting seamless digital ecosystems using React, Next.js, and FastAPI.
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
                    {["React", "NextJS", "FastAPI", "NodeJS"].map(t => (
                      <span key={t} className="px-3 md:px-4 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-[8px] md:text-[10px] font-mono text-gray-500 tracking-widest uppercase">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </MouseTilt>

            <MouseTilt tiltIntensity={10} className="md:col-span-1 md:row-span-1 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-[2rem] glass-card bg-black/40 border border-white/5 hover:border-pink-500/20 group h-full flex flex-col justify-center gap-5 relative overflow-hidden text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/[0.03] w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-tight leading-none italic">Interface <br /> Motion</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div whileInView={{ width: "90%" }} className="h-full bg-pink-500" />
                  </div>
                  <span className="text-[9px] text-gray-600 font-mono tracking-widest uppercase">Fidelity: 0.90_SYNC</span>
                </div>
              </motion.div>
            </MouseTilt>

            <MouseTilt tiltIntensity={10} className="md:col-span-1 md:row-span-1 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-[2rem] glass-card bg-black/40 border border-white/5 hover:border-emerald-500/20 group h-full flex flex-col justify-center gap-5 relative overflow-hidden text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/[0.03] w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-tight leading-none italic">Data <br /> Storage</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div whileInView={{ width: "82%" }} className="h-full bg-emerald-500" />
                  </div>
                  <span className="text-[9px] text-gray-600 font-mono tracking-widest uppercase">IOPS: 4400_READ</span>
                </div>
              </motion.div>
            </MouseTilt>

            <MouseTilt tiltIntensity={5} className="md:col-span-1 lg:col-span-3 md:row-span-1 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] glass-card bg-gradient-to-r from-violet-900/20 to-indigo-900/20 border border-white/10 hover:border-violet-400/30 group h-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden text-left"
              >
                <div className="flex items-center gap-6 md:gap-8 z-10">
                  <div className="bg-white/5 w-16 h-16 md:w-20 md:h-20 rounded-[1rem] md:rounded-[1.5rem] flex items-center justify-center border border-white/10 group-hover:rotate-[15deg] transition-all duration-500">
                    <Brain className="w-10 h-10 md:w-12 md:h-12 text-violet-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] md:text-[10px] text-violet-400 font-mono tracking-widest uppercase font-bold text-transparent [ -webkit-text-stroke:1px_rgba(167,139,250,0.5)]">Sub_System / AI_ENGINE</span>
                    <h3 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase leading-none">Machine Learning</h3>
                  </div>
                </div>
                <div className="flex-1 max-w-md md:text-right z-10">
                  <p className="text-gray-400 font-light italic text-base md:text-lg leading-relaxed text-center md:text-right">
                    Compiling intelligence into production systems using TensorFlow and LangChain.
                  </p>
                </div>
              </motion.div>
            </MouseTilt>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <div className="px-4 md:px-8 lg:px-12 w-full relative mb-8 max-w-[2000px] mx-auto">
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full relative py-12 md:py-24 px-6 md:px-20 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden glass-card flex flex-col items-center text-center border border-white/10 group"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="flex flex-col gap-6 md:gap-8 relative z-10 items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[9px] md:text-[10px] text-blue-500 font-mono tracking-[0.4em] md:tracking-[0.5em] uppercase">Ready for Uplink</span>
              </div>
              <h2 className="text-3xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.95] md:leading-[0.9] tracking-tighter uppercase">
                Build Something <br />
                <span className="text-white [ -webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Extraordinary</span>
              </h2>
              <div className="pt-2 md:pt-4 w-full sm:w-auto">
                <Link href="/contact" className="group relative inline-flex items-center justify-center p-0.5 w-full sm:w-auto overflow-hidden text-sm font-medium rounded-2xl group border border-white/10 hover:border-white/30 transition-all">
                  <span className="relative px-8 md:px-16 py-4 md:py-6 transition-all ease-in duration-75 bg-white text-black font-heading font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-2xl group-hover:bg-transparent group-hover:text-white group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] w-full block">
                    SEND_SIGNAL
                  </span>
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
