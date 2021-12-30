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
import React from "react";
import { useStyle } from "./EditlogoStyle";
import { Progress } from "rsup-progress";

import { useParams, Redirect } from "react-router-dom";
import logoService from "../../services/Logos";
import { toast } from "react-toastify";
// const Container = styled.div`

//   flex: 4;
// `;
const Editlogo = ({ setUpdate, update, categories, logos }) => {
  const classes = useStyle();

  const [svgdata, setSvgdata] = React.useState(null);
  const [jsondata, setJsondata] = React.useState(null);
  const [categ, setCateg] = React.useState(null);

  const [disable, setDisable] = React.useState(true);
  const [check, setCheck] = React.useState(false);
  const [logoo, setLogoo] = React.useState({
    name: "",
    category: "",
  });
  const { id } = useParams();
  // const Progress = new RsupProgress();

  const findlogo = () => {
    let i = logos.findIndex(checkCategory);

    function checkCategory(logo) {
      return logo._id === id;
    }
    if (i === -1) {
      <Redirect to="/admin" />;
      setCheck(!check);
    } else {
      setLogoo({
        name: logos[i].name,
        category: logos[i].category,
      });
      setCateg(logos[i]);
    }
  };

  const updateData = () => {
    let data = {
      name: logoo.name,
      category: logoo.category,
      logoSvg: svgdata ? svgdata : categ.logoSvg,
      logoJson: jsondata ? jsondata : categ.logoJson,
    };
    logoService
      .updateLogo(id, data)
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
      (categ.name !== logoo.name ||
        categ.category !== logoo.category ||
        svgdata !== null ||
        jsondata !== null)
    ) {
      console.log("Trueeeee > ", true);
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [logoo, svgdata, jsondata]);

  const progress = new Progress({
    height: 5,
    color: "#33eafd",
    // maxWidth:""
  });
  progress.setOptions({
    color: "red",
    // className: 'class1 class2'
  });
  const fileToDataUri = (file) =>
    progress.promise(
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.readAsText(file);
        // reader.readAsDataURL(file);
      })
    );

  const getUploadedSvg = ({ target: { files } }) => {
    console.log(files[0]);

    if (!files[0]) {
      setSvgdata(null);
      return;
    }

    fileToDataUri(files[0]).then((dataUri) => {
      console.log(dataUri);
      setSvgdata(`${dataUri}`);
    });
  };

  const getUploadedJson = ({ target: { files } }) => {
    console.log(files[0]);

    if (!files[0]) {
      setJsondata(null);
      return;
    }

    fileToDataUri(files[0]).then((dataUri) => {
      console.log(dataUri);
      setJsondata(`${dataUri}`);
    });
  };

  React.useEffect(() => {
    console.log("Json Data", jsondata);
  }, [jsondata]);

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Grid container justifyContent="center" spacing={3}>
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.logintext}>Edit Logo</Typography>

            <Grid item lg={10}>
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Logo Name"
                variant="outlined"
                value={logoo.name}
                onChange={(event) => {
                  setLogoo({
                    ...logoo,
                    name: event.target.value,
                  });
                }}
              />
            </Grid>
            <Grid
              item
              lg={10}
              className={classes.categoryFieldgrid}
              onChange={(event) => setLogoo(event.target.value)}
            >
              <select
                className={classes.categoryField}
                onChange={(event) =>
                  setLogoo({
                    ...logoo,
                    category: event.target.value,
                  })
                }
              >
                <option value="none" selected disabled hidden>
                  Select Category
                </option>
                {categories.map((category) => (
                  <option
                    value={category.name}
                    selected={category.name === logoo.category}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </Grid>
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
                      accept=".svg"
                      onChange={getUploadedSvg}
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
                      accept=".JSON"
                      onChange={getUploadedJson}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box className={classes.reportbutton}>
                <Button
                  variant="contained"
                  className={classes.editlogobutton}
                  onClick={updateData}
                  disabled={disable}
                >
                  Save logo
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default Editlogo;
