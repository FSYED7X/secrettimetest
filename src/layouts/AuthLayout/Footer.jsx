import { Box, Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles"
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box px={7} py={2} borderTop="1px solid #4F4E54" className={classes.footer}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} lg={5} md={6}>
          <Box textAlign="center">
            {["About", "Mobile", "Terms", "Privacy", "Help", "Press"].map(
              (item, index) => (
                <Button variant="text" style={{ color: "#6C6C6C" }}>
                  {item}
                </Button>
              )
            )}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box textAlign="center" style={{ color: "#6C6C6C" }}>
            2021 Secret Time
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
