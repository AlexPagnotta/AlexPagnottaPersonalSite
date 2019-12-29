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

const TitleContainer = styled.div`
padding: 30px 30px 0px 30px;
margin-top: 60px;
width: 100%;
text-align: center
`

const SubTitleContainer = styled.div`
padding: 0px;
margin-top: 0px;
width: 100%;
text-align: center
`

const TextContainer = styled.div`
padding: 30px 30px 30px 30px;

& > div :first-child:first-letter {
  float: left;
  font-family: Bitter;
  font-size: 75px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
}
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <NavbarBlog ></NavbarBlog>
      <BlogPostContainer>
        <TitleContainer>
          <h1>{post.frontmatter.title}</h1>        
        </TitleContainer>
        <SubTitleContainer>
          <h4>{post.frontmatter.date}</h4>        
        </SubTitleContainer>
        <TextContainer>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />       
        </TextContainer>
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
        date(formatString: "DD MMMM, YYYY", locale: "it")
      }
    }
  }
`