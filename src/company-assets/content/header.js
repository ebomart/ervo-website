import ervoLogo from "../assets/main-logo.png";
const headerContent = {
  brandName: "ERVO",
  brandLogo: ervoLogo,
  navigations: {
    prefixNavigations: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Products",
        href: "#products",
      },
      {
        label: "Why us",
        href: "#why-us",
      },
    ],
    suffixNavigations: [
      {
        label: "Our stores",
        href: "#stores",
      },
      {
        label: "Contact Us",
        href: "/contact",
      },
    ],
  },
};

export default headerContent;
