import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const About = () => {
    return (
        <Layout>
            <h1>About Page</h1>
            <p>about me blablabla</p>
            <Link to="/contact">Contact Me !</Link>
        </Layout>
    )
}

export default About