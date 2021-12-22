import React from "react";
import styled from "styled-components";
import animal from "../../images/animal.png";
import beauty from "../../images/beauty.png";
import education from "../../images/education.png";
import food from "../../images/food.png";
import { useStyle } from "./CategoryStyle";
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
  margin-top: 50px;
`;
const Addbutton = styled.div`
  display: flex;
  justify-content: flex-end;
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
const Wrapper = styled.div``;
const Table = styled.table`
  box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 16px 32px -4px;
  border-collapse: collapse;
  margin: 25px 20px;
  font-size: 0.9em;

  width: 90%;
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); */
`;
const Thead = styled.th`
  padding: 12px 15px;
`;
const Trow = styled.tr`
  text-align: left;
  border-bottom: 1px thin #dddddd;
  :nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;
const Tdata = styled.td`
  padding: 12px 15px;
`;
const Cateicon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -280px;
`;
const LogoImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 20%;
`;
const EditButton = styled.button`
  margin-right: 20px;
  border: none;
  background-color: Green;
  color: white;
  padding: 5px;
  width: 15%;
  border-radius: 20px;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  border: none;
  background-color: #da085f;
  color: white;
  padding: 5px;
  width: 15%;
  border-radius: 20px;
  cursor: pointer;
`;
const Category = () => {
  const [open, setOpen] = React.useState(false);
  const [openedit, setOpenedit] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
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
                  Add
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
        <Addnew onClick={handleClickOpen}>Add New</Addnew>
      </Addbutton>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />

      <Wrapper>
        <Table>
          <Trow>
            <Thead>Category</Thead>

            <Thead>Action</Thead>
          </Trow>
          <Trow>
            <Cateicon>
              <LogoImage src={animal} />
              <Tdata>Animal</Tdata>
            </Cateicon>

            <Tdata>
              <EditButton onClick={handleClickOpenedit}> Edit</EditButton>
              <SimpleDialog
                selectedValue={selectedValueedit}
                open={openedit}
                onClose={handleCloseedit}
              />
              <DeleteButton>Delete</DeleteButton>
            </Tdata>
          </Trow>
        </Table>
      </Wrapper>
    </Containers>
  );
};

export default Category;
