import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useStyle } from "./EditshapeStyle";

const Editshape = () => {
  const classes = useStyle();

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Grid container justifyContent="center" spacing={3}>
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.logintext}>Edit Shape</Typography>

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Shape Name"
              variant="outlined"
            />

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="d"
              variant="outlined"
            />

            <Grid item>
              <Box className={classes.reportbutton}>
                <Button variant="contained" className={classes.editlogobutton}>
                  Save Shape
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default Editshape;
