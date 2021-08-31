import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  line: {
    background:
      "linear-gradient(270deg, rgba(250, 120, 155, 0.0001) -12.35%, #F02D4E 38.45%, rgba(242, 67, 98, 0.0001) 91.33%)",
    height: "2px",
    width: "30%",
    marginTop: theme.spacing(2),
    margin: "auto",
  },
  smallline: {
    background:
      "linear-gradient(270deg, rgba(250, 120, 155, 0.0001) -12.35%, #F02D4E 38.45%, rgba(242, 67, 98, 0.0001) 91.33%)",
    height: "2px",
    width: "10%",
    marginTop: theme.spacing(0.5),
    margin: "auto",
  },
  mobileBack: {
    float: "left",
  },
  genderBtns: {
    background: "#fff",
    height: theme.spacing(17),
    width: theme.spacing(17),
    borderRadius: "10px",
    "&:hover": {
      background: "#fff",
      boxShadow: "0px 0px 28px 0px rgba(255,255,255,1);",
    },
  },
  bottomNext: {
    "@media screen and (max-width: 768px)": {
      position: "fixed",
      bottom: theme.spacing(0),
      background: "#000",
      margin: 0,
      left: 0,
      width: "100%",
      padding: theme.spacing(2),
      zIndex: 99,
    },
  },
  heading: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
}));

export default useStyles;
