import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import NavBar from "./NavBar";
import Footer from "./Footer";

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default function AuthLayout({ children }) {
  return (
    <Box
      bgcolor="#000"
      color="#fff"
      minHeight={"100vh"}
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
    >
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
}
