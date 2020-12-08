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

import { Typography, Button } from "antd";
// from alamin

import Map from './pages/Map';
import Mountain from './pages/Mountain';
import Waterfalls from './pages/Waterfalls';
import Parks from './pages/Parks';
import Hike from './pages/Hike';
import Beach from './pages/Beach';
import Hidden from './pages/Hidden';
import PlaceWidget from './pages/PlaceWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



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

    <NavLink className="nav-Link" exact to="/Mountain"> Mountain </NavLink>

    </Menu.Item>
    <Menu.Item>

    <NavLink className="nav-link" exact to="/Parks"> Parks </NavLink>

    </Menu.Item>
    <Menu.Item>

    <NavLink className="nav-Link" exact to="/Beach"> Beach </NavLink>

    </Menu.Item>
    <Menu.Item>

    <NavLink className="nav-Link" exact to="/Waterfalls"> Waterfalls</NavLink>

    </Menu.Item>
    <Menu.Item>

    <NavLink className="nav-Link" exact to="/Hike"> Hike</NavLink>

    </Menu.Item>
    <Menu.Item>

    <NavLink className="nav-Link" exact to="/Hidden"> Hidden Gems</NavLink>

    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

function Navigation(props) {
  return (
    <Layout className="layoutshadow mb-1" style={{ marginBottom: "20px"}}>
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

{/* From alamin  */}

          <Menu.Item key="3">
            <NavLink exact to="/Map">
              <TeamOutlined />
              Map
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink exact to="/PlaceWidget">
              <TeamOutlined />
              PlaceWidget
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
<Footer className="bfooter" style={{bottom: '0', width: '100%'}}> 
  Designed by 
</Footer>
);
}

function calling_map(props){
  return(
    <div class ="map">
      <Map
     google={props.google}
     center={{lat: 40.7291206, lng: -73.78632
     }}
     height='300px'
     width= '300px'
     zoom={15}
    />
    </div>
    
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
              <PrivateRoute path="/posts/new" component={PostFormPage} />

              <Route path="/posts/:id" component={ShowPostPage} />
              <Route exact path="/posts" component={PostsListPage} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/register" component={RegisterPage} />

              {/* From alamin  */}
              
              <Route path="/Map" component={calling_map} />
              <Route path="/Mountain" component={Mountain} />
              <Route path="/PlaceWidget" component={PlaceWidget} />
              <Route path="/Waterfalls" component={Waterfalls} />
              <Route path="/Parks" component={Parks} />
              <Route path="/Hike" component={Hike} />
              <Route path="/Beach" component={Beach} />
              <Route path="/Hidden" component={Hidden} />
              
              
              
             

            </Switch>
          {/* </div>
        </div> */}
        
        <Bfooter/>
      </Router>
    );
  }
}

export default App;
