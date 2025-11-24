"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      dir="rtl"
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-[#050d1a] flex items-center justify-center"
    >
      {/* --- GRADIENT BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-[#050d1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.25),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,#050d1a_100%)]" />
      {/* Backgound image */}
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-10" />

      {/* --- FLOATING PARTICLES --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-amber-300 shadow-2xl shadow-amber-300 rounded-full blur-[1px]"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: -50,
              x: (Math.random() - 0.5) * 120,
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* --- MAIN HERO CONTENT --- */}
      <motion.div
        className="relative z-20 container mx-auto px-6 py-24 text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.img
          src="/meta/logo-icon-white.png"
          alt="United International Group"
          className="w-[100px] md:w-[130px] mb-6 opacity-95"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Title */}
        <motion.h1
          className="text-white text-2xl md:text-4xl font-black drop-shadow-xl leading-snug"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          شركة الهدف الرائدة
          <br />
          <span className="bg-linear-to-r text-lg md:text-xl font-semibold from-blue-400 to-blue-600 bg-clip-text text-transparent">
            لاستيراد الأجهزة الكهربائية والإلكترونية والكهرومنزلية
          </span>
        </motion.h1>

        {/* Sub Description */}
        <motion.p
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          نحن ملتزمون بتقديم أفضل جودة في استيراد الأجهزة الكهربائية
          والإلكترونية والكهرومنزلية.
        </motion.p>

        <a
          href="#about"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition"
        >
          اكتشف المزيد
        </a>
      </motion.div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 w-full h-[180px] bg-linear-to-t from-blue-600/20 to-transparent blur-2xl" />
    </section>
  );
};

export default Hero;
