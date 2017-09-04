// Karma configuration
// Generated on Mon Sep 04 2017 10:45:52 GMT+0545 (+0545)
var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html' //View debug.html --> http://localhost:9876/debug.html 
      }
    },

    // list of files / patterns to load in the browser
    files: [
      //'.ts-build/tests/*.spec.js',
      //'.ts-build/tests/**/**/*.spec.js'
      'src/**/*.tsx',
      'tests/**/*.spec.tsx'
    ],


    // list of files to exclude
    exclude: [
      'src/index.tsx'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //'.ts-build/tests/*.spec.js': ['webpack'],
      //'.ts-build/tests/**/**/*.spec.js': ['webpack']
      'src/**/*.tsx': ['webpack', 'coverage'],
      'tests/**/*.spec.tsx': ['webpack'],
    },

    webpack: { //kind of a copy of your webpack config

      externals: {
        'react/addons': true,
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true
      },


      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },

      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [{
          test: /\.tsx?$/,
          loaders: ['babel-loader', 'ts-loader'],
          include: [path.resolve('src'), path.resolve('tests'), ]
        }]
      }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    coverageReporter: {
      //outputFile: 'tests/result.html'
      type: 'html',
      dir: 'karma-coverage/'
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  })
}


/**
 * Sources:
 * https://www.codementor.io/kimagure/testing-reactjs-components-with-karma-and-webpack-8sdzi6hkf
 * 
 * Doc:
 * https://github.com/webpack-contrib/karma-webpack
 * https://github.com/karma-runner/karma-mocha
 * https://github.com/karma-runner/karma
 *
 * Karma-Coverage:
 * https://github.com/karma-runner/karma-coverage/issues/59 [Can not load "coverage" issue]
 * https://karma-runner.github.io/0.8/config/coverage.html
 *
 * Enzyme:
 * https://github.com/airbnb/enzyme/issues/503 [Cannot resolve module 'react/addons' ]
 */