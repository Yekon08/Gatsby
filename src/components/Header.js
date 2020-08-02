import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

// import './header.module.scss'
import headerStyles from './header.module.scss'
const { header, title, navList, navItem, activeNavItem } = headerStyles

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={header}>
            <h1><Link className={title} to='/'>{data.site.siteMetadata.title}</Link></h1>
            <nav>
                <ul className={navList  }>
                    <li><Link className={navItem} activeClassName={activeNavItem} to='/'>Home</Link></li>
                    <li><Link className={navItem} activeClassName={activeNavItem} to='/blog'>Blog</Link></li>
                    <li><Link className={navItem} activeClassName={activeNavItem} to='/about'>About me</Link></li>
                    <li><Link className={navItem} activeClassName={activeNavItem} to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header