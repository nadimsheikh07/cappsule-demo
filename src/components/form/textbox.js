import { Box, FormHelperText, InputAdornment, TextField } from "@mui/material";
import PropTypes from "prop-types";
import FormControl from "./formControl";

const TextBox = (props) => {
  const {
    name,
    label,
    accept,
    variant,
    type,
    inputLabelProps,
    startIcon,
    endIcon,
    value,
    required,
    multiline,
    inputAdornmentPosition = "end",
    fullWidth,
    helperText,
    disabled,
    rows,
    onKeyDown,
    placeholder,
    size,
    onBlur,
    inputSx,
    readOnly,
    maxLength,
    onChange,
    onKeyPress,
  } = props;

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
    >
      <TextField
        sx={inputSx}
        error={helperText ? true : false}
        variant={variant}
        name={name}
        size={size}
        label={label}
        type={type}
        onKeyDown={onKeyDown}
        rows={rows}
        InputLabelProps={inputLabelProps}
        placeholder={placeholder}
        multiline={multiline}
        required={required}
        disabled={disabled}
        autoComplete={"false"}
        value={value}
        onBlur={onBlur}
        onChange={(e) => onChange(e)}
        onKeyPress={(e) => onKeyPress(e)}
        inputProps={{
          maxLength: maxLength ? maxLength : null,
          accept: accept,
        }}
        InputProps={{
          endAdornment: endIcon && (
            <InputAdornment position={inputAdornmentPosition}>
              {endIcon}
            </InputAdornment>
          ),
          startAdornment: startIcon && (
            <InputAdornment position={inputAdornmentPosition}>
              {startIcon}
            </InputAdornment>
          ),
          readOnly: readOnly,
        }}
      />

      <Box sx={{ display: "flex" }}>
        {helperText && (
          <FormHelperText
            sx={{
              "&.MuiFormHelperText-root": {
                marginLeft: "0px",
              },
            }}
          >
            {helperText}
          </FormHelperText>
        )}
      </Box>
    </FormControl>
  );
};

TextBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  inputLabelProps: PropTypes.object,
  icon: PropTypes.string,
  inputAdornmentPosition: PropTypes.string,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
  rows: PropTypes.string,
  onKeyDown: PropTypes.func,
  isDocumentText: PropTypes.bool,
  accept: PropTypes.string,
  startIcon: PropTypes.object,
  endIcon: PropTypes.object,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  onBlur: PropTypes.func,
  inputSx: PropTypes.func,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.number,
  onKeyPress: PropTypes.func,
};

export default TextBox;
