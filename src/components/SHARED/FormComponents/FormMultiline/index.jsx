import React from "react";
import { Box, Typography } from "@material-ui/core";
import { FastField } from "formik";
import { TextField } from "formik-material-ui";
import useStyles from "./style";

export default function FormMultiline({
  name,
  label,
  placeholder,
  py,
  ...restProps
}) {
  const classes = useStyles();
  return (
    <Box py={py} className={classes.root}>
      <Typography paddingLeft={1} marginBottom={0.5}>
        {label}
      </Typography>
      <FastField
        name={name}
        component={TextField}
        variant="outlined"
        fullWidth={true}
        placeholder={placeholder}
        multiline
        InputLabelProps={{
          shrink: true,
        }}
        rows={3}
        {...restProps}
      />
    </Box>
  );
}

FormMultiline.defaultProps = {
  name: "",
  label: "",
  placeholder: "",
  py: 1,
};
