import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	constructor(props) {
    super();
    this.state = {
      selected: ''
    };
  }

	navigate() {
		console.log(this.props.history);
		this.props.history.pushState(null, '/profile');
	}

	
  
  setFilter(filter) {
    this.setState({selected  : filter});
  }
  isActive(value){
    return ((value===this.state.selected) ? 'active':'default');
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
								<li className={this.isActive('')} onClick={ this.setFilter.bind(this, '')}>
									<Link to="search">Search</Link>
								</li>
								<li className={this.isActive('newfeeds')} onClick={ this.setFilter.bind(this, 'newfeeds')}>
									<Link to="newfeeds">Newfeeds</Link>
								</li>
								<li className={this.isActive('profile')} onClick={ this.setFilter.bind(this, 'profile')}>
									<Link to="profile">Profile</Link>
								</li>
								<li className={this.isActive('signin')} onClick={ this.setFilter.bind(this, 'signin')}>
									<Link to="signin">Sign In/Up</Link>
								</li>
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