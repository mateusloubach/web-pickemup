import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="secondary" elevation={0}>
          <Toolbar >
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              TMTM
            </Typography>
            <Button color="inherit">THE DEVELOPERS</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;