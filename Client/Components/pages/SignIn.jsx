import React from 'react'
import Helper from "../../Helper/Helper"

export default class SignIn extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userName: '', 
      password: ''
    }
  }

  handleUserNameChange(e) {
    this.setState({userName: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});  
  }

  handleSubmit(e) {
    e.preventDefault();
    var requestObj = {
      username: this.state.userName.trim(),
      password: this.state.password.trim()
    }
    Helper.signin(requestObj);
  }

  render() {
    return (    
      <div>
        <h2>Sign In</h2>
        <form method="post" onSubmit={this.handleSubmit.bind(this)}>
          <p>User Name:</p>
          <input type="text" name="userName" value={this.state.userName} onChange={this.handleUserNameChange.bind(this)} />
          <p>Password:</p>
          <input type="text" name="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
          <br />
          <input type="submit" value="Sign In" />
        </form>
      </div>
      );
  }
}