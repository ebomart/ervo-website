import { headerContent } from "../company-assets/content";

const Header = () => {
  return (
    <header className="w-full px-8 md:px-12 py-5 flex items-center justify-between bg-bg-primary bg-white sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img
          src={headerContent.brandLogo}
          alt={headerContent.brandName}
          // className="w-10 h-10"
        />
      </div>
      <nav className="flex items-center gap-8">
        {headerContent.navigations.map((nav) => (
          <a
            key={nav.label}
            href={nav.href}
            className="text-text-secondary text-base hover:text-ervo-brown transition-colors font-medium"
          >
            {nav.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
