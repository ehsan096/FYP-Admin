import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  datepaper: {
    padding: "30px",
  },
  textField: {
    width: "80%",
    marginTop: "10px",
  },
  report: {
    textTransform: "capitalize",
    backgroundColor: "#E46713",
    color: "white",
    "&:hover": {
      backgroundColor: "#E46713",
    },
  },
  reportbutton: {
    textAlign: "center",
    marginTop: "22px",
    marginLeft: "12rem",
  },

  fileupload: {
    marginTop: "0.9rem",
  },
  svgjsonfile: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
