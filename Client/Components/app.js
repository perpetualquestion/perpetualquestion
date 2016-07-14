import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from "";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
		</Route>
	</Router>,

app);
