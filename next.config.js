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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    this.experimental.webpackBuildWorker = true;

    // Injecting output and value properties
    config.output = {
      ...config.output, // Preserve existing output settings
      export: true,    // Add or modify the export property
    };

    return config;
  },
};

module.exports = withMDX(nextConfig);
