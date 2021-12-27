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
import Addlogo from "./pages/AddLogo/Addlogo";
import Editlogo from "./pages/Editlogo/Editlogo";
import Addshape from "./pages/Addshape/Addshape";
import Editshape from "./pages/Editshape/Editshape";
import Addicon from "./pages/Addicon/Addicon";
import Editicon from "./pages/Editicon/Editicon";
import Addiconcategory from "./pages/Addiconcategory/Addiconcategory";
import Editiconcategory from "./pages/Editiconcategory/Editiconcategory";
import Addlogoconcategory from "./pages/Addlogocategory/Addlogocategory";
import Editlogoconcategory from "./pages/Editlogocategory/Editlogocategory ";

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
  const [update, setUpdate] = React.useState(false);
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
  }, [update]);
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
            <IconCategory
              setUpdate={setUpdate}
              update={update}
              iconCategories={iconCategories}
              icons={icons}
            />
          </Route>
          <Route exact path="/admin/icons">
            <Icons icons={icons} iconCategories={iconCategories} />
          </Route>
          <Route exact path="/admin/shapes">
            <Shapes shapes={shapes} />
          </Route>
          <Route exact path="/admin/add/logo">
            <Addlogo />
          </Route>{" "}
          <Route exact path="/admin/logo/:id">
            <Editlogo />
          </Route>{" "}
          <Route exact path="/admin/add/shape">
            <Addshape />
          </Route>{" "}
          <Route exact path="/admin/shape/:id">
            <Editshape />
          </Route>{" "}
          <Route exact path="/admin/add/icon">
            <Addicon />
          </Route>
          <Route exact path="/admin/icon/:id">
            <Editicon />
          </Route>
          <Route exact path="/admin/add/iconcategory">
            <Addiconcategory />
          </Route>{" "}
          <Route exact path="/admin/iconcategory/:id">
            <Editiconcategory
              setUpdate={setUpdate}
              update={update}
              iconCategories={iconCategories}
            />
          </Route>
          <Route exact path="/admin/add/logocategory">
            <Addlogoconcategory setUpdate={setUpdate} update={update} />
          </Route>{" "}
          <Route exact path="/admin/logocategory/:id">
            <Editlogoconcategory />
          </Route>
        </Switch>
      </Container>
      {/* )} */}
    </Router>
  );
}

export default App;
