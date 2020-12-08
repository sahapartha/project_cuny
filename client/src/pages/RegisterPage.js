import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class RegisterPage extends React.Component {
    state = {
      error: false,
       success: false,
        email: '',
        password:'',
        firstName:'',
        lastName:'',
      }
      firstChanged = (event) => {
        this.setState({
          firstName: event.target.value,
        });
      }
       lastChanged = (event) => {
          this.setState({
            lastName: event.target.value,
          });
        }
          emailChanged = (event) => {
            this.setState({
              email: event.target.value,
            });
          }
            passChanged = (event) => {
              this.setState({
                password: event.target.value,
              });
            }
            
      saveUser = (event) => {
        event.preventDefault();
        fetch("/api/auth/signup", {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email, password:this.state.password}),
        })
          .then(res => {
            if(res.ok) {
              return res.json()
            }
    
            throw new Error('Content validation');
          })
          .then(post => {
            this.setState({
              success: true,
            });
          })
          .catch(err => {
            this.setState({
              error: true,
            });
          });
      }
            
            
      render() {
        if(this.state.success) return <Redirect to="/" />;
    
        let errorMessage = null;
        if(this.state.error) {
          errorMessage = (
            <div className="alert alert-danger">
              "There was an error during registration."
            </div>
          );
        }

    return (
      <form>
        <Form {...layout} name="basic" initialValues={{ remember: true }}>
          <div className="input-grup">
            {errorMessage}
            <Form.Item
              label="First Name"
              rules={[
                { required: true, message: "Please input your First Name!" },
              ]}
              style={{paddingRight: '50px', paddingTop: '20px'}}
            >
              <input
                type="First Name"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.firstChanged}
              />
            </Form.Item>
            <Form.Item
              label="Last Name"
              rules={[
                { required: true, message: "Please input your Last Name!" },
              ]}
              style={{paddingRight: '50px'}}
            >
              <input
                type="Last Name"
                className="form-control"
                name="lastname"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.lastChanged}
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
              style={{paddingRight: '50px'}}
            >
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.emailChanged}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              style={{paddingRight: '50px'}}
            >
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.passChanged}
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <button className="btn btn-primary" onClick={this.saveUser}>
                Register
              </button>
            </Form.Item>
          </div>
        </Form>
      </form>
    );
  }

}

export default RegisterPage;