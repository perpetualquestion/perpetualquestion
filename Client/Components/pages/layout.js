import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {

	render() {
		<div>
			<h1>Hello world</h1>
			{this.props.children}
			<Link to="newfeeds">Newfeeds</Link>
			<Link to="profile">Profile</Link>
		</div>
	}

}