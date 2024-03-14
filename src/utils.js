import { Children } from "react";
import { useState, useEffect } from "react";

export const Mapping = ({ render, of }) =>
  Children.toArray(of.map((item, index) => render(item, index)));

export const MOBILE_WINDOW_SIZE = 768;


export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

