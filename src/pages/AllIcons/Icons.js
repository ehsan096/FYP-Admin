import React from "react";
import styled from "styled-components";
import animal from "../../images/animal.png";
import beauty from "../../images/beauty.png";
import education from "../../images/education.png";
import sport from "../../images/sport.png";
import { useStyle } from "./IconsStyle";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Dialog,
  Box,
} from "@material-ui/core";
// import { FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
const Containers = styled.div`
  flex: 4;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  /* display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px; */
`;
const Addbutton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 110px;
  margin-bottom: 40px;
`;
const Addnew = styled.button`
  border: none;
  background-color: Green;
  color: white;
  padding: 8px;
  width: 10%;
  cursor: pointer;
  border-radius: 4px;
`;
const Logos = styled.div`
  box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 16px 32px -4px;
  border-radius: 16px;
  width: 200px;
  height: 300px;
  margin-bottom: 2rem;
  margin-left: 1rem;
  /* padding: 0 40px 20px; */
`;
const Image = styled.img`
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
const Iconpic = styled.div`
  margin-left: 3rem;
  margin-top: 3rem;
`;
const Text = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
`;
const EditButton = styled.button`
  margin-right: 20px;
  border: none;
  background-color: Green;
  color: white;
  padding: 5px;
  width: 30%;
  border-radius: 20px;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  border: none;
  background-color: #da085f;
  color: white;
  padding: 5px;
  width: 30%;
  border-radius: 20px;
  cursor: pointer;
`;
const LogoButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
const Selectoption = styled.select`
  border: none;
  background-color: Green;
  color: white;
  padding: 5px;
  /* width: 30%; */
  border-radius: 3px;
  cursor: pointer;
`;
const Option = styled.option`
  background-color: white;
  color: black;
