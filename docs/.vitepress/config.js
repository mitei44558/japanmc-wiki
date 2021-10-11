/**
 * @type {import('vitepress/types').UserConfig}
 */
module.exports = {
  title: 'JapanMC Wiki (非公式)',
  description: 'Japan MCの非公式Wikiです',
  lang: 'ja-jp',
  themeConfig: {
    repo: 'japan-mc/japanmc-wiki',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'このページをGitHubで編集する',
    lastUpdated: '最終更新日',
    nav: []
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
