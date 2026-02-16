import { headerContent } from "../company-assets/content";

const Header = () => {
  return (
    <header className="bg-bg-primary sticky top-0 z-50 flex w-full items-center px-8 py-5 md:px-12">
      <nav className="flex w-full items-center gap-3">
        <div
          className="hidden w-[33%] items-start gap-20 lg:flex"
          style={{ minWidth: 0 }}
        >
          {headerContent.navigations.prefixNavigations.map((nav) => (
            <a
              key={nav.label}
              href={nav.href}
              className="text-text-secondary hover:text-brand-primary text-base font-medium transition-colors"
            >
              {nav.label}
            </a>
          ))}
        </div>
        <div className="flex w-full items-center justify-center gap-6 lg:w-[34%]">
          <img
            src={headerContent.brandLogo}
            alt={headerContent.brandName}
            width={150}
            height={150}
          />
        </div>
        <div
          className="hidden w-[33%] items-end justify-end gap-20 lg:flex"
          style={{ minWidth: 0 }}
        >
          {headerContent.navigations.suffixNavigations.map((nav) => (
            <a
              key={nav.label}
              href={nav.href}
              className="text-text-secondary hover:text-brand-primary text-base font-medium transition-colors"
            >
              {nav.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
