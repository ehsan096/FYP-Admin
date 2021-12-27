import {
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
import { useStyle } from "./EditiconcategoryStyle";
import { useParams, Redirect } from "react-router-dom";
import iconCategoriesService from "../../services/IconCategories";
import { toast } from "react-toastify";

const Editiconcategory = ({ iconCategories, setUpdate, update }) => {
  const classes = useStyle();
  const { id } = useParams();
  const [value, setValue] = React.useState({
    name: "",
    d: "",
    color: "",
    iconName: "",
  });
  const [category, setCategory] = React.useState(null);
  const [disable, setDisable] = React.useState(true);
  const [check, setCheck] = React.useState(false);

  const findCategory = () => {
    let i = iconCategories.findIndex(checkCategory);

    function checkCategory(category) {
      return category._id === id;
    }
    if (i === -1) {
      <Redirect to="/admin" />;
      setCheck(!check);
    } else {
      setValue({
        name: iconCategories[i].name,
        d: iconCategories[i].d,
        color: iconCategories[i].color,
        iconName: iconCategories[i].name,
      });
      setCategory(iconCategories[i]);
    }
  };
  const updateData = () => {
    iconCategoriesService
      .updateIconCategory(id, value)
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
  };

  React.useEffect(() => {
    findCategory();
  }, []);
  React.useEffect(() => {
    if (
      category &&
      (category.name !== value.name ||
        category.d !== value.d ||
        category.iconName !== value.iconName ||
        category.color !== value.color)
    ) {
      console.log("Trueeeee > ", true);
      setDisable(false);
    } else {
      console.log("Trueeeee > ", category);
      setDisable(true);
    }
  }, [value]);

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Grid container justifyContent="center" spacing={3}>
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.logintext}>Edit Category</Typography>

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Category Name"
              variant="outlined"
              value={value.name ? value.name : ""}
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
              value={value.d ? value.d : ""}
              onChange={(event) =>
                setValue({
                  ...value,
                  d: event.target.value,
                })
              }
            />
            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Icon Name"
              variant="outlined"
              value={value.iconName ? value.iconName : ""}
              onChange={(event) =>
                setValue({
                  ...value,
                  iconName: event.target.value,
                })
              }
            />
            <div className={classes.colorpicker}>
              <p>Color:</p>
              <ColorPicker
                value={value.color ? value.color : ""}
                onChange={(event) =>
                  setValue({
                    ...value,
                    color: event.css.backgroundColor,
                  })
                }
              />
            </div>

            <Grid item>
              <Box className={classes.reportbutton}>
                <Button
                  variant="contained"
                  className={classes.editlogobutton}
                  onClick={updateData}
                  disabled={disable}
                >
                  Save Category
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default Editiconcategory;
