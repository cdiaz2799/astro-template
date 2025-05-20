// @ts-check

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: [
			"node_modules/**",
			"dist/**",
			".astro/**",
			".vscode/**",
			"public/**",
		],
	},
	eslint.configs.recommended,
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		files: [".*.mjs"],
		languageOptions: {
			parserOptions: {
				project: true,
				allowDefaultProject: true,
			},
		},
	},
	// Override for Astro files to avoid projectService error
	{
		files: ["**/*.astro"],
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	// Standard TypeScript files can use projectService
	{
		files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	eslintConfigPrettier,
	sonarjs.configs.recommended,
	...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
	{
		extends: [reactPlugin.configs.flat.recommended],
		files: ["**/*.{jsx,tsx,mjsx,cjsx}"],
		plugins: {
			react: reactPlugin,
			"jsx-a11y": jsxA11y,
		},
		rules: {
			"react/jsx-filename-extension": "off",
			"react/react-in-jsx-scope": "off",
			"react/jsx-fragments": "off",
			"react/jsx-props-no-spreading": "off",
			"react/jsx-sort-props": "error",
			"react/require-default-props": "off",
			"react/sort-prop-types": "error",
			"react/state-in-constructor": "off",
			"react/static-property-placement": "off",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
);
