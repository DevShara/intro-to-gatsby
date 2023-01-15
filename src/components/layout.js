import React from "react";
import { Seo } from '../components/Seo.js';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { header, content } from '../styles/layout.module.css'

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {

  const data = useStaticQuery(graphql`
  query getSiteMetadata {
    site {
      siteMetadata {
        description
        image
        siteUrl
        title
      }
    }
  }
  `);

  const meta = data?.site?.siteMetadata ?? {};


  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header className={header}>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to='/404'>404</Link>
        </nav>
      </header>
      <main className={content}>{children}</main>
    </>
  )
}

export default Layout;
