import { Typography } from "@mui/material";
import React from "react";

const Heading = () => (
  <Typography
    component="p"
    variant="h3"
    fontWeight={400}
    textAlign="center"
    mb={5}
    color={(theme) => theme.palette.common.black}
  >
    Cappsule web development test
  </Typography>
);

export default Heading;
