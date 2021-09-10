module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/g,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
