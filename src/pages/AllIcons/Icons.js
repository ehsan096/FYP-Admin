import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import iconsService from "../../services/Icons";
import { toast } from "react-toastify";
const Containers = styled.div`
  flex: 4;
  // overflow-x: hidden;
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
  height: 260px;
  margin-bottom: 2rem;
  margin-left: 1rem;
  /* padding: 0 40px 20px; */
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
const Icons = ({ update, setUpdate, icons, iconCategories }) => {
  const [selectCat, setSelectCat] = React.useState("all");
  const [searchIcon, setSearchIcon] = React.useState(null);

  const deleteIcon = (id) => {
    iconsService
      .deleteIcon(id)
      .then((res) => {
        toast.success(res, {
          position: toast.POSITION.TOP_CENTER,
        });
        setUpdate(!update);
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <Containers>
      <Addbutton>
        <Selectoption onChange={(event) => setSelectCat(event.target.value)}>
          <Option value="all"> ALL</Option>
          {iconCategories
            ? iconCategories.map((category, index) => {
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
            placeholder="Search Icon"
            onChange={(event) => setSearchIcon(event.target.value)}
          />
        </SearchContainer>

        <Addnew>
          {" "}
          <AddnewLink to="/admin/add/icon">Add New</AddnewLink>
        </Addnew>
      </Addbutton>

      <Wrapper>
        {icons
          ? icons.map((icon) => {
              return selectCat === icon.category ? (
                searchIcon ? (
                  icon.name.toLowerCase().includes(searchIcon.toLowerCase()) ? (
                    <Logos>
                      <Iconpic>
                        <svg style={{ width: 110, height: 110 }}>
                          <path d={icon.d} />
                        </svg>
                      </Iconpic>

                      <Text>{icon.name}</Text>
                      <LogoButton>
                        <EditButton>
                          <SaveLink to={`/admin/icon/${icon._id}`}>
                            Edit
                          </SaveLink>{" "}
                        </EditButton>

                        <DeleteButton onClick={() => deleteIcon(icon._id)}>
                          Delete
                        </DeleteButton>
                      </LogoButton>
                    </Logos>
                  ) : (
                    ""
                  )
                ) : (
                  <Logos>
                    <Iconpic>
                      <svg style={{ width: 110, height: 110 }}>
                        <path d={icon.d} />
                      </svg>
                    </Iconpic>

                    <Text>{icon.name}</Text>
                    <LogoButton>
                      <EditButton>
                        <SaveLink to={`/admin/icon/${icon._id}`}>Edit</SaveLink>{" "}
                      </EditButton>
                      <DeleteButton onClick={() => deleteIcon(icon._id)}>
                        Delete
                      </DeleteButton>
                    </LogoButton>
                  </Logos>
                )
              ) : selectCat === "all" ? (
                searchIcon ? (
                  icon.name.toLowerCase().includes(searchIcon.toLowerCase()) ? (
                    <Logos>
                      <Iconpic>
                        <svg style={{ width: 110, height: 110 }}>
                          <path d={icon.d} />
                        </svg>
                      </Iconpic>

                      <Text>{icon.name}</Text>
                      <LogoButton>
                        <EditButton>
                          <SaveLink to={`/admin/icon/${icon._id}`}>
                            Edit
                          </SaveLink>{" "}
                        </EditButton>

                        <DeleteButton onClick={() => deleteIcon(icon._id)}>
                          Delete
                        </DeleteButton>
                      </LogoButton>
                    </Logos>
                  ) : (
                    ""
                  )
                ) : (
                  <Logos>
                    <Iconpic>
                      <svg style={{ width: 110, height: 110 }}>
                        <path d={icon.d} />
                      </svg>
                    </Iconpic>

                    <Text>{icon.name}</Text>
                    <LogoButton>
                      <EditButton>
                        <SaveLink to={`/admin/icon/${icon._id}`}>Edit</SaveLink>{" "}
                      </EditButton>

                      <DeleteButton onClick={() => deleteIcon(icon._id)}>
                        Delete
                      </DeleteButton>
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

export default Icons;
