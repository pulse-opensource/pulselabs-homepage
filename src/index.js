import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import OSS from './OSS';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export const AppShell = (
  <AppContainer>
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="contact" component={Contact} />
			<Route path="oss" component={OSS} />
		</Route>
	</Router>
  </AppContainer>
);

ReactDOM.render(AppShell, document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}
