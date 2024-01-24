import { createTheme } from "@mui/material/styles";

const themes = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#4fc4cf",
    },
    secondary: {
      main: "#f0e2e1",
      light: "#f6efef",
    },
    background: {
      default: "#fffffe",
    },
    // text: {
    //   primary: "#171717",
    //   secondary: "#2e2e2e",
    // },
  },
  typography: {
    h2: {
      fontSize: "0.5rem",
      fontWeight: 700,
    },
    fontFamily: "Raleway",
    h1: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    button: {
      fontWeight: 700,
    },
  },
  props: {
    MuiAppBar: {
      color: "default",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default themes;