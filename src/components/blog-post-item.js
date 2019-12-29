import React from "react"
import MediaQueries from "../utils/mediaQueries"
import Img from "gatsby-image"
import styled from "styled-components"
import colors from "../globals/colors"
import { Link  } from "gatsby"

const BlogPostItemContainer = styled.div`
`

const ImageContainer = styled.div`
height: 200px;
overflow:hidden;
width: 100%;
`

const PostTitle = styled.h3`
font-size: 1.2rem;
margin-bottom: 20px;
margin-top: 20px;

`

const PostText = styled.p`
margin-bottom: 0px;
font-size: 0.9rem;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
`

const BlogPostItem = ({ post }) => (
  <Link
      to={post.fields.slug}>
      <BlogPostItemContainer>
        <ImageContainer>
          <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />        
        </ImageContainer> 
        
          <PostTitle>{post.frontmatter.title}</PostTitle>

        <PostText>{post.internal.content}</PostText>      
      </BlogPostItemContainer>
  </Link>
)
export default BlogPostItem