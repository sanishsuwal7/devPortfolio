const withMDX = require('@next/mdx')();
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    webpackBuildWorker: true,  // Enable the Webpack build worker
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.output = {
      ...config.output,
      export: true,
    };

    return config;
  },
};

module.exports = withMDX(nextConfig);
