import { storesContent } from '../company-assets/content';

const StoreLocations = () => {
  const { title, buttonText, locations, backgroundImage } = storesContent;
  
  return (
    <section
      id="stores"
      className="relative w-full h-[550px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
        style={{ backdropFilter: 'blur(11px)' }}
      >
        <div className="bg-[#FFFFFF 0% 0%] backdrop-blur-sm rounded-xl p-10 md:p-14 max-w-2xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight tracking-tight">
            {title}
          </h2>
          <div className="flex flex-wrap gap-2 mb-10 text-black text-base md:text-lg leading-normal">
            {locations.map((location, index) => (
              <span key={index} className="whitespace-nowrap">
                {location}
                {index < locations.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </span>
            ))}
          </div>
          <button className="bg-ibo-red rounded-full text-white px-10 py-4 text-base font-medium transition-colors flex items-center gap-3 shadow-lg">
            {buttonText}
            <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoreLocations;

