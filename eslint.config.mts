// eslint.config.mts
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

const reactFlat =
  (reactPlugin as any).configs?.flat?.recommended ??
  (reactPlugin as any).configs?.recommended; // fallback p/ versões sem .flat

export default [
  // Ignora pastas de build/cache
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/coverage/**",
      "**/out/**",
    ],
  },

  // JS recomendado (flat)
  js.configs.recommended,

  // TS recomendado (flat) — esse sim é array, por isso usamos spread
  ...tseslint.configs.recommended,

  // REACT recomendado (pode ser objeto; não use spread)
  reactFlat,

  // Camada comum do monorepo
  {
    files: ["**/*.{js,mjs,cjs,ts,cts,mts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser },
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      // (opcional) expõe regras como '@typescript-eslint/...'
      "@typescript-eslint": tseslint.plugin,
      react: reactPlugin,
    },
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];
