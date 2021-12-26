import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  grid: {
    marginTop: "5rem",
  },
  avatar: {
    backgroundColor: "#2AC5B3",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(8),
    width: "22rem",
  },
  logintext: {
    marginTop: "1rem",
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
    width: "100%",
  },
  loginbutton: {
    marginTop: "1rem",
    width: "100%",
  },
  forgotpassword: {
    marginTop: "1rem",
    fontFamily: "'Poppins', sans-serif;",

    fontWeight: "600",
  },
  textField: {
    width: "100%",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
