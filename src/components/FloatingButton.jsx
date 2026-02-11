import React from "react";

const FloatingButton = () => {
  return (
    <button className="fixed font-semibold text-[11px] top-1/2 right-0 z-1000 flex -translate-y-1/2 transform flex-col items-center justify-center rounded-l-xl bg-[#4B174B] px-0.5 py-4 text-white opacity-100 shadow-lg transition-colors hover:bg-[#5c2560]">
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
