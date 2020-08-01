import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <div>
            <Header />
            <h1>Contact Page</h1>
            <p>Me contacter blablabla</p>
            <a href="https://twitter.com/yekon_" target="_blank">Twitter account</a>
            <Footer />
        </div>
    )
}

export default Contact