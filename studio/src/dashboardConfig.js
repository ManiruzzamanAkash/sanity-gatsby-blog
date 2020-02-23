export default {
  widgets: [
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
                  buildHookId: '5e524f95f12c2d9f48fa62f9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xmae9hkg',
                  apiId: '00971297-693c-43f5-b259-ea657f476ca0'
                },
                {
                  buildHookId: '5e524f95749954e4059596c6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yvn498dt',
                  apiId: '28c162a7-ae9e-4cff-8cb5-b7319e2a698e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ManiruzzamanAkash/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yvn498dt.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
