import React from 'react'
import { Link } from 'gatsby'

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>about me blablabla</p>
            <Link to="/contact">Contact Me !</Link>
        </div>
    )
}

export default About