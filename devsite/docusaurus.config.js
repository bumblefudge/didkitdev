module.exports = {
  title: 'Spruce Developer Portal',
  tagline: '$sudo grok spruce -asap',
  url: 'https://didkit.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'static/img/logo.png',
  organizationName: 'bumblefudge', // Usually your GitHub org/user name.
  projectName: 'didkitdev', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Spruceid.dev',
      logo: {
        alt: 'Spruce Site Logo',
        src: 'static/img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'DIDKit',
          position: 'left',
        },
//        {
//          to: 'Credible', 
//          label: 'Credible',
//          //href: "https://crediblewallet.dev/docs/",
//          position: 'left'},
        {
          href: 'https://github.com/spruceid/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'SpruceID.com',
              to: 'https://spruceid.com',
            },
          ],
        },
        {
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/sprucesystems',
            },
          ],
        },
        {
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/sprucesystemsinc/',
            },
          ],
        },
        {
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/spruceid/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Spruce Systems. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/spruceid/didkit/',
        },
//        blog: {
//          showReadingTime: true,
//          // Please change this to your repo.
//          editUrl:
//            'https://github.com/spruceid/spruceid.dev/',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
