const path = require('path');

module.exports = {
    title: 'APIX Docs',
    tagline: 'The complete reference for APIX',
    baseUrl: '/',
    themeConfig: {
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
                    label: 'General',
                    to: 'general/what-is-apix',
                    activeBaseRegex: '^(/[^/]+)?/general/.*',
                },
                {
                    label: 'Consumer',
                    to: '/consumer/introduction',
                    activeBaseRegex: '^(/[^/]+)?/consumer/.*',
                },
                {
                    label: 'Provider',
                    to: '/provider/introduction',
                    activeBaseRegex: '^(/[^/]+)?/provider/.*',
                },
            ],
        },
        footer: {
            links: [
                {
                    title: 'General',
                    items: [
                        {
                            label: 'APIX',
                            to: '/general/what-is-apix',
                        },
                    ],
                },
                {
                    title: 'Consumer',
                    items: [
                        {
                            label: 'Introduction',
                            to: '/consumer/introduction',
                        },
                    ],
                },
                {
                    title: 'Provider',
                    items: [
                        {
                            label: 'Introduction',
                            to: '/provider/introduction',
                        },
                    ],
                },
            ],
            logo: {
                alt: 'APIX Logo',
                src: 'img/footer_logo.svg',
                href: 'https://apix.vn',
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
                    customCss: require.resolve('../src/apix/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'daily',
                    priority: 0.5,
                },
                pages: {
                    path: path.resolve(__dirname, '../src/apix/pages'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'general',
                path: path.resolve(__dirname, 'general'),
                routeBasePath: 'general',
                sidebarPath: require.resolve('./general/sidebars.ts'),

                // General config
                editUrl: 'https://github.com/nhatpham0709/apix-docs/edit/master',
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
                id: 'consumer',
                path: path.resolve(__dirname, 'consumer'),
                routeBasePath: 'consumer',
                sidebarPath: require.resolve('./consumer/sidebars.ts'),

                // General config
                editUrl: 'https://github.com/nhatpham0709/apix-docs/edit/master/',
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
                id: 'provider',
                path: path.resolve(__dirname, 'provider'),
                routeBasePath: 'provider',
                sidebarPath: require.resolve('./provider/sidebars.ts'),

                // General config
                editUrl: 'https://github.com/nhatpham0709/apix-docs/edit/master/',
                remarkPlugins: [
                    require('remark-code-import'),
                    require('remark-import-partial'),
                ],
                showLastUpdateTime: true,
            },
        ],
    ],
};