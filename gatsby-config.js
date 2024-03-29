module.exports = {
  siteMetadata: {
    siteUrl: 'https://wwww.yourdomain.com',
    title: 'Frontend Masters Intro To Gatsby',
    description: 'Frontend Masters Intro To Gatsby course projects',
    image: 'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-remark-images',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      }
    },

    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    //   {
    //     resolve: 'gatsby-plugin-page-creator',
    //     options: {
    //       path: `${__dirname}/src/posts`,
    //     },
    // }



  ],
}