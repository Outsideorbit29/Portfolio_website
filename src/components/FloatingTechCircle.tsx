"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    Code2,
    MonitorPlay,
    Database,
    Server,
    Smartphone,
    Cpu,
    Cloud,
    TerminalSquare
} from "lucide-react";

const icons = [
    Code2,
    MonitorPlay,
    Database,
    Server,
    Smartphone,
    Cpu,
    Cloud,
    TerminalSquare
];

export function FloatingTechCircle() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    // Scroll parallax effect moving the core independently
    const coreY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

    return (
        <div ref={containerRef} className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">

            {/* Center Core (Free-Flowing Blob with Parallax) */}
            <motion.div
                className="absolute z-20 w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 border border-white/10 bg-black/50 glass-card flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] backdrop-blur-md"
                style={{ y: coreY }}
                animate={{
                    boxShadow: [
                        "0 0 30px rgba(139,92,246,0.3)",
                        "0 0 60px rgba(56,189,248,0.4)",
                        "0 0 30px rgba(139,92,246,0.3)"
                    ],
                    borderRadius: [
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "30% 70% 70% 30% / 30% 30% 70% 70%",
                        "40% 60% 70% 30% / 40% 60% 30% 70%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%"
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="text-center">
                    <span className="block text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Full</span>
                    <span className="block text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-widest leading-none mt-1">Stack</span>
                </div>
            </motion.div>

            {/* Orbiting Icons */}
            <motion.div
                className="absolute inset-0 w-full h-full rounded-full border border-dashed border-white/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
                {icons.map((Icon, idx) => {
                    const angle = (idx / icons.length) * 360;

                    return (
                        <div 
                            key={idx}
                            className="absolute inset-0"
                            style={{
                                transform: `rotate(${angle}deg)`, 
                            }}
                        >
                            {/* Counter-rotate the icon so it stays strictly upright during the orbit */}
                            <motion.div 
                                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 p-4 rounded-full border border-white/10 shadow-[0_0_20px_rgba(56,189,248,0.15)] glass-card flex items-center justify-center"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            >
                                <Icon className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                            </motion.div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Inner decorative orbit */}
            <motion.div
                className="absolute w-[60%] h-[60%] rounded-full border border-white/5"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            </motion.div>

        </div>
    );
}
