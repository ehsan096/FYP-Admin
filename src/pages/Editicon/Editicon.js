import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useStyle } from "./EditiconStyle.js";
import React from "react";

import { useParams, Redirect } from "react-router-dom";
import iconsService from "../../services/Icons";
import { toast } from "react-toastify";

const Editicon = ({ setUpdate, update, icons, iconCategories }) => {
  const classes = useStyle();
  const [categ, setCateg] = React.useState(null);

  const [disable, setDisable] = React.useState(true);
  const [check, setCheck] = React.useState(false);
  const [icoon, setIcoon] = React.useState({
    name: "",
    category: "",
    d: "",
  });
  const { id } = useParams();
  // const Progress = new RsupProgress();

  const findlogo = () => {
    let i = icons.findIndex(checkCategory);

    function checkCategory(icon) {
      return icon._id === id;
    }
    if (i === -1) {
      <Redirect to="/admin" />;
      setCheck(!check);
    } else {
      setIcoon({
        name: icons[i].name,
        category: icons[i].category,
        d: icons[i].d,
      });
      setCateg(icons[i]);
    }
  };

  const updateData = () => {
    let data = {
      name: icoon.name,
      category: icoon.category,
      d: icoon.d,
    };
    iconsService
      .updateIcon(id, data)
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
    if (
      categ &&
      (categ.name !== icoon.name ||
        categ.category !== icoon.category ||
        categ.d !== icoon.d)
    ) {
      console.log("Trueeeee > ", true);
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [icoon]);

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Grid container justifyContent="center" spacing={3}>
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.logintext}>Edit Icon</Typography>

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Icon Name"
              variant="outlined"
              value={icoon.name}
              onChange={(event) => {
                setIcoon({
                  ...icoon,
                  name: event.target.value,
                });
              }}
            />

            <div className={classes.categoryFieldgrid}>
              <select
                className={classes.categoryicon}
                onChange={(event) =>
                  setIcoon({
                    ...icoon,
                    category: event.target.value,
                  })
                }
              >
                <option value="none" selected disabled hidden>
                  Select Category
                </option>
                {iconCategories.map((category) => (
                  <option
                    value={category.name}
                    selected={category.name === icoon.category}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="d"
              variant="outlined"
              value={icoon.d}
              onChange={(event) => {
                setIcoon({
                  ...icoon,
                  d: event.target.value,
                });
              }}
            />

            <Grid item>
              <Box className={classes.reportbutton}>
                <Button
                  variant="contained"
                  className={classes.editlogobutton}
                  disabled={disable}
                  onClick={updateData}
                >
                  Save icon
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default Editicon;
