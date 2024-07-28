import {TextField} from "@mui/material";
import PropTypes from "prop-types";

export function Input(props) {
  const {meta, input: {value, onChange, type}, disabled, label, fullWidth, InputProps} = props;
  const error = meta.touched && meta.error;
  return (
    <TextField
      fullWidth={fullWidth}
      error={!!error}
      helperText={error}
      value={value}
      onChange={onChange}
      disabled={disabled}
      type={type}
      label={label}
      InputProps={InputProps}
    />
  )
}

Input.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  InputProps: PropTypes.object,
  input: PropTypes.object,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};


