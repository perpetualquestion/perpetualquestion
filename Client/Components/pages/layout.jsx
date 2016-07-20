import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	navigate() {
		this.props.history.pushState(null, '/');
	}

	render() {
		return (
			<div>
				<div className="col-md-2 sidebar">
					<ul className="nav nav-sidebar">
						<li><button onClick={this.navigate.bind(this)}>Home</button></li>
						<li><Link to="SearchBar">Search</Link></li>
						<li><Link to="newfeeds">Newfeeds</Link></li>
						<li><Link to="profile">Profile</Link></li>
					</ul>
				</div>
				<div className="col-md-10">
					{this.props.children}
				</div>
			</div>
		);
	}

}