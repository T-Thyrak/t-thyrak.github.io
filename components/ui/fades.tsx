"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function FadeInObject({
  children,
  className,
}: Readonly<{
  children?: ReactNode;
  className?: string;
}>): JSX.Element {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsTextVisible(entry.isIntersecting));
    });
    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  return (
    <div
      className={`${className} fade-in-section ${
        isTextVisible ? "is-visible" : ""
      }`}
      ref={domRef}>
      {children}
    </div>
  );
}
