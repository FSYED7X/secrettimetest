import React, { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { Field } from "formik";
import { styled } from "@material-ui/styles";

export default function FormPassword({
  name,
  label,
  placeholder,
  py,
  ...restProps
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  return (
    <Container>
      <Box py={py}>
        <Typography paddingLeft={1} marginBottom={0.5}>
          {label}
        </Typography>
        <Field name={name}>
          {({
            field, // { name, value, onChange, onBlur }
            form: { touched, errors, isSubmitting }, // also values, setXXXX, handleXXXX, dirty, etc.
            meta,
          }) => (
            <TextField
              placeholder="&#10033;&#10033;&#10033;&#10033;&#10033;&#10033;&#10033;&#10033;&#10033;&#10033;&#10033;&#10033;"
              variant="outlined"
              name={name}
              type={showPassword ? "text" : "password"}
              disabled={isSubmitting}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      style={{ color: "#fff" }}
                    >
                      {!showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
              {...restProps}
              {...field}
              helperText={meta.touched && meta.error}
              error={meta.touched && meta.error}
            />
          )}
        </Field>
      </Box>
    </Container>
  );
}
