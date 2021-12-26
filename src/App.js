import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Category from "./pages/Category/Category";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Logo from "./pages/Logo/Logo";
import User from "./pages/User/User";
import IconCategory from "./pages/IconCategory/IconCategory";
import UserDetails from "./pages/UserDetails/UserDetails";
import Icons from "./pages/AllIcons/Icons";
import Shapes from "./pages/AllIshapes/Shapes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import userService from "./services/UserService";
import categoryService from "./services/Categories";
import iconCategoriesService from "./services/IconCategories";
import iconsService from "./services/Icons";
import logoService from "./services/Logos";
import shapesService from "./services/Shapes";

const Container = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
`;

function App() {
  const [login, setLogin] = React.useState(userService.isLoggedIn());
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
    getUsers();
    getCategories();
    getIconCategories();
    getIcons();
    getShapes();
    getLogos();
  }, []);
  React.useEffect(() => {
    setLogin(userService.isLoggedIn());
  });

  React.useEffect(() => {
    console.log("users > ", users ? users.length : 0);
  }, [users]);

  return (
    <Router>
      <ToastContainer />
      <Navbar />
      {login ? <Redirect to="/admin" /> : <Redirect to="/admin/login" />}
      <Container>
        <Switch>
          <Route exact path="/admin/login">
            {!login ? <Login /> : <Redirect to="/admin" />}
          </Route>
        </Switch>
        <Sidebar />
        <Switch>
          <Route exact path="/admin" exact>
            <Home
              categories={categories}
              logos={logos}
              iconCategories={iconCategories}
              shapes={shapes}
              icons={icons}
              users={users}
            />
          </Route>
          <Route exact path="/admin/logo">
            <Logo categories={categories} logos={logos} />
          </Route>
          <Route exact path="/admin/category">
            <Category categories={categories} />
          </Route>
          <Route exact path="/admin/user">
            <User users={users} />
          </Route>
          <Route exact path="/admin/user/:id">
            <UserDetails users={users} />
          </Route>
          <Route exact path="/admin/iconCategory">
            <IconCategory iconCategories={iconCategories} />
          </Route>
          <Route exact path="/admin/icons">
            <Icons icons={icons} iconCategories={iconCategories} />
          </Route>
          <Route exact path="/admin/shapes">
            <Shapes shapes={shapes} />
          </Route>
        </Switch>
      </Container>
      {/* )} */}
    </Router>
  );
}

export default App;
