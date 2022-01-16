import {
  Avatar,
  Button,
  Container,
  Grid,
  CardMedia,
  Card,
  Paper,
  Dialog,
  TextField,
  Box,
} from "@material-ui/core";

import React from "react";
import { useStyle } from "./UserDetailsStyle";
import man from "../../images/man.jpg";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import userService from "../../services/UserService";
import { toast } from "react-toastify";

const UserDetails = ({ setUpdate, update, users }) => {
  const classes = useStyle();
  const { id } = useParams();
  const [chek, setChek] = React.useState(false);
  const [chk, setChk] = React.useState(
    userService.getSingleUser(id).role === "admin"
  );
  React.useEffect(async () => {
    userService
      .getSingleUser(id)
      .then((res) => {
        setChk(res.role === "admin");
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    // setChk((await  === "admin");
  }, []);
  const history = useHistory();
  if (users === null) {
    history.push("/admin");
    // <Redirect to="/admin" />;
    setChek(!chek);
    // setUpdate(!update);
    console.log("users outside ", users);
    // <Redirect to={"/admin"} />;
  } else {
    var i = users.findIndex(checkLogo);
    function checkLogo(user) {
      return user._id === id;
    }
  }

  const passworddd = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  const [openedit, setOpenedit] = React.useState(false);
  const [password, setPassword] = React.useState(null);

  const [selectedValueedit, setSelectedValueedit] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const handleClickOpenedit = () => {
    setOpenedit(true);
  };

  const handleCloseedit = (value) => {
    setOpenedit(false);
    setSelectedValueedit(value);
  };

  async function handleDelete(event) {
    userService
      .deleteUser(id)
      .then((res) => {
        history.push("/admin");
        // <Redirect to="/admin" />;
        setChek(!chek);
        setUpdate(!update);
        toast.success(res, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }
  function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    async function handleSubmit(event) {
      handleClose();
      event.preventDefault();
      let admn = await userService.getSingleUser(
        userService.getLoggedInUser()._id
      );

      if (admn && admn.email) {
        console.log("Mail > ", admn);

        let user = await userService.login(admn.email, passworddd.current);

        console.log("user > ", user);
        if (user) {
          userService
            .updateUserRole(id, { role: "admin" })
            .then((res) => {
              toast.success(res, {
                position: toast.POSITION.TOP_CENTER,
              });
            })
            .catch((err) => {
              toast.error(err.response.data, {
                position: toast.POSITION.TOP_CENTER,
              });
            });
        }
      }
    }
    const classes = useStyle();
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <Paper className={classes.datepaper}>
          <Grid container>
            <Grid item lg={12}>
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Enter Password"
                variant="outlined"
                value={password}
                onChange={(event) => {
                  event.preventDefault();
                  passworddd.current = event.target.value;
                }}
              />
            </Grid>

            <Grid item>
              <Box className={classes.reportbutton}>
                <Button
                  variant="contained"
                  className={classes.report}
                  onClick={(event) => handleSubmit(event)}
                >
                  Make an Admin
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Dialog>
    );
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
  return (
    <Container className={classes.grid}>
      {i !== -1 ? (
        <>
          <div className={classes.avatarpic}>
            <Avatar src={man} className={classes.avatar} />
          </div>
          <div className={classes.content}>
            <h4>{users[i] ? users[i].name : ""}</h4>
            <h4>{users[i] ? users[i].email : ""}</h4>
          </div>
          <div className={classes.actionbutton}>
            <Button
              className={classes.deleteuser}
              variant="contained"
              color="success"
              disabled={chk}
              onClick={(event) => handleDelete(event)}
            >
              Delete User
            </Button>
            <Button
              variant="contained"
              color="success"
              className={classes.adminuser}
              disabled={chk}
              onClick={handleClickOpen}
            >
              Make Admin
            </Button>
            <SimpleDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </div>
          <div className={classes.savelogodiv}>
            <Grid container spacing={2}>
              {users[i]
                ? users[i].logos.length > 0
                  ? users[i].logos.map((logo) => (
                      <Grid item lg={4} className={classes.savelogocontainer}>
                        <Card>
                          <CardMedia
                            image={`data:image/svg+xml;base64,${btoa(
                              unescape(encodeURIComponent(logo.logoSvg))
                            )}`}
                            className={classes.savelogoimage}
                          />
                        </Card>
                      </Grid>
                    ))
                  : ""
                : ""}
            </Grid>
          </div>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};

export default UserDetails;
