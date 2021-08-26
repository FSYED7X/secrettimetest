import { Box, Grid} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { get } from "lodash";

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
          <Box pt={2} pb={1.5}>
            <Grid container justifyContent="space-between" alignItems='center'>
              <Grid item xs={6}>
                <img src="/Logo.png" alt="Secret Time" />
              </Grid>
              <Grid item xs={6}>
                <Box textAlign="right">
                  <StyledLink
                    to={
                      { "/register": "/login", "/login": "/register" }[
                        get(location, "pathname", "")
                      ]
                    }
                  >
                    {
                      { "/register": "Sign In", "/login": "Sign Up" }[
                        get(location, "pathname", "")
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
