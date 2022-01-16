// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Junjie Zhou Pages',
    tagline: 'Hi, this is Junjie Zhou, currently a graduated student majoring in computer science. My research interest lies in privacy protection and data security. This repo preserves notes for lectures that I learned and papers that I read.',
    url: 'http://www.junjiezhou.cn',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/avator.png',
    organizationName: 'jzhou59', // Usually your GitHub org/user name.
    projectName: 'jzhou59.github.io', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/jzhou59/jzhou59.github.io/tree/source/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/jzhou59/jzhou59.github.io/tree/source/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'Home',
            logo: {
                alt: 'Home',
                src: 'img/avator.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Notes',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/jzhou59',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Doc',
                    items: [{
                        label: 'Notes',
                        to: '/docs/intro',
                    }, ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/jzhou59',
                        },
                    ],
                },
                {},{},
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Junjie Zhou. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;