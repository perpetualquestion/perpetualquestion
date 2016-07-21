import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	navigate() {
		this.props.history.pushState(null, '/');
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
							<a href="/" className="navbar-brand">Perpetual Help Desk</a>
						</div>
						<div>
							<ul className="nav navbar-nav">
								<li className="active"><Link to="SearchBar">Search</Link></li>
								<li><Link to="newfeeds">Newfeeds</Link></li>
								<li><Link to="profile">Profile</Link></li>
							</ul>
						</div>
					</div>
				</nav>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}
//Side Navigation bar
				// <div className="col-md-2 sidebar">
				// 	<ul className="nav nav-sidebar">
				// 		<li><button onClick={this.navigate.bind(this)}>Home</button></li>
				// 		<li><Link to="SearchBar">Search</Link></li>
				// 		<li><Link to="newfeeds">Newfeeds</Link></li>
				// 		<li><Link to="profile">Profile</Link></li>
				// 	</ul>
				// </div>