import React, { useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Grid,
  Box,
} from "@mui/material";
import { Formik, Form } from "formik";

import DestinationForm from "../forms/destination";
import PersonalForm from "../forms/personal";
import RegisterSuccess from "./registerSuccess/registerSuccess";

// import validationSchema from "./FormModel/validationSchema";
import registerFormModel from "./FormModel/registerFormModel";
import formInitialValues from "./FormModel/formInitialValues";

import { createTheme, ThemeProvider } from "@mui/system";
import { useNavigate } from "react-router-dom";

// import useStyles from "./styles";

const steps = ["Personal details", "Destination details"];
const { formId, formField } = registerFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalForm formField={formField} />;
    case 1:
      return <DestinationForm formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  //   const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  // const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const navigate = useNavigate();
  // const [error, setError] = useState(null);

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/map")
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [navigate])

  async function _handleSubmit(values, actions) {
    if (isLastStep) {
      navigate("/map");
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

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
      <Stepper
        activeStep={activeStep}
        sx={{
          width: "100%",
          // maxWidth: 400,
          margin: "auto",
          bgcolor: "transparent",
          mb: 10,
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <RegisterSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            // validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                {/* <Grid container spacing={2}> */}
                <div>
                  {/* <Grid item xs={12} sm={6}> */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      pt: 2,
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      onClick={_handleBack}
                      disabled={activeStep === 0}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>

                    {/* </Grid> */}
                    <div>
                      <Box sx={{ flex: "1 1 auto" }} />
                      {/* <Grid item xs={12} sm={6}> */}
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        // onClick={() => {
                        //   setActiveStep(1);
                        // }}
                        size="large"
                        disableElevation
                      >
                        {isLastStep ? "Sumbit" : "Next"}
                      </Button>
                      {/* </Grid> */}
                      {isSubmitting && (
                        <CircularProgress sx={{ ml: 5 }} size={24} />
                      )}
                    </div>
                  </Box>
                </div>
                {/* </Grid> */}
              </Form>
            )}
          </Formik>
        )}
      </>
    </>
  );
}