import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation
} from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import HomePage from "./pages/HomePage";
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
import {  
  Layout, 
  Menu, 
  Breadcrumb, 
  Space,
  Dropdown,List } from "antd";
import { DownOutlined } from '@ant-design/icons';
import {
  HomeOutlined,
  HomeFilled,
  HeartOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  EnvironmentFilled,
  CarOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Typography, Button, Card} from "antd";

const { Text, Title } = Typography;
const { Header, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="/posts">
        Wonderfull Places
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

function Navigation(props) {
  return (
    <Layout className="layout shadow mb-1" style={{ marginBottom: "20px"}}>
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
          <Menu.Item key="6">
            <Dropdown overlay={menu}>
              <a 
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
               <CarOutlined />
              Places
             <DownOutlined />
              </a>
            </Dropdown>
            {/* <NavLink exact to="/register">
              <TeamOutlined />
              Create an account
            </NavLink> */}
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink exact to="/about-us">
              <HeartOutlined />
              About Us
            </NavLink>
          </Menu.Item>
          <div style={{ float: "right",}}>
            <AuthButton />
          </div>
        </Menu>
      </Header>
    </Layout>
  );
}
function Bfooter(props){
  const location = useLocation()
  // {location.pathname}
return(
<Footer style={{bottom: '0', width: '100%'}}> 
 
</Footer>
);
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        {/* <HomePage/> */}
        {/* <div className="container-fluid text-center">
          <div className="row justify-content-center"> */}
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route path="/posts/new" component={PostFormPage} />
              <Route exact path="/posts/:id" component={ShowPostPage} />
              <Route exact path="/posts" component={PostsListPage} />
              <Route exact path="/about-us" component={AboutUsPage} />
              <Route exact path="/register" component={RegisterPage} />
            </Switch>
          {/* </div>
        </div> */}
        
        <Bfooter/>
      </Router>
    );
  }
}

export default App;
