import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from '../components/Seo.js';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';
import '../styles/global.css';

import { imageWrapper } from '../styles/index.module.css';

const App = () => {

  const data = useStaticQuery(graphql`
  query getRecentBlogs {
    allMdx(filter: {frontmatter: {}}) {
      nodes {
        frontmatter {
          title
          date(fromNow: true)
          slug
          description
        }
        id
      }
    }

    allSanityEpisode(limit: 20, filter: {youtubeID: {ne: "null"}}) {
      nodes {
        id
          title
          guest {
            name
          }
            gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
        }
      }
    }

  
  `);

  const posts = data.allMdx.nodes;
  const episodes = data.allSanityEpisode.nodes;


  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src='../images/ivana-la-61jg6zviI7I-unsplash.jpg'
          alt='a corgi dog sitting on a bed with red paper hearts all over it'
          placeholder='tracedSVG'
          width={300}
          height={300}
        />
      </div>
      <main>
        <h1>Hello Frontend Masters!</h1>
        <Link to='/about'>About this site</Link>

      </main>
      <section>
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
                <small> {post.frontmatter.date}</small>
              </li>
            )
          })}
        </ul>
      </section>

      <section>
        <h2>20 Latest episodes od <em>Learn with Jason</em></h2>
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>
              <Link to={episode.gatsbyPath}>
                {episode.title} with {episode.guest?.[0]?.name}
              </Link>
            </li>
          ))}
        </ul>
        <a href='https://www.learnwithjason.dev/'>Watch all episode of <em>Learn with Jason</em></a>
      </section>
    </Layout>
  )
}

export default App;