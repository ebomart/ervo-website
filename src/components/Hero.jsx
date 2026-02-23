import { heroContent } from "../company-assets/content";
import { gradients } from "../company-assets/theme";
import downArrowIcon from "../company-assets/assets/down-arrow.png";

const Hero = ({ onExploreClick }) => {
  return (
    <>
      <section
        id="hero"
        className="relative mx-auto mb-10 flex min-h-[650px] w-[95%] items-start justify-center rounded-3xl bg-cover bg-center"
        style={{
          background: `
            ${gradients.heroOverlay} 0% 0% no-repeat padding-box,
            url('${heroContent.backgroundImage}') center bottom / cover no-repeat
          `,
        }}
      >
        <div className="z-10 max-w-full px-6 pt-20 text-center">
          <h2 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white">
            {heroContent.title}
          </h2>
          <p className="mb-2 text-lg leading-relaxed font-normal text-white md:text-xl">
            {heroContent.subtitle1}
          </p>
          <p className="mb-10 text-lg leading-relaxed font-normal text-white md:text-xl">
            {heroContent.subtitle2}
          </p>
        </div>
      </section>
      <div className="text-brand-primary flex items-center justify-center pb-2 text-[14px] font-semibold">
        <span className="text-[14px] font-semibold">
          {heroContent.buttonText}
        </span>
      </div>
      <button
        onClick={onExploreClick}
        className="mx-auto flex cursor-pointer items-center gap-3 rounded-full border p-2 text-base font-medium text-white shadow-md transition-colors"
        style={{
          border: gradients.heroButtonBorder,
          background: gradients.heroButtonBg,
        }}
      >
        <img src={downArrowIcon} alt="down arrow" className="h-5 w-5" />
      </button>
    </>
  );
};

export default Hero;
