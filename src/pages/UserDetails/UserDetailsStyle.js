import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  grid: {
    // marginTop: "1rem",
    flex: 4,
    backgroundColor: "#EAEAEA",
  },
  avatarpic: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // marginTop: "1rem",
  },
  savelogodiv: {
    backgroundColor: "#EAEAEA",
    minHeight: "569px",
    marginTop: "1rem",
  },
  savelogocontainer: {
    marginTop: "1rem",
    // backgroundColor: "#ffffff",
    // height: " 350px",
  },
  savelogoimage: {
    height: 300,
    width: "90%",

    marginTop: "10px",
    marginLeft: "0.9rem",
  },

  savelogobutton: {
    display: "flex",
    justifyContent: "space-around",
  },
  editbutton: {
    backgroundColor: "#29882f",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#29882f",
    },
  },
  deletebutton: {
    backgroundColor: "#e41111",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#e41111",
    },
  },
  textField: {
    width: "80%",
    marginTop: "10px",
  },
  report: {
    textTransform: "capitalize",
    backgroundColor: "#0ac294",
    color: "white",
    "&:hover": {
      backgroundColor: "#0ac294",
    },
  },
  reportbutton: {
    textAlign: "center",
    marginTop: "22px",
    marginLeft: "12rem",
  },
  datepaper: {
    padding: "30px",
  },
  actionbutton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    alignContent: "center",
    marginTop: "2rem",
  },
  deleteuser: {
    backgroundColor: "red",
    color: "white",
    padding: "5px",
    textTransform: "capitalize",
    cursor: "pointer",
    marginRight: "1rem",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  adminuser: {
    backgroundColor: "Green",
    color: "white",
    padding: "5px",
    textTransform: "capitalize",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "Green",
    },
  },
}));
