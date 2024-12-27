import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', '*.min.js', '*.d.ts', 'vite.config.ts', 'build', 'coverage'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
      import: importPlugin,
      prettier,
      '@typescript-eslint': tseslint.plugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React 相关规则
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',

      // TypeScript 相关规则
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          caughtErrorsIgnorePattern: '^_',
          caughtErrors: 'all',
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^React$', // 只允许 React 变量未使用

        },
      ],
      ...reactHooks.configs.recommended.rules, //检查 React Hooks 的使用是否符合最佳实践
      ...reactRefresh.configs.recommended.rules, //检查 React 组件是否只导出常量
      ...react.configs.recommended.rules, //检查 React 组件是否只导出常量
      ...importPlugin.configs.recommended.rules, //检查导入的顺序
      ...prettier.configs.recommended.rules, //禁用与 Prettier 冲突的 ESLint 规则
      ...tseslint.configs.recommended.rules, //检查 TypeScript 代码是否符合最佳实践

      // 通用规则
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-unused-vars': 'off', // 使用 TypeScript 的规则替代
      'prefer-const': 'error',
      'no-var': 'error',

      // React 规则
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-key': 'error',
      'react/prop-types': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // 最佳实践
      eqeqeq: ['error', 'always'],

      'no-multiple-empty-lines': ['error', { max: 1 }],
      'arrow-body-style': ['error', 'as-needed'],
      'object-shorthand': ['error', 'always'],
      'prefer-template': 'error',
      'no-param-reassign': 'error',

      // 导入规则
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],

      // 代码风格
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'max-lines': ['error', { max: 300 }],
      'max-len': [
        'error',
        {
          code: 100,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'no-console': 'warn',
      'no-debugger': 'error',

      // 命名规范
      camelcase: [
        'error',
        {
          properties: 'never',
          ignoreDestructuring: true,
        },
      ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        {
          selector: 'enum',
          format: ['PascalCase'],
        },
      ],

      // 代码风格
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 100,
          tabWidth: 2,
          semi: true,
        },
      ],
    },
  }
);
