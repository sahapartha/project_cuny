import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';

import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
//import {Map, MyComponent } from './pages/Map';
import Map from './pages/Map';
import Mountain from './pages/Mountain';
import Waterfalls from './pages/Waterfalls';
import Parks from './pages/Parks';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';
// From react bootstrap
import Dropdown  from 'react-bootstrap/Dropdown';

//test
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import Option from './pages/Option';




import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Micro Blog</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        {/* this navbar is to use map/google api */}
        <li className="nav-iteam">
          <NavLink className="nav-link" exact to="/Search-place">
          <input type="text" className ="header_searchInput"/> 
            Search
          </NavLink>      
        </li>
        {/* here is to use for drop menu for different pages.  */}
        <li>
         <NavLink className="nav-link" exact to="/Place-Wizard">
         <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
              Place Wizard
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item exact to="/Parks">Parks</Dropdown.Item>
            <Dropdown.Item exact to="/Mountain">Mountain</Dropdown.Item>
            <Dropdown.Item exact to="/Waterfalls">Waterfalls</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         </NavLink>
        </li>
        {/* end of drop menu */}
        {/* <li className="nav-iteam">
          <NavLink className="nav-link" exact to="/Option">
            
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
            
          </NavLink>      
        </li> */}
      </ul>
      <AuthButton />
    </nav>
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
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/Search-Place" component={Map} />
                <Route path="/Mountain" component={Mountain} />
                <Route path="/Waterfalls" component={Waterfalls} />
                <Route path="/Parks" component={Parks} />
                {/* <Route path="/Option" component={Option} /> */}

      
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
