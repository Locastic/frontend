module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		es2017: true,
		es2020: true,
		node: true
	},
	plugins: ['import'],
	extends: ['eslint:recommended'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	root: true,
	rules: {
		'no-console': [
			'error',
			{ allow: ['info', 'time', 'timeEnd', 'warn', 'error'] }
		],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-nested-ternary': 'error',
		'no-implicit-coercion': 'warn',
		'no-duplicate-imports': 'error',
		'import/no-absolute-path': 'error',
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external'],
					['index', 'internal', 'parent', 'sibling'],
					['object', 'type', 'unknown']
				],
				'newlines-between': 'always',
				alphabetize: {
					order:
						'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
					caseInsensitive: true /* ignore case. Options: [true, false] */
				},
				pathGroups: [
					{
						pattern: 'react',
						group: 'builtin'
					},
					{
						pattern: './**/*.+(css|scss|png|svg)',
						group: 'unknown'
					},
					{
						pattern: 'public/**/*',
						group: 'unknown'
					}
				],
				pathGroupsExcludedImportTypes: ['react']
			}
		],
		'sort-imports': [
			'error',
			{
				allowSeparatedGroups: true,
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
			}
		]
	}
};
