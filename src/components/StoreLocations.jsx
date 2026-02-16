import { storesContent } from "../company-assets/content";
// import storeLocationsImage from '../company-assets/assets/Ibo-store.png';
import arrowRightIcon from "../company-assets/assets/right-circle-outlined.png";

const StoreLocations = () => {
  const { title, buttonText, locations, backgroundImage } = storesContent;

  return (
    <section
      id="stores"
      className="mx-auto my-20 flex min-h-[300px] w-[90%] max-w-7xl items-center justify-start rounded-3xl bg-center bg-no-repeat md-bg-contain"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="bg-bg-primary/50 z-10 ml-4 flex min-h-[228px] w-full max-w-4xl flex-col items-start justify-around rounded-xl bg-position-[0%_0%] p-4 pt-6 backdrop-blur-md sm:ml-6 sm:min-w-[400px] sm:p-6 md:ml-10 md:min-w-[628px] md:px-12 mr-4">
        <h2 className="text-2xl leading-tight font-semibold tracking-tight text-black sm:text-3xl md:text-3xl">
          {title}
        </h2>
        <div className="text-text-gray flex flex-wrap gap-2 text-sm leading-normal sm:text-base">
          {locations.map((location, index) => (
            <span key={index} className="sm:whitespace-nowrap">
              {location}
              {index < locations.length - 1 && <span className="mx-2">|</span>}
            </span>
          ))}
        </div>
        <button className="bg-ibo-red flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white shadow-lg transition-colors sm:text-base">
          {buttonText}
          <img src={arrowRightIcon} alt="arrow right" className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default StoreLocations;
