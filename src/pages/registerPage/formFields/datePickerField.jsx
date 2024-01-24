import React, { useState, useEffect } from "react";
import { useField } from "formik";
import Grid from "@mui/material/Grid";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

export default function DatePickerField(props) {
    const [field, meta, helper] = useField(props);
    const { touched, error } = meta;
    const { setValue } = helper;
    const isError = touched && error && true;
    const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
      if (value) {
        const date = new Date(value);
        setSelectedDate(date);
      }
    }, [value]);

  //   function _onChange(date) {
  //     if (date) {
  //       setSelectedDate(date);
  //       try {
  //         const ISODateString = date.toISOString();
  //         setValue(ISODateString);
  //       } catch (error) {
  //         setValue(date);
  //       }
  //     } else {
  //       setValue(date);
  //     }
  //   }
  function _onChange(date) {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  }
//   const [value, setValue] = useState(null);

  return (
    <Grid container>
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          {...field}
          {...props}
          value={selectedDate}
          onChange={_onChange}
          error={isError}
          invalidDateMessage={isError && error}
          helperText={isError && error}
        />
      </MuiPickersUtilsProvider> */}

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          //   fullWidth
            {...field}
            {...props}
          inputFormat="DD/MM/YYYY"
          label="What day are you leaving?"
          value={selectedDate}
          onChange={_onChange}
          error={isError}
          invalidDateMessage={isError && error}
          helperText={isError && error}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              sx={{ m: 0, width: "100%", mt: 1, mb: 0 }}
            />
          )}
        />
      </LocalizationProvider>
    </Grid>
  );
}