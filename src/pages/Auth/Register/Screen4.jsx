import React from "react";
import { Box, Button, Grid, Link, Slider, Typography } from "@material-ui/core";
import {
  ArrowBackIosRounded,
  ArrowForward,
  AutorenewRounded,
} from "@material-ui/icons";
import { Formik } from "formik";
import { styled } from "@material-ui/styles";
import FormRadio from "../../../components/SHARED/FormComponents/FormRadio";

const TheSlider = styled(Slider)(({ theme }) => ({
  color: "#F24462!important",
}));

const TheButton = styled(Button)(({ theme }) => ({
  background: "#F24462",
  borderRadius: "7px",
  padding: theme.spacing(1),
  "&:hover": {
    background: "#F24462",
  },
}));

export default function Screen4({ setScreen }) {
  return (
    <Box mt={5}>
      <Box textAlign="center">
        <svg
          width={63}
          height={58}
          viewBox="0 0 63 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.146 23.731s3.784 3.477 5.826 5.826c2.041 2.348 5.825 7.572 5.825 7.572s8.394-12.362 15.145-18.64C48.694 12.21 60 6.256 60 6.256"
            stroke="#fff"
            strokeWidth={5.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            y={0.429688}
            width={57.0867}
            height={57.0867}
            rx={16}
            fill="#6DBE3E"
          />
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={58}
            height={58}
          >
            <rect
              y={0.429688}
              width={57.0867}
              height={57.0867}
              rx={16}
              fill="#fff"
            />
          </mask>
          <g mask="url(#a)">
            <path
              d="M16.311 23.731s3.784 3.477 5.826 5.826c2.041 2.348 5.825 7.572 5.825 7.572s8.394-12.362 15.145-18.64C49.86 12.21 61.165 6.256 61.165 6.256"
              stroke="#fff"
              strokeWidth={5.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </Box>

      <Box textAlign="center" mt={3}>
        <Typography variant="h4">Profile Completed</Typography>
        <Typography variant="body2" color="#767676" marginTop={1}>
          YOU’RE ONE STEP AWAY FROM MEETING GENEROUS GENTS
        </Typography>
      </Box>

      <Box
        style={{ background: "#222326", color: "#8C8D92" }}
        borderRadius="10px"
        py={2}
        px={4}
        mt={4}
        fontSize={14}
        textAlign="center"
      >
        Don’t wait any longer, start earning now by posting your first date!
      </Box>
      <Box py={5}>
        <TheButton fullWidth variant="contained" size="large">
          CREATE NEW DATE
        </TheButton>
      </Box>

      <Box textAlign="center">
        <Link
          style={{
            color: "#fff",
            textDecorationColor: "#fff",
            cursor: "pointer",
          }}
        >
          Later, take me to My profile
        </Link>
      </Box>
    </Box>
  );
}
