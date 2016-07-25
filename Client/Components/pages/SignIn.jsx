import React from 'react';
import Helper from '../../Helper/Helper';
import Profile from './profile';
import { Route } from 'react-router';
import Newsfeed from "./NewsfeedView";
import SignUp from './SignUp'




export default class SignIn extends React.Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   username: '', 
    //   password: '', 
    //   firstName: '', 
    //   lastName: '',
    //   email: '',
    //   github: '',
    //   linkedin: '',
    //   skills: ''
    // }
  }

  navigate() {
    this.props.history.pushState(null, '/newsfeed');
  } 

  handleSignin(e) {
    e.preventDefault();
    // var username = this.refs.username.value.trim();
    // var password = this.refs.password.value.trim();
    // // this.setState({username, password});
    // var u = this.state.username;
    // var p = this.state.password;
    // console.log('username: ', u, '\n', 'password: ', p);
    var requestObj = {
      username: this.refs.username.value.trim(),
      password: this.refs.password.value.trim()
    }
    // console.log(this.props);
    // var setState = this.setState.bind(this);
    Helper.signin(requestObj);

    // , function(data) {
    //     setState({
    //     username: data[0].username, 
    //     password: data[0].password, 
    //     firstName: data[0].firstname, 
    //     lastName: data[0].lastname, 
    //     email: data[0].email, 
    //     github: data[0].github, 
    //     linkedin: data[0].linkedin,
    //     skills: data[0].skills
    //   });

    // });
  }

  
  render() {
    // console.log(this.state.username);
    // if (!this.state.username) {
      return (  
        <div>  
          <div className='col-md-6'>
            <h2>Sign In</h2>
            <form method="post" onSubmit={this.handleSignin.bind(this)}>
              <p>User Name:</p>
              <input type="text" ref="username" />
              <p>Password:</p>
              <input type="text" ref="password" />
              <br />
              <input type="submit" value="Sign In" />
            </form>
          </div>
          <div className='col-md-6'>
              <SignUp />
          </div>
        </div>
      );
    // } else {
    //   return (
    //     <div>
    //       <h4>You are signed in as {this.state.username}</h4>
    //     </div>
    //   );
    // }
  }

}