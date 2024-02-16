import Navbar from "../navbar/navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import heroImg from "../../images/carpool.png";
import { CssBaseline, Container, Button, Paper } from "@mui/material";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg" margin="auto">
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems={{ md: "flex-start", sm: "center" }}
            mt={10}
            // margin="auto"
          >
            <Grid item sm={12} md={6} sx={{ p: 0 }}>
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold", maxWidth: 500, p: 0, mb: 3 }}
                >
                  It’s a simple, cheap and fun way to commute together.
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  paragraph={true}
                  sx={{ maxWidth: 500, p: 0, mb: 3 }}
                >
                  PKMUP helps you find people who are headed to the same location
                  as you, so you can share a ride and split the cost with them.
                </Typography>
                <Box mt={5}>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disableElevation
                    >
                      Get Started
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box sx={{ width: "100%" }} mt={0} ml={0}>
                <img src={heroImg} alt="" width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Paper
          elevation={0}
          sx={{
            margin: "auto",
            backgroundColor: "secondary.light",
            pt: 7,
            pb: 7,
            mt: 5,
          }}
          fullWidth
        >
          <Paper
            elevation={0}
            sx={{
              margin: "auto",
              backgroundColor: "secondary.main",
              p: 7,
              mt: 0,
              width: "93%",
              maxWidth: 1150,
            }}
          >
            <Container sx={{ width: "100%", flex: "flex" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  maxWidth: 550,
                  margin: "auto",
                  mb: 3,
                }}
                align="center"
              >
                Are you taking a bus home or are you taking a taxi to the
                airport?
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                paragraph={true}
                align="center"
                sx={{
                  maxWidth: 800,
                  margin: "auto",
                }}
              >
                Going to the airport for vacation but don't want to pay full
                cost for a pricey taxi or ride share service? Lorem connects
                Covenant University students who are headed to the same airport
                or location, so you can share a ride and split the cost.
              </Typography>
            </Container>
          </Paper>
        </Paper>
      </div>
      <Footer />
    </>
  );
};

export default Home;