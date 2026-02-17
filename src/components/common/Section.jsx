import React from "react";

const Section = ({ children, id, style }) => {
  return (
    <section
      id={id}
      style={style}
      className="relative w-full rounded-[28px] bg-[padding-box] px-6 lg:py-20 py-10 before:absolute before:top-0 before:left-0 before:h-[2px] before:w-full before:content-[''] md:px-12"
    >
      {children}
    </section>
  );
};

export default Section;
