import { useState } from "react";
// import "./styles.css";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function Picker() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <CustomDatePicker />
      </LocalizationProvider>
    </div>
  );
}

function CustomDatePicker() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <DatePicker
        inputFormat="MM/dd/yyyy"
        value={date}
        onChange={(value) => setDate(value)}
        renderInput={(params) => <TextField {...params} />}
      />
      <DatePicker
        inputFormat="MM/dd/yyyy"
        value={date}
        onChange={(value) => setDate(value)}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </>
  );
}