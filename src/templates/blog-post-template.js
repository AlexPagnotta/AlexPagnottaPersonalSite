import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import NavbarBlog from "../components/navbar-blog"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../utils/mediaQueries"

const BlogPostContainer = styled.div`
padding-top: 140px;
width: 100%;
max-width: 1220px;
margin: 0 auto; //Center the container

${MediaQueries.queries.tablet`
padding-top: 100px; 
`}

`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <NavbarBlog ></NavbarBlog>
      <BlogPostContainer>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPostContainer>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`