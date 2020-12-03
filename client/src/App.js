import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Image } from "react-bootstrap";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import AuthButton from "./components/AuthButton";
import logo from "./logo.png";
import "./App.css";
import { Layout, Menu, Breadcrumb, Space } from "antd";
import {
  HomeOutlined,
  HomeFilled,
  HeartOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Typography, Button } from "antd";

const { Text, Title } = Typography;
const { Header, Content, Footer } = Layout;

function Navigation(props) {
  return (
    <Layout className="layout shadow mb-3" style={{ marginBottom: '20px' }}>
      <Header>
        <div className="logo" src={logo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["5"]}>
          <Menu.Item key="0">
            <NavLink exact to="/">
              <HomeOutlined />
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink exact to="/posts/new">
              <EnvironmentOutlined />
              Post ur Place
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink exact to="/register">
              <TeamOutlined />
              Login/Register
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink exact to="/about-us">
              <HeartOutlined />
              About Us
            </NavLink>
          </Menu.Item>
          <div style={{float: 'right'}} >
          <AuthButton />
          </div>
                  
        </Menu>
        
      </Header>
    </Layout>
  );
}
function Bfooter(props){
return(
  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
);
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              <Route path="/login" component={LoginPage} />
              <PrivateRoute path="/posts/new" component={PostFormPage} />
              <Route path="/posts/:id" component={ShowPostPage} />
              <Route exact path="/" component={PostsListPage} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/register" component={RegisterPage} />
            </Switch>
          </div>
        </div>
        <Bfooter/>
      </Router>
    );
  }
}

export default App;
