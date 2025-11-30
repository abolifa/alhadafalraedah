"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("to", "info@alhadafalraedah.com.ly");

    try {
      const res = await fetch("https://eratech.com.ly/send-form.php", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();

      if (res.ok && text.trim() === "OK") {
        setSent(true);
        e.currentTarget.reset();
      } else {
        setError("");
      }
    } catch (err) {
      setError("");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      dir="rtl"
      className="relative w-full py-24 bg-[#f7f9fc] text-[#0a1a2f]"
    >
      <div className="container mx-auto px-6 lg:px-0">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">تواصل معنا</h2>
          <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            يسعدنا تواصلك معنا للحصول على الاستفسارات أو عروض الأسعار.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col h-full gap-6">
            {/* --- بداية التعديل على بطاقة المعلومات --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 border border-gray-200 shadow-lg flex flex-col gap-4" // Increased padding and shadow
            >
              <div className="flex items-start gap-5">
                {" "}
                {/* Adjusted alignment and gap */}
                <Phone className="w-7 h-7 text-blue-600 shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold mb-2">هاتف الشركة</h4>{" "}
                  {/* Stronger title */}
                  <div className="flex flex-col items-start gap-2">
                    {" "}
                    {/* Improved list spacing */}
                    <a
                      href="tel:+218914321413"
                      dir="ltr"
                      className="text-gray-700 hover:text-blue-600 transition font-medium underline"
                    >
                      +218 91 432 1413
                    </a>
                  </div>
                </div>
              </div>
              <hr className="border-gray-200" /> {/* Added separator */}
              <div className="flex items-start gap-5">
                <Mail className="w-7 h-7 text-blue-600 shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold mb-1">البريد الإلكتروني</h4>
                  <a
                    href="mailto:info@alhadafalraedah.com.ly"
                    className="text-gray-700 hover:text-blue-600 transition font-medium underline"
                  >
                    info@alhadafalraedah.com.ly
                  </a>
                </div>
              </div>
              <hr className="border-gray-200" /> {/* Added separator */}
              <div className="flex items-start gap-5">
                <MapPin className="w-7 h-7 text-blue-600 shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold mb-1">العنوان</h4>
                  <p className="text-gray-700 font-medium">
                    محلات النادي الأهلي - مصراته | ليبيا
                  </p>
                </div>
              </div>
            </motion.div>
            {/* --- نهاية التعديل على بطاقة المعلومات --- */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-[350px]"
            >
              <iframe
                src="https://maps.google.com/maps?q=32.37910081262098,15.14757514853538&z=15&output=embed"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm flex flex-col gap-6 h-full"
          >
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="رقم الهاتف"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="الموضوع"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="رسالتك"
              rows={6}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>

            {error && (
              <p className="text-red-600 text-center text-sm">{error}</p>
            )}

            {sent && (
              <p className="text-green-600 text-center text-sm">
                تم الإرسال بنجاح
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold text-lg disabled:opacity-50"
            >
              {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
