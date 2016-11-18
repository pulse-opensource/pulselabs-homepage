import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const render = function renderFn() {
	ReactDOM.render(
		<App />,
		document.getElementById('app')
	);
};

render(); 

// HMR Code
if (module.hot) {
	module.hot.accept();
}
