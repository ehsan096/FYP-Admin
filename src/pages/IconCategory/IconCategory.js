import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import iconCategoriesService from "../../services/IconCategories";
import { toast } from "react-toastify";
const Containers = styled.div`
  flex: 4;
  margin-top: 60px;
`;
const Addbutton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 110px;
  margin-left: 1.5rem;
  margin-bottom: 40px;
  position: fixed;
  width: 75%;
  top: 70px;
  background-color: white;
  padding-bottom: 1.5rem;
  margin-left: 12px;
  margin-top: -10px;
  padding-top: 20px;
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
const Wrapper = styled.div`
  margin-top: 5rem;

  overflow-y: auto;
  height: 470px;
`;
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
const Category = ({ setUpdate, update, iconCategories, icons }) => {
  const [searchCat, setSearchCat] = React.useState(null);

  const CheckCount = (name) => {
    if (icons) {
      let c = 0;
      icons.forEach((icon) => {
        if (icon.category === name) {
          c++;
        }
      });
      return c;
    }
    return 0;
  };

  const deleteCategory = (category) => {
    let x = CheckCount(category.name);
    console.log("Number of icons of Category", x);
    if (x < 2) {
      iconCategoriesService
        .deleteIconCategory(category._id)
        .then((res) => {
          toast.success(res, {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((err) => {
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_CENTER,
          });
        });

      setUpdate(!update);
    } else {
      toast.error("Cannot delete, 1 or more icons depend on this category", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

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

                        <DeleteButton
                          onClick={() => deleteCategory(category)}
                          disabled
                        >
                          Delete
                        </DeleteButton>
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

                      <DeleteButton onClick={() => deleteCategory(category)}>
                        Delete
                      </DeleteButton>
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
