"use client";

import { motion } from "framer-motion";
import GradientBackground from "../components/gradient-background";

export default function Hero() {
  return (
    <section className="py-32 px-6 text-center max-w-6xl mx-auto">
      <GradientBackground />
      <motion.h1
        className="text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Madimetja Movundlela
      </motion.h1>

      <motion.p
        className="text-xl text-gray-600 dark:text-gray-400 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Full Stack Developer building modern web applications.
      </motion.p>

      <motion.a
        href="#contact"
        className="px-6 py-3 rounded-lg font-medium
        bg-black text-white
        dark:bg-white dark:text-black
        hover:opacity-80 transition"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Contact Me
      </motion.a>
      <GradientBackground />
    </section>
  );
}
