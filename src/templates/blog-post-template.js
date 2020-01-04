import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import NavbarBlog from "../components/navbar-blog"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../utils/mediaQueries"
import Img from "gatsby-image"
import {Helmet} from "react-helmet";

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
margin-top: 30px;
width: 100%;
text-align: center
`

const SubTitleContainer = styled.div`
width: 100%;
text-align: center
`

const CoverImageContainer = styled.div`
width: 100%;
height: 300px;
overflow:hidden;

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alex Pagnotta Blog| {post.frontmatter.title}</title>
      </Helmet> 
      <NavbarBlog ></NavbarBlog>
      <BlogPostContainer>
        <TitleContainer>
          <h1>{post.frontmatter.title}</h1>        
        </TitleContainer>
        <SubTitleContainer>
          <h4>{post.frontmatter.date}</h4>        
        </SubTitleContainer>
        <CoverImageContainer>
          <Img imgStyle={{height: 300, objectPosition: 'center'}} fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />               
        </CoverImageContainer>      
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`