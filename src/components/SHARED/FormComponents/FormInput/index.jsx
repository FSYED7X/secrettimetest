import React from "react";
import { Box, Typography } from "@material-ui/core";
import { FastField } from "formik";
import { TextField } from "formik-material-ui";
import { styled } from "@material-ui/styles";

const Container = styled("section")(({ theme }) => ({
  "& .MuiFormControl-root": {
    "& .MuiOutlinedInput-input": {
      paddingTop: "16px",
      paddingBottom: "16px",
      textTransform: "inherit",
      color: "#fff",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "&:hover .MuiFormLabel-root": {
      color: "#fff!important",
    },
    "& .MuiInputBase-root": {
      borderRadius: "8px",
      background: "#151515",
      "&:hover": {
        color: "#fff",
      },
    },
  },
}));

export default function FormInput({
  name,
  label,
  placeholder,
  py,
  loading,
  ...restProps
}) {
  return (
    <Container>
      <Box py={py}>
        <Typography paddingLeft={1} marginBottom={0.5}>
          {label}
        </Typography>
        <FastField
          name={name}
          component={TextField}
          variant="outlined"
          fullWidth={true}
          placeholder={placeholder}
          InputLabelProps={{
            shrink: true,
          }}
          {...restProps}
        />
      </Box>
    </Container>
  );
}

FormInput.defaultProps = {
  name: "",
  label: "",
  placeholder: "",
  py: 1,
};
