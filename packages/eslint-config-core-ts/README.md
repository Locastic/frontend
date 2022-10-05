## Usage

1. Install the required packages:

   ```sh
   npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @locastic/eslint-config-core-ts
   ```

2. Extend your ESLint config:

   ```json
   {
     "extends": "@locastic/eslint-config-core-ts",
      "overrides": [
   		{
   			"files": ["*.ts"],
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
