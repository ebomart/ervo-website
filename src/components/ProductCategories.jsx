import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { productsContent } from "../company-assets/content";
import { gradients } from "../company-assets/theme";
import Section from "./common/Section";
import nextArrowIcon from "../company-assets/assets/next-arrow.svg";
import previousArrowIcon from "../company-assets/assets/previous-arrow.svg";

const ProductCategories = ({ activeCategory, setActiveCategory }) => {
  const { categories, products, title, description, messages } =
    productsContent;

  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : activeCategory
        ? products.filter((product) => product.category === activeCategory)
        : [];

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const itemsPerPage = 4;
  const maxStartIndex =
    filteredProducts.length > itemsPerPage
      ? filteredProducts.length - itemsPerPage
      : 0;

  const totalPages =
    filteredProducts.length > 0
      ? Math.ceil(filteredProducts.length / itemsPerPage)
      : 0;
  const currentPage =
    itemsPerPage > 0 ? Math.floor(currentIndex / itemsPerPage) : 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxStartIndex, prev + itemsPerPage));
  };

  const visibleProducts = filteredProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  return (
    <Section id="products">
      <div
        className="border-border-brand-light mx-auto max-w-7xl border-t"
        style={{
          background: gradients.productsSectionBg,
          borderImage: gradients.productsSectionBorderImage,
        }}
      >
        <div className="text-brand-primary flex items-center justify-center pt-6 pb-2 text-[14px] font-semibold">
          Top Categories
        </div>
        <h2 className="text-brand-primary mb-5 text-center text-4xl leading-tight font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="text-text-gray mx-auto mb-14 max-w-4xl text-center text-[20px] leading-relaxed md:text-lg">
          {description}
        </p>

        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer rounded-[28px] px-7 py-3 text-[14px] font-medium transition-all ${
                activeCategory === category
                  ? "text-brand-primary"
                  : "text-text-secondary"
              }`}
              style={
                activeCategory === category
                  ? {
                      background: gradients.categoryButtonActiveBg,
                      border: gradients.categoryButtonActiveBorder,
                    }
                  : undefined
              }
            >
              {category}
            </button>
          ))}
        </div>

        {activeCategory ? (
          filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {visibleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    type={product.type}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                    link={product.link}
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`flex items-center justify-center transition-opacity ${
                    currentIndex === 0
                      ? "cursor-not-allowed opacity-40"
                      : "cursor-pointer hover:opacity-80"
                  }`}
                >
                  <img
                    src={previousArrowIcon}
                    alt="Previous products"
                    height={30}
                    width={30}
                  />
                </button>

                {totalPages > 0 && (
                  <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-colors ${
                          index === currentPage
                            ? "bg-paginator-active"
                            : "bg-paginator-inactive"
                        }`}
                        style={{
                          width: "32px",
                        }}
                      />
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIndex >= maxStartIndex}
                  className={`flex h-10 w-10 items-center justify-center transition-opacity ${
                    currentIndex >= maxStartIndex
                      ? "cursor-not-allowed opacity-40"
                      : "cursor-pointer hover:opacity-80"
                  }`}
                >
                  <img
                    src={nextArrowIcon}
                    alt="Next products"
                    height={30}
                    width={30}
                  />
                </button>
              </div>
            </>
          ) : (
            <div className="py-12 text-center">
              <p className="text-text-tertiary text-lg leading-normal">
                {messages.noProducts}
              </p>
            </div>
          )
        ) : (
          <div className="py-12 text-center">
            <p className="text-text-tertiary text-xl leading-normal">
              {messages.noCategory}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProductCategories;
