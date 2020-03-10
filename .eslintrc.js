module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 1 }],
		"no-multi-spaces": "error",
		"react/jsx-wrap-multilines": ["error", {
			"declaration": "parens-new-line",
			"assignment": "parens-new-line",
			"return": "parens-new-line",
			"arrow": "parens-new-line",
			"condition": "parens-new-line",
			"logical": "parens-new-line",
			"prop": "parens-new-line"
		}],
		"object-curly-spacing": ["error", "always"],
		"no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }]
	}
};