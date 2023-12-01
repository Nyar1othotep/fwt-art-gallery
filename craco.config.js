const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        implementation: require('sass'),
        webpackImporter: false,
        additionalData: `
          @import "src/shared/styles/mixins.scss";
          @import "src/shared/styles/breakpoints.scss";
        `,
      },
    },
  },
};