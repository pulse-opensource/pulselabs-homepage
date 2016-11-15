const React = require('react');
const App = require('./').default;
const { shallow } = require('enzyme');
const { shallowToJson } = require('enzyme-to-json');

describe('AppUI', () => {
	it('renders the expected UI', () => {
		const wrapper = shallow(<App />);

		expect(
			shallowToJson(wrapper)
		).toMatchSnapshot();
	});
});
