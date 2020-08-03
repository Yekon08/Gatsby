import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/Layout'
import blogStyles from './blog.module.scss'

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
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    console.log('data: ', data)

    const displayPosts = data.allMarkdownRemark.edges.map(post => {
        return (
            <li key={post.node.fields.slug} className={blogStyles.post}>
                <h2><Link to={`/blog/${post.node.fields.slug}`}>{post.node.frontmatter.title}</Link></h2>
                <p>{post.node.frontmatter.date}</p>
            </li>
        )
    })

    return(
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {displayPosts}
            </ol>
        </Layout>
    )
}

export default BlogPage