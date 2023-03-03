const path = require('path');

const common = module.exports = {
  url: 'https://docs.apix.vn',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  i18n: {
    defaultLocale: 'vi',
    locales: ['en', 'vi'],
  },
  favicon: 'img/favicon.ico',
  organizationName: 'apix',
  projectName: 'apix-docs',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    imageZoom: {
      selector:
        '.markdown :not(a) > img:not(.image-gallery-image):not(.image-gallery-thumbnail-image)',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        background: 'rgba(0, 0, 0, 0.6)',
      },
    },
    imageSlider: {
      videoPlaceholder: '/img/infographics/video-placeholder.png',
    },
    prism: {
      additionalLanguages: ['java', 'rust', 'solidity', 'toml'],
    },
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },
  plugins: [
    'plugin-image-zoom',
  ],
  themes: ['docusaurus-theme-openapi-docs'],
  staticDirectories: [path.resolve(__dirname, './static')],
};

const apix = require('./apix/docusaurus.config');

const search = {
  themeConfig: {
    algolia: {
      appId: 'YTLE56KAO4',
      apiKey: '75358d60d302f7f93f630d63128abb03',
      indexName: 'iota',
      contextualSearch: true,
      searchParameters: {
        facetFilters: [`environment:iota`],
      },
    },
  },
};

const production = {
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-KVB88SVNF8',
        anonymizeIP: true,
      },
    ],
  ],
};
const merge = (...targets) => {
  if (targets.every(Array.isArray)) {
    return targets.flat();
  } else if (
    targets.every((target) => target && target.constructor === Object)
  ) {
    let map = targets.reduce((map, target) => {
      Object.entries(target).forEach(([key, value]) => {
        if (map.has(key)) {
          map.get(key).push(value);
        } else {
          map.set(key, [value]);
        }
      });
      return map;
    }, new Map());

    return Object.fromEntries(
      Array.from(map.entries(), ([key, values]) => [key, merge(...values)]),
    );
  } else {
    return targets.pop();
  }
}
module.exports = merge(
  common,
  apix,
  search,
  production
);
