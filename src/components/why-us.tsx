"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Truck, Star, Zap, Layers } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: "جودة مضمونة",
      desc: "نقدم أجهزة كهربائية وإلكترونية وكهرومنزلية أصلية من أفضل الماركات العالمية وبمعايير عالية الجودة.",
    },
    {
      icon: Truck,
      title: "توريد وشحن سريع",
      desc: "شبكات توزيع جاهزة توفر وصول المنتجات بسرعة وكفاءة إلى جميع مدن ليبيا.",
    },
    {
      icon: Star,
      title: "ماركات عالمية معتمدة",
      desc: "نتعامل مع أبرز الشركات والمصانع العالمية لتوفير منتجات موثوقة وعالية الأداء.",
    },
    {
      icon: Layers,
      title: "تنوع شامل للمنتجات",
      desc: "نوفر مجموعة واسعة تغطي احتياجات المنازل والشركات والمشاريع.",
    },
    {
      icon: Zap,
      title: "تقنيات حديثة",
      desc: "منتجات تعتمد على أحدث التكنولوجيا لضمان كفاءة أعلى واستهلاك أقل.",
    },
    {
      icon: CheckCircle,
      title: "خبرة وثقة",
      desc: "سنوات من العمل في مجال الأجهزة الكهربائية جعلتنا الخيار الأول لآلاف العملاء.",
    },
  ];

  return (
    <section
      id="why-us"
      dir="rtl"
      className="relative w-full py-24 bg-white text-[#0a1a2f]"
    >
      <div className="container mx-auto px-6 lg:px-0">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">لماذا نحن؟</h2>
          <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            لأننا في شركة الهدف الرائدة نضمن لكم الجودة، التنوع، والاعتمادية في
            كل منتج نقدمه.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="group bg-[#f7f9fc] border border-gray-200 rounded-3xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <item.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
