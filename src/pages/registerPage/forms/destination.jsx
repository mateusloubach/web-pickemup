import { ThemeProvider } from "@emotion/react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Box,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Container,
  CssBaseline,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Stack,
  MenuItem,
  Select,
} from "@mui/material";
import HorizontalLinearStepper from "../../../utils/stepper";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { useState } from "react";

const Destination = () => {
  const [answer, setAnswer] = useState("");
  const [value, setValue] = useState(null);
  //   const classes = useStyles();

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    // Add code to handle form submission here
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4FC4CF",
      },
    },
    typography: {
      button: {
        fontWeight: 700,
      },
    },
  });

  return (
    <>
      {/* <Navbar />
      <HorizontalLinearStepper />

      <Paper
        elevation={3}
        sx={{ p: 10, margin: "auto", maxWidth: 853, mt: 5, mb: 20 }}
      >
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <div>
              <form noValidate> */}
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <FormControl sx={{ m: 0, width: "100%" }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Where are you going to?
            </InputLabel>
            <OutlinedInput
              id="outlined-telegramID-input"
              label="Where are you going to?"
              autoComplete="nigga-stfu"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              //   fullWidth
              inputFormat="DD/MM/YYYY"
              label="What day are you leaving?"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
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
        {/* <Grid
                    container
                    spacing={{ xs: 1, md: 1.5 }}
                  > */}
        <Grid item xs={12} md={6}>
          <FormControl
            sx={{ m: 0, width: "100%", mt: 1, mb: 0, mr: 1 }}
            fullWidth
          >
            <InputLabel id="demo-simple-select-label">
              Do you already have a ride?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={answer}
              label="Do you already have a ride?"
              onChange={handleChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            sx={{
              m: 0,
              width: { xs: "100%", md: "97%" },
              mt: 1,
              mb: 0,
              ml: { xs: 0, md: 1 },
            }}
          >
            <InputLabel htmlFor="outlined-adornment-amount">
              How much is the ride fee?
            </InputLabel>
            <OutlinedInput
              id="outlined-telegramID-input"
              startAdornment={
                <InputAdornment position="start">₦</InputAdornment>
              }
              label="How much is the ride fee?"
              //   defaultValue="victorrwill"
              autoComplete="nigga-stfu"
            />
          </FormControl>
        </Grid>
        {/* </Grid> */}
        <Grid item xs={12} md={6}>
          <FormControl sx={{ m: 0, width: "100%", mt: 1, mb: 0 }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              Are you taking a flight?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={answer}
              label="Do you already have a ride?"
              onChange={handleChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Flight time?"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  sx={{
                    m: 0,
                    width: { xs: "100%", md: "97%" },
                    mt: 1,
                    mb: 0,
                    ml: { xs: 0, md: 1 },
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <FormHelperText
          id="outlined-weight-helper-text"
          sx={{ width: "100%", mb: 3, ml: 2 }}
        >
          By continuing, you agree that we create an account for you (unless
          already created), and accept our Terms and Conditions and Privacy
          Policy.
        </FormHelperText>
        {/* <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            size="large"
            disableElevation
            fullWidth
            // sx={{ width: "100%", maxWidth: 1000 }}
          >
            Next
          </Button>
        </Grid> */}
      </Grid>
      {/* </form>
            </div>
          </ThemeProvider>

          {/* </Box> */}
    </>
  );
};

export default Destination;