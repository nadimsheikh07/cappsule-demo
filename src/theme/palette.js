import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",

  // custom grey color
  1000: "#ADADAD66",
  1100: "#555555",
  1200: "#CDCDCD",
  1300: "#ABABAB",
  1400: "#888888",
};

const CUSTOMCOLOR = {
  0: "#0000001A",
};

const PRIMARY = {
  shadow: "#00C5A166",
  borderColor: "#A7D6D4",
  lighter: "#D5E7E6",
  light: "#00C5A1",
  main: "#112D31",
  dark: "#0B1F22",
  darker: "#0B1F22",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#547494",
  light: "#547494",
  main: "#2A527A",
  dark: "#1D3955",
  darker: "#1D3955",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#f5ece0",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#fff",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#ffc700",
  main: "#fdcc5d",
  dark: "#eaaf60",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#fff",
};

const DARK = {
  main: "#1a1818",
  darker: "#000000",
  contrastText: "#fff",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  dark: DARK,
  customColor: CUSTOMCOLOR,
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette() {
  const light = {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  return light;
}
