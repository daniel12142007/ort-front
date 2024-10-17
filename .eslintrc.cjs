module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended', // Рекомендуемые правила ESLint
		'plugin:@typescript-eslint/recommended', // Рекомендуемые правила для TypeScript
		'plugin:react/recommended', // Рекомендуемые правила для React
		'plugin:prettier/recommended', // Интеграция с Prettier
	],
	parser: '@typescript-eslint/parser', // Парсер для TypeScript
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	rules: {
		'prettier/prettier': 'error', // Ошибки Prettier будут считаться ошибками ESLint
		'no-invalid-this': 'off',
		'max-len': ['error', 120], // Максимальная длина строки
		'react/react-in-jsx-scope': 'off', // React 17+ не требует импорта React в каждом файле
		'react/jsx-uses-react': 'off',
		'semi': ['error', 'always'], // Требовать точку с запятой
		'indent': ['error', 4], // Использовать 4 пробела для отступов
		'linebreak-style': ['error', 'unix'], // Использовать Unix стиль для переноса строк
		'quotes': ['error', 'single'], // Использовать одинарные кавычки
		'no-console': 'warn', // Предупреждения для console.log
		'eqeqeq': 'error', // Использовать строгое равенство
		'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Предупреждения для неиспользуемых переменных, игнорировать переменные с подчеркиванием
		'@typescript-eslint/no-explicit-any': 'warn', // Предупреждение для использования any
		'react/prop-types': 'off', // Отключить проверку prop-types, если используете TypeScript
	},
	settings: {
		react: {
			version: 'detect', // Автоматически определять версию React
		},
	},
};
