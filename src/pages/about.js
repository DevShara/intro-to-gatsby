import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
    query CocktailQuery {
      file(name: {eq: "cocktail"}) {
        childImageSharp {
          gatsbyImageData(width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `;


const About = ({ data }) => {

  return (
    <Layout
      title="About This Site"
      description="More information about this site."
    >
      <GatsbyImage
        image={getImage(data.file)}
        alt='a cocktail set inside a floral arrangement'
      />
      <h1>About Page</h1>
      <Link to='/'>Home page</Link>
    </Layout>
  )
}

export default About;