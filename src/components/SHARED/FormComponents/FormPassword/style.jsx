import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiFormControl-root": {
      "& .MuiOutlinedInput-input": {
        paddingTop: "16px",
        paddingBottom: "16px",
        textTransform: "inherit",
        color: "#fff",
        fontSize: "14px",

      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff",
      },
      "&:hover .MuiFormLabel-root": {
        color: "#fff!important",
      },
      "& .MuiInputBase-root": {
        borderRadius: "8px",
        background: "#151515",
        "&:hover": {
          color: "#fff",
        },
      },
    },
  },
});

export default useStyles;
