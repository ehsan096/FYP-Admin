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
import { useStyle } from "./AddiconStyle";
import iconsService from "../../services/Icons";
import { toast } from "react-toastify";

const Addicon = ({ update, setUpdate, iconCategories }) => {
  const classes = useStyle();
  const [icoon, setIcoon] = React.useState({
    name: "",
    category: "",
    d: "",
  });

  const AddData = () => {
    let data = {
      name: icoon.name,
      category: icoon.category,
      d: icoon.d,
    };
    iconsService
      .addIcon(data)
      .then((res) => {
        toast.success(res, {
          position: toast.POSITION.TOP_CENTER,
        });
        setIcoon({
          name: "",
          category: "",
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
            <Typography className={classes.logintext}>Add Icon</Typography>

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
                className={classes.addcategoryicon}
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
                  <option value={category.name}>{category.name}</option>
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
                  onClick={AddData}
                >
                  Add icon
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default Addicon;
