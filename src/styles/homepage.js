import TextBox from "@/components/form/textbox";
import { Box, Card, CardContent, Chip, styled } from "@mui/material";

export const HomePageStyle = styled(Box)(({ theme }) => ({
  marginTop: "74px",
  marginBottom: "74px",
}));

export const SearchBarStyled = styled(Box)(({ theme }) => ({
  "& .MuiTextField-root": {
    boxShadow: theme.customShadows.searchBar,
    borderRadius: "35px!important",
  },
  "& .MuiOutlinedInput-root": {
    paddingRight: "30px",
    paddingLeft: "20px",
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "35px!important",
    border: "0px!important",
  },
  "& :-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px white inset!important",
  },
}));

export const CappsuleCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.customShadows.cappsuleShadow,
  borderRadius: "15px!important",
  background: `linear-gradient(275.41deg, ${theme.palette.primary.lighter} -27.33%, ${theme.palette.common.white} 46.85%)`,
}));

export const CappsuleCardContent = styled(CardContent)(({ theme }) => ({
  "&.MuiCardContent-root": {
    padding: "28px",
  },
}));

export const StoreBox = styled(Box)(({ theme }) => ({
  width: "206px",
  height: "59px",
  border: `1px solid ${theme.palette.primary.borderColor}`,
  padding: "5px",
  borderRadius: "5px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
  },
}));

export const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "chipVariant",
})(({ theme, chipVariant }) => {
  let chipVariantStyle = {};
  switch (chipVariant) {
    case "SELECTED":
      chipVariantStyle = {
        border: `1.5px solid ${theme.palette.primary.main}!important`,
        boxShadow: `${theme.customShadows.chipShadow}`,
        color: theme.palette.primary.main,
        fontWeight: 600,
      };
      break;
    case "NOT-SELECTED":
      chipVariantStyle = {
        border: `1px solid ${theme.palette.grey[1300]}!important`,
        color: theme.palette.grey[1100],
        fontWeight: 400,
      };
      break;
    case "NOT-AVAILABLE-NOT-SELECTED":
      chipVariantStyle = {
        border: `1px 0px 0px 0px`,
        borderStyle: "dashed",
        color: theme.palette.grey[1100],
        fontWeight: 400,
        gap: "7px",
      };
      break;

    case "NOT-AVAILABLE-SELECTED":
      chipVariantStyle = {
        border: `1.5px dashed ${theme.palette.primary.main}!important`,
        color: theme.palette.primary.main,
        fontWeight: 600,
      };
      break;
  }

  return {
    "&.MuiChip-root": {
      ...chipVariantStyle,
      borderRadius: "8px!important",
      ...theme.typography.typography13,
    },
  };
});
