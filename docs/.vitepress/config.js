/**
 * @type {import('vitepress/types').UserConfig}
 */
module.exports = {
  title: 'JapanMC Wiki (公式)',
  description: 'Japan MCの公式Wikiです',
  lang: 'ja-jp',
  themeConfig: {
    repo: 'japan-mc/japanmc-wiki',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'このページをGitHubで編集する',
    lastUpdated: '最終更新日',
    nav: [
      { text: 'トップ', link: '/' },
      { text: '初心者指南', link: '/guides/first.html' },
      { text: 'ルール', link: '/rule.html' }
    ],
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-multimd-table'), {
        rowspan: true,
      });
      md.use(require('markdown-it-scrolltable'));
    }
  }
}
