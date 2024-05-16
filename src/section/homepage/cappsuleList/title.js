import { Stack, Typography } from "@mui/material";
import React from "react";

const Title = ({ data, selectedItem }) => {
  return (
    <Stack spacing={0.5} width="100%">
      <Typography
        textAlign="center"
        component="p"
        variant="typography16_55"
        fontWeight={600}
      >
        {data?.salt}
      </Typography>
      <Typography
        textAlign="center"
        component="p"
        variant="typography12_87"
        fontWeight={500}
        color={(theme) => theme.palette.secondary.main}
      >
        {`${selectedItem?.Form} | ${selectedItem?.Strength} | ${selectedItem?.Packing}`}
      </Typography>
    </Stack>
  );
};

export default Title;
