module.exports = {
  themeConfig: {
    searchMaxSuggestions: 15,
    lastUpdated: 'Last Updated', 
    repo: 'vueonrails/vueonrails',
    repoLabel: 'Contribute!',
    docsRepo: 'vueonrails/homepage',
    docsDir: 'guide',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Fork this Project', link: 'https://github.com/vueonrails/vueonrails' },
      { text: 'Changelog', link: 'https://github.com/vueonrails/vueonrails/blob/master/CHANGELOG.md' },
      {
        text: 'Other Guides/Help',
        items: [
          { text: 'Rails Guide', link: 'https://guides.rubyonrails.org' },
          { text: 'Vue Guide', link: 'https://vuejs.org/v2/guide/' },
          { text: 'Curated Vue Packages', link: 'https://curated.vuejs.org/' },
          { text: 'Stackoverflow', link: 'https://stackoverflow.com/search?tab=newest&q=vue%20%20rails' }
        ]
      }
    ],
    sidebar: [
      {
        title: '1. Getting Started',
        collapsable: true,
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          '/', 
          '1/home/why', 
          '1/home/installation',
          '1/home/default-components',
          '1/home/examples',
          '1/home/vueui',
          '1/home/configuration',
          '1/home/application-template'
        ]
      },
      {
        title: '2. Scaffolding',
        collapsable: true,
        sidebarDepth: 2,    // optional, defaults to 1
        children: [ 
          '2/scaffold/sfc', 
          '2/scaffold/i18n',
          '2/scaffold/default-config',
          '2/scaffold/specific-page-vue'
        ]
      },
      {
        title: '3. Server-side Rendering (SSR)',
        children: [ 
          '3/ssr/scaffold',
          '3/ssr/manual'
        ]
      },
      {
        title: '4. State Management',
        collapsable: true,
        children: [ 
          '4/state-management/simple',
          '4/state-management/vuex',
          '4/state-management/manual'
        ]
      },
      {
        title: '5. Test',
        collapsable: true,
        children: [ 
          '5/test/manual',
          '5/test/scaffold'
        ]
      },
      {
        title: '6. Getting Help',
        collapsable: true,
        children: [
          '6/getting-help/help',
          '6/getting-help/exit',
          '6/getting-help/edit'
        ]
      }
    ]
  },
  base: "/",
  title: ' ',
  description: ' '
}
