export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eadb351fe9df13a5068e9a0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hew8kbwr',
                  apiId: 'dccf4629-842e-41d9-be61-c450af85ec20'
                },
                {
                  buildHookId: '5eadb351d8d2b728f09e1775',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fbg6wjyh',
                  apiId: 'df866558-0286-43ec-8c5f-b4f66a4d7f99'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gregol/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fbg6wjyh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
