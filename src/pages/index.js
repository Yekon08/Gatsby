import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
    <div>
        <Header />
        <h1>Hello.</h1>
        <h2>I'm Maxime a Front-End developer.</h2>
        <p>Need a developer ? <Link to="/contact">Contact Me !</Link></p>
        <Footer />
    </div>
  )
}

export default IndexPage