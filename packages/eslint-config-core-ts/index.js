module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		es2017: true,
		es2020: true,
		node: true
	},
	extends: [
		'@locastic/eslint-config-core-js',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	root: true,
	rules: {
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array',
				readonly: 'array'
			}
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ ignoreRestSiblings: true }
		],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: true
				}
			}
		]
	}
};
