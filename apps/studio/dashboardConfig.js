export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'gutter-trash/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '62cd4d61c6f3f27050748134',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-o5j5as6n',
                  apiId: 'c7281481-547a-4f2b-a52f-d03a92286bab'
                },
                {
                  buildHookId: '62cd4d6161fef172838c1e96',
                  title: 'Website',
                  name: 'sanity-angular-website-web-1z6cqae9',
                  apiId: '20722e66-fcea-4d95-828e-532298fafed8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gutter-trash/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-1z6cqae9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
