import { storesContent } from "../company-assets/content";
// import storeLocationsImage from '../company-assets/assets/Ibo-store.png';
import arrowRightIcon from "../company-assets/assets/right-circle-outlined.png";

const StoreLocations = () => {
  const { title, buttonText, locations, backgroundImage } = storesContent;

  return (
    <section
      id="stores"
      className="m-auto flex h-[550px] w-[90%] items-center justify-start rounded-3xl bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div
        className="bg-bg-primary/50 z-10 ml-10 flex min-h-[228px] max-w-4xl min-w-[728px] flex-col items-start justify-around rounded-xl bg-position-[0%_0%] pt-6 p-4 backdrop-blur-md md:px-12"
      >
        <h2 className="text-3xl leading-tight font-semibold tracking-tight text-black">
          {title}
        </h2>
        <div className="text-text-gray flex flex-wrap gap-2 text-base leading-normal">
          {locations.map((location, index) => (
            <span key={index} className="whitespace-nowrap">
              {location}
              {index < locations.length - 1 && <span className="mx-2">|</span>}
            </span>
          ))}
        </div>
        <button className="bg-ibo-red flex items-center gap-2 rounded-full px-3 py-2 text-base font-medium text-white shadow-lg transition-colors">
          {buttonText}
          <img src={arrowRightIcon} alt="arrow right" className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default StoreLocations;
