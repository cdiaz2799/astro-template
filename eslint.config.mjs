import pluginJavaScript from "@eslint/js";
import pluginAstro from "eslint-plugin-astro";
import importPlugin from "eslint-plugin-import";
import json from "eslint-plugin-json";
import pluginReactA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import globals from "globals";
import pluginTypeScript from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	pluginJavaScript.configs.recommended,
	...pluginTypeScript.configs.recommended,
	...pluginTypeScript.configs.stylistic,
	...pluginAstro.configs.recommended,
	...pluginAstro.configs["jsx-a11y-recommended"],
	sonarjs.configs.recommended,
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		...pluginReact.configs.flat.recommended,
		...pluginReactA11y.flatConfigs.recommended,
		...pluginReact.configs.flat["jsx-runtime"],
		...importPlugin.flatConfigs.recommended,
		plugins: {
			"simple-import-sort": simpleImportSort,
			import: importPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"import/default": "off",
			"import/named": "off",
			"import/namespace": "off",
			"import/prefer-default-export": "off",
			"prettier/prettier": "error",
		},
	},
	{
		files: ["**/*.{ts,tsx}"],
		plugins: {
			import: importPlugin,
		},
		rules: {
			...importPlugin.flatConfigs.recommended.rules,
			...importPlugin.flatConfigs.typescript.rules,
			"import/default": "off",
			"import/named": "off",
			"import/namespace": "off",
			"import/prefer-default-export": "off",
		},
	},
	{
		ignores: [".astro/", "dist/", ".github/"],
	},
	{
		rules: {
			"no-var": "error",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ ignoreRestSiblings: true },
			],
		},
	},
	{
		files: ["**/*.json"],
		...json.configs["recommended"],
	},
];
