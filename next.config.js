const withLess = require('next-with-less');

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        // 'primary-color': '#1DA57A',
        // 'link-color': '#1DA57A',
        // 'border-radius-base': '10px',
      },
    },
  },
  i18n: {
    locales: ['en-US', 'zh-TW', 'zh-CN'],
    defaultLocale: 'en-US',
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 256, 384],
  },
  env: {
    baseUrl: 'https://slasifynext.netlify.app',
  },
});
