const path = require('path');
const os = require('os');
const crypto = require('crypto');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    "path": require.resolve("path-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "crypto": require.resolve("crypto-browserify")
  };
  return config;
};