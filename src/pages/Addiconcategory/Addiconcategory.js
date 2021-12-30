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
  const [values, setValues] = React.useState({
    name: "",
    d: "",
    iconName: "",
    color: "",
  });

  const Submit = () => {
    if (values.name && values.d && values.iconName && values.color) {
      iconCategoriesService
        .addIconCategory(values)
        .then((res) => {
          toast.success(res, {
            position: toast.POSITION.TOP_CENTER,
          });
          setValues({
            name: "",
            d: "",
            iconName: "",
            color: "",
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
              value={values.name}
              onChange={(event) =>
                setValues({
                  ...values,
                  name: event.target.value,
                })
              }
            />

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="d*"
              variant="outlined"
              value={values.d}
              onChange={(event) =>
                setValues({
                  ...values,
                  d: event.target.value,
                })
              }
            />
            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Icon Name*"
              variant="outlined"
              value={values.iconName}
              onChange={(event) =>
                setValues({
                  ...values,
                  iconName: event.target.value,
                })
              }
            />
            <div className={classes.colorpicker}>
              <p>Icon Color* :</p>
              <ColorPicker
                value={values.color}
                onChange={(value) =>
                  setValues({
                    ...values,
                    color: value.css.backgroundColor,
                  })
                }
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
