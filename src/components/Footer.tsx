import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowRight, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 mt-32 bg-black/50 backdrop-blur-xl relative z-20">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-16 text-gray-400">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand & Description */}
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg border border-cyan-800 flex items-center justify-center bg-transparent">
                                <span className="text-cyan-400 font-bold text-lg">AK</span>
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-white">
                                Portfolio
                            </span>
                        </div>
                        <p className="text-sm max-w-sm leading-relaxed text-gray-400">
                            Full Stack Engineer building end-to-end digital products — from animated React frontends to resilient Node.js backends and AI integrations.
                        </p>

                        {/* Socials */}
                        <div className="flex items-center gap-3 mt-2">
                            <a href="https://github.com/Outsideorbit29" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-gray-400 hover:text-white">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="https://www.linkedin.com/in/anish-kumar-gupta-6a9b50251" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-gray-400 hover:text-white">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://x.com/Anish_029" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-gray-400 hover:text-white">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="mailto:anish.grd2004@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-gray-400 hover:text-white">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-6">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact details */}
                    <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-6">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Get in Touch</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li className="text-gray-400">anish.grd2004@gmail.com</li>
                            <li className="text-gray-400">Vellore Institute of Technology</li>
                            <li>
                                <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 group font-medium overflow-hidden">
                                    Send a message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p className="flex items-center gap-1">
                        &copy; {new Date().getFullYear()} Portfolio. Built by Anish
                    </p>
                    <p>
                        Designed &amp; Developed by Anish Kumar Gupta
                    </p>
                </div>
            </div>
        </footer>
    );
}
