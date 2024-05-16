import MuiFormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

const FormControl = styled(MuiFormControl, {
  shouldForwardProp: (props) => props !== "fullWidth",
})(({ theme, fullWidth }) => ({
  marginBottom: 10,
  width: "100%",
  ...(!fullWidth && {
    width: "50%",
    paddingLeft: 5,
    paddingRight: 5,
  }),
}));

export default FormControl;
