import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";
// material
import { Box, Grid, Typography } from "@material-ui/core";
import NavBar from "./NavBar";
import Footer from "./Footer";
// components
// ----------------------------------------------------------------------

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default function AuthLayout({children}) {
    console.log(children)
  return (
    <Box bgcolor="#000" color="#fff">
      <NavBar />
      {/* <Outlet /> */}
      {children}
      <Footer/>
    </Box>
  );
}
