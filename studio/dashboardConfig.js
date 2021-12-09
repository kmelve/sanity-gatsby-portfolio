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
                  buildHookId: '61b219ba197024ab8e62edb4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2c1dnzv2',
                  apiId: '581850ce-1a42-4c05-a019-cd75e7d0b829'
                },
                {
                  buildHookId: '61b219ba3e87896dd340a629',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-82tudgca',
                  apiId: '38b0a724-d483-4197-bc5e-c28d68c355c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelve/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-82tudgca.netlify.app',
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
