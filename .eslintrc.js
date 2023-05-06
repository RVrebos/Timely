module.exports = {
  plugins: ['@typescript-eslint', 'unused-imports', "react-hooks"],
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['**/.next/**.**'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    "react-hooks/rules-of-hooks": "error", // Vérifie les règles des Hooks
    "react-hooks/exhaustive-deps": "warn",  // Vérifie les tableaux de dépendances
    '@typescript-eslint/ban-ts-comment': 'off',
    'prettier/prettier': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
