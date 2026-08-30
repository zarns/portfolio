/* eslint-env node */

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const nextConfig = {
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  svgo: {
    multipass: true,
    plugins: ['removeDimensions'],
  },
  strictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    // Required by `next export`. GitHub Pages serves static files with no image
    // optimization server, so the default loader cannot run. actions/configure-pages
    // used to inject this at build time into a generated next.config.js, which meant
    // local and CI never matched and `next export` only worked in CI. Setting it here
    // makes both environments identical. This does not change the deployed output.
    unoptimized: true,
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
};

// module.exports = nextConfig;
export default nextConfig;