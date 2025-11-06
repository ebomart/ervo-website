import productImage from "../company-assets/assets/background-image.png";
import arrowRightIcon from "../company-assets/assets/Arrow-icon.png";

const ProductCard = ({ name, type, price, image }) => {
  return (
    <div
      className="flex w-77 h-77 flex-col"
      style={{ backgroundImage: `url(${productImage})` }}
    >
      <img
        src={image}
        alt={name}
        className="h-54 w-76 rounded-t-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none object-fill"
      />
      <div className="flex h-23 items-center justify-between gap-2">
        <div className="bg-transparent w-[95%] rounded-b-2xl px-2 py-1">
          <div className="flex items-center">
            <h3 className="text-text-primary text-xl leading-normal font-bold">
              {name}&nbsp;|&nbsp;
            </h3>
            <p className="text-text-gray text-sm leading-normal font-normal">
              {type}
            </p>
          </div>
          <p className="text-text-gray text-base leading-normal">₹{price}</p>
        </div>

        <button className="right-2 bottom-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-lg font-bold text-white shadow-lg transition-colors">
          <img src={arrowRightIcon} alt="arrow right" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
