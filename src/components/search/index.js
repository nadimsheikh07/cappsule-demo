import { SearchBarStyled } from "@/styles/homepage";
import { Box, IconButton, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

const TextBox = dynamic(() => import("../form/textbox"), {
  ssr: false,
});

const Iconify = dynamic(() => import("../iconify"), {
  ssr: false,
});

const SearchBox = ({ value, handleChange, handleReset, handleSubmit }) => {
  return (
    <SearchBarStyled>
      <TextBox
        fullWidth
        variant="outlined"
        name="search"
        value={value}
        onChange={(e) => handleChange(e)}
        size="medium"
        placeholder="Type your medicine name here"
        startIcon={
          value ? (
            <Box component="div">
              <IconButton onClick={handleReset} sx={{ marginRight: "10px" }}>
                <Iconify
                  icon="bi:arrow-left"
                  width={24}
                  height={24}
                  color={(theme) => theme.palette.primary.main}
                />
              </IconButton>
            </Box>
          ) : (
            <Iconify
              icon="iconamoon:search"
              width={24}
              height={24}
              sx={{ marginRight: "10px" }}
              color={(theme) => theme.palette.grey[1100]}
            />
          )
        }
        endIcon={
          <Typography
            variant="subtitle1"
            component="p"
            color={(theme) => theme.palette.secondary.main}
            fontWeight={600}
            sx={{ cursor: "pointer" }}
            onClick={() => handleSubmit(value)}
          >
            Search
          </Typography>
        }
        color="dark"
        onKeyPress={(e) => e.key === "Enter" && handleSubmit(value)}
      />
    </SearchBarStyled>
  );
};

export default SearchBox;
