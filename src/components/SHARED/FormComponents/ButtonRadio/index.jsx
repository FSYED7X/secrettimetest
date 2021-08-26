import {
  Box,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Field } from "formik";
import React from "react";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function ButtonRadio({ py, options, name, label }) {
  return (
    <Box py={py}>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <div>
            <Typography paddingLeft={1} marginBottom={0.5}>
              {label}
            </Typography>
            <StyledToggleButtonGroup
              size="small"
              value={field.value}
              exclusive
              onChange={(event, newVal) => {
                setFieldValue(field.name, newVal);
              }}
            >
              {options.map((item, index) => {
                return (
                  <ToggleButton value={item} aria-label={item}>
                    <Chip
                      label={<>&nbsp;&nbsp;&nbsp;{item}&nbsp;&nbsp;</>}
                      style={{
                        color: "#fff",
                        border: "1px solid #6c6c6c",
                        cursor: "pointer",
                        background:
                          field.value === item ? "#272C33" : "#151515",
                        textTransform: "capitalize",
                      }}
                    />
                  </ToggleButton>
                );
              })}
            </StyledToggleButtonGroup>
          </div>
        )}
      </Field>
    </Box>
  );
}
