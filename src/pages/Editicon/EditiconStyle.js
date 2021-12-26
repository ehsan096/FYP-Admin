import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  grid: {
    marginTop: "1rem",
    flex: 4,
  },
  avatar: {
    backgroundColor: "#2AC5B3",
  },
  categoryFieldgrid: {
    marginRight: "-8.5rem",
  },
  categoryicon: {
    width: "457%",
    height: "3rem",
    marginTop: "20px",
    marginLeft: "-68px",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(8),
  },
  logintext: {
    // marginTop: "1rem",
    marginBottom: "1rem",
    fontFamily: "'Poppins', sans-serif;",

    fontWeight: "600",
  },
  notregister: {
    marginBottom: "1rem",
    fontFamily: "'Poppins', sans-serif;",

    fontWeight: "600",
  },

  input: {
    margin: "10px 0",
    width: "130%",
  },
  loginbutton: {
    width: "130%",
  },
  forgotpassword: {
    marginTop: "1rem",
    fontFamily: "'Poppins', sans-serif;",

    fontWeight: "600",
  },

  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "130%",
    marginTop: "10px",
  },
  categoryField: {
    width: "220%",
    height: "3rem",
    marginTop: "20px",
  },
  categoryFieldgrid: {
    marginLeft: "-5.5rem",
  },
  editlogobutton: {
    textTransform: "capitalize",
    backgroundColor: "#0ac294",
    color: "white",
    "&:hover": {
      backgroundColor: "#0ac294",
    },
  },
  reportbutton: {
    // textAlign: "center",
    marginTop: "29px",
    // marginLeft: "12rem",
  },

  fileupload: {
    marginTop: "0.9rem",
  },
  svgjsonfile: {
    marginTop: "2rem",
    // marginLeft: "7rem",
  },
  svgfile: {
    marginLeft: "3rem",
  },
  svgfilelabel: {
    marginRight: "1rem",
  },
}));
