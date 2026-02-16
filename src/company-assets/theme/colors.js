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

  // Accent / purple palette
  accentPurple: "#CB91DC",
  accentPink: "#f875f8",
  accentPinkLight: "#fdd7fb",
  accentPinkAlpha90: "rgba(248, 117, 248, 0.9)",
  accentPinkAlpha50: "rgba(248, 117, 248, 0.5)",
  accentPinkAlpha25: "rgba(248, 117, 248, 0.25)",
  accentPinkLight37: "rgba(253, 215, 251, 0.37)",
  accentPinkLight25: "rgba(247, 227, 255, 0.25)",
  accentPinkLight18: "rgba(247, 227, 255, 0.18)",
  accentLavender25: "rgba(246, 198, 246, 0.25)",
  accentLavender15: "rgba(246, 198, 246, 0.15)",
  accentLavenderAlpha0: "rgba(229, 200, 240, 0)",

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
  heroButtonBorder: `1px solid ${colors.accentLavender15}`,
  heroButtonBg: `radial-gradient(closest-side at 50% 70%, ${colors.accentPinkAlpha25} 0%, ${colors.accentPinkLight25} 100%)`,

  productsSectionBg: `radial-gradient(circle at 50% -15%, ${colors.accentPinkAlpha90} 0%, ${colors.accentPinkLight37} 18%, ${colors.accentLavenderAlpha0} 50%)`,
  productsSectionBorderImage: `radial-gradient(circle at 50% 10%, ${colors.accentPurple} 0%, ${colors.white} 60%) 1`,
  categoryButtonActiveBg: `radial-gradient(closest-side at 50% 87%, ${colors.accentPinkAlpha50} 10%, ${colors.accentPinkLight18} 100%)`,
  categoryButtonActiveBorder: `1px solid ${colors.accentLavender25}`,

  productCardBg: `transparent radial-gradient(closest-side at 77% 100%, ${colors.cardGradientStart} 0%, ${colors.cardGradientEnd} 100%) 0% 0% no-repeat padding-box`,
  productCardButtonBg: `radial-gradient(circle, ${colors.cardButtonGradientStart} 0%, ${colors.cardButtonGradientEnd} 100%)`,

  engineeringSectionBg: `radial-gradient(circle at 50% 150%, ${colors.accentPink} 0%, ${colors.accentPinkLight37} 27%, ${colors.accentLavenderAlpha0} 50%)`,

  whyUsSectionBg: `radial-gradient(closest-side at 54% 100%, ${colors.accentPink} 0%, ${colors.accentPinkLight} 33%, ${colors.accentLavenderAlpha0} 100%)`,
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
