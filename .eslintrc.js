module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ["eslint:recommended", "prettier"],
	globals: {
		document: true,
		window: true,
		$: true,
		define: true,
		app: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {},
};
