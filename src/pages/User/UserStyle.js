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
    marginTop: "20px",
  },
  fileupload: {
    marginTop: "2rem",
  },
}));
