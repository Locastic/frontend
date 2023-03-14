## Usage

1. Install the required packages:

   ```sh
   npm install --save-dev @locastic/prettier-config
   ```

2. Extend your ESLint config:

   In any of the supported extensions export a string, e.g. .prettierrc.json, .prettierrc
   ```sh
   "@locastic/prettier-config"
   ```

   Note: This method above not offer a way to extend the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a .prettierrc.js file and export the modifications, e.g:

   ```sh
   module exports = 
	{
	...require("@locastic/prettier-config"),
	singleQuote: false,
	}
   ```

## License

The [MIT License](../../LICENSE)
