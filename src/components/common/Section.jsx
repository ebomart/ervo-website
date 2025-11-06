import React from "react";

const Section = ({ children, id }) => {
  return (
    <section
      id={id}
      className="relative w-full rounded-[28px] bg-[padding-box] bg-[radial-gradient(closest-side_at_50%_50%,rgba(239,227,195,0.37)_0%,rgba(245,239,222,0.37)_33%,rgba(240,229,200,0)_100%)] bg-cover bg-no-repeat px-6 py-20 before:absolute before:top-0 before:left-0 before:h-[2px] before:w-full before:bg-[radial-gradient(circle_at_center,rgba(220,169,145,0.4),rgba(255,255,255,0.4))] before:content-[''] md:px-12"
    >
      {children}
    </section>
  );
};

export default Section;
