// src/components/FloatingButtons.jsx
import React from "react";
import { FaWhatsapp, FaArrowUp, FaArrowDown } from "react-icons/fa";

const FloatingButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Left Side */}
      <a
        href="https://wa.me/+918680061311"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Right Side Scroll Buttons */}
      <div className="floating-scroll">
      {/* Back to Top Button */}
      <button className="animated-button" onClick={scrollToTop}>
        <svg viewBox="0 0 384 512" className="svgIcon">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>
    </div>
    </>
  );
};

export default FloatingButtons;
