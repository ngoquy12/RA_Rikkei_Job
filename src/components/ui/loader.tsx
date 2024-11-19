import { useState, useEffect } from "react";

interface LoaderProps {
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Loader({ isLoading = true, size = "md" }: LoaderProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!show) return null;

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(255,255,255,0.5)] z-[100]">
      <div className={`${sizeClasses[size]} relative`} aria-label="Loading">
        <div className="absolute inset-0 border-4 border-red-200 rounded-full"></div>
        <div
          className="absolute inset-0 border-4 border-red-500 rounded-full animate-spin"
          style={{
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
            animationDuration: "1s",
          }}
        ></div>
      </div>
    </div>
  );
}
