import { useState, useEffect, useRef, RefObject } from 'react';

/** Counts from 0 up to `target` over `duration` ms when the ref element enters the viewport */
export function useCountUp(
  target: number,
  duration: number = 2000,
  decimals: number = 0
): { count: number; ref: RefObject<HTMLDivElement> } {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = decimals > 0
        ? Math.round(eased * target * Math.pow(10, decimals)) / Math.pow(10, decimals)
        : Math.floor(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [triggered, target, duration, decimals]);

  return { count, ref };
}

/** Returns a ref + isVisible flag that fires once when the element scrolls into view */
export function useInView(threshold = 0.15): {
  isVisible: boolean;
  ref: RefObject<HTMLDivElement>;
} {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { isVisible, ref };
}
