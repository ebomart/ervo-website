import ProductCard from './ProductCard';
import { productsContent } from '../company-assets/content';
import Section from './common/Section';

const ProductCategories = ({ activeCategory, setActiveCategory }) => {
  const { categories, products, title, description, messages } = productsContent;

  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : activeCategory 
    ? products.filter(product => product.category === activeCategory)
    : [];

  return (
    <Section id="products">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-ervo-brown mb-5 text-center leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-base md:text-lg text-text-secondary text-center max-w-4xl mx-auto mb-14 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-7 py-3 rounded-lg text-base font-medium transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-ervo-brown text-white shadow-md'
                  : 'bg-gray-200 text-text-secondary hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {activeCategory ? (
          filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  type={product.type}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-text-tertiary leading-normal">{messages.noProducts}</p>
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-text-tertiary leading-normal">{messages.noCategory}</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProductCategories;

