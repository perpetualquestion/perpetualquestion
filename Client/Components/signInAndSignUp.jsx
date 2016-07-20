import React from 'react'

export default class Signup extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h2>Sign In</h2>
          <form method="post">
            <p>User Name:</p>
            <input type="text" name="userName" required />
            <p>Password:</p>
            <input type="text" name="password" required />
            <br />
            <input type="submit" value="submit" />
          </form>
        </div>
        <div>
          <h2>Sign Up</h2>
          <form method="post">
            <p>User Name:</p>
            <input type="text" name="userName" required />
            <p>Password:</p>
            <input type="text" name="password" required />
            <p>Confirm Password:</p>
            <input type="text" name="confirmPassword" required/>
            <p>First Name</p>
            <input type="text" name="firstName" required/>
            <p>Last Name:</p>
            <input type="text" name="lastName" required/>
            <p>Email:</p>
            <input type="text" name="email" required/>
            <p>Github:</p>
            <input type="text" name="github"/>
            <p>Linkedin:</p>
            <input type="text" name="linkedin"/>
            <br />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
      );
  }

}