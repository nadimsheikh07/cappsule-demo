import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Box
      component="div"
      sx={{
        height: "calc(100dvh - 380px)",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        component="p"
        variant="typography20"
        color={(theme) => theme.palette.grey[1400]}
        fontWeight={600}
      >
        “ Find medicines with amazing discount “
      </Typography>
    </Box>
  );
};

export default NotFound;
