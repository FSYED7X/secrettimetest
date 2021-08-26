import { Box, Button, Grid, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createBrowserHistory as history } from "history";

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer",
}));

export default function NavBar() {
  const location = useLocation();
  //   console.log(location);
  return (
    <Box borderBottom="1px solid #4F4E54">
      <Grid container justifyContent="center">
        <Grid item lg={10} xs={11}>
          <Box py={2}>
            <Grid container justifyContent="space-between">
              <Grid item xs={6}>
                <Typography variant="h6">SECRET TIME</Typography>
              </Grid>
              <Grid item xs={6}>
                <Box textAlign="right">
                  <StyledLink
                    to={
                      { "/register": "/login", "/login": "/register" }[
                        location.pathname
                      ]
                    }
                  >
                    {
                      { "/register": "SIGN IN", "/login": "Sign Up" }[
                        location.pathname
                      ]
                    }
                  </StyledLink>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
