/*import React from 'react';
const router = require('express').Router();
import { Redirect } from 'react-router-dom';
const { User } = require('./models');
const bcrypt = require('bcryptjs');


class RegisterPage extends React.Component {
    state = {
        error: false,
        success: false,
        email: '',
        password:'',
        firstname:'',
        lastname:'',
      }
    UserInput = (event) => {
          router.post('/signup', (req, res) => {
          User.create({
            firstName: this.state.firstname,
            lastName:this.state.lastname,
            email: this.state.email,
            password: this.state.password,
          })
        }).catch(err => {
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

      <form onSubmit={this.login}>
          <div className="input-group">
        { errorMessage }
          <input 
            type="email"
            className="form-control"
            name="email"
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.fieldChanged('email')} />
          <input 
            type="password"
            className="form-control"
            name="password"
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.fieldChanged('password')} />
             <input 
            type="First Name"
            className="form-control"
            name="firstname"
            placeholder="FirstName" 
            value={this.state.firstname} 
            onChange={this.fieldChanged('firstname')} />
         
         <input 
            type="Last Name"
            className="form-control"
            name="lastname"
            placeholder="LastName" 
            value={this.state.lastname} 
            onChange={this.fieldChanged('lastname')} />
        
         
         
        <button className="btn btn-primary" onClick={this.UserInput}>Register</button>
        </div>
      </form>
    );
  }
}

export default RegisterPage;*/