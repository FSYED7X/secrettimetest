import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  line: {
    background:
      "linear-gradient(270deg, rgba(250, 120, 155, 0.0001) -12.35%, #F02D4E 38.45%, rgba(242, 67, 98, 0.0001) 91.33%)",
    height: "2px",
    width: "30%",
    marginTop: theme.spacing(2),
    margin: "auto",
    // border: "1px solid",
    // borderImageSource:
    //   "linear-gradient(270deg, rgba(250, 120, 155, 0.0001) -12.35%, #F02D4E 38.45%, rgba(242, 67, 98, 0.0001) 91.33%)",
  },
}));

export default useStyles;
