import { Box, Button, Grid, Typography, useTheme } from "@material-ui/core";
import { ArrowBackIosRounded, ArrowForward } from "@material-ui/icons";
import { Formik } from "formik";
import React from "react";
import FormInput from "../../../components/SHARED/FormComponents/FormInput";
import * as Yup from "yup";
import { styled } from "@material-ui/styles";
import useStyles from "./useStyle";
import FormMultiline from "../../../components/SHARED/FormComponents/FormMultiline";
import { useStore } from "../../../store";
import TheBackButton from "./TheBackButton";

const TheImagePicker = styled(Box)(({ theme }) => ({
  aspectRatio: "1/1",
  backgroundImage:
    "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='26' ry='26' stroke='white' stroke-width='2' stroke-dasharray='15' stroke-dashoffset='2' stroke-linecap='square'/%3e%3c/svg%3e\")",
  width: "100%",
  margin: "auto",
  borderRadius: "26px",
  padding: "0px",
  "& *": {
    cursor: "pointer",
    borderRadius: "23px",
  },
  "& input": {
    opacity: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
  },
  "& img": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "top",
  },
}));

const TheSmallImagePicker = styled(Box)(({ theme }) => ({
  aspectRatio: "1/1",
  backgroundImage:
    "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='white' stroke-width='2' stroke-dasharray='15' stroke-dashoffset='2' stroke-linecap='square'/%3e%3c/svg%3e\")",
  borderRadius: "14px",
  width: "100%",
  margin: "auto",
  //   overflow: "hidden",
  padding: "0px",
  "& *": {
    cursor: "pointer",
    borderRadius: "12px",
  },
  "& input": {
    opacity: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
  },
  "& img": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "top",
  },
}));

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default function Screen2() {
  const classes = useStyles();
  const theme = useTheme();
  const { goForward, goBack, data, setData } = useStore();

  return (
    <div>
      <Box textAlign="center" mt={3}>
        <Box color="white" textAlign="center" mb={1}>
          <svg
            width={60}
            height={54}
            viewBox="0 0 60 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.355 21.772s3.557 3.249 5.477 5.443c1.92 2.194 5.477 7.076 5.477 7.076s7.892-11.552 14.24-17.418c6.349-5.866 16.98-11.43 16.98-11.43"
              stroke="#fff"
              strokeWidth={5.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x={0.114502}
              width={53.6756}
              height={53.3418}
              rx={16}
              fill="#fff"
            />
            <mask
              id="a"
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={54}
              height={54}
            >
              <rect
                x={0.114502}
                width={53.6756}
                height={53.3418}
                rx={16}
                fill="#fff"
              />
            </mask>
            <g mask="url(#a)">
              <path
                d="M15.45 21.772s3.558 3.249 5.477 5.443c1.92 2.194 5.478 7.076 5.478 7.076s7.892-11.552 14.24-17.418 16.98-11.43 16.98-11.43"
                stroke="#000"
                strokeWidth={5.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </Box>
        <Typography variant="body1" color="#767676" marginBottom={1}>
          Registration completed
        </Typography>
        <Typography variant="h4">Welcome, Dealone.</Typography>
        <div className={classes.line}></div>
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
          tagline: data.tagline,
          offer: data.offer,
          images: data.images,
        }}
        onSubmit={(values, { setSubmitting }) => {
          goForward();
          setData(values);
          setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          tagline: Yup.string()
            .min(8, "* Min 8 - Max 60 characters")
            .max(60, "* Min 8 - Max 60 characters")
            .required("Tagline is required"),
          offer: Yup.string()
            .min(30, "* Min 30 - Max 350 characters")
            .max(350, "* Min 30 - Max 350 characters")
            .required("Field Required"),
          images: Yup.array().min("4", "* Upload at least 4 photos"),
        })}
      >
        {({ handleSubmit, isValid, dirty, values, setFieldValue, errors }) => {
          //   console.log(errors.images);
          const TheButton = styled(Button)(({ theme }) => ({
            background: isValid && dirty ? "#F24462" : "#222327",
            borderRadius: "7px",
            padding: theme.spacing(1),
            "&:hover": {
              background: isValid && dirty ? "#F24462" : "#222327",
            },
          }));

          const handleImagePick = (file, index) => {
            getBase64(file).then((base64) => {
              let imgs = [...values.images];
              imgs[index] = base64;
              setFieldValue("images", imgs);
            });
          };

          return (
            <form onSubmit={handleSubmit}>
              <Box mt={5}>
                <Grid container justifyContent="center">
                  <Grid item xs={6} sm={4} md={6} lg={12}>
                    <TheImagePicker component={Button} mt={5}>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => handleImagePick(e.target.files[0], 0)}
                        multiple={false}
                      />
                      {values.images[0] ? (
                        <img src={values.images[0]} alt="" />
                      ) : (
                        <svg
                          width={41}
                          height={40}
                          viewBox="0 0 41 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.421 2v36M2.197 20h36.448"
                            stroke="#fff"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </TheImagePicker>
                  </Grid>
                </Grid>
                <Box component={Grid} pt={4} container spacing={6}>
                  {[...new Array(3)].map((item, index) => {
                    return (
                      <Grid item xs={4}>
                        <TheSmallImagePicker component={Button} mt={5}>
                          <input
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) =>
                              handleImagePick(e.target.files[0], index + 1)
                            }
                            multiple={false}
                          />
                          {values.images[index + 1] ? (
                            <img src={values.images[index + 1]} alt="" />
                          ) : (
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 41 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.421 2v36M2.197 20h36.448"
                                stroke="#fff"
                                strokeWidth={4}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </TheSmallImagePicker>
                      </Grid>
                    );
                  })}
                </Box>
                <Box pt={1} fontSize={12} color={theme.palette.error.main}>
                  {errors.images}
                </Box>

                <FormInput
                  label="Your tagline"
                  name="tagline"
                  placeholder="Write a few words to tempt"
                  py={2}
                />

                <FormMultiline
                  label="What do you offer?"
                  name="offer"
                  placeholder="The more you say, the more trust you build"
                  py={2}
                  rows={5}
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
