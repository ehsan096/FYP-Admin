import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { RiShoppingBag3Fill } from "react-icons/ri";
const Container = styled.div`
  flex: 1;
  height: calc(100vh - 60px);

  border-right: 1px solid rgb(160, 160, 160);
  margin-left: 10px;
  overflow-y: scroll;
  position: sticky;
  top: 50px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    display: none;
    /* background-color: #f1f1f1; */
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(160, 160, 160);
  }
`;

const Wrapper = styled.div`
  /* padding: 12px; */
`;
const Menu = styled.ul`
  /* padding: 12px; */
`;
const MenuItem = styled.li`
  display: flex;
  align-items: center;
  /* padding: 12px; */
  list-style: none;
`;
const MenuIcon = styled.span`
  font-size: 20px;
  color: #007b55;
  padding: 12px;
`;
const MenuItemLink = styled(Link)`
  color: black;
  font-size: 20px;
  text-decoration: none;
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <MenuItem>
            <MenuIcon>
              <HiHome />
            </MenuIcon>

            <MenuItemLink to="/admin">Dashboard</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <RiShoppingBag3Fill />
            </MenuIcon>

            <MenuItemLink to="/admin/Category">Logo Category</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <RiShoppingBag3Fill />
            </MenuIcon>
            <MenuItemLink to="/admin/logo">Logo</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <RiShoppingBag3Fill />
            </MenuIcon>

            <MenuItemLink to="/admin/iconCategory">Icon Category</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <RiShoppingBag3Fill />
            </MenuIcon>

            <MenuItemLink to="/admin/icons">Icons</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <RiShoppingBag3Fill />
            </MenuIcon>

            <MenuItemLink to="/admin/shapes">Shapes</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <RiShoppingBag3Fill />
            </MenuIcon>

            <MenuItemLink to="/admin/user">Users</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuIcon>
              <RiShoppingBag3Fill />
            </MenuIcon>
            <MenuItemLink to="/admin/login">Profile</MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
