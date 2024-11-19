import { ChevronUp } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";

export default function BackTop() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleToggle = () => {
    if (window.scrollY > 200) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleToggle);

    return () => window.removeEventListener("scroll", handleToggle);
  }, []);

  const handleScollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isShow && (
        <div className="fixed right-8 bottom-8">
          <Button
            onClick={handleScollToTop}
            size={"icon"}
            className="rounded-full animate-bounce"
            variant={"destructive"}
          >
            <ChevronUp />
          </Button>
        </div>
      )}
    </>
  );
}
