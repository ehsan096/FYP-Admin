import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import logoService from "../../services/Logos";
import { toast } from "react-toastify";
const Containers = styled.div`
  flex: 4;
  margin-top: 60px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 5rem;

  overflow-y: auto;
  height: 470px;
`;
const Addbutton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 110px;
  margin-bottom: 40px;
  position: fixed;
  width: 75%;
  top: 70px;
  background-color: white;
  padding-bottom: 1.5rem;
  margin-top: -10px;
  margin-left: 12px;
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
const AddnewLink = styled(Link)`
  color: #ffffff;

  text-decoration: none;
`;
const Editlogolink = styled(Link)`
  color: #ffffff;

  text-decoration: none;
`;
const Logo = ({ categories, logos, update, setUpdate }) => {
  const [selectCat, setSelectCat] = React.useState("all");

  const [searchLogo, setSearchLogo] = React.useState(null);

  const DeleteLogo = (id) => {
    logoService
      .deleteLogo(id)
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

        <Addnew>
          <AddnewLink to="/admin/add/logo">Add New</AddnewLink>
        </Addnew>
      </Addbutton>

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
                        <EditButton>
                          <Editlogolink to={`/admin/logo/${logo._id}`}>
                            Edit
                          </Editlogolink>{" "}
                        </EditButton>

                        <DeleteButton onClick={() => DeleteLogo(logo._id)}>
                          Delete
                        </DeleteButton>
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
                      <EditButton>
                        <Editlogolink to={`/admin/logo/${logo._id}`}>
                          Edit
                        </Editlogolink>{" "}
                      </EditButton>

                      <DeleteButton onClick={() => DeleteLogo(logo._id)}>
                        Delete
                      </DeleteButton>
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
                        <EditButton>
                          <Editlogolink to={`/admin/logo/${logo._id}`}>
                            Edit
                          </Editlogolink>{" "}
                        </EditButton>

                        <DeleteButton onClick={() => DeleteLogo(logo._id)}>
                          Delete
                        </DeleteButton>
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
                      <EditButton>
                        <Editlogolink to={`/admin/logo/${logo._id}`}>
                          Edit
                        </Editlogolink>{" "}
                      </EditButton>

                      <DeleteButton onClick={() => DeleteLogo(logo._id)}>
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

export default Logo;
