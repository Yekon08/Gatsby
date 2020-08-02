import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/Layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)

    const displayPosts = data.allMarkdownRemark.edges.map(post => {
        return (
            <li>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
            </li>
        )
    })

    return(
        <Layout>
            <h1>Blog</h1>
            <ol>
                {displayPosts}
            </ol>
        </Layout>
    )
}

export default BlogPage