export const theme = {
  colors: {
    background: "#0F0F0F",
    primary: "#53D67B",
    text: "#FFFFFF",
    placeholder: "rgba(255, 255, 255, 0.25)",
    inputBackground: "rgba(43, 43, 43, 0.5)",
    inputBorder: "rgba(213, 213, 213, 0.5)",
  },
  font: {
    family: {
      regular: "SpaceGrotesk",
      bold: "SpaceGroteskBold", // si lo agregás más adelante
    },
    size: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 48,
    },
    weight: {
      regular: "400" as const,
      bold: "700" as const,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 20,
  },
  borderRadius: {
    sm: 8,
    md: 10,
    lg: 12,
  },
};
