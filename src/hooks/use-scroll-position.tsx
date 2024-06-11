import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Aktif - Handle Scroll");
      console.log(window.scrollY > 0);
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    console.log("Kena useEffect add event listener");
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Kena useEffect remove event listener");
    };
  }, []);

  return isScrolled;
};
