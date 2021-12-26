import {
  Avatar,
  Button,
  Container,
  Grid,
  CardMedia,
  Card,
} from "@material-ui/core";

import React from "react";
import { useStyle } from "./UserDetailsStyle";
import man from "../../images/man.jpg";
import { useParams } from "react-router-dom";
const UserDetails = ({ users }) => {
  const classes = useStyle();
  const { id } = useParams();

  var i = users.findIndex(checkLogo);
  function checkLogo(user) {
    return user._id === id;
  }

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
            >
              Make Admin
            </Button>
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
