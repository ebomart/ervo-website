import { headerContent } from "../company-assets/content";

const Header = () => {
  return (
    <header className="bg-bg-primary sticky top-0 z-50 flex w-full items-center px-8 py-5 md:px-12">
      <nav className="flex items-center gap-3 w-full">
        <div className="flex items-start w-[33%] gap-6">
          {headerContent.navigations.prefixNavigations.map((nav) => (
            <a
              key={nav.label}
              href={nav.href}
              className="text-text-secondary hover:text-ervo-brown text-base font-medium transition-colors"
            >
              {nav.label}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 w-[34%]">
          <img src={headerContent.brandLogo} alt={headerContent.brandName} width={200} height={100} />
        </div>
        <div className="flex items-end justify-end gap-3 w-[33%]">
          {headerContent.navigations.suffixNavigations.map((nav) => (
            <a
              key={nav.label}
              href={nav.href}
              className="text-text-secondary hover:text-ervo-brown text-base font-medium transition-colors"
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
