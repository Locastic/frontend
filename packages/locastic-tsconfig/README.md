## Usage

1. Install the required packages:

   ```sh
   npm install --save-dev @locastic/tsconfig
   ```

2. Extend your ESLint config:

   ```json
	{
		"exclude": ["node_modules"],
		"extends": "@locastic/tsconfig/nextjs.json",
		"compilerOptions": {
		"baseUrl": ".",
		...otherRules
		},
		"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ...otherIncludes],
	}
   ```

## License

The [MIT License](../../LICENSE)
