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
import { useStyle } from "./EditlogocategoryStyle";
import { Progress } from "rsup-progress";
import { toast } from "react-toastify";
import { useParams, Redirect } from "react-router-dom";
import categoryService from "../../services/Categories";
// const Container = styled.div`
//   flex: 4;
// `;
const Editlogocategory = ({ categories, update, setUpdate }) => {
  const classes = useStyle();
  const [logoSvg, setLogoSvg] = React.useState(null);
  const [logoJson, setLogoJson] = React.useState(null);
  const { id } = useParams();
  const [category, setCategory] = React.useState(null);

  const [disable, setDisable] = React.useState(true);
  const [check, setCheck] = React.useState(false);
  // const Progress = new RsupProgress();
  const [value, setValue] = React.useState({
    name: "",
    bannerTitle: "",
    logoTitle: "",
    paragraph: "",
    svgString: "",
    logoName: "",
  });

  const findCategory = () => {
    let i = categories.findIndex(checkCategory);

    function checkCategory(category) {
      return category._id === id;
    }
    if (i === -1) {
      <Redirect to="/admin" />;
      setCheck(!check);
    } else {
      setValue({
        name: categories[i].name,
        bannerTitle: categories[i].bannerTitle,
        logoTitle: categories[i].logoTitle,
        paragraph: categories[i].paragraph,
        svgString: categories[i].svgString,
        logoName: categories[i].logoName,
      });
      setCategory(categories[i]);
    }
  };
  const updateData = () => {
    let data = {
      name: value.name,
      bannerTitle: value.bannerTitle,
      logoTitle: value.logoTitle,
      paragraph: value.paragraph,
      svgString: value.svgString,
      logoName: value.logoName,
      logoSvg: logoSvg ? logoSvg : category.logoSvg,
      logoJson: logoJson ? logoJson : category.logoJson,
    };
    categoryService
      .updateCategory(id, data)
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
    findCategory();
  }, []);
  React.useEffect(() => {
    if (
      category &&
      (category.name !== value.name ||
        category.bannerTitle !== value.bannerTitle ||
        category.logoTitle !== value.logoTitle ||
        category.paragraph !== value.paragraph ||
        category.svgString !== value.svgString ||
        category.logoName !== value.logoName ||
        logoSvg !== null ||
        logoJson !== null)
    ) {
      console.log("Trueeeee > ", true);
      setDisable(false);
    } else {
      console.log("Trueeeee > ", category);
      setDisable(true);
    }
  }, [value, logoJson, logoSvg]);

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
      setLogoSvg(null);
      return;
    }

    fileToDataUri(files[0]).then((dataUri) => {
      console.log(dataUri);
      setLogoSvg(`${dataUri}`);
    });
  };

  const getUploadedJson = ({ target: { files } }) => {
    console.log(files[0]);

    if (!files[0]) {
      setLogoJson(null);
      return;
    }

    fileToDataUri(files[0]).then((dataUri) => {
      console.log(dataUri);
      setLogoJson(`${dataUri}`);
    });
  };

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
            value={value.name ? value.name : ""}
            onChange={(event) =>
              setValue({
                ...value,
                name: event.target.value,
              })
            }
          />

          <TextField
            className={classes.Bannertitle}
            id="outlined-basic"
            label="First Logo Name"
            variant="outlined"
            value={value.logoName ? value.logoName : ""}
            onChange={(event) =>
              setValue({
                ...value,
                logoName: event.target.value,
              })
            }
          />

          <TextField
            className={classes.Bannertitle}
            id="outlined-basic"
            label="Banner Title"
            variant="outlined"
            value={value.bannerTitle ? value.bannerTitle : ""}
            onChange={(event) =>
              setValue({
                ...value,
                bannerTitle: event.target.value,
              })
            }
          />

          <TextField
            className={classes.Bannertitle}
            id="outlined-basic"
            label="Logo Title"
            variant="outlined"
            value={value.logoTitle ? value.logoTitle : ""}
            onChange={(event) =>
              setValue({
                ...value,
                logoTitle: event.target.value,
              })
            }
          />
          <TextField
            className={classes.Bannertitle}
            id="outlined-basic"
            label="d"
            variant="outlined"
            value={value.svgString ? value.svgString : ""}
            onChange={(event) =>
              setValue({
                ...value,
                svgString: event.target.value,
              })
            }
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
                value={value.paragraph ? value.paragraph : ""}
                onChange={(event) =>
                  setValue({
                    ...value,
                    paragraph: event.target.value,
                  })
                }
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
          </Grid>
          <Grid item>
            <Box className={classes.reportbutton}>
              <Button
                variant="contained"
                className={classes.addlogobutton}
                onClick={updateData}
                disabled={disable}
              >
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
