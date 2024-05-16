import { StoreBox } from "@/styles/homepage";
import { secondaryFont } from "@/theme/typography";
import { Box, Typography } from "@mui/material";
import React from "react";

const Price = ({ selectedItem }) => {
  return selectedItem?.lowestPrice > 0 &&
    selectedItem?.lowestPrice != Infinity ? (
    <Typography
      component="p"
      variant="typography28"
      fontWeight={800}
      textAlign="center"
      color={(theme) => theme.palette.primary.main}
    >
      From
      <Typography
        component="span"
        variant="typography28"
        fontWeight={800}
        fontFamily={secondaryFont.style.fontFamily}
        color={(theme) => theme.palette.primary.main}
      >
        ₹{selectedItem?.lowestPrice}
      </Typography>
    </Typography>
  ) : (
    <StoreBox component="div">
      <Typography
        component="p"
        variant="subtitle2"
        fontWeight={500}
        fontFamily={secondaryFont.style.fontFamily}
        color={(theme) => theme.palette.primary.main}
        textAlign="center"
      >
        No stores selling this product near you
      </Typography>
    </StoreBox>
  );
};

export default Price;
