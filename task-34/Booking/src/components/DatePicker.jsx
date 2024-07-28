import PropTypes from "prop-types";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker as DatePickerMUI} from '@mui/x-date-pickers/DatePicker';

export default function DatePicker(props) {
  const {label, disabled, input: {onChange, value}, fullWidth, meta} = props;
  const error = meta.touched && meta.error;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMUI
        onError={() => true}
        label={label} disabled={disabled} onChange={onChange} value={value || null}
        slotProps={{
          textField: {
            helperText: error,
            fullWidth,
            error: !!error,
          },
        }}
      />
    </LocalizationProvider>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};


