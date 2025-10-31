const ProductCard = ({ name, type, price, image }) => {
  return (
    <div className="bg-bg-primary rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-72 bg-bg-tertiary">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-5 right-5 w-11 h-11 bg-ervo-brown text-white rounded-full flex items-center justify-center hover:bg-ervo-dark-brown transition-colors shadow-lg font-bold text-lg">
          →
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-text-primary mb-1 leading-normal">{name}</h3>
        <p className="text-sm text-text-secondary mb-3 font-normal leading-normal">{type}</p>
        <p className="text-lg font-semibold text-text-primary leading-normal">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

