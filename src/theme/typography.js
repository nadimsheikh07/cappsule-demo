import { Inter, Poppins } from "next/font/google";
// ----------------------------------------------------------------------

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ xs, sm, md, lg }) {
  return {
    "@media (min-width: 0px) and (max-width: 599px)": {
      fontSize: `${pxToRem(xs)}!important`,
    },
    "@media (min-width:600px) and (max-width: 899px)": {
      fontSize: `${pxToRem(sm)}!important`,
    },
    "@media (min-width:900px) and (max-width: 1199px)": {
      fontSize: `${pxToRem(md)}!important`,
    },
    "@media (min-width:1200px)": {
      fontSize: `${pxToRem(lg)}!important`,
    },
  };
}

export const primaryFont = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const secondaryFont = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

// ----------------------------------------------------------------------

// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts

const typography = (themeDirection) => ({
  fontFamily: primaryFont.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ xs: 9, sm: 52, md: 52, lg: 52 }),
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(48),
    ...responsiveFontSizes({ xs: 40, sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 26, sm: 24, md: 24, lg: 24 }),
  },
  filter: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 19.6, sm: 19.6, md: 26, lg: 26 }),
  },
  filter1: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 24, sm: 24, md: 24, lg: 24 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 20, sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 19, sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ xs: 18, sm: 18, md: 18, lg: 18 }),
  },
  subtitle: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 16, sm: 16, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.375,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 14, sm: 14, md: 16, lg: 16 }),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 12, sm: 14, md: 14, lg: 14 }),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ xs: 12, sm: 12, md: 12, lg: 12 }),
  },
  caption1: {
    lineHeight: 1.5,
    fontSize: pxToRem(13),
    ...responsiveFontSizes({ xs: 12, sm: 12, md: 12, lg: 13 }),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
  typography12_87: {
    lineHeight: "24.82px",
    fontSize: pxToRem(12.87),
    ...responsiveFontSizes({ xs: 12.87, sm: 12.87, md: 12.87, lg: 12.87 }),
  },
  typography13: {
    lineHeight: "20.28px",
    fontSize: pxToRem(13),
  },
  typography15: {
    lineHeight: "22.5px",
    fontSize: pxToRem(15),
    ...responsiveFontSizes({ xs: 15, sm: 15, md: 15, lg: 15 }),
  },
  typography16_55: {
    lineHeight: "24.82px",
    fontSize: pxToRem(16.55),
    ...responsiveFontSizes({ xs: 16.55, sm: 16.55, md: 16.55, lg: 16.55 }),
  },
  typography20: {
    lineHeight: "30px",
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 20, sm: 20, md: 20, lg: 20 }),
  },
  typography28: {
    lineHeight: "33.89px",
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ xs: 28, sm: 28, md: 28, lg: 28 }),
  },
});

export default typography;
