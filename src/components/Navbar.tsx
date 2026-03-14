"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";


const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mobileMenuOpen]);

    return (
        <header className="fixed top-6 w-full z-50 flex justify-center pointer-events-none">
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute left-6 md:left-12 pointer-events-auto"
            >
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg border border-cyan-800 flex items-center justify-center bg-transparent shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-cyan-400 font-bold text-lg">AK</span>
                    </div>
                    <span className="text-white font-bold tracking-tight text-xl">Anish</span>
                </Link>
            </motion.div>

            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`hidden md:flex pointer-events-auto rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 shadow-xl ${scrolled ? "bg-black/80 scale-95" : "bg-black/50 scale-100"
                    }`}
            >
                {/* Desktop Menu */}
                <ul className="flex items-center gap-1 sm:gap-2 px-4 py-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </motion.nav>

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute right-6 md:right-12 pointer-events-auto flex items-center"
            >
                {/* Desktop Let's Talk */}
                <Link
                    href="/contact"
                    className="hidden md:flex bg-white text-black text-xs font-bold px-6 py-3 rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] items-center gap-2"
                >
                    Let's Talk
                </Link>

                {/* Mobile Menu Toggle (Replacing button on mobile) */}
                <button 
                    onClick={() => setMobileMenuOpen(true)}
                    className="md:hidden w-11 h-11 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all active:scale-95"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl pointer-events-auto flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center border border-white/20">
                                    <span className="text-white font-black text-lg">Ak</span>
                                </div>
                                <span className="text-white font-bold tracking-tight text-lg">Anish</span>
                            </div>
                            <button 
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-6">
                            {navLinks.map((link, idx) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.li 
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`text-4xl font-bold transition-colors ${isActive ? "text-blue-400" : "text-white/60 hover:text-white"}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-auto"
                        >
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full bg-white text-black text-xl font-bold py-5 rounded-2xl flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
                            >
                                Let's Talk
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
