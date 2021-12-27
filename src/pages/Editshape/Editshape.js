import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import React from "react";
import { useStyle } from "./EditshapeStyle";
import styled from "styled-components";

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