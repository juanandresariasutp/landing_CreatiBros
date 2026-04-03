"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollAnimationConfig {
  threshold?: number | number[];
  rootMargin?: string;
}

export function useScrollAnimation(config: ScrollAnimationConfig = {}) {
  const {
    threshold = 0.2,
    rootMargin = "0px 0px -100px 0px"
  } = config;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
