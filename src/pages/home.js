import Navbar from "./navbar/navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import heroImg from "../images/carpool.png";
import { CssBaseline, Container, Button, Paper } from "@mui/material";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <div>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            mt={10}
          >
            <Grid item sm={12} md={6} lg={6} mt={0}>
              <Box sx={{ width: "100%", maxWidth: 500 }} mt={0} ml={0}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  It’s a simple, cheap and fun way to commute together.
                </Typography>
                <Typography variant="h6" gutterBottom paragraph={true}>
                  TMTM helps you find people who are headed to the same location
                  as you, so you can share a ride and split the cost with them
                </Typography>
                <Box mt={5}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disableElevation
                  >
                    Get Started
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <Box sx={{ width: "100%", maxWidth: 500 }} mt={0} ml={0}>
                <img src={heroImg} alt="" width="500px" />
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
            mt: 10,
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
              width: "80%",
              maxWidth: 1150,
            }}
          >
            <Container sx={{ width: "100%", margin: "auto", flex: "flex" }}>
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