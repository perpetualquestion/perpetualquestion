import React from 'react'
import Helper from "../../Helper/Helper"

export default class SignUp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userName: '', 
      password: '', 
      confirmPassword: '',
      firstName: '', 
      lastName: '', 
      email: '', 
      github: '', 
      linkedin: ''
    }
  }

  // The following function may not render and 
  handleUserNameChange(e) { this.setState({userName: e.target.value}); }

  handlePasswordChange(e) { this.setState({password: e.target.value}); }

  handleConfirmPasswordChange(e) { this.setState({confirmPassword: e.target.value}); }

  handleFirstNameChange(e) { this.setState({firstName: e.target.value}); }

  handleLastNameChange(e) { this.setState({lastName: e.target.value}); }

  handleEmailChange(e) { this.setState({email: e.target.value}); }

  handleGithubChange(e) { this.setState({github: e.target.value}); }

  handleLinkedinChange(e) { this.setState({linkedin: e.target.value}); }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.password === this.state.confirmPassword) {  
      var requestObj = {
        userName: this.state.userName.trim(),
        password: this.state.password.trim(),
        firstName: this.state.firstName.trim(),
        lastName: this.state.lastName.trim(),
        email: this.state.email.trim(),
        github: this.state.github.trim(),
        linkedin: this.state.linkedin.trim()
      }
      Helper.signup(requestObj);
    } else {
      alert("Password and Confirm Password must be mathch, please correct that before continue")
    }
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form method="post" onSubmit={this.handleSubmit} >
          <p>User Name:</p>
          <input type="text" name="userName" value={this.state.userName} onChange={this.handleUserNameChange} required />
          <p>Password:</p>
          <input type="text" name="password" value={this.state.password} onChange={this.handlePasswordChange} required />
          <p>Confirm Password:</p>
          <input type="text" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} required/>
          <p>First Name</p>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleFirstNameChange} required/>
          <p>Last Name:</p>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleLastNameChange} required/>
          <p>Email:</p>
          <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange} required/>
          <p>Github:</p>
          <input type="text" name="github" value={this.state.github} onChange={this.handleGithubChange} />
          <p>Linkedin:</p>
          <input type="text" name="linkedin" value={this.state.linkedin} onChange={this.handleLinkedinChange} />
          <br />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
      );
  }

}