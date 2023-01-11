import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from '../components/Seo.js';
import Layout from '../components/layout.js';
import '../styles/global.css';

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
  }
  `);

  const posts = data.allMdx.nodes;


  return (
    <Layout>
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
    </Layout>
  )
}

export default App;