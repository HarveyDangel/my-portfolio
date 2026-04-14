"use client"; // Needed in Next.js 13+ App Router
import { motion } from "framer-motion";

export default function ScrollPage() {
  return (
    <div className="space-y-40 p-10">
      <section className="h-screen flex items-center justify-center">
        <h2 className="text-5xl font-bold">Scroll Down 👇</h2>
      </section>

      {/* Fade In Section */}
      <motion.div
        className="p-10 bg-blue-500 text-white text-3xl rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Animate only once when in view
      >
        I fade in when you scroll to me ✨
      </motion.div>

      {/* Slide In Section */}
      <motion.div
        className="p-10 bg-green-500 text-white text-3xl rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }} 
        // amount controls how much of the element should be visible before animating
      >
        I slide in from the left 🚀
      </motion.div>

      {/* Scale In Section */}
      <motion.div
        className="p-10 bg-purple-500 text-white text-3xl rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} // will animate every time it enters view
      >
        I scale in when scrolled into view 🎉
      </motion.div>
    </div>
  );
}
