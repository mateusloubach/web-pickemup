import Map from "../map/map";
import points from "../../utils/points";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
//
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Container,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Stack,
  MenuItem,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";
//
import { ThemeProvider, createTheme } from "@mui/material/styles";

const token = "12345";
const drawerWidth = 300;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4fc4cf",
    },
    secondary: {
      main: "#f0e2e1",
      light: "#f6efef",
    },
  },
});

const MapPage = (props) => {
  let details = useState(points)[0];

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

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <Divider />

      <Container sx={{ width: "100%", margin: "0 auto", flex: "flex", mt: 5 }}>
        <div>
          <form noValidate>
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

              <Grid item xs={12} md={12}>
                <FormControl
                  sx={{
                    m: 0,
                    width: "100%",
                    mt: 1,
                    mb: 0,
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
                    autoComplete="nigga-stfu"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={12}>
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
                          width: "100%",
                          mt: 1,
                          mb: 2,
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  size="large"
                  disableElevation
                  fullWidth
                  width="80%"
                  sx={{ width: "100%", mb: 10 }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: `${drawerWidth}px`,
          }}
          color="secondary"
          elevation={0}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                PMKUP
              </Link>
            </Typography>
            <Button color="inherit">My Github</Button>
          </Toolbar>
        </AppBar>

        <ThemeProvider theme={darkTheme}>
          <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { sm: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "#000000",
                  opacity: 1,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              variant="permanent"
              anchor="left"
              open
            >
              {drawer}
            </Drawer>
          </Box>
        </ThemeProvider>
      </Box>
      {details ? <Map details={details} token={token} /> : <p>Loading...</p>}
    </>
  );
};

export default MapPage;