import { Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";

const TheBackButton = styled(Button)(({ theme }) => ({
  background: "#222327",
  borderRadius: "7px",
  padding: theme.spacing(1),
  "&:hover": {
    background: "#222327",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export default TheBackButton;
