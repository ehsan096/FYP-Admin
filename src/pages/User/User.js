import React from "react";
import styled from "styled-components";
import animal from "../../images/animal.png";
import beauty from "../../images/beauty.png";
import education from "../../images/education.png";
import food from "../../images/food.png";
import { useStyle } from "./UserStyle";
import { Link } from "react-router-dom";
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
const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 20%;
`;
const DetailButton = styled.button`
  margin-right: 20px;
  border: none;
  background-color: Green;
  color: white;
  padding: 5px;
  width: 35%;
  border-radius: 20px;
  cursor: pointer;
`;
const Detailslink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const DeleteButton = styled.button`
  border: none;
  background-color: #da085f;
  color: white;
  padding: 5px;
  width: 20%;
  border-radius: 20px;
  cursor: pointer;
`;

const User = () => {
  return (
    <Containers>
      <Wrapper>
        <Table>
          <Trow>
            <Thead>Name</Thead>
            <Thead>Email</Thead>
            <Thead>SaveLogos</Thead>
            <Thead>Action</Thead>
          </Trow>
          <Trow>
            <Tdata>waqas</Tdata>
            <Tdata>waqas@gmail.com</Tdata>
            <Tdata>5</Tdata>
            <Tdata>
              <DetailButton>
                <Detailslink to="/userdetails">Details</Detailslink>{" "}
              </DetailButton>
            </Tdata>
          </Trow>
        </Table>
      </Wrapper>
    </Containers>
  );
};

export default User;
