import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { Routes } from './scully/plugins/routesPlugin';

import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';

const routesConfig = {
  type: Routes,
      projectId: 'oqsvd11u',
      dataset: 'production',
      useCdn: true
}

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
    urlPrefix: 'https://sanity-angular-website-web-1z6cqae9.netlify.app',
    sitemapFilename: 'sitemap.xml',
    merge: false,
    trailingSlash: true,
    changeFreq: 'monthly',
    priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
    ignoredRoutes: ['/404'],
    routes: {
      '': routesConfig
    }
});

export const config: ScullyConfig = {
  projectRoot: "./apps/web/src",
  projectName: "web",
  outDir: './dist/static',
  routes: {
    '': routesConfig
  },
  proxyConfig: 'proxy.conf.js'
};