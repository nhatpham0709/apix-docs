const path = require('path');

const common = module.exports = {
  url: 'https://wiki.iota.org',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'iota-wiki', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
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
      defaultMode: 'dark',
    },
  },
  plugins: [
    'plugin-image-zoom',
  ],
  themes: ['docusaurus-theme-openapi-docs'],
  staticDirectories: [path.resolve(__dirname, './static')],
};

const iota = module.exports = {
  title: 'APIX Wiki',
  tagline: 'The complete reference for APIX',
  baseUrl: '/',
  themeConfig: {
    announcementBar: {
      id: 'govern',
      content:
        'If you would like to get more involved in the future governance of Shimmer, APIX, and the Assembly network, join the discussions with the community in our <a target="_blank" href="https://govern.iota.org">governance forum</a> 🏛️',
      backgroundColor: '#5991c7',
      textColor: '#ffffff',
      isCloseable: true,
    },
    image: 'img/iota-wiki.png',
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'APIX Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          label: 'Use APIX',
          to: '/use/wallets/what-is-a-wallet',
          activeBaseRegex: '^(/[^/]+)?/use/.*',
        },
        {
          label: 'Learn',
          to: '/learn/about-iota/an-introduction-to-iota',
          activeBaseRegex:
            '^(/[^/]+)?/learn/.*|' +
            '^(/[^/]+)?/APIX-2.0-Research-Specifications/.*|' +
            '^(/[^/]+)?/goshimmer/.*',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Use',
          items: [
            {
              label: 'Wallets',
              to: '/use/wallets/what-is-a-wallet',
            },
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'How It Works',
              to: '/learn/about-iota/an-introduction-to-iota',
            },
            {
              label: 'APIX Token',
              to: '/learn/iota-token/buying-iota',
            },
            {
              label: 'Research',
              to: '/learn/research/research-outline',
            },
            {
              label: 'Glossary',
              to: '/learn/glossary',
            },
            {
              label: 'FAQs',
              to: '/learn/faqs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Funding',
              to: '/community/funding/edf-funding',
            },
            {
              label: 'The Community',
              to: '/community/the-community/how-to-support',
            },
            {
              label: 'Research',
              to: '/community/research/research-outline',
            },
            {
              label: 'Contribute To Wiki',
              to: '/community/contribute-to-wiki/welcome',
            },
          ],
        },
      ],
      logo: {
        alt: 'APIX Logo',
        src: 'img/footer_logo.svg',
        href: 'https://www.iota.org',
      },
      copyright: `© ${new Date().getFullYear()} APIX <a href="/cookie-policy"> Cookie Policy. </a>`,
    },

  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/iota/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        pages: {
          path: path.resolve(__dirname, './src/iota/pages'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'use',
        path: path.resolve(__dirname, './iota/use'),
        routeBasePath: 'use',
        sidebarPath: require.resolve('./iota/use/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: path.resolve(__dirname, './iota/learn'),
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./iota/learn/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
  ],
};

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
  themeConfig: {
    matomo: {
      matomoUrl: 'https://matomo.iota-community.org/',
      siteId: '13',
    },
  },
  plugins: [
    path.resolve(__dirname, 'plugins', 'cookiebot'),
    path.resolve(__dirname, 'plugins', 'matomo'),
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
  iota,
  search,
  production
);
