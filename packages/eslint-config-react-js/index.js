module.exports = {
	env: {
		jest: true
	},
	extends: ['@locastic/eslint-config-core-js', 'plugin:react/recommended'],
	globals: {
		JSX: true
	},
	plugins: ['react-hooks', 'jsx-a11y'],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'react-hooks/exhaustive-deps': 'off'
	}
};
