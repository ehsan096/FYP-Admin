import React from "react";
import Featured from "../component/Featured";
import styled from "styled-components";
import Chart from "../component/AddChart";
import userService from "../services/UserService";
import categoryService from "../services/Categories";
import iconCategoriesService from "../services/IconCategories";
import iconsService from "../services/Icons";
import logoService from "../services/Logos";
import shapesService from "../services/Shapes";

const Container = styled.div`
  flex: 4;
`;
const Home = () => {
  const [categories, setCategories] = React.useState(null);
  const [logos, setLogos] = React.useState(null);
  const [iconCategories, setIconCategories] = React.useState(null);
  const [icons, setIcons] = React.useState(null);
  const [shapes, setShapes] = React.useState(null);
  const [users, setUsers] = React.useState(null);
  const getCategories = () => {
    categoryService
      .getCategories()
      .then((data) => {
        console.log("Logo Categories > ", data.categories);
        setCategories(data.categories);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };
  const getIconCategories = () => {
    iconCategoriesService
      .getIconCategories()
      .then((data) => {
        console.log("Icons Categories > ", data.categories);
        setIconCategories(data.categories);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };
  const getIcons = () => {
    iconsService
      .getIcons()
      .then((data) => {
        console.log("Icons> ", data);
        setIcons(data);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };
  const getUsers = () => {
    userService
      .getUsers()
      .then((data) => {
        console.log("Users > ", data);
        setUsers(data);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };

  const getLogos = () => {
    logoService
      .getLogos()
      .then((data) => {
        console.log("Logos > ", data);
        setLogos(data);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };
  const getShapes = () => {
    shapesService
      .getShapes()
      .then((data) => {
        console.log("shapes > ", data);
        setShapes(data);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };
  React.useEffect(() => {
    getCategories();
    getIconCategories();
    getIcons();
    getShapes();
    getUsers();
    getLogos();
  }, []);
  return (
    <Container>
      <Featured users={users} shapes={shapes} icons={icons} logos={logos} />
      <Chart />
    </Container>
  );
};

export default Home;
