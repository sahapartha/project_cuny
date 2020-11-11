import React from 'react';
import { Redirect } from 'react-router-dom';
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
        fetch("/api/users/", {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: this.state.email}, {password: this.state.password}, {firstname: this.state.firstname}, {lastname: this.state.lastname}),
          
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
            value={bcrypt.hashSync(this.state.password, 10)} 
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

export default RegisterPage;