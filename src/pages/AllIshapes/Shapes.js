import React from "react";
import styled from "styled-components";
import animal from "../../images/animal.png";
import beauty from "../../images/beauty.png";
import education from "../../images/education.png";
import sport from "../../images/sport.png";
import { useStyle } from "./ShapesStyle";
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
  justify-content: flex-end;
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
        {/* <Selectoption>
         
          <Option> Select Category</Option>
          <Option>Circle</Option>
          <Option>Star</Option>
          <Option>Lines</Option>
          <Option>Flower</Option>
          <Option>Heart</Option>

       
        </Selectoption> */}

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
              <path d="M35.76,0C16.034,32.979,0.001,46.266,0.001,65.374C0.001,84.479,16.034,100,35.76,100  c19.767,0,35.798-15.521,35.798-34.626C71.559,46.266,55.528,32.979,35.76,0z M35.76,95C18.8,95,5.001,81.71,5.001,65.374  c0-11.142,6.67-20.662,16.766-35.074c4.253-6.071,8.95-12.775,13.997-20.763c5.043,7.969,9.737,14.66,13.987,20.72  c10.121,14.431,16.808,23.964,16.807,35.117C66.558,81.71,52.742,95,35.76,95z" />
            </svg>
          </Iconpic>

          <Text>Shape 1</Text>
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
              <path d="M100,31.441C100,14.104,77.568,0,49.999,0C22.43,0,0,14.104,0,31.441c0,14.292,15.356,26.8,37.346,30.42  l0.62,0.104l0.196,0.596c0.37,1.133,0.533,2.238,0.533,3.311c0,3.646-1.875,6.875-3.771,9.215  c5.277-2.409,13.249-6.704,15.588-11.632l0.276-0.583l0.644-0.01C78.211,62.384,100,48.289,100,31.441z M51.355,57.862l-3.753,0.057  l-1.607,3.392c-0.354,0.746-1.132,1.701-2.4,2.802c-0.12-1.05-0.348-2.092-0.683-3.116l-1.142-3.465l-3.611-0.604  C18.945,53.765,5,43.046,5,31.441C5,17.108,25.607,5,49.999,5C74.392,5,95,17.108,95,31.441C95,45.341,75.008,57.44,51.355,57.862z" />
            </svg>
          </Iconpic>
          <Text>Shape 2</Text>
          <LogoButton>
            <EditButton> Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </LogoButton>
        </Logos>
        <Logos>
          <Iconpic>
            <svg>
              <path d="M90.158,67.896c0,0,3.761-0.096,3.92-0.119c3.318-0.125,5.922-2.824,5.922-6.144V6.156  C100,2.762,97.236,0,93.842,0H6.156C2.763,0,0,2.762,0,6.156v55.477c0,3.394,2.763,6.156,6.156,6.156h39.093l0.217,0.765  c0.314,1.11,0.451,2.2,0.451,3.26c0,4.362-2.351,8.17-4.593,10.85c6.16-2.807,16.143-8.125,18.591-14.217l0.265-0.656h12.354  L90.158,67.896z M56.805,62.79l-1.529,3.792c-0.491,1.224-1.875,2.888-4.363,4.816c-0.035-1.424-0.248-2.837-0.636-4.209l-1.248-4.4  H6.156C5.529,62.789,5,62.26,5,61.633V6.156C5,5.529,5.529,5,6.156,5h87.686C94.48,5,95,5.519,95,6.156v55.477  c0,0.63-0.478,1.123-1.11,1.147l-0.312,0.016c-0.74,0.03-3.015,0.088-3.468,0.1L72.533,62.79H56.805z" />
            </svg>
          </Iconpic>
          <Text>Shape 3</Text>
          <LogoButton>
            <EditButton> Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </LogoButton>
        </Logos>
        <Logos>
          <Iconpic>
            <svg>
              <path d="M97.543,22.571L52.506,0.501C51.854,0.182,50.943,0,50,0c-0.943,0-1.856,0.183-2.505,0.5L2.457,22.571  C1.127,23.224,0,25.026,0,26.509v33.729c0,1.487,1.127,3.292,2.457,3.943l45.04,22.068c1.301,0.64,3.708,0.64,5.011,0L97.543,64.18  c1.332-0.651,2.457-2.455,2.457-3.943V26.509C100,25.028,98.873,23.225,97.543,22.571z M95,59.858L50.441,81.695  c-0.164,0.029-0.713,0.029-0.876,0L5,59.859V26.892L49.597,5.038c0.142-0.03,0.666-0.03,0.804,0L95,26.892V59.858z" />
            </svg>
          </Iconpic>
          <Text>Shape 4</Text>
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
