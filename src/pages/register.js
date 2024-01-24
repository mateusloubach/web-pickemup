import { ThemeProvider } from "@emotion/react";
import Navbar from "./navbar/navbar";
import Footer from "./footer";
import Grid from "@mui/material/Grid";
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
} from "@mui/material";
import HorizontalLinearStepper from "./stepper";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { useState } from "react";

const SignUpForm = () => {
  //   const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
      <Navbar />
      <HorizontalLinearStepper />

      <Paper
        elevation={3}
        sx={{ p: 10, margin: "auto", maxWidth: 853, mt: 5, mb: 20 }}
      >
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <div>
              <form noValidate>
                <Grid container spacing={0.5}>
                  <Grid item xs={12}>
                    <FormControl sx={{ m: 0, width: "100%" }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Telegram username
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-telegramID-input"
                        startAdornment={
                          <InputAdornment position="start">@</InputAdornment>
                        }
                        label="Telegram username"
                        //   defaultValue="victorrwill"
                        autoComplete="nigga-stfu"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      sx={{ m: 0, width: "100%", mt: 1 }}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Email
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            @stu.cu.edu.ng
                          </InputAdornment>
                        }
                        label="Email"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                      />
                      <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      sx={{ m: 0, width: "100%", mt: 0.5, mb: 2 }}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                      <FormHelperText id="outlined-weight-helper-text">
                        By continuing, you agree that we create an account for
                        you (unless already created), and accept our Terms and
                        Conditions and Privacy Policy.
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
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
                  </Grid>
                </Grid>
              </form>
            </div>
          </ThemeProvider>
        </Container>
      </Paper>
      <Footer />
    </>
  );
};

export default SignUpForm;