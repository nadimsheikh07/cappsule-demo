/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"), {
  ssr: false,
});

const Iconify = forwardRef(
  ({ icon, width = 20, height = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      icon={icon}
      sx={{ width, height: height, ...sx }}
      {...other}
    />
  )
);
Iconify.propTypes = {
  sx: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Iconify;
