import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { productsContent } from "../company-assets/content";
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
    <Section
      id="products"
      // className="bg-[padding-box] border-t relative w-full rounded-[28px] border-t-[#F6C6F6]"
      style={{
        // borderTop: "1px solid #F6C6F6",
        background:
          "transparent radial-gradient(closest-side at 50% 7%, rgba(248,117,248,0.35) 0%, rgba(253,215,251,0.35) 33%, rgba(229,200,240,0) 100%) 0% 0% no-repeat padding-box",
      }}
      // className="relative w-full rounded-[28px] bg-[padding-box] bg-[radial-gradient(closest-side_at_50%_50%,rgba(239,227,195,0.37)_0%,rgba(245,239,222,0.37)_33%,rgba(240,229,200,0)_100%)] bg-cover bg-no-repeat px-6 py-20 before:absolute before:top-0 before:left-0 before:h-[2px] before:w-full before:bg-[radial-gradient(circle_at_center,rgba(220,169,145,0.4),rgba(255,255,255,0.4))] before:content-[''] md:px-12"
    >
      <div className="mx-auto max-w-7xl border-t border-t-[#F6C6F6]">
        <div className="flex items-center justify-center pt-6 pb-2 text-[14px] font-semibold text-[#4B174B]">
          Top Categories
        </div>
        <h2 className="mb-5 text-center text-4xl leading-tight font-bold tracking-tight text-[#4B174B] md:text-5xl">
          {title}
        </h2>
        <p className="text-text-secondary mx-auto mb-14 max-w-4xl text-center text-base leading-relaxed md:text-lg">
          {description}
        </p>

        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer rounded-[28px] px-7 py-3 text-base font-medium transition-all ${
                activeCategory === category
                  ? "text-[#4B174B]"
                  : "text-text-secondary hover:bg-gray-300"
              }`}
              style={
                activeCategory === category
                  ? {
                      background:
                        "radial-gradient(closest-side at 50% 87%, rgba(248,117,248,0.18) 0%, rgba(247,227,255,0.18) 100%)",
                      border: "1px solid rgba(246, 198, 246, 0.25)",
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
                    // className="h-5 w-5"
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
                            ? "bg-[#4B174B]"
                            : "bg-[#EBD4EB]"
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
