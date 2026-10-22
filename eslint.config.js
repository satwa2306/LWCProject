const { defineConfig } = require('eslint/config');
const eslintJs = require('@eslint/js');
const jestPlugin = require('eslint-plugin-jest');
const auraConfig = require('@salesforce/eslint-plugin-aura');
const lwcConfig = require('@salesforce/eslint-config-lwc/recommended');
const globals = require('globals');

module.exports = defineConfig([
    // Aura configuration
    {
        files: ['**/aura/**/*.js'],
        extends: [...auraConfig.configs.recommended, ...auraConfig.configs.locker]
    },

    // Aura controller ESLint overrides
    {
        files: ['**/aura/**/*Controller.js'],
        rules: {
            'no-unused-expressions': 'off',
            'no-unused-vars': [
                'error',
                {
                    args: 'none'
                }
            ]
        }
    },

    // LWC configuration
    {
        files: ['**/lwc/**/*.js'],
        extends: [lwcConfig],
        rules: {
            'no-unused-vars': 'off'
        }
    },

    // LWC test files
    {
        files: ['**/lwc/**/*.test.js'],
        extends: [lwcConfig],
        rules: {
            '@lwc/lwc/no-unexpected-wire-adapter-usages': 'off',
            'no-unused-vars': 'off'
        },
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    },

    // Jest mocks configuration
    {
        files: ['**/jest-mocks/**/*.js'],
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 'latest',
            globals: {
                ...globals.node,
                ...globals.es2021,
                ...jestPlugin.environments.globals.globals
            }
        },
        plugins: {
            eslintJs
        },
        extends: ['eslintJs/recommended']
    }
]);
