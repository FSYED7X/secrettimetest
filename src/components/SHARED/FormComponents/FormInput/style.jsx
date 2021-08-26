import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      "& .MuiOutlinedInput-input": {
        paddingTop: "16px",
        paddingBottom: "16px",
        textTransform: "inherit",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover .MuiFormLabel-root": {
        color: theme.palette.primary.main + "!important",
      },
      "& .MuiInputBase-root": {
        borderRadius: "8px",
        "&:hover": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
}));

export default useStyles;
