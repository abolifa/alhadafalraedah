"use client";

import { Mail, Phone, MapPin, Facebook, Instagram, Globe } from "lucide-react";
import { motion } from "framer-motion";

const gold =
  "bg-gradient-to-r from-[#d4af37] via-[#f3e39c] to-[#caa43a] text-transparent bg-clip-text";

const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="relative bg-[#0a1a2f] text-white pt-24 pb-12 overflow-hidden border-t-4 border-[#d4af37]"
    >
      <div className="absolute inset-0 -z-10 opacity-[0.12] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.32),transparent_75%)]"></div>

      <div className="container mx-auto px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <img
            src="/meta/logo-white.png"
            alt="Alhadaf Alraedah Logo"
            className="w-72 h-auto"
          />

          <p className="text-gray-300 leading-relaxed text-sm">
            نقدم حلولاً مبتكرة ترتقي بالخدمات داخل ليبيا، مع رؤية تعتمد على
            الجودة والتطوير المستمر.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-5"
        >
          <h4 className={`text-2xl font-extrabold mb-2 tracking-wide ${gold}`}>
            تواصل معنا
          </h4>

          <div className="flex items-center gap-3 group">
            <Phone className="w-6 h-6 text-[#d4af37] transition group-hover:scale-110" />
            <a
              href="tel:+218914321413"
              dir="ltr"
              className="text-gray-300 text-sm transition group-hover:text-white"
            >
              +218 91 432 1413
            </a>
          </div>

          <div className="flex items-center gap-3 group">
            <Mail className="w-6 h-6 text-[#d4af37] transition group-hover:scale-110" />
            <a
              href="mailto:info@alhadafalraedah.com.ly"
              className="text-gray-300 text-sm transition group-hover:text-white"
            >
              info@alhadafalraedah.com.ly
            </a>
          </div>

          <div className="flex items-start gap-3 group">
            <MapPin className="w-6 h-6 text-[#d4af37] mt-1 transition group-hover:scale-110" />
            <p className="text-gray-300 text-sm transition group-hover:text-white">
              محلات النادي الأهلي - مصراتة | ليبيا
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          <h4 className={`text-2xl font-extrabold mb-2 tracking-wide ${gold}`}>
            روابط سريعة
          </h4>

          <a
            href="#hero"
            className="text-gray-300 text-sm hover:text-[#f3e39c] transition"
          >
            الرئيسية
          </a>

          <a
            href="#about"
            className="text-gray-300 text-sm hover:text-[#f3e39c] transition"
          >
            من نحن
          </a>
          <a
            href="#categories"
            className="text-gray-300 text-sm hover:text-[#f3e39c] transition"
          >
            خدماتنا
          </a>
          <a
            href="#contact"
            className="text-gray-300 text-sm hover:text-[#f3e39c] transition"
          >
            تواصل معنا
          </a>
        </motion.div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-6">
        <div className="container mx-auto px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs md:text-sm tracking-wide">
            © {new Date().getFullYear()} Alhadaf Alraedah — جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-7">
            <a
              href="#"
              className="text-gray-400 hover:text-[#d4af37] hover:scale-110 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#d4af37] hover:scale-110 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#d4af37] hover:scale-110 transition"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
