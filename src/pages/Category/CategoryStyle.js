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
    marginLeft: "12.5rem",
    marginTop: "25px",
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
  // svgfile: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
}));
