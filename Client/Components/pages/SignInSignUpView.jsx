import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default class SignInSignUpView extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (    
      <div>
        <SignIn />
        <SignUp />
      </div>
      );
  }
}