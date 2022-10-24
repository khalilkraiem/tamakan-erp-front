import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function DatePickers({ label, value, setValue, minDate,views }) {


  return (

    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DesktopDatePicker
        views={views}
        label={label}
        value={value}
        minDate={dayjs(minDate)}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

  );
}
