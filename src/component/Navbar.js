import React, { useState } from "react";

import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import UserService from "../services/UserService";
import { NotificationsNoneOutlined } from "@material-ui/icons";

import userpic from "../images/userround.svg";
const Container = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;

  height: 60px;
  overflow-y: hidden;
  background-color: #41beac;
  box-shadow: 3px 7px 9px -1px rgba(240, 240, 240, 0.75);
  -webkit-box-shadow: 3px 7px 9px -1px rgba(240, 240, 240, 0.75);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 20px;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -60px
  align-items: center;
`;
const Logo = styled.span`
  cursor: pointer;
  margin-top: 1px;
`;
const LogoText = styled.h4`
  cursor: pointer;
  margin-left: -60px;
  margin-top: 5px;
  color: white;
`;

const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -2px;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  text-decoration: none;
  justify-content: center;
  align-items: center;
`;
const ListItem = styled.li`
  text-decoration: none;
  margin-right: 30px;
  cursor: pointer;
`;
const useStyles = makeStyles((theme) => ({
  profilemenu: {
    marginTop: "40px",
    marginLeft: "-30px",
  },
  profilemenulink: {
    textDecoration: "none",
    color: "black",
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));
const ImageRound = styled.img``;
const Navbar = ({ setShow, setLogin }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [loggedin, setLoggedin] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <Container>
      <Wrapper>
        <Link
          to={"/admin"}
          onClick={() => setShow(true)}
          style={{ marginTop: "-10px", textDecoration: "none" }}
        >
          <Left>
            <Logo>
              <svg
                width="92"
                height="32"
                viewBox="0 0 92 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.987 31.5841C4.92849 31.5841 0 26.626 0 20.5323C0 14.4385 4.92899 9.48041 10.987 9.48041C17.045 9.48041 21.974 14.4385 21.974 20.5323C21.974 26.626 17.0459 31.5841 10.987 31.5841ZM10.987 10.536C5.50765 10.536 1.04938 15.0196 1.04938 20.5318C1.04938 26.044 5.50765 30.5275 10.987 30.5275C16.4663 30.5275 20.9251 26.0429 20.9251 20.5308C20.9251 15.0186 16.4673 10.536 10.987 10.536Z"
                  fill="#2196f3"
                ></path>
                <path
                  d="M18.96 21.0225C18.6182 19.7483 15.4851 19.6108 13.6203 20.0779C12.6437 20.3235 11.6456 20.6428 10.6162 20.8265C11.3697 21.4989 12.1788 22.135 13.34 22.2932C16.2211 22.6842 18.0112 21.775 18.96 21.0225Z"
                  fill="#2196f3"
                ></path>
                <path
                  d="M13.34 22.2932C12.1764 22.135 11.3697 21.4989 10.6162 20.8265C9.45013 19.7857 8.41298 18.6579 6.37723 19.0823C3.14069 19.7572 2.71488 23.6081 5.21404 26.0828C6.28706 27.2131 7.66455 28.0041 9.17779 28.3586C10.691 28.7132 12.2742 28.616 13.7333 28.079C15.1924 27.5419 16.4641 26.5883 17.3925 25.3352C18.3209 24.0819 18.8656 22.5835 18.96 21.0235C18.0112 21.775 16.221 22.6842 13.34 22.2932Z"
                  fill="#673ab7"
                ></path>
                <path
                  d="M15.034 13.9586C14.6301 14.8295 18.2304 15.7957 18.6611 18.6879C18.8687 15.8409 15.5335 12.882 15.034 13.9586Z"
                  fill="#2196f3"
                ></path>
                <path
                  d="M7.46619 17.5935C8.11524 17.3231 8.42345 16.5746 8.15463 15.9217C7.8858 15.2688 7.14167 14.9587 6.49262 15.2292C5.84357 15.4996 5.53536 16.2481 5.80418 16.9011C6.07306 17.5539 6.81714 17.8639 7.46619 17.5935Z"
                  fill="#673ab7"
                ></path>
                <path
                  d="M10.3549 14.08C10.6585 13.7746 10.6585 13.2795 10.3549 12.9741C10.0513 12.6687 9.55909 12.6687 9.25551 12.9741C8.95194 13.2795 8.95194 13.7746 9.25551 14.08C9.55909 14.3854 10.0513 14.3854 10.3549 14.08Z"
                  fill="#2196f3"
                ></path>
                <path
                  d="M13.1014 9.05206C14.2245 5.7149 13.4696 3.04871 11.1614 1.78241C9.58359 2.10513 8.647 2.87335 8.12549 3.93383C11.2204 3.68185 13.1844 5.63041 13.1014 9.05206Z"
                  fill="#2196f3"
                ></path>
                <path
                  d="M25.6983 6.13641C20.1389 4.1294 16.6304 4.81756 16.0786 9.39055C19.2648 12.6973 22.474 11.1146 25.6983 6.13641Z"
                  fill="#2196f3"
                ></path>
                <path
                  d="M21.2765 4.32541C21.5343 3.21728 21.6681 1.90776 21.6881 0.41748C15.9226 1.70883 13.3224 4.17658 15.2839 8.33846C15.3816 8.36203 15.4754 8.38119 15.5696 8.40085C16.0281 5.14422 18.0463 3.93835 21.2765 4.32541Z"
                  fill="#2196f3"
                ></path>
              </svg>
            </Logo>
            <LogoText>Free Logo Maker</LogoText>
          </Left>
        </Link>
        <Right>
          <List>
            <ListItem>
              <div
                className={classes.avatar}
                // aria-expanded={open ? "true" : undefined}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <ImageRound src={userpic} alt="Remy Sharp" />
                <div style={{ color: "black" }}>
                  {UserService.getLoggedInUser() ? (
                    UserService.getLoggedInUser().name
                  ) : (
                    <Redirect to={"/admin"} />
                  )}
                </div>
              </div>
            </ListItem>
            <Menu
              className={classes.profilemenu}
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                {" "}
                <Link className={classes.profilemenulink} to={"/admin/profile"}>
                  Profile
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  UserService.logout();
                  setLogin(false);
                  setLoggedin(!loggedin);
                }}
              >
                <Link className={classes.profilemenulink} to={"/admin"}>
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </List>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
