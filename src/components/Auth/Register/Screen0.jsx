import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { BoyAvatar, GirlAvatar } from "../../../assets/images/SVG";
import { useStore } from "../../../store";
import useStyles from "./useStyle";

export default function Screen0() {
  const classes = useStyles();
  const { goForward, setData } = useStore();

  const handleGenderSelect = (gender) => {
    setData({ gender: gender });
    goForward();
  };

  return (
    <Fragment>
      <Box textAlign="center" mt={3} mb={10}>
        <Typography variant="h4">Let's sign you up.</Typography>
        <Typography variant="body1" color="#767676" marginTop={2}>
          Select a gender.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems='center'>
        <Grid item>
          <Box
            component={Button}
            className={classes.genderBtns}
            onClick={() => handleGenderSelect("male")}
          >
            <BoyAvatar color="#222326" height={100} width={100} />
          </Box>
        </Grid>
        <Grid item>
          <Box
            component={Button}
            className={classes.genderBtns}
            onClick={() => handleGenderSelect("female")}
          >
            <GirlAvatar color="#222326" height={100} width={100} />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}
