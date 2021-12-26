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
import { useStyle } from "./EditlogocategoryStyle";
import styled from "styled-components";
// const Container = styled.div`
//   flex: 4;
// `;
const Editlogocategory = () => {
  const classes = useStyle();

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Paper className={classes.paper} elevation={3}>
          <Typography className={classes.logintext}>
            Edit Logo Category
          </Typography>

          <TextField
            className={classes.Bannertitle}
            id="outlined-basic"
            label="Category Name"
            variant="outlined"
          />

          <TextField
            className={classes.Bannertitle}
            id="outlined-basic"
            label="First Logo Name"
            variant="outlined"
          />

          <TextField
            className={classes.Bannertitle}
            id="outlined-basic"
            label="Banner Title"
            variant="outlined"
          />

          <TextField
            className={classes.Bannertitle}
            id="outlined-basic"
            label="Logo Title"
            variant="outlined"
          />
          <TextField
            className={classes.Bannertitle}
            id="outlined-basic"
            label="d"
            variant="outlined"
          />

          <Grid container>
            <Grid item lg={8}>
              <textarea
                className={classes.textarea}
                name=""
                placeholder="Banner Description"
                id=""
                cols="98"
                rows="5"
              ></textarea>
            </Grid>
          </Grid>
          <Grid>
            <Grid item lg={12} className={classes.svgjsonfile}>
              <Grid container justifyContent="center">
                <Grid item lg={5}>
                  <Box className={classes.svgfile}>
                    <label className={classes.svgfilelabel}>Svg File</label>
                    <input
                      type="file"
                      name=""
                      id=""
                      className={classes.fileupload}
                    />
                  </Box>
                </Grid>{" "}
                <Grid item lg={5}>
                  <Box className={classes.svgfile}>
                    <label className={classes.svgfilelabel}>Json File</label>
                    <input
                      type="file"
                      name=""
                      id=""
                      className={classes.fileupload}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box className={classes.reportbutton}>
              <Button variant="contained" className={classes.addlogobutton}>
                Save logo Category
              </Button>
            </Box>
          </Grid>
        </Paper>
      </form>
    </Container>
  );
};

export default Editlogocategory;
