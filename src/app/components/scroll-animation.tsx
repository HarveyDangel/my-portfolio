"use client";
import { useRef, useEffect, type ReactNode } from "react";

type AnimationType = "fade-in-up" | "slide-in-left" | "scale-in";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: AnimationType;
  duration?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "span";
}

export default function ScrollAnimation({
  children,
  animation = "fade-in-up",
  duration = 0.8,
  once = true,
  className = "",
  as: Tag = "div",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animation = `${animation} ${duration}s ease forwards`;
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.style.animation = "none";
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, duration, once]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ opacity: 0 }}
    >
      {children}
    </Tag>
  );
}
