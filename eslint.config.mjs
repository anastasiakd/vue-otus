/**
 * THIS FILE WAS AUTO-GENERATED.
 * PLEASE DO NOT EDIT IT MANUALLY.
 * ===============================
 * IF YOU'RE COPYING THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.
 */

import path from 'node:path';

import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { configs, plugins } from 'eslint-config-airbnb-extended';
import eslintPluginVue from 'eslint-plugin-vue';

const gitignorePath = path.resolve('.', '.gitignore');

const jsConfig = [
    // ESLint Recommended Rules
    {
        name: 'js/config',
        ...js.configs.recommended,
    },
    // Stylistic Plugin
    plugins.stylistic,
    // Import X Plugin
    plugins.importX,
    // Airbnb Base Recommended Config
    ...configs.base.recommended,
];

const nodeConfig = [
    // Node Plugin
    plugins.node,
    // Airbnb Node Recommended Config
    ...configs.node.recommended,
];

export default defineConfig([
    // Ignore .gitignore files/folder in eslint
    includeIgnoreFile(gitignorePath),
    // Javascript Config
    ...jsConfig,
    // Node Config
    ...nodeConfig,
    // eslint-disable-next-line @stylistic/max-len
    // Vue plugin recommended rules (adjust as needed, e.g., 'flat/essential', 'flat/strongly-recommended')
    eslintPluginVue.configs['flat/recommended'],

    {
        rules: {
            indent: ['error', 4],
            '@stylistic/indent': ['error', 4],
        },
    },
]);
