const path = require('path');

const nextConfig = {
  webpack: config => {
    config.resolve.modules.push(path.resolve('./src/Components'));
    config.resolve.modules.push(path.resolve('./src'));
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
};

module.exports = nextConfig;
