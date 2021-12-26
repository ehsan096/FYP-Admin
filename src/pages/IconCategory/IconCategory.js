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
  justify-content: space-between;
  margin-right: 110px;
  margin-left: 1.5rem;
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
  justify-content: sapce-evenly;
  align-items: center;
  margin-left: 20px;
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
const AddnewLink = styled(Link)`
  color: #ffffff;

  text-decoration: none;
`;
const SaveLink = styled(Link)`
  color: #ffffff;

  text-decoration: none;
`;
const Category = ({ iconCategories }) => {
  const [searchCat, setSearchCat] = React.useState(null);

  return (
    <Containers>
      <Addbutton>
        <SearchContainer>
          <BiSearch />
          <Input
            placeholder="Search Categories"
            onChange={(event) => setSearchCat(event.target.value)}
          />
        </SearchContainer>
        <Addnew>
          <AddnewLink to="/admin/add/iconcategory">Add New</AddnewLink>
        </Addnew>
      </Addbutton>

      <Wrapper>
        <Table>
          <Trow>
            <Thead>Category</Thead>

            <Thead>Action</Thead>
          </Trow>
          {iconCategories
            ? iconCategories.map((category) =>
                searchCat ? (
                  category.name
                    .toLowerCase()
                    .includes(searchCat.toLowerCase()) ? (
                    <Trow>
                      <Cateicon>
                        <svg
                          style={{ width: 25, height: 25 }}
                          viewBox="0 0 37 37.28203230275507"
                        >
                          <path fill={category.color} d={category.d}></path>
                        </svg>
                        <Tdata>{category.name}</Tdata>
                      </Cateicon>

                      <Tdata>
                        <EditButton>
                          {" "}
                          <SaveLink to={`/admin/iconcategory/${category._id}`}>
                            Edit
                          </SaveLink>{" "}
                        </EditButton>

                        <DeleteButton>Delete</DeleteButton>
                      </Tdata>
                    </Trow>
                  ) : (
                    ""
                  )
                ) : (
                  <Trow>
                    <Cateicon>
                      <svg
                        style={{ width: 25, height: 25 }}
                        viewBox="0 0 37 37.28203230275507"
                      >
                        <path fill={category.color} d={category.d}></path>
                      </svg>
                      <Tdata>{category.name}</Tdata>
                    </Cateicon>

                    <Tdata>
                      <EditButton>
                        {" "}
                        <SaveLink to={`/admin/iconcategory/${category._id}`}>
                          Edit
                        </SaveLink>{" "}
                      </EditButton>

                      <DeleteButton>Delete</DeleteButton>
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

export default Category;
