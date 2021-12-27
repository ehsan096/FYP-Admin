import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";
import { ColorPicker } from "material-ui-color";

import TextField from "@material-ui/core/TextField";
import React from "react";
import { useStyle } from "./AddiconcategoryStyle";
import iconCategoriesService from "../../services/IconCategories";
import { toast } from "react-toastify";

const Addiconcategory = ({ setUpdate, update }) => {
  const classes = useStyle();

  const [name, setName] = React.useState(null);
  const [d, setD] = React.useState(null);
  const [iconName, setIconName] = React.useState(null);
  const [color, setColor] = React.useState(null);

  const Submit = () => {
    if (name && d && iconName && color) {
      iconCategoriesService
        .addIconCategory({ name, d, color, iconName })
        .then((res) => {
          toast.success(res, {
            position: toast.POSITION.TOP_CENTER,
          });
          setUpdate(!update);
        })
        .catch((err) => {
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    } else {
      toast.error("All fields must be filled", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Grid container justifyContent="center" spacing={3}>
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.logintext}>Add Category</Typography>

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Category Name*"
              variant="outlined"
              onChange={(event) => setName(event.target.value)}
            />

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="d*"
              variant="outlined"
              onChange={(event) => setD(event.target.value)}
            />
            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Icon Name*"
              variant="outlined"
              onChange={(event) => setIconName(event.target.value)}
            />
            <div className={classes.colorpicker}>
              <p>Icon Color* :</p>
              <ColorPicker
                value={color}
                onChange={(value) => setColor(value.css.backgroundColor)}
              />
            </div>

            <Grid item>
              <Box className={classes.reportbutton}>
                <Button
                  variant="contained"
                  className={classes.editlogobutton}
                  onClick={Submit}
                >
                  Add Category
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default Addiconcategory;
