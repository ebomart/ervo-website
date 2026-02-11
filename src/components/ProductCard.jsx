import productImage from "../company-assets/assets/background-image.png";
import arrowRightIcon from "../company-assets/assets/arrow-icon.svg";

const ProductCard = ({ name, type, price, image, description }) => {
  return (
    <div
      className="group flex h-80 w-77 flex-col transition-all duration-300 hover:rounded-[24px] hover:border-[#FFFFFF38] hover:opacity-100 hover:shadow-[0px_10px_20px_#D2D2D280]"
      style={{
        background:
          "transparent radial-gradient(closest-side at 77% 100%, #FFEBE1A1 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <img
        src={image}
        alt={name}
        className="h-54 w-76 rounded-2xl object-fill p-1"
      />
      <div className="flex h-23 items-center justify-between gap-2">
        <div className="flex w-full flex-col gap-1.5 rounded-b-2xl bg-transparent px-4 py-1">
          <div className="flex items-center">
            <h3 className="text-text-primary text-xl leading-normal font-bold">
              {name}&nbsp;
            </h3>
            <p className="text-text-gray items-bfont-normal flex text-sm leading-normal">
              {type}
            </p>
          </div>
          <div>
            <p
              className="text-sm text-[#616161]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div
            style={{
              background:
                "transparent radial-gradient(closest-side at 77% 100%, #FFEBE1A1 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
            }}
            className="flex items-center justify-between group-hover:bg-[transparent_radial-gradient(closest-side_at_77%_100%,#FFEBE1A1_0%,#FFFFFF_100%)_0%_0%_no-repeat_padding-box]"
          >
            <p className="text-text-primary text-base leading-normal font-bold">
              ₹{price}
            </p>
            <button className="flex cursor-pointer items-center justify-center rounded-full font-semibold text-[#4B174B] opacity-0 transition-colors group-hover:visible group-hover:z-10 group-hover:opacity-100">
              <span>know more &nbsp;</span>
              <img src={arrowRightIcon} alt="arrow right" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
