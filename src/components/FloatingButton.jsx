import React from "react";

const FloatingButton = () => {
  return (
    <button
      className="bg-brand-primary fixed top-1/2 right-0 z-1000 flex -translate-y-1/2 transform cursor-pointer flex-col items-center justify-center rounded-l-xl px-0.5 py-4 text-[11px] font-semibold text-white opacity-100 shadow-lg"
      onClick={() => {
        window.open("https://www.ibo.com/faq/account-login", "_blank", "noopener,noreferrer");
      }}
    >
      <span
        style={{
          writingMode: "vertical-lr",
          letterSpacing: "0.05em",
          textOrientation: "upright",
        }}
      >
        CONTACT US
      </span>
    </button>
  );
};

export default FloatingButton;
