import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from '../components/Seo.js';
import Layout from '../components/layout.js';
import '../styles/global.css';

const App = () => {


  return (
    <Layout>
      <main>
        <h1>Hello Frontend Masters!</h1>
        <Link to='/about'>About this site</Link>
      </main>
    </Layout>
  )
}

export default App;