import React from "react";
import { Paper, CssBaseline } from "@mui/material";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function FormLayout(props) {
  const { children } = props;

  return (
    <>
      <CssBaseline />
      <Navbar />
      <div>
        <Paper
          elevation={2}
          sx={{
            p: { xs: 5, sm: 10, md: 15 },
            margin: "auto",
            maxWidth: { md: 853, sm: 553, xs: 353 },
            mt: 20,
            mb: 20,
            pt: 7,
          }}
        >
          {children}
        </Paper>
      </div>
      <Footer />
    </>
  );
}