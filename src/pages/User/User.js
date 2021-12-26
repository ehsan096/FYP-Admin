import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
const Containers = styled.div`
  flex: 4;
  margin-top: 10px;
`;
const Addbutton = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 110px;
  margin-bottom: 40px;
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
  margin-left: 1.5rem;
  width: 10rem;
`;

const User = ({ users }) => {
  const [searchUser, setSearchUser] = React.useState(null);
  return (
    <Containers>
      <Addbutton>
        <SearchContainer>
          <BiSearch />
          <Input
            placeholder="Search Name"
            onChange={(event) => setSearchUser(event.target.value)}
          />
        </SearchContainer>
      </Addbutton>
      <Wrapper>
        <Table>
          <Trow>
            <Thead>Name</Thead>
            <Thead>Email</Thead>
            <Thead>SaveLogos</Thead>
            <Thead>Action</Thead>
          </Trow>
          {users
            ? users.map((user) =>
                searchUser ? (
                  user.name.toLowerCase().includes(searchUser.toLowerCase()) ? (
                    <Trow>
                      <Tdata>{user.name}</Tdata>
                      <Tdata>{user.email}</Tdata>
                      <Tdata>{user.logos.length}</Tdata>
                      <Tdata>
                        <DetailButton>
                          <Detailslink to={`/admin/user/${user._id}`}>
                            Details
                          </Detailslink>{" "}
                        </DetailButton>
                      </Tdata>
                    </Trow>
                  ) : (
                    ""
                  )
                ) : (
                  <Trow>
                    <Tdata>{user.name}</Tdata>
                    <Tdata>{user.email}</Tdata>
                    <Tdata>{user.logos.length}</Tdata>
                    <Tdata>
                      <DetailButton>
                        <Detailslink to={`/admin/user/${user._id}`}>
                          Details
                        </Detailslink>{" "}
                      </DetailButton>
                    </Tdata>
                  </Trow>
                )
              )
            : ""}
        </Table>
      </Wrapper>
    </Containers>
  );
};

export default User;
