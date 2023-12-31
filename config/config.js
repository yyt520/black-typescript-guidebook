const config = {
  mode: 'site',
  title: 'TypeScript Guidebook',
  description: 'TypeScript 完全知识体系',
  base: '/black-typescript-guidebook/',
  publicPath: '/black-typescript-guidebook/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/typescript-guidebook-logo.svg',
  exportStatic: {},
  dynamicImport: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/yyt520/black-typescript-guidebook',
    },
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
