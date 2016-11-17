import App from './App';

export default {
	component: App,
	childRoutes: [
		{
			path: '/',
			getComponent(location, cb) {
				System.import('./Home').then(
					module => cb(null, module.default)
				).catch(
					err => console.log('Dynamic page loading error', err)
				);
			},
		},

		{
			path: 'about',
			getComponent(location, cb) {
				System.import('./About').then(
					module => cb(null, module.default)
				).catch(
					err => console.log('Dynamic page loading error', err)
				);
			},
		},
	],
};
