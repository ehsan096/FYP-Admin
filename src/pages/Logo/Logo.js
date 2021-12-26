import React from "react";
import styled from "styled-components";
import { useStyle } from "./LogoStyle";
import { Grid, TextField, Button, Paper, Dialog, Box } from "@material-ui/core";
// import { FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { BiSearch } from "react-icons/bi";
const Containers = styled.div`
  flex: 4;
  margin-top: 10px;
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
const Text = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
const Input = styled.input`
  border: none;
  margin-left: 10px;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #b1b0b0;

  align-items: center;
  padding: 10px 20px;
  border-radius: 12px;
  width: 10rem;
`;
const Logo = ({ categories, logos }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [selectCat, setSelectCat] = React.useState("all");
  const [openedit, setOpenedit] = React.useState(false);

  const [searchLogo, setSearchLogo] = React.useState(null);
  const [selectedValueedit, setSelectedValueedit] = React.useState();

  React.useEffect(() => {
    console.log("selectCat inside Logo > ", selectCat);
  }, [selectCat]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const handleClickOpenedit = () => {
    setOpenedit(true);
  };

  const handleCloseedit = (value) => {
    setOpenedit(false);
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
        <Selectoption onChange={(event) => setSelectCat(event.target.value)}>
          <Option value="all"> ALL</Option>
          {categories
            ? categories.map((category, index) => {
                return (
                  <Option key={index} value={category.name}>
                    {" "}
                    {category.name}
                  </Option>
                );
              })
            : ""}
        </Selectoption>
        <SearchContainer>
          <BiSearch />
          <Input
            placeholder="Search Logo"
            onChange={(event) => setSearchLogo(event.target.value)}
          />
        </SearchContainer>

        <Addnew onClick={handleClickOpen}>Add New</Addnew>
      </Addbutton>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <Wrapper>
        {logos
          ? logos.map((logo, index) => {
              return selectCat === logo.category ? (
                searchLogo ? (
                  logo.name.toLowerCase().includes(searchLogo.toLowerCase()) ? (
                    <Logos key={index}>
                      {console.log("Logo inside Map 296 ", logo.name)}
                      <Image
                        src={`data:image/svg+xml;base64,${btoa(
                          unescape(encodeURIComponent(logo.logoSvg))
                        )}`}
                      />
                      <Text>{logo.name}</Text>
                      <LogoButton>
                        <EditButton onClick={handleClickOpenedit}>
                          {" "}
                          Edit
                        </EditButton>
                        <SimpleDialog
                          selectedValue={selectedValueedit}
                          open={openedit}
                          onClose={handleCloseedit}
                        />
                        <DeleteButton>Delete</DeleteButton>
                      </LogoButton>
                    </Logos>
                  ) : (
                    ""
                  )
                ) : (
                  <Logos key={index}>
                    {console.log("Logo inside Map 296 ", logo.name)}
                    <Image
                      src={`data:image/svg+xml;base64,${btoa(
                        unescape(encodeURIComponent(logo.logoSvg))
                      )}`}
                    />
                    <Text>{logo.name}</Text>
                    <LogoButton>
                      <EditButton onClick={handleClickOpenedit}>
                        {" "}
                        Edit
                      </EditButton>
                      <SimpleDialog
                        selectedValue={selectedValueedit}
                        open={openedit}
                        onClose={handleCloseedit}
                      />
                      <DeleteButton>Delete</DeleteButton>
                    </LogoButton>
                  </Logos>
                )
              ) : selectCat === "all" ? (
                searchLogo ? (
                  logo.name.toLowerCase().includes(searchLogo.toLowerCase()) ? (
                    <Logos key={index}>
                      {console.log("Logo inside Map 296 ", logo.name)}
                      <Image
                        src={`data:image/svg+xml;base64,${btoa(
                          unescape(encodeURIComponent(logo.logoSvg))
                        )}`}
                      />
                      <Text>{logo.name}</Text>
                      <LogoButton>
                        <EditButton onClick={handleClickOpenedit}>
                          {" "}
                          Edit
                        </EditButton>
                        <SimpleDialog
                          selectedValue={selectedValueedit}
                          open={openedit}
                          onClose={handleCloseedit}
                        />
                        <DeleteButton>Delete</DeleteButton>
                      </LogoButton>
                    </Logos>
                  ) : (
                    ""
                  )
                ) : (
                  <Logos key={index}>
                    {console.log("Logo inside Map 296 ", logo.name)}
                    <Image
                      src={`data:image/svg+xml;base64,${btoa(
                        unescape(encodeURIComponent(logo.logoSvg))
                      )}`}
                    />
                    <Text>{logo.name}</Text>
                    <LogoButton>
                      <EditButton onClick={handleClickOpenedit}>
                        {" "}
                        Edit
                      </EditButton>
                      <SimpleDialog
                        selectedValue={selectedValueedit}
                        open={openedit}
                        onClose={handleCloseedit}
                      />
                      <DeleteButton>Delete</DeleteButton>
                    </LogoButton>
                  </Logos>
                )
              ) : (
                ""
              );
            })
          : ""}
      </Wrapper>
    </Containers>
  );
};

export default Logo;
