"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      dir="rtl"
      className="relative w-full py-28 bg-[#0b0f17] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#111623_0%,#0b0f17_100%)] opacity-90" />

      <div className="container relative z-20 mx-auto px-6 lg:px-0 max-w-7xl">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-wide">
            من نحن
          </h2>

          <div className="w-24 h-1 mt-4 bg-blue-500 rounded-full" />

          <p className="mt-6 text-gray-300 leading-relaxed text-lg max-w-3xl">
            شركة الهدف الرائدة في ليبيا لاستيراد الأجهزة الكهربائية،
            الإلكترونية، والكهرومنزلية. نقدم مجموعة واسعة من المنتجات عالية
            الجودة التي تلبي احتياجات السوق المحلي مع التركيز على الابتكار وخدمة
            العملاء الممتازة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              خبرة تضمن الجودة… وقوة توريد تدعم السوق الليبي
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg mb-10 text-justify">
              بفضل شبكات التوريد الواسعة والبنية اللوجستية القوية، توفر شركة
              الهدف الرائدة حلولاً متكاملة للمستهلكين، الشركات، ورش الصيانة،
              نركز على الاستدامة، التوريد المستمر، والمنتجات التي تتحمل الظروف
              القاسية في السوق الليبي.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "أجهزة كهربائية",
                  desc: "منتجات عالية الجودة للمنازل والمحال التجارية.",
                },
                {
                  title: "إلكترونيات حديثة",
                  desc: "أجهزة موثوقة بمعايير عالمية.",
                },
                {
                  title: "معدات منزلية",
                  desc: "حلول تلائم احتياجات جميع المستخدمين.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-[#111827] border border-[#1f2937] rounded-xl p-5"
                >
                  <h4 className="text-xl font-bold mb-2 text-blue-400">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-[#111827] border border-[#1f2937]" />
            <div className="absolute inset-0 p-5">
              <img
                src="/images/about.webp"
                className="w-full h-full object-cover opacity-90 rounded-2xl border border-gray-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
