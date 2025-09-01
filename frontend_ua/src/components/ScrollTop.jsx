// components/ScrollTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can also use "auto" if you don't want smooth scroll
    });
  }, [pathname]);

  return null;
}

export default ScrollTop;
