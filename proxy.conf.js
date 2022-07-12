const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://oqsvd11u.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;