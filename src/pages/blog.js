import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/Layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    // Data from Markdown Posts
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

            # data from contentful CMS
            allContentfulBlogPost(
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    const displayPosts = data.allMarkdownRemark.edges.map(post => {
        return (
            <li key={post.node.fields.slug} className={blogStyles.post}>
                <h2><Link to={`/blog/${post.node.fields.slug}`}>{post.node.frontmatter.title}</Link></h2>
                <p>{post.node.frontmatter.date}</p>
            </li>
        )
    })

    // Data from Contentful CMS Posts
    const displayContentfulPosts = data.allContentfulBlogPost.edges.map(edge => {
        return (
            <li key={edge.node.slug} className={blogStyles.post}>
                <h2><Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link></h2>
                <p>{edge.node.publishedDate}</p>
            </li>
        )
    })

    return(
        <Layout>
            <h1>Blog</h1>
            <p>2 posts from Markdown and 2 from Contentful CMS</p>
            <ol className={blogStyles.posts}>
                {displayPosts}
                {displayContentfulPosts}
            </ol>
        </Layout>
    )
}

export default BlogPage