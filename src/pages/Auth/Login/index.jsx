import { Box, Button, Grid, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Formik } from "formik";
import React from "react";
import FormInput from "../../../components/SHARED/FormComponents/FormInput";
import FormPassword from "../../../components/SHARED/FormComponents/FormPassword";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Page from "../../../components/Page";

// const TheButton = styled(Button)(({ theme }) => ({
//   background: "#F24462",
//   borderRadius: "7px",
//   padding: theme.spacing(1),
//   "&:hover": {
//     background: "#F24462",
//   },
// }));

export default function Login() {
  return (
    <Page title="Login | Secret Time">
      <Box
        container
        component={Grid}
        justifyContent="center"
        alignItems="center"
        mt={5}
        mb={10}
      >
        <Grid item lg={3} md={7} xs={11}>
          <Box textAlign="center">
            <Typography variant="h4">Let's sign you in.</Typography>
            <Typography variant="body1" color="#767676">
              Welcome back, You've been missed.
            </Typography>
          </Box>

          <Formik
            initialValues={{
              _userName: "",
              _password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
            validationSchema={Yup.object().shape({
              _userName: Yup.string().required("Username is required"),
              _password: Yup.string().required("Password is Required"),
            })}
          >
            {({ handleSubmit, isValid, dirty }) => {
              
              const TheButton = styled(Button)(({ theme }) => ({
                background: isValid && dirty ? "#F24462" : "#222327",
                borderRadius: "7px",
                padding: theme.spacing(1),
                "&:hover": {
                  background: isValid && dirty ? "#F24462" : "#222327",
                },
              }));

              return (
                <form onSubmit={handleSubmit}>
                  <Box style={{ opacity: 0, pointerEvents: "none" }}>
                    <input type="email" name="email" />
                    <input type="password" name="password" />
                  </Box>
                  <Box>
                    <FormInput
                      label="Username"
                      name="_userName"
                      placeholder="Enter Username"
                      py={2}
                      autoComplete="username"
                    />
                    <FormPassword name="_password" label="Password" py={2} />
                    <Box mt={2} mb={6}>
                      <TheButton
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                      >
                        SIGN IN
                      </TheButton>
                    </Box>
                    <Box textAlign="center">
                      <Typography
                        variant="body1"
                        marginBottom={1}
                        color="#767676"
                      >
                        Dont have an account?{" "}
                        <Link to="/register" style={{ color: "#fff" }}>
                          Register
                        </Link>
                      </Typography>

                      <Typography variant="body1" color="#fff">
                        Forgot your password?
                      </Typography>
                    </Box>

                    <Box color="#767676" textAlign="center" mt={5}>
                      By clicking SIGN IN you agree to our{" "}
                      <span style={{ color: "#fff" }}>terms</span> and{" "}
                      <span style={{ color: "#fff" }}>privacy policy</span>
                    </Box>
                  </Box>
                </form>
              );
            }}
          </Formik>
        </Grid>
      </Box>
    </Page>
  );
}
