module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		'no-invalid-this': 0,
		'max-len': ['error', 140],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
		semi: 0,
		'linebreak-style': 'off',
		indent: ['error', 2, { SwitchCase: 1 }],
		'new-cap': 'off',
		'one-var': 'off', // на одно создание let указать несколько переменных
		camelcase: 'off', // проверка на camelcase
		'require-jsdoc': 'off', // проверка коментариев
		'valid-jsdoc': 'off', // проверка коментариев
		'no-unused-vars': 'off', // проверка на не используемые проперти
		'operator-linebreak': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
}
