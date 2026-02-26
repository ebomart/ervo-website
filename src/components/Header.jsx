import { useState, useEffect } from "react";
import { headerContent } from "../company-assets/content";
import { gradients } from "../company-assets/theme";

const MenuIcon = ({ open }) => (
  <svg
    className="text-brand-primary h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    {open ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
);

const Header = () => {
  const [activeId, setActiveId] = useState(
    () => window.location.hash.slice(1) || "home",
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () =>
      setActiveId(window.location.hash.slice(1) || "home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "hero", "products", "why-us", "stores"];
    const getActiveId = () => {
      const center = window.innerHeight / 2;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= center && rect.bottom >= center) {
          return id === "hero" ? "home" : id;
        }
      }
      if (window.scrollY < window.innerHeight) return "home";
      const last = document.getElementById("stores");
      return last?.getBoundingClientRect().top < center ? "stores" : null;
    };

    const onScroll = () => {
      const next = getActiveId();
      if (next) setActiveId(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => {
    const id =
      href === "/" ? "home" : href.startsWith("#") ? href.slice(1) : null;
    return id && id === activeId;
  };

  const linkClass = (href) =>
    `cursor-pointer rounded-[28px] px-7 py-3 text-base font-medium ${
      isActive(href)
        ? "text-brand-primary font-semibold"
        : "text-text-secondary hover:text-brand-primary"
    }`;

  const isExternal = (href) =>
    href?.startsWith("http://") || href?.startsWith("https://");

  const allNavLinks = [
    ...headerContent.navigations.prefixNavigations,
    ...headerContent.navigations.suffixNavigations,
  ];

  return (
    <header className="bg-bg-primary fixed top-0 right-0 left-0 z-50 flex w-full flex-col items-center px-8 py-5 md:px-12">
      <nav className="flex w-full items-center gap-3">
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="text-text-primary hover:text-brand-primary flex touch-manipulation items-center justify-center p-2 min-[1250px]:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <MenuIcon open={menuOpen} />
        </button>
        <div
          className="hidden w-[37%] min-[1250px]:flex min-[1250px]:items-start min-[1250px]:gap-20"
          style={{ minWidth: 0 }}
        >
          {headerContent.navigations.prefixNavigations.map((nav) => (
            <a
              key={nav.label}
              href={nav.href}
              className={linkClass(nav.href)}
              style={
                isActive(nav.href)
                  ? {
                      background: gradients.categoryButtonActiveBg,
                      border: gradients.categoryButtonActiveBorder,
                    }
                  : undefined
              }
              {...(isExternal(nav.href) && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {nav.label}
            </a>
          ))}
        </div>
        <div className="flex w-full items-center justify-center gap-6 min-[1250px]:w-[30%]">
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <img
              src={headerContent.brandLogo}
              alt={headerContent.brandName}
              width={150}
              height={150}
            />
          </div>
        </div>
        <div
          className="hidden w-[33%] min-[1250px]:flex min-[1250px]:items-end min-[1250px]:justify-end min-[1250px]:gap-20"
          style={{ minWidth: 0 }}
        >
          {headerContent.navigations.suffixNavigations.map((nav) => (
            <a
              style={
                isActive(nav.href)
                  ? {
                      background: gradients.categoryButtonActiveBg,
                      border: gradients.categoryButtonActiveBorder,
                    }
                  : undefined
              }
              key={nav.label}
              href={nav.href}
              className={linkClass(nav.href)}
              {...(isExternal(nav.href) && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {nav.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="bg-bg-primary border-border-primary w-full border-t min-[1250px]:hidden z-10"
          role="dialog"
          aria-label="Navigation menu"
        >
          <div className="flex flex-col items-start gap-1 px-4 py-4">
            {allNavLinks.map((nav) => (
              <a
                key={nav.label}
                href={nav.href}
                onClick={() => setMenuOpen(false)}
                className={`w-fit ${linkClass(nav.href)}`}
                style={
                  isActive(nav.href)
                    ? {
                        background: gradients.categoryButtonActiveBg,
                        border: gradients.categoryButtonActiveBorder,
                      }
                    : undefined
                }
                {...(isExternal(nav.href) && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {nav.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
