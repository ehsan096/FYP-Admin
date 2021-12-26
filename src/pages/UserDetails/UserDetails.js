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
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
const UserDetails = ({ users }) => {
  const classes = useStyle();
  const { id } = useParams();

  var i = users.findIndex(checkLogo);
  function checkLogo(user) {
    return user._id === id;
  }
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  const [openedit, setOpenedit] = React.useState(false);

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
  function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
      onClose(value);
    };
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
              />
            </Grid>

            <Grid item>
              <Box className={classes.reportbutton}>
                <Button variant="contained" className={classes.report}>
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
            >
              Delete User
            </Button>
            <Button
              variant="contained"
              color="success"
              className={classes.adminuser}
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
