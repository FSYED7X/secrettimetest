import React from "react";
import { Box, Button, Grid, Slider, Typography } from "@material-ui/core";
import {
  ArrowBackIosRounded,
  ArrowForward,
  AutorenewRounded,
} from "@material-ui/icons";
import { Formik } from "formik";
import { styled } from "@material-ui/styles";
import FormRadio from "../../../components/SHARED/FormComponents/FormRadio";
import { useStore } from "../../../store";

const TheSlider = styled(Slider)(({ theme }) => ({
  color: "#F24462!important",
}));

export default function Screen3({ setScreen }) {
  const { data, setData } = useStore();

  return (
    <div>
      <Box textAlign="center" mt={3}>
        <Typography variant="h4"> You’re almost done!</Typography>
        <Typography variant="body1" color="#767676" marginBottom={1}>
          Please answer the final questions
        </Typography>
      </Box>

      <Box
        style={{ background: "#222326" }}
        borderRadius="10px"
        py={2}
        px={4}
        mt={4}
        fontSize={14}
        textAlign="center"
      >
        Your privacy is valued, hence your profile is only visible to the ladies
        you message
      </Box>

      <Formik
        initialValues={{
          unit: data.unit,
          height: data.height,
          education: data.education,
          smoker: data.smoker,
          occupation: data.occupation,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setScreen(3);
          setData(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isValid, dirty, values, setFieldValue }) => {
          const TheButton = styled(Button)(({ theme }) => ({
            background: "#F24462",
            borderRadius: "7px",
            padding: theme.spacing(1),
            "&:hover": {
              background: "#F24462",
            },
          }));

          const TheBackButton = styled(Button)(({ theme }) => ({
            background: "#222327",
            borderRadius: "7px",
            padding: theme.spacing(1),
            "&:hover": {
              background: "#222327",
            },
          }));

          return (
            <form onSubmit={handleSubmit}>
              <Box>
                <Box mt={4}>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography paddingLeft={1} marginBottom={0.5}>
                        How tall are you?
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Button
                        variant="text"
                        style={{ color: "#fff", textTransform: "lowercase" }}
                        onClick={() =>
                          setFieldValue(
                            "unit",
                            values.unit === "cm" ? "inches" : "cm"
                          )
                        }
                      >
                        <AutorenewRounded />
                        &nbsp;&nbsp;{values.unit}
                      </Button>
                    </Grid>
                  </Grid>

                  <TheSlider
                    defaultValue={140}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    max={280}
                  />
                </Box>

                <FormRadio
                  name="education"
                  label="Level of education completed?"
                  py={2}
                  options={[
                    "Graduate degree",
                    "College degree",
                    "Master degree",
                    "In college",
                    "In university",
                    "Undergraduate degree",
                  ]}
                />

                <FormRadio
                  name="smoker"
                  label="Are you a smoker?"
                  py={2}
                  options={["Yes", "No"]}
                />

                <FormRadio
                  name="occupation"
                  label="Your occupation"
                  py={2}
                  options={[
                    "Administrat/Secretar",
                    "Student",
                    "Food services",
                    "Executive management",
                    "Medical/Dental",
                    "Teacher/Professor",
                    "Finance",
                  ]}
                />

                <Box mt={2} mb={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={3}>
                      <TheBackButton
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={() => setScreen(1)}
                      >
                        &nbsp;
                        <ArrowBackIosRounded />
                        &nbsp;
                      </TheBackButton>
                    </Grid>
                    <Grid item xs={9}>
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
