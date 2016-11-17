const React = require('react');
const App = require('./');
const { shallow } = require('enzyme');

describe('AppUX', () => {
	it('Clicking on the div reveals a secret message', () => {
		const wrapper = shallow(<App />);

		wrapper.find('[onClick]').simulate('click');

		expect(wrapper).toHaveState('title', 'GOING LIVE');
	});
});
