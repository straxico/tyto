const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const nextSourceMaps = require('@zeit/next-source-maps');
const path = require('path');

const bundelAnalyz = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const offlineConfig = {
  workboxOpts: {
    swDest: '/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
    ],
  },
};

const nextConfig = {
  offlineConfig,
  webpack: (config, { isServer, buildId, webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
      }),
    );

    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|png|svg|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: [
    //     'babel-loader',
    //     {
    //       loader: 'react-svg-loader',
    //       options: {
    //         svgo: {
    //           plugins: [{ removeTitle: false, cleanupIDs: false, convertShapeToPath: false }],
    //           floatPrecision: 2,
    //         },
    //       },
    //     },
    //   ],
    // });

    config.resolve.modules.push(path.resolve('./src/Components'));
    config.resolve.modules.push(path.resolve('./src'));
    config.resolve.modules.push(path.resolve('./public'));
    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
};

module.exports = nextSourceMaps(withOffline(bundelAnalyz(withSass(withCSS(nextConfig)))));
