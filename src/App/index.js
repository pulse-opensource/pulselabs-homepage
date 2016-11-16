import React from 'react';

const PULSE_LABZ = 'PULSE-labz';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			title: PULSE_LABZ,
		};
	}

	componentDidMount() {
		setInterval(() => {
			const title = this.state.title === ''
			  ? PULSE_LABZ
			  : '';

			this.setState({title})
		}, 300);
	}

	render() {
		return (
			<div onClick={() => this.setState({title: 'GOING LIVE'})}>
				<span>
					<i>{this.state.title}</i>
				</span>
			</div>
		);
	}
}