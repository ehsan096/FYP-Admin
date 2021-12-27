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
import { useStyle } from "./AddlogoStyle";
// import axios from "axios";
import { Progress } from "rsup-progress";
// import Progress from "https://unpkg.com/rsup-progress/dist/index.js";
// const Container = styled.div`
//   flex: 4;
// `;
const Addlogo = () => {
  const classes = useStyle();
  const [svgdata, setSvgdata] = React.useState(null);
  const [jsondata, setJsondata] = React.useState(null);
  // const Progress = new RsupProgress();

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

  React.useEffect(() => {
    console.log("Json Data", jsondata);
  }, [jsondata]);

  return (
    <Container className={classes.grid}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Grid container justifyContent="center" spacing={3}>
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.logintext}>Add New Logo</Typography>

            <Grid item lg={10}>
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Logo Name"
                variant="outlined"
              />
            </Grid>
            <Grid item lg={10} className={classes.categoryFieldgrid}>
              <select className={classes.categoryField}>
                <option value="">Select Category</option>
                <option value="">animal</option>
                <option value="">Food</option>
                <option value="">Education</option>
                <option value="">Business</option>
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
                      accept=".JSON"
                      className={classes.fileupload}
                      onChange={getUploadedJson}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box className={classes.reportbutton}>
                <Button variant="contained" className={classes.addlogobutton}>
                  Add logo
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Container>
  );
};

export default Addlogo;
