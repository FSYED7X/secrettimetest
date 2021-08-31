import {
  Box,
  Button,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ArrowBackIosRounded, ArrowForward } from "@material-ui/icons";
import { styled } from "@material-ui/styles";
import { Formik } from "formik";
import React from "react";
import ButtonRadio from "../../../components/SHARED/FormComponents/ButtonRadio";
import FormInput from "../../../components/SHARED/FormComponents/FormInput";
import FormPassword from "../../../components/SHARED/FormComponents/FormPassword";
import * as Yup from "yup";
import { useStore } from "../../../store";
import useStyles from "./useStyle";
import TheBackButton from "./TheBackButton";

export default function Screen1() {
  const { goForward, goBack, data, setData } = useStore();
  const classes = useStyles();
  return (
    <div>
      <Hidden smUp>
        <Box mb={5}>
          <Box textAlign="center" pr={2}>
            <IconButton
              onClick={goBack}
              color="inherit"
              style={{ float: "left" }}
              size="small"
            >
              <ArrowBackIosRounded fontSize="small" />
            </IconButton>
            {data.gender === "male" ? "GENTLEMEN" : "LADIES"}
          </Box>

          <div style={{ clear: "both" }}></div>

          <Box className={classes.smallline}></Box>
        </Box>
      </Hidden>

      <Box className={classes.heading} mt={3}>
        <Typography variant="h4">Let's sign you up.</Typography>
        <Typography variant="body1" color="#767676">
          Unlock the Valut.
        </Typography>
      </Box>

      <Formik
        initialValues={{
          _email: data._email,
          _userName: data._userName,
          _password: data._password,
          location: data.location,
          age: data.age,
          bodyType: data.bodyType,
          ethnicity: data.ethnicity,
        }}
        onSubmit={(values, { setSubmitting }) => {
          goForward();
          setData(values);
          setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          _userName: Yup.string().required("Username is required"),
          _password: Yup.string().required("Password is Required"),
          location: Yup.string().required("Location is Required"),
          age: Yup.number()
            .min(18, "Minimum 18 years")
            .required("Age is Required"),
          _email: Yup.string()
            .email("Invalid email")
            .required("Email Required"),
        })}
      >
        {({ handleSubmit, isValid, dirty, errors }) => {
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
                <input type="email" name="username" autoComplete="username" />
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                />
              </Box>
              <Box>
                <FormInput
                  label="Email"
                  name="_email"
                  placeholder="Enter your email"
                  py={2}
                />
                <FormInput
                  label="Username"
                  name="_userName"
                  placeholder="Enter Username"
                  py={2}
                />
                <FormPassword name="_password" label="Password" py={2} />
                <FormInput
                  label="Location"
                  name="location"
                  placeholder="Enter your location"
                  py={2}
                />

                <FormInput label="Age" name="age" py={2} type="number" />

                <ButtonRadio
                  options={["Slim", "Fit", "Average", "Curvy", "Full Figured"]}
                  name="bodyType"
                  label="Body Type"
                  py={2}
                />

                <ButtonRadio
                  options={["White", "Black", "Hispanic", "Asian", "Other"]}
                  name="ethnicity"
                  label="Ethnicity"
                  py={2}
                />

                <Box mt={2} mb={6} className={classes.bottomNext}>
                  <Grid container spacing={1}>
                    <Grid item xs={3}>
                      <TheBackButton
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={goBack}
                      >
                        &nbsp;
                        <ArrowBackIosRounded />
                        &nbsp;
                      </TheBackButton>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <TheButton
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                      >
                        Next&nbsp;&nbsp;
                        <ArrowForward />
                      </TheButton>
                    </Grid>
                  </Grid>
                </Box>

                <Box color="#767676" textAlign="center" mt={5}>
                  By clicking "Next" I certify that I'am at least 18 years old
                  and agree to Secret Time{" "}
                  <span style={{ color: "#fff" }}>privacy policy</span> and{" "}
                  <span style={{ color: "#fff" }}>terms</span>
                </Box>
              </Box>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
