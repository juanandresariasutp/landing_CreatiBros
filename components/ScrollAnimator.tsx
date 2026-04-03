"use client";

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "scaleOut";
  delay?: number;
}

export function ScrollAnimator({
  children,
  className,
  animation = "fadeInUp",
  delay = 0,
}: ScrollAnimatorProps) {
  const { ref, isVisible } = useScrollAnimation();
  const animationClasses = {
    fadeInUp: "animate-scroll-fadeInUp",
    fadeInLeft: "animate-scroll-fadeInLeft",
    fadeInRight: "animate-scroll-fadeInRight",
    scaleIn: "animate-scroll-scaleIn",
    scaleOut: "animate-scroll-scaleOut",
  } as const;

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? animationClasses[animation] : "scroll-animation-initial",
        className
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
