"use client";

import { motion } from "framer-motion";

const categories = [
  {
    id: "home-appliances",
    title: "الأجهزة الكهربائية والكهرومنزلية",
    desc: "مجموعة شاملة من الأجهزة الكهربائية والكهرومنزلية عالية الجودة، المصممة لتلبية احتياجات المنازل والشركات بكفاءة وأداء موثوق.",
    image: "/products/home-appliance.jpg",
    color: "rgba(210,120,0,0.9)",
  },
  {
    id: "electronics",
    title: "الإلكترونيات",
    desc: "أجهزة إلكترونية بمعايير عالمية، تجمع بين التكنولوجيا الحديثة والاعتمادية لتوفير أفضل تجربة استخدام.",
    image: "/products/electronics.jpg",
    color: "rgba(17,24,39, 0.9)",
    reversed: true,
  },
  {
    id: "accessories",
    title: "ملحقات وأدوات كهربائية",
    desc: "تشكيلة واسعة من الملحقات والأدوات الكهربائية التي تغطي احتياجات المشاريع المنزلية والتجارية.",
    image: "/products/accessories.webp",
    color: "rgba(0,95,210,0.9)",
  },
];

const Categories = () => {
  return (
    <section
      id="categories"
      dir="rtl"
      className="relative w-full bg-[#f7f9fc] text-[#0a1a2f]"
    >
      <div className="container mx-auto px-6 pt-28 pb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          منتجاتنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          حلول متكاملة تجمع الجودة، الابتكار، والاعتمادية.
        </motion.p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "6rem", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 mx-auto h-[3px] bg-[#1a3a7a] rounded-full"
        />
      </div>

      {categories.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          dir="rtl"
          className={`relative w-full min-h-[85vh] flex flex-col md:flex-row overflow-hidden ${
            cat.reversed ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.08, x: cat.reversed ? 140 : -140 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative w-full md:w-1/2 border-t-[6px] md:border-t-0 ${
              cat.reversed ? "md:border-l-[6px]" : "md:border-r-[6px]"
            }`}
            style={{ borderColor: cat.color }}
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/30 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: cat.reversed ? 120 : -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex items-center justify-center bg-[#f7f9fc] px-6 md:px-16 py-20"
          >
            <motion.div
              className="max-w-xl space-y-8 text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="inline-block px-5 py-2 rounded-full text-sm font-medium tracking-wide"
                style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
              >
                {cat.title}
              </motion.div>

              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold leading-tight"
                style={{ color: cat.color }}
              >
                {cat.title}
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="text-gray-700 text-lg leading-relaxed text-justify"
              >
                {cat.desc}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { scaleX: 0, opacity: 0 },
                  visible: { scaleX: 1, opacity: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="h-[3px] w-24 origin-right rounded-full"
                style={{ backgroundColor: cat.color }}
              />
            </motion.div>
          </motion.div>
        </section>
      ))}
    </section>
  );
};

export default Categories;
