import { heroContent } from '../company-assets/content';

const Hero = ({ onExploreClick }) => {
  return (
    <section 
      className="relative w-full h-[700px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('${heroContent.backgroundImage}')`
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-center px-6 max-w-5xl pt-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ervo-brown mb-6 leading-tight tracking-tight">
          {heroContent.title}
        </h2>
        <p className="text-lg md:text-xl text-text-primary mb-2 font-normal leading-relaxed">
          {heroContent.subtitle1}
        </p>
        <p className="text-lg md:text-xl text-text-primary mb-10 font-normal leading-relaxed">
          {heroContent.subtitle2}
        </p>
        <button 
          onClick={onExploreClick}
          className="bg-ervo-brown text-white px-10 py-4 rounded-lg text-base font-medium hover:bg-ervo-dark-brown transition-colors flex items-center gap-3 mx-auto shadow-lg cursor-pointer"
        >
          {heroContent.buttonText}
          <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;

