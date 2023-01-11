module.exports = {
  siteMetadata: {
    siteUrl: 'https://wwww.yourdomain.com',
    title: 'Frontend Masters Intro To Gatsby',
    description: 'Frontend Masters Intro To Gatsby course projects',
    image: 'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },

    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
  }
   

    
  ],
}