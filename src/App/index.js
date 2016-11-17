import './globals.css';
import { body, header } from './style.css';
import React from 'react';
import Navigation from './Navigation';

const PULSE_LABZ = 'PULSE-labz';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				<div className={header}>
					<h1>Perf Problems? Pulselabs.it!</h1>
				</div>
				<div className={body}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
