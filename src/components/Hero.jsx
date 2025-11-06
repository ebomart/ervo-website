import { heroContent } from "../company-assets/content";
import arrowRightIcon from "../company-assets/assets/right-circle-outlined.png";

const Hero = ({ onExploreClick }) => {
  return (
    <section
      className=" mx-auto w-[95%] h-[700px] rounded-3xl flex items-start justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('${heroContent.backgroundImage}')`,
      }}
    >
      <div className=" z-10 text-center px-6 max-w-[100%] pt-20">
        <h2 className="text-5xl font-bold text-ervo-brown mb-6 leading-tight tracking-tight">
          {heroContent.title}
        </h2>
        <p className="text-lg md:text-xl text-text-gray mb-2 font-normal leading-relaxed">
          {heroContent.subtitle1}
        </p>
        <p className="text-lg md:text-xl text-text-gray mb-10 font-normal leading-relaxed">
          {heroContent.subtitle2}
        </p>
        <button
          onClick={onExploreClick}
          className="bg-ervo-brown text-white px-10 py-4 rounded-full text-base font-medium hover:bg-ervo-dark-brown transition-colors flex items-center gap-3 mx-auto shadow-lg cursor-pointer"
        >
          {heroContent.buttonText}
          <img src={arrowRightIcon} alt="arrow right" className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
