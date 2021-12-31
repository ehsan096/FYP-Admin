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
import { useStyle } from "./AddshapeStyle";

import shapesService from "../../services/Shapes";
import { toast } from "react-toastify";

const Addshape = ({ shapes, update, setUpdate }) => {
  const classes = useStyle();
  const [value, setValue] = React.useState({
    name: "",
    d: "",
  });

  const AddData = () => {
    let data = {
      name: value.name,
      d: value.d,
    };
    shapesService
      .addShape(data)
      .then((res) => {
        toast.success(res, {
          position: toast.POSITION.TOP_CENTER,
        });
        setValue({
          name: "",
          d: "",
        });
        setUpdate(!update);
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Grid container justifyContent="center" spacing={3}>
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.logintext}>Add Shape</Typography>

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Shape Name"
              variant="outlined"
              value={value.name}
              onChange={(event) =>
                setValue({
                  ...value,
                  name: event.target.value,
                })
              }
            />

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="d"
              variant="outlined"
              value={value.d}
              onChange={(event) =>
                setValue({
                  ...value,
                  d: event.target.value,
                })
              }
            />

            <Grid item>
              <Box className={classes.reportbutton}>
                <Button
                  variant="contained"
                  className={classes.editlogobutton}
                  onChange={AddData}
                >
                  Add Shape
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default Addshape;
