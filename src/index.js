import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import OSS from './OSS';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="contact" component={Contact} />
			<Route path="oss" component={OSS} />
		</Route>
	</Router>,
	document.getElementById('app')
);
