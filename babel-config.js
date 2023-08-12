const path = require('path');

module.exports = (api) => {
	api.cache(false);
	return {
		env: {
			production: {
				plugins: ['transform-remove-console'],
			},
		},
		plugins: [
			'transform-inline-environment-variables',
			[
				'module-resolver',
				{
					root: [process.cwd()],
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
					alias: {
						// permit to build libs with babel
						'@idgarages/*': path.resolve(__dirname, '../../libs/*'),
						'axios/lib/*': 'axios/lib/*',
					},
				},
			],
			['@babel/plugin-syntax-top-level-await'],
			['@babel/plugin-proposal-private-methods', { loose: true }],
			['@babel/plugin-proposal-private-property-in-object', { loose: true }],
			['@babel/plugin-proposal-class-properties', { loose: true }],
			'@babel/plugin-proposal-export-namespace-from',
			'@babel/plugin-proposal-logical-assignment-operators',
		],
	};
};
