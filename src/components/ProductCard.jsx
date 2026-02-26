import arrowRightIcon from "../company-assets/assets/arrow-icon.svg";
import { gradients } from "../company-assets/theme";

const ProductCard = ({ name, type, price, image, description, link }) => {
  return (
    <div
      className="group hover:border-border-white-alpha [@media(hover:none)]:border-border-white-alpha flex w-67 flex-col transition-all duration-300 hover:rounded-[24px] hover:opacity-100 hover:shadow-[0px_10px_20px_var(--company-card-shadow)] [@media(hover:none)]:rounded-[24px] [@media(hover:none)]:shadow-[0px_10px_20px_var(--company-card-shadow)]"
      style={{
        background: gradients.productCardBg,
      }}
    >
      <img
        src={image}
        alt={name}
        className="h-64 w-76 rounded-2xl object-fill p-1"
      />
      <div className="flex items-center justify-between gap-2">
        <div className="flex w-full flex-col gap-1.5 rounded-b-2xl bg-transparent px-4 py-1">
          <div className="flex items-center">
            <h3 className="text-text-primary text-xl leading-normal font-bold">
              {name}&nbsp;
            </h3>
            <p className="text-text-gray items-bfont-normal flex text-sm leading-normal">
              {type}
            </p>
          </div>
          {/* <p
            className="text-sm text-text-gray"
            dangerouslySetInnerHTML={{ __html: description }}
          /> */}
          <div className="flex items-center justify-end py-1">
            {/* <p className="text-text-primary text-base leading-normal font-bold">
              ₹{price}
            </p> */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary flex cursor-pointer items-center justify-center rounded-full pl-6 font-semibold opacity-0 transition-colors group-hover:visible group-hover:z-10 group-hover:opacity-100 [@media(hover:none)]:visible [@media(hover:none)]:z-10 [@media(hover:none)]:opacity-100"
              style={{
                background: gradients.productCardButtonBg,
              }}
            >
              <span>know more &nbsp;</span>
              <img src={arrowRightIcon} alt="arrow right" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
