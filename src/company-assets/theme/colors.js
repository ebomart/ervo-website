/**
 * Central color configuration for the app.
 * Edit these values to rebrand; Tailwind and inline styles use these via CSS variables.
 */

export const colors = {
  // Brand
  brandPrimary: "#4B174B",
  brandPrimaryHover: "#5c2560",

  // Neutrals
  white: "#FFFFFF",
  black: "#000000",
  blackTransparent: "#00000000",

  // Text (align with existing semantic names)
  textPrimary: "#1f2937",
  textSecondary: "#4b5563",
  textTertiary: "#6b7280",
  textLight: "#9ca3af",
  textGray: "#616161",

  // Borders & surfaces
  borderPrimary: "#cbcbcb",
  borderBrandLight: "#F6C6F6",
  borderWhiteAlpha: "#FFFFFF38",
  bgDiv: "#f2f2f2",
  bgPrimary: "#ffffff",
  bgSecondary: "#f9fafb",
  bgTertiary: "#f3f4f6",
  bgGray: "#616161",

  // Accent (generic names – change hex/rgba values to rebrand)
  accentPrimary: "#CB91DC",
  accent: "#f875f8",
  accentLight: "#fdd7fb",
  accentAlpha90: "rgba(248, 117, 248, 0.9)",
  accentAlpha50: "rgba(248, 117, 248, 0.5)",
  accentAlpha25: "rgba(248, 117, 248, 0.25)",
  accentLightAlpha37: "rgba(253, 215, 251, 0.37)",
  accentLightAlpha25: "rgba(247, 227, 255, 0.25)",
  accentLightAlpha18: "rgba(247, 227, 255, 0.18)",
  accentSoft25: "rgba(246, 198, 246, 0.25)",
  accentSoft15: "rgba(246, 198, 246, 0.15)",
  accentFade0: "rgba(229, 200, 240, 0)",

  // Product card
  cardGradientStart: "#FFEBE1A1",
  cardGradientEnd: "#FFFFFF",
  cardButtonGradientStart: "rgba(255, 235, 225, 0.75)",
  cardButtonGradientEnd: "rgba(255, 255, 255, 1)",
  cardShadow: "#D2D2D280",

  // Paginator
  paginatorActive: "#4B174B",
  paginatorInactive: "#EBD4EB",

  // Legacy / optional (existing theme names)
  ervoBrown: "#8b4513",
  ervoDarkBrown: "#654321",
  ervoLightBrown: "#a0522d",
  iboRed: "#a02d2d",
};

/**
 * Gradient strings for inline styles. Built from colors so they always render (no var() in inline styles).
 */
export const gradients = {
  heroOverlay: `linear-gradient(180deg, ${colors.black} 0%, ${colors.blackTransparent} 100%)`,
  heroButtonBorder: `1px solid ${colors.accentSoft15}`,
  heroButtonBg: `radial-gradient(closest-side at 50% 70%, ${colors.accentAlpha25} 0%, ${colors.accentLightAlpha25} 100%)`,

  productsSectionBg: `radial-gradient(circle at 50% -15%, ${colors.accentAlpha90} 0%, ${colors.accentLightAlpha37} 18%, ${colors.accentFade0} 50%)`,
  productsSectionBorderImage: `radial-gradient(circle at 50% 10%, ${colors.accentPrimary} 0%, ${colors.white} 60%) 1`,
  categoryButtonActiveBg: `radial-gradient(closest-side at 50% 87%, ${colors.accentAlpha50} 10%, ${colors.accentLightAlpha18} 100%)`,
  categoryButtonActiveBorder: `1px solid ${colors.accentSoft25}`,

  productCardBg: `transparent radial-gradient(closest-side at 77% 100%, ${colors.cardGradientStart} 0%, ${colors.cardGradientEnd} 100%) 0% 0% no-repeat padding-box`,
  productCardButtonBg: `radial-gradient(circle, ${colors.cardButtonGradientStart} 0%, ${colors.cardButtonGradientEnd} 100%)`,

  engineeringSectionBg: `radial-gradient(circle at 50% 150%, ${colors.accent} 0%, ${colors.accentLightAlpha37} 27%, ${colors.accentFade0} 50%)`,

  whyUsSectionBg: `radial-gradient(closest-side at 54% 100%, ${colors.accent} 0%, ${colors.accentLight} 33%, ${colors.accentFade0} 100%)`,
};

/**
 * Converts camelCase to kebab-case for CSS variable names.
 */
function toKebab(str) {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}

/**
 * Injects theme colors as CSS custom properties on document.documentElement.
 * Call once before first paint (e.g. in main.jsx).
 */
export function injectTheme() {
  const root = document.documentElement;
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--company-${toKebab(key)}`, value);
  });
}

export default colors;
