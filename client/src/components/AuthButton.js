import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';
import {
  UserAddOutlined,
  UserDeleteOutlined
} from "@ant-design/icons";
const classes = "btn btn-outline-success";
const classes2 = "btn btn-outline-danger";

const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return (
      <Link className={classes} to="/login"><UserAddOutlined /> Login / Register</Link>
    );
  }
  
  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div>
      <div className="" style={{float: 'left', paddingRight: '5px', color: 'white'}}>  Welcome! </div>
      <button className={classes2} onClick={logout}><UserDeleteOutlined /> Logout</button>
    </div>
  );
});

export default AuthButton;
