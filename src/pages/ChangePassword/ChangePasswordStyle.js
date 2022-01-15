import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  grid: {
    marginTop: "2rem",
    // marginBottom: "3rem",
  },
  avatar: {
    backgroundColor: "#2AC5B3",
  },
  paper: {
    // marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(5),
    // marginBottom: "2rem",
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
    marginTop: "15px",
    marginBottom: "12px",
    width: "100%",
  },
  signbutton: {
    width: "100%",
    fontFamily: "'Poppins', sans-serif;",

    fontWeight: "600",
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
  profilepic: {
    width: "100px",
    height: "100px",
  },
  password: {
    marginTop: "1rem",
  },
  name: {
    marginTop: "1rem",
  },
  actionbutton: {
    marginTop: "1rem",
    marginLeft: "17rem",
  },
  LastName: {
    width: "89%",
  },
}));
