"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MouseTiltProps {
    children: ReactNode;
    className?: string;
    tiltIntensity?: number;
}

export function MouseTilt({ children, className = "" }: MouseTiltProps) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
}
