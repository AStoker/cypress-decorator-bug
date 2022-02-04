// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// import { cypressEsbuildPreprocessor}  from 'cypress-esbuild-preprocessor';
const {cypressEsbuildPreprocessor} = require('cypress-esbuild-preprocessor');
// const path = require('path');
// import babel from 'esbuild-plugin-babel';

/* eslint-disable */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on(
    'file:preprocessor',
    cypressEsbuildPreprocessor({
        esbuildOptions: {
            // optional tsconfig for typescript support and path mapping (see https://github.com/evanw/esbuild for all options)
            // tsconfig: path.resolve(__dirname, '../../tsconfig.json'),
            // plugins: [
            //   babel()
            // ]
        }
    }),
);
}

