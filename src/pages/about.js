import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


const About = () => {
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
      
    >
      <h1>About Page</h1>
      <Link to='/'>Home page</Link>
    </Layout>
  )
}

export default About;