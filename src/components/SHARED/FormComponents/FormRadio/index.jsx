import React from "react";
import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  Typography,
} from "@material-ui/core";
import { Field } from "formik";
import { RadioGroup } from "formik-material-ui";
import useStyles from "./style";

export default function FormRadio({ name, label, py, options, disabled }) {
  const classes = useStyles();
  return (
    <Box py={py} className={classes.root}>
      <Typography paddingLeft={1} marginBottom={0.5}>
        {label}
      </Typography>
      <Field component={RadioGroup} name={name}>
        <Grid container spacing={1}>
          {options.map((item, index) => (
            <Grid item md={6} xs={12}>
              <Box style={{ background: "#151515" }} px={1.5} py={1} borderRadius={'8px'}>
                <FormControlLabel
                  value={item}
                  control={<Radio disabled={disabled} color="secondary" />}
                  label={item}
                  disabled={disabled}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Field>
    </Box>
  );
}

FormRadio.defaultProps = {
  name: "",
  label: "",
  placeholder: "",
  py: 1,
};
