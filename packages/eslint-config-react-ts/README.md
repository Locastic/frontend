## Usage

1. Install the required packages:

   ```sh
   npm install --save-dev eslint eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser @locastic/eslint-config-react-ts
   ```

2. Extend your ESLint config:

   ```json
   {
   	"extends": "@locastic/eslint-config-react-ts",
   	"overrides": [
   		{
   			"files": ["*.ts", "*.tsx"],
   			"parserOptions": {
   				"project": ["./tsconfig.json"]
   			}
   		}
   	],
   	"parser": "@typescript-eslint/parser"
   }
   ```

## License

The [MIT License](../../LICENSE)
