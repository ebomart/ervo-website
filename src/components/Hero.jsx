import { heroContent } from "../company-assets/content";
import downArrowIcon from "../company-assets/assets/down-arrow.png";

const Hero = ({ onExploreClick }) => {
  return (
    <>
      <section
        className="relative mx-auto mb-10 flex h-[600px] w-[95%] items-start justify-center rounded-3xl bg-cover bg-center"
        style={{
          background: `
            linear-gradient(180deg, #000000 0%, #00000000 100%) 0% 0% no-repeat padding-box,
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
      <div className="flex items-center justify-center text-[#4B174B] text-[14px] font-semibold pb-2">
        <span className="text-[14px] font-[600]">{heroContent.buttonText}</span>
      </div>
      <button
        onClick={onExploreClick}
        className="border-[#F6C6F6] border mx-auto flex cursor-pointer items-center gap-3 rounded-full p-2 text-base font-medium text-white shadow-lg transition-colors"
        style={{
          background:
            "radial-gradient(closest-side at 50% 87%, rgba(248,117,248,0.25) 0%, rgba(247,227,255,0.25) 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <img src={downArrowIcon} alt="down arrow" className="h-5 w-5" />
      </button>
    </>
  );
};

export default Hero;
