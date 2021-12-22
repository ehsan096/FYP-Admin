import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

const Container = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
`;

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/logo">
            <Logo />
          </Route>
          <Route path="/Category">
            <Category />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/adminlogin">
            <Login />
          </Route>
          <Route path="/userdetails">
            <UserDetails />
          </Route>
          <Route path="/iconCategory">
            <IconCategory />
          </Route>
          <Route path="/icons">
            <Icons />
          </Route>
          <Route path="/shapes">
            <Shapes />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
