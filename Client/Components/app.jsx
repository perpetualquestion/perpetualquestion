import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from "";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/layout";
import Newfeeds from "./pages/newfeeds";
import Profile from "./pages/profile";


const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="newfeeds" component={Newfeeds}></Route>
			<Route path="profile" component={Profile}></Route>	
		</Route>
	</Router>,

app);

