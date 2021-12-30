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
import { useStyle } from "./AddlogocategoryStyle";
import { Progress } from "rsup-progress";
import { toast } from "react-toastify";
import categoryService from "../../services/Categories";
// const Container = styled.div`
//   flex: 4;
// `;
const Addlogocategory = ({ setUpdate, update }) => {
  const classes = useStyle();
  const [svgdata, setSvgdata] = React.useState("");
  const [jsondata, setJsondata] = React.useState("");
  // const Progress = new RsupProgress();

  const [value, setValue] = React.useState({
    name: "",
    bannerTitle: "",
    logoTitle: "",
    paragraph: "",
    svgString: "",
    logoName: "",
  });

  const Submit = () => {
    let data = {
      name: value.name,
      bannerTitle: value.bannerTitle,
      logoTitle: value.logoTitle,
      paragraph: value.paragraph,
      svgString: value.svgString,
      logoName: value.logoName,
      logoSvg: svgdata,
      logoJson: jsondata ? jsondata : "",
    };
    categoryService
      .addCategory(data)
      .then((res) => {
        toast.success(res, {
          position: toast.POSITION.TOP_CENTER,
        });
        setValue({
          name: "",
          bannerTitle: "",
          logoTitle: "",
          paragraph: "",
          svgString: "",
          logoName: "",
        });
        setUpdate(!update);
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
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
      setSvgdata("");
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
      setJsondata("");
      return;
    }

    fileToDataUri(files[0]).then((dataUri) => {
      console.log(dataUri);
      setJsondata(`${dataUri}`);
    });
  };

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Paper className={classes.paper} elevation={3}>
          <Typography className={classes.logintext}>
            Add New Logo Category
          </Typography>

          <TextField
            className={classes.Bannertitle}
            id="outlined-basic"
            label="Category Name"
            variant="outlined"
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
                    <label className={classes.svgfilelabel}>
                      Json File (Optional)
                    </label>
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
                onClick={Submit}
              >
                Add logo Category
              </Button>
            </Box>
          </Grid>
        </Paper>
      </form>
    </Container>
  );
};

export default Addlogocategory;
