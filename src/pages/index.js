import React from "react"
import { Link, graphql  } from "gatsby"
import Layout from "../components/layout"


export default ({data}) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link
          to={node.fields.slug}>
          <h1> {node.frontmatter.title} </h1>
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
  `
