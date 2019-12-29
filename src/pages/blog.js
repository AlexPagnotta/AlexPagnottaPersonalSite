import React from "react"
import NavbarBlog from "../components/navbar-blog"
import Layout from "../components/layout"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../utils/mediaQueries"
import BlogPostItem from "../components/blog-post-item";
import { useStaticQuery, graphql } from "gatsby"

const BlogContainer = styled.div`
padding-top: 140px;
width: 100%;
max-width: 1220px;
margin: 0 auto; //Center the container

${MediaQueries.queries.tablet`
padding-top: 100px; 
`}
`

function Blog() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "blog"}}}) {
          edges {
            node {
              id,
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY", locale: "it")
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                    }
                  }     
                }             
              }
              internal {
                content
              }
              fields {
                slug
              }
            }
          }
        }
  }
`)
const Posts = data.allMarkdownRemark.edges
.map(edge => <BlogPostItem key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <NavbarBlog ></NavbarBlog>
      <BlogContainer>
        {Posts}
      </BlogContainer>
    </Layout> 
  )
}
export default Blog
