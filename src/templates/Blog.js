import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.mardownRemark.frontmatter.title}</h1>
            <p>{props.data.mardownRemark.frontmatter.data}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.mardownRemark.html }}></div>
        </Layout>
    )
}

export default Blog