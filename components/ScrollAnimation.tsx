"use client";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  reappear?: boolean;
  threshold?: number;
}

const ScrollAnimation: React.FC<AnimateOnScrollProps> = ({
  children,
  reappear,
  threshold = 0.4,
}) => {
  const [containerRef, isVisible] = useScrollAnimation({
    threshold: threshold,
    reappear: reappear,
  });

  return (
    <>
      <div
        ref={containerRef}
        className={`transition duration-700 ${
          isVisible
            ? "opacity-100 blur-none translate-x-0"
            : "opacity-0 blur-lg -translate-x-20"
        }  motion-reduce:transition-none motion-reduce:hover:transform-none`}
      >
        {children}
      </div>
    </>
  );
};

export default ScrollAnimation;
