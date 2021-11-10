import React, { useEffect, useState } from "react";
import "./scrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="ScrollToTop">
      {isVisible && (
        <div onClick={toTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
