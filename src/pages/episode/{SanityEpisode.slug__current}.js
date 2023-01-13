import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';


export const query = graphql`
  query SanityEpisode($id: String!) {
    sanityEpisode(id: {eq: $id}) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
      image {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default function SanityEpisode({ data }) {
  const episode = data.sanityEpisode;
  return (
    <Layout title={episode.title} description={episode.description}>
      <GatsbyImage
        image={getImage(episode.image.asset.gatsbyImageData)}
        alt={episode.title}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>)
}