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
import { useParams, Redirect } from "react-router-dom";
import shapesService from "../../services/Shapes";
import { toast } from "react-toastify";

const Editshape = ({ setUpdate, update, shapes }) => {
  const classes = useStyle();
  const [disable, setDisable] = React.useState(true);
  const [categ, setCateg] = React.useState(null);
  const [check, setCheck] = React.useState(false);
  const [value, setValue] = React.useState({
    name: "",
    d: "",
  });
  const { id } = useParams();
  // const Progress = new RsupProgress();

  const findlogo = () => {
    let i = shapes.findIndex(checkCategory);

    function checkCategory(shape) {
      return shape._id === id;
    }
    if (i === -1) {
      <Redirect to="/admin" />;
      setCheck(!check);
    } else {
      setValue({
        name: shapes[i].name,
        d: shapes[i].d,
      });
      setCateg(shapes[i]);
    }
  };

  const updateData = () => {
    let data = {
      name: value.name,
      d: value.d,
    };
    shapesService
      .updateShape(id, data)
      .then((res) => {
        toast.success(res, {
          position: toast.POSITION.TOP_CENTER,
        });
        setUpdate(!update);
        setDisable(true);
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  React.useEffect(() => {
    findlogo();
  }, []);
  React.useEffect(() => {
    if (categ && (categ.name !== value.name || categ.d !== value.d)) {
      console.log("Trueeeee > ", true);
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [value]);

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
                  disabled={disable}
                  onClick={updateData}
                >
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
