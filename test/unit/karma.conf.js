// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    // 测试的测试器环境
    browsers: ['PhantomJS'],
    // 框架
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    // 结果报表
    reporters: ['progress', 'spec', 'coverage'],
    // 测试的入口文件
    files: [
      '../../node_modules/babel-polyfill/dist/polyfill.js',
      './index.js'
    ],
    // 对指定文件的preprocess(预处理)
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
      '../src/**/*.js': ['webpack', 'sourcemap', 'coverage'] // 表示那些代码需要生成测试覆盖率报表
    },
    // webpack配置
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    // 代码覆盖率配置节点
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    // 报表中是否有颜色区分
    colors: true,
    // 输出的日志级别
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // 文件变化是否自动刷新
    autoWatch: true,
    // 是否依附浏览器运行
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // 并发个数，同时支持在多少个浏览器运行
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
