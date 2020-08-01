import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <Header />
            <h1>About Page</h1>
            <p>about me blablabla</p>
            <Link to="/contact">Contact Me !</Link>
            <Footer />
        </div>
    )
}

export default About