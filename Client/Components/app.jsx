import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/layout";
import Newsfeed from "./pages/NewsfeedView";
import Profile from "./pages/profile";
import Search from "./pages/SearchBar";
import SignIn from './pages/SignIn';
import SignOut from './pages/Signout';

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Search}></IndexRoute>
			<Route path="search" component={Search}></Route>
			<Route path="newsfeed" component={Newsfeed}></Route>
			<Route path="profile" component={Profile}></Route>
      <Route path="signin" component={SignIn}></Route>
      <Route path="signout" component={SignOut}></Route>  	
		</Route>
	</Router>,

app); 