`;
const Logo = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  const [openedit, setOpenedit] = React.useState(false);

  const [selectedValueedit, setSelectedValueedit] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const handleClickOpenedit = () => {
    setOpenedit(true);
  };

  const handleCloseedit = (value) => {
    setOpenedit(false);
    setSelectedValueedit(value);
  };
  function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
      onClose(value);
    };
    const classes = useStyle();
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <Paper className={classes.datepaper}>
          <Grid container>
            <Grid item lg={12}>
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Logo Name"
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Category Name"
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12} className={classes.svgjsonfile}>
              <Grid container>
                <Grid item lg={6}>
                  <Box className={classes.svgfile}>
                    <label>Svg File</label>
                    <input
                      type="file"
                      name=""
                      id=""
                      className={classes.fileupload}
                    />
                  </Box>
                </Grid>{" "}
                <Grid item lg={6}>
                  <Box className={classes.svgfile}>
                    <label>Json File</label>
                    <input
                      type="file"
                      name=""
                      id=""
                      className={classes.fileupload}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box className={classes.reportbutton}>
                <Button variant="contained" className={classes.report}>
                  Add logo
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Dialog>
    );
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
  function SimpleDialogedit(props) {
    const { onCloseedit, selectedValueedit, openedit } = props;

    const handleCloseedit = () => {
      onCloseedit(selectedValueedit);
    };

    const handleListItemClick = (value) => {
      onCloseedit(value);
    };
    const classes = useStyle();
    return (
      <Dialog
        onClose={handleCloseedit}
        aria-labelledby="simple-dialog-title"
        open={openedit}
      >
        <Paper className={classes.datepaper}>
          <Grid container>
            <Grid item lg={12}>
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Category Name"
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12}>
              <input type="file" name="" id="" className={classes.fileupload} />
            </Grid>
            <Grid item>
              <Box className={classes.reportbutton}>
                <Button variant="contained" className={classes.report}>
                  Add
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Dialog>
    );
  }

  SimpleDialogedit.propTypes = {
    onCloseedit: PropTypes.func.isRequired,
    openedit: PropTypes.bool.isRequired,
    selectedValueedit: PropTypes.string.isRequired,
  };
  return (
    <Containers>
      <Addbutton>
        <Selectoption>
          {/* <select> */}
          <Option> Select Category</Option>
          <Option>Circle</Option>
          <Option>Star</Option>
          <Option>Lines</Option>
          <Option>Flower</Option>
          <Option>Heart</Option>

          {/* </select> */}
        </Selectoption>

        <Addnew onClick={handleClickOpen}>Add New</Addnew>
      </Addbutton>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <Wrapper>
        <Logos>
          <Iconpic>
            <svg>
              <path d="M49.833,23.583c-14.337,0 -26,11.664 -26,26c0,14.336 11.664,26.001 26,26.001c14.336,0 26.001,-11.664 26.001,-26.001c0,-14.337 -11.664,-26 -26.001,-26zM49.833,67.584c-9.925,0 -18,-8.075 -18,-18.001c0,-9.925 8.075,-18 18,-18c9.925,0 18.001,8.075 18.001,18c0,9.926 -8.076,18.001 -18.001,18.001z" />
            </svg>
          </Iconpic>

          <Text>Circle icon</Text>
          <LogoButton>
            <EditButton onClick={handleClickOpenedit}> Edit</EditButton>
            <SimpleDialog
              selectedValue={selectedValueedit}
              open={openedit}
              onClose={handleCloseedit}
            />
            <DeleteButton>Delete</DeleteButton>
          </LogoButton>
        </Logos>
        <Logos>
          <Iconpic>
            <svg>
              <path d="M28.611,25.219v0c0.001,0 0.001,0 0,0v0v0v0v0v0v0h-0.002v0h0.002v0v0v0v0v0v0c0,0.001 0,0.001 0,0c0,0.001 0.001,0.002 0,0zM28.61,25.221v0v0v-0.001v0v0v0v0v0.001v0zM28.611,25.221v0v0v0c0,-0.001 0,-0.001 0,-0.001v0zM28.611,25.221v0v0v0zM28.611,25.219v0v0v0zM43.17,0l14.559,25.219l28.611,0.007l-14.301,24.771l14.301,24.776l-28.607,0.004l-14.563,25.223l-14.563,-25.223l-28.607,-0.004l14.305,-24.776l-14.305,-24.77l28.611,-0.007zM24.51,49.997l9.227,15.999h18.836l9.257,-15.999l-9.254,-16.039h-18.81zM62.777,66.021h8.311l-4.152,-7.191zM15.246,65.992h8.309l-4.155,-7.192zM39.041,25h8.311l-4.156,-7.193zM66.934,41.155l4.153,-7.193h-8.31zM19.4,41.183l4.154,-7.192h-8.309zM43.195,82.175l4.155,-7.192h-8.31z" />
            </svg>
          </Iconpic>
          <Text>Star icon</Text>
          <LogoButton>
            <EditButton> Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </LogoButton>
        </Logos>
        <Logos>
          <Iconpic>
            <svg>
              <path d="M8.744,100l-8.744,-2.638l17.2,-61.989l42.877,16.896l31.722,-52.269l7.808,4.739l-35.715,58.85l-40.812,-16.083z" />
            </svg>
          </Iconpic>
          <Text>Line icon</Text>
          <LogoButton>
            <EditButton> Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </LogoButton>
        </Logos>
        <Logos>
          <Iconpic>
            <svg>
              <path d="M65.979,99.993c17.125,0 31.037,-13.883 31.037,-31.008c0,-4.951 0,-18.108 0,-20.805c0,-2.845 -2.18,-3.679 -4.068,-1.597c-1.123,1.231 -26.41,26.692 -39.057,40.485c0,-11.103 0,-26.342 0,-30.11c0,-0.748 0.32,-1.328 1.217,-1.328c12.979,0 24.711,-13.978 24.711,-27.405c0,-9.934 -2.094,-17.139 -6.701,-26.355c-0.601,-1.202 -0.687,-1.87 -2.371,-1.87c-0.787,0 -1.541,0.354 -1.906,0.984c-1.197,2.08 -7.672,13.27 -8.086,14.008c-0.504,0.902 -1.59,0.994 -2.096,0c-0.383,-0.754 -6.887,-11.928 -8.088,-14.008c-0.365,-0.63 -1.115,-0.984 -1.902,-0.984c-0.786,0 -1.538,0.354 -1.902,0.984c-1.203,2.08 -7.705,13.254 -8.087,14.008c-0.506,0.994 -1.591,0.902 -2.096,0c-0.414,-0.739 -6.888,-11.928 -8.087,-14.008c-0.365,-0.63 -1.118,-0.984 -1.905,-0.984c-1.684,0 -1.771,0.668 -2.371,1.869c-4.61,9.217 -6.702,16.421 -6.702,26.356c0,13.428 11.732,27.404 24.71,27.404c0.898,0 1.216,0.58 1.216,1.328c0,6.16 0,43.043 0,43.043zM4.093,46.584c-1.891,-2.083 -4.093,-1.248 -4.093,1.596c0,2.696 0.053,15.854 0.053,20.807c0,17.125 13.884,31.008 31.009,31.008c1.855,0 6.256,0 8.363,0v-17.404c-6.379,-6.479 -34.008,-34.55 -35.332,-36.007z" />
            </svg>
          </Iconpic>
          <Text>Flower icon</Text>
          <LogoButton>
            <EditButton> Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </LogoButton>
        </Logos>
      </Wrapper>
    </Containers>
  );
};

export default Logo;
