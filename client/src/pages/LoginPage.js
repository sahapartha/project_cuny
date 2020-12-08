import React from 'react';
import { Redirect } from 'react-router-dom';
import RegisterPage from './RegisterPage'
import '../index.css';
import "../App.css";
import auth from '../services/auth';
import { Form, Input, Button, Checkbox,Divider } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { Container,Card } from 'react-bootstrap';
import rlg2 from './rlg2.jpeg'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
var sectionStyle = {
  backgroundImage: `url(${rlg2})`,
  backgroundColor: 'rgba(255, 249, 192, 0.7)',
}

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false, 
    email: "",
    password: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  login = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">Login Failed</div>;
    }

    return (
      <div style={sectionStyle}>
      <div style={{paddingTop: '200px', clear: 'both'}} >
        <Container>
      <div style={{float: 'left', paddingLeft: '150px'}}>
        <Card className="shadow mb-3">
        <Card.Header>Create an account</Card.Header>
        <RegisterPage/>
        </Card>
        
        </div>
        <div style={{float: 'right', paddingRight: '150px' }}>
        <Card className="shadow mb-3" >
        <Card.Header>Login here</Card.Header>
        <Form {...layout} name="basic" initialValues={{ remember: true }}>
          <form onSubmit={this.login}>
            <div className="">
              {err}
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                style={{paddingRight: '50px', paddingTop: '20px'}}
                
              >
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.fieldChanged("email")}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                style={{paddingRight: '50px', paddingTop: '20px'}}
              >
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.fieldChanged("password")}
                />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <button type="submit" className="btn btn-primary ml-auto">
                  Login
                </button>
              </Form.Item>
            </div>
          </form>
        </Form>
        </Card>
        </div>
        </Container>
        <div style={{paddingBottom: '800px'}}></div>
      </div>
      </div>
    );
  }
}

export default LoginPage;