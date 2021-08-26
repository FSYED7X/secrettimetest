import {
  Box,
  Button,
  Chip,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Formik } from "formik";
import React from "react";
import FormInput from "../../../components/SHARED/FormComponents/FormInput";
import FormPassword from "../../../components/SHARED/FormComponents/FormPassword";
import * as Yup from "yup";
import ButtonRadio from "../../../components/SHARED/FormComponents/ButtonRadio";
import { ArrowForward } from "@material-ui/icons";

const TheButton = styled(Button)(({ theme }) => ({
  background: "#222327",
  borderRadius: "7px",
  padding: theme.spacing(1),
  "&:hover": {
    background: "#222327",
  },
}));

export default function Register() {
  return (
    <div>
      <Box
        container
        component={Grid}
        justifyContent="center"
        alignItems="center"
        mt={2}
        mb={10}
      >
        <Grid item lg={3} md={7} xs={11}>
          <Box style={{ opacity: 0, pointerEvents: "none" }}>
            <input type="email" name="email" />
            <input type="password" name="password" />
          </Box>
          <Box textAlign="center" mb={5}>
            <Typography variant="h4">Let's sign you up.</Typography>
            <Typography variant="body1" color="#767676">
              Unlock the Valut.
            </Typography>
          </Box>

          <Formik
            initialValues={{
              _email: "",
              _userName: "",
              _password: "",
              location: "",
              age: "",
              bodyType: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
            validationSchema={Yup.object().shape({
              _userName: Yup.string().required("Username is required"),
              _password: Yup.string().required("Password is Required"),
              location: Yup.string().required("Location is Required"),
              age: Yup.string().required("Age is Required"),
              _email: Yup.string().email("Invalid email").required("Required"),
            })}
          >
            {({ handleSubmit }) => {
              return (
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

                  <FormInput label="Age" name="age" py={2} />

                  <ButtonRadio
                    options={[
                      "Slim",
                      "Fit",
                      "Average",
                      "Curvy",
                      "Full Figured",
                    ]}
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

                  <Box mt={2} mb={6}>
                    <TheButton
                      fullWidth
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                    >
                      Next&nbsp;&nbsp;
                      <ArrowForward />
                    </TheButton>
                  </Box>
                  <Box color="#767676" textAlign="center" mt={5}>
                    By clicking "Next" I certify that I'am at least 18 years old
                    and agree to Secret Time{" "}
                    <span style={{ color: "#fff" }}>privacy policy</span> and{" "}
                    <span style={{ color: "#fff" }}>terms</span>
                  </Box>
                </Box>
              );
            }}
          </Formik>
        </Grid>
      </Box>
    </div>
  );
}
