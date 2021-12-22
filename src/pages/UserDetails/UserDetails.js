import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  CardMedia,
  Divider,
  Card,
  CardContent,
} from "@material-ui/core";

import React from "react";
import { useStyle } from "./UserDetailsStyle";
import man from "../../images/man.jpg";
import sample from "../../images/2.png";
const UserDetails = () => {
  const classes = useStyle();

  return (
    <Container className={classes.grid}>
      <div className={classes.avatarpic}>
        <Avatar src={man} className={classes.avatar} />
      </div>
      <div className={classes.content}>
        <h4>waqas</h4>
        <h4>waqas@gmail.com</h4>
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
          <Grid item lg={4} className={classes.savelogocontainer}>
            <Card>
              <CardMedia image={sample} className={classes.savelogoimage} />
            </Card>
          </Grid>
          <Grid item lg={4} className={classes.savelogocontainer}>
            <Card>
              <CardMedia image={sample} className={classes.savelogoimage} />
            </Card>
          </Grid>
          <Grid item lg={4} className={classes.savelogocontainer}>
            <Card>
              <CardMedia image={sample} className={classes.savelogoimage} />
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default UserDetails;
