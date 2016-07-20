import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	navigate() {
		this.props.history.pushState(null, '/');
	}

	render() {
		return (
			<div>
				<h1>Hello world</h1>
				{this.props.children}
				<Link to="SearchBar">Search</Link>
				<Link to="newfeeds">Newfeeds</Link>
				<Link to="profile">Profile</Link>
				<button onClick={this.navigate.bind(this)}>Home</button>
			</div>
		);
	}

}