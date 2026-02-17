import { useState, useEffect } from "react";
import { headerContent } from "../company-assets/content";
import { gradients } from "../company-assets/theme";

const Header = () => {
  const [activeId, setActiveId] = useState(
    () => window.location.hash.slice(1) || "home",
  );

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

  return (
    <header className="bg-bg-primary sticky top-0 z-50 flex w-full items-center px-8 py-5 md:px-12">
      <nav className="flex w-full items-center gap-3">
        <div
          className="hidden w-[37%] items-start gap-20 lg:flex"
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
        <div className="flex w-full items-center justify-center gap-6 lg:w-[30%]">
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
    </header>
  );
};

export default Header;
