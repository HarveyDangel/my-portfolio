"use client";
import ScrollAnimation from "./scroll-animation";

export default function ScrollPage() {
  return (
    <div className="space-y-40 p-10">
      <section className="h-screen flex items-center justify-center">
        <h2 className="text-5xl font-bold">Scroll Down 👇</h2>
      </section>

      <ScrollAnimation animation="fade-in-up" className="p-10 bg-blue-500 text-white text-3xl rounded-2xl shadow-lg">
        I fade in when you scroll to me ✨
      </ScrollAnimation>

      <ScrollAnimation animation="slide-in-left" className="p-10 bg-green-500 text-white text-3xl rounded-2xl shadow-lg">
        I slide in from the left 🚀
      </ScrollAnimation>

      <ScrollAnimation animation="scale-in" once={false} className="p-10 bg-purple-500 text-white text-3xl rounded-2xl shadow-lg">
        I scale in when scrolled into view 🎉
      </ScrollAnimation>
    </div>
  );
}
