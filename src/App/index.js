import './globals.css';
import React from 'react';
import Navigation from './Navigation';

const PULSE_LABZ = 'PULSE-labz';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				{this.props.children}
			</div>
		);
	}
}
