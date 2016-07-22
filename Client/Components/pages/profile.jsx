import React from "react";
import Helper from "../../Helper/Helper"

export default class Profile extends React.Component {
  constructor(props) {
    super()
    this.state = {
      //An user's profile should base on the login user's information
      firstName: '', 
      lastName: '', 
      userName: '', 
      github: '', 
      linkedin: ''
    }
  }

	render() {
		return (
      <div>
  			<h3>Profile</h3>
        <p>First Name:  <span> {this.state.firstName} </span> </p>
        <p>Last Name:  <span> {this.state.lastName} </span> </p>
        <p>User Name:  <span> {this.state.userName} </span> </p>
        <p>Github:  <span> {this.state.github} </span> </p>
        <p>Linkedin:  <span> {this.state.Linkedin} </span> </p>
      </div> 
		);
	}
}
